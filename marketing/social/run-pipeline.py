#!/usr/bin/env python3
"""
Pipeline Runner — entry point for the automated social media content pipeline.

Usage:
    python marketing/social/run-pipeline.py                    # Full pipeline status + instructions
    python marketing/social/run-pipeline.py --init             # Initialize new weekly batch
    python marketing/social/run-pipeline.py --stage publisher  # Run publisher stage directly
    python marketing/social/run-pipeline.py --stage qa         # Run QA validation
    python marketing/social/run-pipeline.py --stage scheduler  # Schedule via Buffer
    python marketing/social/run-pipeline.py --stage scheduler --dry-run  # Dry run scheduling
    python marketing/social/run-pipeline.py --status           # Show pipeline status
    python marketing/social/run-pipeline.py --pull-performance # Pull post analytics
"""

import argparse
import sys
from pathlib import Path

# Add agents to path so we can import shared modules
PROJECT_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(PROJECT_ROOT / ".claude" / "agents"))

from shared.pipeline_state import PipelineState, PIPELINE_STAGES
from shared.batch_init import init_batch


def show_status():
    state = PipelineState.load()
    if not state.raw.get("batch_id"):
        print("No active batch. Run with --init to start a new week.")
        return
    print(state.summary())
    print()

    # Per-platform breakdown
    for platform in ["pinterest", "instagram", "tiktok"]:
        items = state.get_items_by_platform(platform)
        if items:
            by_stage = {}
            for item in items:
                by_stage.setdefault(item["stage"], 0)
                by_stage[item["stage"]] += 1
            parts = ", ".join(f"{count} {stage}" for stage, count in by_stage.items())
            print(f"  {platform}: {len(items)} items ({parts})")

    failed = state.get_items_by_stage("failed")
    if failed:
        print(f"\nFailed items ({len(failed)}):")
        for item in failed:
            attempts = item.get("tool_attempts", [])
            tools = ", ".join(a.get("tool", "?") for a in attempts) or "none"
            print(f"  {item['id']}: {item.get('error', 'unknown')} (tried: {tools})")


def run_qa(dry_run: bool = False):
    """Run QA validation on created items."""
    from qa_validate import run_qa as qa_run
    state = PipelineState.load()
    state.set_stage_status("qa", "in_progress")
    state.save()

    try:
        result = qa_run(dry_run=dry_run)
        if result["failed"] == 0 and result["passed"] > 0:
            state = PipelineState.load()  # Reload after qa_run saved
            state.set_stage_status("qa", "completed")
            state.save()
        elif result["failed"] > 0:
            state = PipelineState.load()
            state.set_stage_status("qa", "completed", f"{result['failed']} items failed validation")
            state.save()
    except Exception as e:
        state = PipelineState.load()
        state.set_stage_status("qa", "failed")
        state.save()
        print(f"\nQA failed: {e}")


def run_scheduler(dry_run: bool = False):
    """Run the scheduler to publish items via Buffer."""
    # Add social dir to path for schedule-batch import
    sys.path.insert(0, str(PROJECT_ROOT / "marketing" / "social"))
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "schedule_batch",
        PROJECT_ROOT / "marketing" / "social" / "schedule-batch.py"
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)

    state = PipelineState.load()
    state.set_stage_status("publisher", "in_progress")
    state.save()

    try:
        result = mod.schedule_from_pipeline(dry_run=dry_run)
        state = PipelineState.load()  # Reload after schedule saved
        if result["failed"] == 0 and result["scheduled"] > 0:
            state.set_stage_status("publisher", "completed")
        elif result["failed"] > 0:
            state.set_stage_status("publisher", "completed", f"{result['failed']} items failed to schedule")
        state.save()
    except Exception as e:
        state = PipelineState.load()
        state.set_stage_status("publisher", "failed")
        state.save()
        print(f"\nScheduler failed: {e}")


def run_publisher(dry_run: bool = False):
    """Run the publisher stage directly (legacy)."""
    state = PipelineState.load()
    publishing_items = state.get_items_by_stage("publishing")

    if not publishing_items:
        print("No items ready for publishing.")
        return

    print(f"Found {len(publishing_items)} items ready to publish.")

    if dry_run:
        print("\n[DRY RUN] Would publish:")
        for item in publishing_items:
            print(f"  {item['id']}: {item['platform']} {item['format']}")
            files = item.get("files", {})
            if files:
                print(f"    Files: {list(files.values()) if isinstance(files, dict) else files}")
        return

    publisher_path = PROJECT_ROOT / ".claude" / "agents" / "social-media-publisher"
    sys.path.insert(0, str(publisher_path))

    state.set_stage_status("publisher", "in_progress")
    state.save()

    try:
        import importlib.util
        spec = importlib.util.spec_from_file_location("publisher", publisher_path / "publisher.py")
        publisher_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(publisher_module)
        publisher_module.main()

        for item in publishing_items:
            state.advance_item(item["id"], "published")

        state.set_stage_status("publisher", "completed")
        state.save()
        print("\nPublisher stage complete.")

    except Exception as e:
        state.set_stage_status("publisher", "failed")
        state.save()
        print(f"\nPublisher failed: {e}")


def run_render_videos(dry_run: bool = False):
    """Render video items using Remotion batch renderer."""
    import subprocess

    remotion_dir = PROJECT_ROOT / "marketing" / "remotion"
    render_script = remotion_dir / "render-batch.ts"

    if not render_script.exists():
        print("Remotion render script not found. Run npm install in marketing/remotion/ first.")
        return

    cmd = ["npx", "tsx", str(render_script)]
    if dry_run:
        cmd.append("--dry-run")

    print(f"Running Remotion batch render{'  [DRY RUN]' if dry_run else ''}...")
    result = subprocess.run(cmd, cwd=str(remotion_dir))
    if result.returncode != 0:
        print("Remotion render failed.")


def run_pull_performance():
    """Pull post performance analytics."""
    perf_script = PROJECT_ROOT / "marketing" / "social" / "pull-performance.py"
    if not perf_script.exists():
        print("pull-performance.py not found.")
        return
    import subprocess
    result = subprocess.run([sys.executable, str(perf_script)], cwd=str(PROJECT_ROOT))
    if result.returncode != 0:
        print("Performance pull failed.")


def run_next_stage():
    """Show which stage to run next and how."""
    state = PipelineState.load()
    if not state.raw.get("batch_id"):
        print("No active batch. Run with --init to start a new week.")
        return

    next_stage = state.next_pending_stage()
    if not next_stage:
        print("All stages complete!")
        show_status()
        return

    skill_map = {
        "analyst": "social-media-analyst",
        "researcher": "social-media-researcher",
        "ideator": "social-media-ideator",
        "scripter": "social-media-scripter",
        "creator": "social-media-content-creator",
        "qa": "python marketing/social/run-pipeline.py --stage qa",
        "publisher": "python marketing/social/run-pipeline.py --stage scheduler",
        "tracker": "(auto-updated by publisher)",
    }

    print(f"Next stage: {next_stage}")
    print(f"Invoke: {skill_map.get(next_stage, next_stage)}")

    if next_stage in ("qa", "publisher"):
        print(f"\nRun directly:")
        print(f"  {skill_map[next_stage]}")
        print(f"  {skill_map[next_stage]} --dry-run")
    elif next_stage == "tracker":
        print(f"\n{next_stage} is handled automatically.")
    else:
        print(f"\nIn Claude Code, activate the '{skill_map[next_stage]}' skill.")
        print("The skill will read/write pipeline-state.json automatically.")


def main():
    parser = argparse.ArgumentParser(description="Social Media Content Pipeline Runner")
    parser.add_argument("--init", action="store_true", help="Initialize new weekly batch")
    parser.add_argument("--status", action="store_true", help="Show pipeline status")
    parser.add_argument("--stage", type=str, help="Run a specific stage (qa|scheduler|publisher)")
    parser.add_argument("--render-videos", action="store_true", help="Render video items using Remotion")
    parser.add_argument("--pull-performance", action="store_true", help="Pull post analytics")
    parser.add_argument("--dry-run", action="store_true", help="Dry run mode")
    parser.add_argument("--week", type=str, help="Week identifier (e.g., W11)")
    args = parser.parse_args()

    if args.init:
        init_batch(week=args.week)
    elif args.render_videos:
        run_render_videos(dry_run=args.dry_run)
    elif args.pull_performance:
        run_pull_performance()
    elif args.status:
        show_status()
    elif args.stage:
        if args.stage == "qa":
            run_qa(dry_run=args.dry_run)
        elif args.stage == "scheduler":
            run_scheduler(dry_run=args.dry_run)
        elif args.stage == "publisher":
            run_publisher(dry_run=args.dry_run)
        else:
            print(f"Stage '{args.stage}' must be run as a Claude Code skill.")
            print(f"Use the '{args.stage}' skill in Claude Code.")
    else:
        show_status()
        print()
        run_next_stage()


if __name__ == "__main__":
    main()
