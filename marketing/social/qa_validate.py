#!/usr/bin/env python3
"""QA validation for pipeline content items at 'created' stage.

Checks file existence, dimensions, metadata, captions, hashtags, and file size.
Pass → advance to 'publishing'. Fail → set error, leave at 'created'.

Usage:
    python marketing/social/qa_validate.py            # Validate all created items
    python marketing/social/qa_validate.py --dry-run   # Show what would happen
"""

import argparse
import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(PROJECT_ROOT / ".claude" / "agents"))

from shared.pipeline_state import PipelineState

try:
    from PIL import Image
    HAS_PILLOW = True
except ImportError:
    HAS_PILLOW = False

CONTENT_DIR = PROJECT_ROOT / "marketing" / "social" / "content"

# Platform-specific validation rules
RULES = {
    "pinterest": {
        "file_key": "image",
        "file_names": ["pin.jpg", "pin.png", "pin.webp"],
        "min_width": 800, "max_width": 3000,
        "min_height": 1200, "max_height": 4000,
        "max_file_mb": 20,
        "caption_field": "description",
        "max_hashtags": 0,
        "require_link": True,
    },
    "instagram": {
        "file_key": "image",
        "file_names": ["post.jpg", "post.png", "post.webp"],
        "min_width": 800, "max_width": 3000,
        "min_height": 1000, "max_height": 4000,
        "max_file_mb": 20,
        "caption_field": "caption",
        "max_hashtags": 5,
        "require_link": False,
    },
    "tiktok": {
        "file_key": "video",
        "file_names": ["video.mp4"],
        "min_width": 1000, "max_width": 1200,
        "min_height": 1800, "max_height": 2000,
        "max_file_mb": 100,
        "caption_field": "caption",
        "max_hashtags": 30,
        "require_link": False,
    },
}


def count_hashtags(text: str) -> int:
    return len(re.findall(r"#\w+", text))


def find_content_file(item_dir: Path, file_names: list) -> Path | None:
    """Find content file by legacy name (pin.jpg/post.jpg) or any matching extension."""
    # 1. Try legacy exact names first
    for name in file_names:
        p = item_dir / name
        if p.exists():
            return p
    # 2. Fall back to any file with matching extension (supports descriptive names)
    extensions = {Path(n).suffix for n in file_names}
    for ext in extensions:
        matches = sorted(item_dir.glob(f"*{ext}"))
        # Skip metadata.json etc — only return content files
        if matches:
            return matches[0]
    return None


def validate_item(item: dict, dry_run: bool = False) -> list[str]:
    """Validate a single content item. Returns list of error strings (empty = pass)."""
    errors = []
    platform = item["platform"]
    rules = RULES.get(platform)
    if not rules:
        return [f"Unknown platform: {platform}"]

    # Find content directory from item files or by item id
    item_dir = None
    files = item.get("files", {})
    if files:
        # Try to derive dir from first file path
        for fpath in files.values():
            p = Path(fpath) if Path(fpath).is_absolute() else PROJECT_ROOT / fpath
            if p.parent.exists():
                item_dir = p.parent
                break

    if not item_dir:
        # Fallback: look in content/<platform>/ for dirs matching item id
        platform_dir = CONTENT_DIR / platform
        if platform_dir.exists():
            for d in platform_dir.iterdir():
                if d.is_dir() and item["id"].replace(f"W{item['id'].split('-')[0][1:]}-", "") in d.name:
                    item_dir = d
                    break

    if not item_dir or not item_dir.exists():
        return [f"Content directory not found for {item['id']}"]

    # Check content file exists
    content_file = find_content_file(item_dir, rules["file_names"])
    if not content_file:
        errors.append(f"Missing content file (expected one of: {rules['file_names']})")
    else:
        # Check file size
        size_mb = content_file.stat().st_size / (1024 * 1024)
        if size_mb > rules["max_file_mb"]:
            errors.append(f"File too large: {size_mb:.1f}MB > {rules['max_file_mb']}MB")

        # Check dimensions (images only, requires Pillow)
        if HAS_PILLOW and rules["file_key"] == "image":
            try:
                with Image.open(content_file) as img:
                    w, h = img.size
                    if w < rules["min_width"] or w > rules["max_width"]:
                        errors.append(f"Width {w}px outside range [{rules['min_width']}-{rules['max_width']}]")
                    if h < rules["min_height"] or h > rules["max_height"]:
                        errors.append(f"Height {h}px outside range [{rules['min_height']}-{rules['max_height']}]")
            except Exception as e:
                errors.append(f"Cannot read image: {e}")

    # Check metadata.json
    meta_path = item_dir / "metadata.json"
    if not meta_path.exists():
        errors.append("Missing metadata.json")
    else:
        try:
            with open(meta_path, encoding="utf-8") as f:
                meta = json.load(f)

            # Check caption/description
            caption = meta.get(rules["caption_field"], "")
            if not caption or len(caption.strip()) < 10:
                errors.append(f"Missing or too short '{rules['caption_field']}' in metadata")

            # Check hashtag count
            if rules["max_hashtags"] > 0:
                ht_count = count_hashtags(caption)
                if ht_count > rules["max_hashtags"]:
                    errors.append(f"Too many hashtags: {ht_count} > {rules['max_hashtags']}")
            elif rules["max_hashtags"] == 0 and count_hashtags(caption) > 0:
                # Pinterest: no hashtags recommended but not a hard fail
                pass

            # Check link
            if rules["require_link"]:
                link = meta.get("link", meta.get("url", ""))
                if not link:
                    errors.append("Missing required link URL in metadata")

        except json.JSONDecodeError:
            errors.append("Invalid metadata.json (not valid JSON)")

    return errors


def run_qa(dry_run: bool = False) -> dict:
    """Run QA on all items at 'created' stage. Returns {passed: int, failed: int, errors: dict}."""
    state = PipelineState.load()
    created_items = state.get_items_by_stage("creation")

    if not created_items:
        # Also check 'created' as alternate name
        created_items = state.get_items_by_stage("created")

    if not created_items:
        print("No items at 'created'/'creation' stage to validate.")
        return {"passed": 0, "failed": 0, "errors": {}}

    passed = 0
    failed = 0
    all_errors = {}

    for item in created_items:
        errors = validate_item(item, dry_run=dry_run)
        if errors:
            failed += 1
            all_errors[item["id"]] = errors
            print(f"  FAIL {item['id']} ({item['platform']}):")
            for e in errors:
                print(f"    - {e}")
            if not dry_run:
                state.update_item(item["id"], error="; ".join(errors))
        else:
            passed += 1
            print(f"  PASS {item['id']} ({item['platform']})")
            if not dry_run:
                state.advance_item(item["id"], "publishing")

    if not dry_run and (passed > 0 or failed > 0):
        state.save()

    print(f"\nQA Results: {passed} passed, {failed} failed out of {len(created_items)} items")
    return {"passed": passed, "failed": failed, "errors": all_errors}


def main():
    parser = argparse.ArgumentParser(description="QA validation for pipeline content")
    parser.add_argument("--dry-run", action="store_true", help="Show results without modifying state")
    args = parser.parse_args()

    print("Running QA validation on created content items...")
    if args.dry_run:
        print("[DRY RUN]\n")
    run_qa(dry_run=args.dry_run)


if __name__ == "__main__":
    main()
