#!/usr/bin/env python3
"""Pull post performance analytics from Buffer API.

Queries published posts, writes weekly performance JSON,
and appends top/bottom performers to tasks/lessons.md.

Usage:
    python marketing/social/pull-performance.py              # Pull for current week
    python marketing/social/pull-performance.py --week W11   # Pull for specific week
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

import requests
from dotenv import load_dotenv

load_dotenv(".env.buffer")

PROJECT_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(PROJECT_ROOT / ".claude" / "agents"))

TOKEN = os.environ.get("BUFFER_API_TOKEN", "")
API = os.environ.get("BUFFER_API_URL", "")
HEADERS = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}

PERF_DIR = PROJECT_ROOT / "marketing" / "social" / "performance"
LESSONS_FILE = PROJECT_ROOT / "tasks" / "lessons.md"

CHANNELS = {
    "pinterest": os.environ.get("BUFFER_PINTEREST_ID", ""),
    "instagram": os.environ.get("BUFFER_INSTAGRAM_ID", ""),
    "tiktok": os.environ.get("BUFFER_TIKTOK_ID", ""),
}

# Buffer GraphQL query for sent posts
POSTS_QUERY = """query GetSentPosts($channelId: ID!, $limit: Int) {
  channel(id: $channelId) {
    sentPosts(limit: $limit) {
      id
      text
      sentAt
      statistics {
        impressions
        engagements
        clicks
        saves
        comments
        shares
      }
    }
  }
}"""


def fetch_sent_posts(channel_id: str, limit: int = 50) -> list:
    """Fetch recent sent posts from a Buffer channel."""
    if not channel_id or not TOKEN:
        return []

    payload = {
        "query": POSTS_QUERY,
        "variables": {"channelId": channel_id, "limit": limit},
    }
    try:
        resp = requests.post(API, json=payload, headers=HEADERS, timeout=15)
        if resp.status_code != 200:
            print(f"  API error {resp.status_code}: {resp.text[:200]}")
            return []
        data = resp.json()
        channel = data.get("data", {}).get("channel", {})
        return channel.get("sentPosts", []) or []
    except Exception as e:
        print(f"  Request failed: {e}")
        return []


def score_post(post: dict) -> float:
    """Simple engagement score for ranking."""
    stats = post.get("statistics", {}) or {}
    return (
        (stats.get("impressions", 0) or 0) * 0.1
        + (stats.get("engagements", 0) or 0) * 2.0
        + (stats.get("clicks", 0) or 0) * 5.0
        + (stats.get("saves", 0) or 0) * 3.0
        + (stats.get("comments", 0) or 0) * 4.0
        + (stats.get("shares", 0) or 0) * 4.0
    )


def pull_performance(week: str | None = None) -> dict:
    """Pull performance for all channels, save to JSON, update lessons."""
    now = datetime.now(timezone.utc)
    if not week:
        week = f"W{now.isocalendar()[1]:02d}"
    year = now.year

    print(f"Pulling performance for {year}-{week}...")

    all_posts = {}
    for platform, channel_id in CHANNELS.items():
        if not channel_id:
            print(f"  Skipping {platform} (no channel ID)")
            continue
        print(f"  Fetching {platform}...")
        posts = fetch_sent_posts(channel_id)
        for p in posts:
            p["_score"] = score_post(p)
            p["_platform"] = platform
        all_posts[platform] = posts
        print(f"    Got {len(posts)} posts")

    # Flatten and rank
    flat = []
    for platform, posts in all_posts.items():
        flat.extend(posts)
    flat.sort(key=lambda p: p["_score"], reverse=True)

    # Save weekly report
    PERF_DIR.mkdir(parents=True, exist_ok=True)
    report_path = PERF_DIR / f"{year}-{week}.json"
    report = {
        "week": f"{year}-{week}",
        "pulled_at": now.isoformat(),
        "platforms": {
            platform: {
                "count": len(posts),
                "posts": [
                    {
                        "id": p["id"],
                        "text": (p.get("text", "") or "")[:100],
                        "sent_at": p.get("sentAt", ""),
                        "stats": p.get("statistics", {}),
                        "score": p["_score"],
                    }
                    for p in posts
                ],
            }
            for platform, posts in all_posts.items()
        },
        "top_3": [
            {"platform": p["_platform"], "text": (p.get("text", "") or "")[:80], "score": p["_score"], "stats": p.get("statistics", {})}
            for p in flat[:3]
        ],
        "bottom_3": [
            {"platform": p["_platform"], "text": (p.get("text", "") or "")[:80], "score": p["_score"], "stats": p.get("statistics", {})}
            for p in flat[-3:]
        ] if len(flat) >= 3 else [],
    }

    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    print(f"\nSaved report to {report_path}")

    # Append insights to lessons.md
    if flat:
        _append_lessons(report, week, year)

    return report


def _append_lessons(report: dict, week: str, year: int):
    """Append top/bottom performers to lessons.md for next week's ideation."""
    lines = [f"\n\n## Performance Insights — {year}-{week}\n"]

    if report["top_3"]:
        lines.append("### Top Performers")
        for i, p in enumerate(report["top_3"], 1):
            stats = p.get("stats", {})
            lines.append(
                f"{i}. [{p['platform']}] \"{p['text']}\" "
                f"(score: {p['score']:.0f}, impressions: {stats.get('impressions', 0)}, "
                f"clicks: {stats.get('clicks', 0)}, saves: {stats.get('saves', 0)})"
            )

    if report["bottom_3"]:
        lines.append("\n### Low Performers")
        for i, p in enumerate(report["bottom_3"], 1):
            stats = p.get("stats", {})
            lines.append(
                f"{i}. [{p['platform']}] \"{p['text']}\" "
                f"(score: {p['score']:.0f}, impressions: {stats.get('impressions', 0)})"
            )

    lines.append("\n**Action:** Double down on top performer formats. Avoid bottom performer angles.\n")

    LESSONS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LESSONS_FILE, "a", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Appended insights to {LESSONS_FILE}")


def main():
    parser = argparse.ArgumentParser(description="Pull post performance from Buffer")
    parser.add_argument("--week", type=str, help="Week identifier (e.g., W11)")
    args = parser.parse_args()

    pull_performance(week=args.week)


if __name__ == "__main__":
    main()
