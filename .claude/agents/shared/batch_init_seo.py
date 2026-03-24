#!/usr/bin/env python3
"""Weekly SEO batch initialization — archives previous state and scans for briefs."""

import json
import shutil
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from .seo_pipeline_state import SeoPipelineState, STATE_FILE, PROJECT_ROOT, DEFAULT_TARGETS

BRIEFS_DIR = PROJECT_ROOT / "marketing" / "briefs"
ARCHIVE_DIR = PROJECT_ROOT / "marketing" / "archive" / "seo"


def get_current_week() -> str:
    """Return ISO week string like 'W11'."""
    return f"W{datetime.now(timezone.utc).isocalendar()[1]:02d}"


def archive_previous_state(state: SeoPipelineState) -> Optional[Path]:
    """Archive previous week's seo-pipeline-state.json if it exists."""
    batch_id = state.raw.get("batch_id")
    if not batch_id or not STATE_FILE.exists():
        return None

    archive_week_dir = ARCHIVE_DIR / batch_id
    archive_week_dir.mkdir(parents=True, exist_ok=True)
    dest = archive_week_dir / "seo-pipeline-state.json"
    shutil.copy2(STATE_FILE, dest)
    return dest


def scan_briefs(state: SeoPipelineState, week: str) -> int:
    """Scan marketing/briefs/ for unprocessed .md files and add as items."""
    if not BRIEFS_DIR.exists():
        return 0

    existing_slugs = {item["slug"] for item in state.raw.get("content_items", [])}
    count = 0

    for brief_file in sorted(BRIEFS_DIR.glob("*.md")):
        # Expected format: YYYY-MM-DD-slug-name.md
        stem = brief_file.stem
        parts = stem.split("-", 3)
        if len(parts) >= 4:
            slug = parts[3]
        else:
            slug = stem

        if slug in existing_slugs:
            continue

        item_id = f"{week}-SEO-{count + 1:02d}"
        state.add_item(
            item_id=item_id,
            slug=slug,
            brief_path=str(brief_file.relative_to(PROJECT_ROOT)),
        )
        count += 1

    return count


def init_seo_batch(week: Optional[str] = None, targets: Optional[dict] = None) -> SeoPipelineState:
    """Initialize a new weekly SEO batch.

    1. Archive previous state
    2. Create fresh seo-pipeline-state.json
    3. Scan briefs/ for unprocessed briefs
    """
    week = week or get_current_week()
    targets = targets or DEFAULT_TARGETS

    # Archive previous
    current = SeoPipelineState.load()
    if current.raw.get("batch_id"):
        archived = archive_previous_state(current)
        if archived:
            print(f"Archived previous SEO batch to {archived}")

    # Initialize new state
    state = SeoPipelineState({"_fresh": True})
    state.start_batch(week, targets)

    # Scan for briefs
    found = scan_briefs(state, week)
    print(f"Found {found} briefs in marketing/briefs/")

    state.save()
    print(f"Initialized SEO batch 2026-{week}: target {targets.get('pages', '?')} pages")
    return state


if __name__ == "__main__":
    init_seo_batch()
