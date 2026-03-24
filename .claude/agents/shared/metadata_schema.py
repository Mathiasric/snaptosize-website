#!/usr/bin/env python3
"""Metadata schema validation for social media content."""

import json
from pathlib import Path
from typing import Dict, List, Tuple

# Platform-specific required fields
REQUIRED_FIELDS = {
    "pinterest": ["platform", "title", "description", "link", "files"],
    "instagram": ["platform", "caption", "files"],
    "tiktok": ["platform", "caption", "files"],
}

# Platform image dimensions (width, height)
PLATFORM_DIMENSIONS = {
    "pinterest": [(1000, 1500)],
    "instagram": [(1080, 1080), (1080, 1350)],
    "tiktok": [(1080, 1920)],
}

# Platform caption length limits
CAPTION_LIMITS = {
    "pinterest": 500,
    "instagram": 2200,
    "tiktok": 2200,
}

MAX_INSTAGRAM_SLIDES = 10


def validate_metadata(metadata: Dict, platform: str) -> Tuple[bool, List[str]]:
    """Validate metadata.json against platform requirements.

    Returns (is_valid, list_of_errors).
    """
    errors: List[str] = []
    platform_lower = platform.lower()

    required = REQUIRED_FIELDS.get(platform_lower, [])
    for field in required:
        if field not in metadata or not metadata[field]:
            errors.append(f"Missing required field: {field}")

    # Caption length
    caption_field = "description" if platform_lower == "pinterest" else "caption"
    caption = metadata.get(caption_field, "")
    limit = CAPTION_LIMITS.get(platform_lower, 2200)
    if len(caption) > limit:
        errors.append(f"Caption too long: {len(caption)} > {limit} chars")

    # File count for Instagram
    files = metadata.get("files", [])
    if platform_lower == "instagram":
        image_files = [f for f in files if f.endswith((".png", ".jpg", ".jpeg"))]
        if len(image_files) > MAX_INSTAGRAM_SLIDES:
            errors.append(f"Too many Instagram slides: {len(image_files)} > {MAX_INSTAGRAM_SLIDES}")

    return (len(errors) == 0, errors)


def validate_content_dir(content_dir: Path, platform: str) -> Tuple[bool, List[str]]:
    """Validate a content directory: metadata + file existence."""
    errors: List[str] = []

    metadata_file = content_dir / "metadata.json"
    if not metadata_file.exists():
        return (False, ["metadata.json not found"])

    try:
        with open(metadata_file, encoding="utf-8") as f:
            metadata = json.load(f)
    except json.JSONDecodeError as e:
        return (False, [f"Invalid JSON: {e}"])

    # Validate metadata fields
    valid, field_errors = validate_metadata(metadata, platform)
    errors.extend(field_errors)

    # Validate file references
    files = metadata.get("files", [])
    for filename in files:
        if not (content_dir / filename).exists():
            errors.append(f"Referenced file missing: {filename}")

    return (len(errors) == 0, errors)


def score_caption(caption: str) -> float:
    """Score a caption 0-10 based on quality signals."""
    if not caption:
        return 0.0

    score = 5.0  # baseline

    # Hook strength: first line should be attention-grabbing
    first_line = caption.split("\n")[0] if "\n" in caption else caption[:80]
    if any(c in first_line for c in ["?", "!", ":"]):
        score += 1.0
    if len(first_line) < 10:
        score -= 1.0

    # Length (sweet spot: 100-500 chars)
    length = len(caption)
    if 100 <= length <= 500:
        score += 1.0
    elif length < 30:
        score -= 2.0

    # CTA presence
    cta_keywords = ["link in bio", "try it", "check out", "download", "sign up", "tap", "click", "save this", "follow"]
    if any(kw in caption.lower() for kw in cta_keywords):
        score += 1.0

    # Line breaks (readability)
    if caption.count("\n") >= 2:
        score += 0.5

    # Emoji usage (moderate is good)
    emoji_count = sum(1 for c in caption if ord(c) > 0x1F600)
    if 1 <= emoji_count <= 8:
        score += 0.5
    elif emoji_count > 15:
        score -= 0.5

    return max(0.0, min(10.0, round(score, 1)))
