#!/usr/bin/env python3
"""Weekly batch initialization — creates directories and archives previous state."""

import json
import shutil
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from .pipeline_state import PipelineState, STATE_FILE, PROJECT_ROOT, DEFAULT_TARGETS, DEFAULT_FORMAT

CONTENT_BASE = PROJECT_ROOT / "marketing" / "social"
ARCHIVE_DIR = CONTENT_BASE / "archive"

# Directories to ensure exist each week
WEEK_DIRS = [
    CONTENT_BASE / "analytics",
    CONTENT_BASE / "research",
    CONTENT_BASE / "ideas",
    CONTENT_BASE / "scripts",
    CONTENT_BASE / "content" / "pinterest",
    CONTENT_BASE / "content" / "instagram",
    CONTENT_BASE / "content" / "tiktok",
    CONTENT_BASE / "queue",
]


def get_current_week() -> str:
    """Return ISO week string like 'W11'."""
    return f"W{datetime.now(timezone.utc).isocalendar()[1]:02d}"


def archive_previous_state(state: PipelineState) -> Optional[Path]:
    """Archive previous week's pipeline-state.json if it exists and has a batch_id."""
    batch_id = state.raw.get("batch_id")
    if not batch_id or not STATE_FILE.exists():
        return None

    archive_week_dir = ARCHIVE_DIR / batch_id
    archive_week_dir.mkdir(parents=True, exist_ok=True)
    dest = archive_week_dir / "pipeline-state.json"
    shutil.copy2(STATE_FILE, dest)
    return dest


def init_batch(week: Optional[str] = None, targets: Optional[dict] = None) -> PipelineState:
    """Initialize a new weekly batch.

    1. Archive previous state
    2. Create week directories
    3. Initialize fresh pipeline-state.json
    """
    week = week or get_current_week()
    targets = targets or DEFAULT_TARGETS

    # Archive previous
    current = PipelineState.load()
    if current.raw.get("batch_id"):
        archived = archive_previous_state(current)
        if archived:
            print(f"Archived previous batch to {archived}")

    # Ensure directories
    for d in WEEK_DIRS:
        d.mkdir(parents=True, exist_ok=True)

    # Initialize new state
    state = PipelineState.load()
    state.start_batch(week, targets)

    # Pre-create content items with correct formats.
    # Video items: TikTok is primary, Instagram Reels is linked (same video file).
    counter = {"pinterest": 0, "tiktok": 0, "instagram": 0}
    for platform, count in targets.items():
        fmt = DEFAULT_FORMAT.get(platform, "image")
        for i in range(1, count + 1):
            counter[platform] += 1
            item_id = f"{week}-{platform[0].upper()}{counter[platform]:02d}"
            linked = None
            # Link Instagram Reels to matching TikTok item (same video, dual post)
            if platform == "instagram" and fmt == "video":
                linked = f"{week}-T{i:02d}"
            state.add_content_item(item_id, platform, fmt, linked_item=linked)

    state.save()

    print(f"Initialized batch 2026-{week}: {targets}")
    video_count = sum(1 for p, c in targets.items() if DEFAULT_FORMAT.get(p) == "video" for _ in range(c))
    print(f"  Videos: {video_count} items ({sum(1 for p in targets if DEFAULT_FORMAT.get(p) == 'video')} platforms, dual-posted)")
    return state


if __name__ == "__main__":
    init_batch()
