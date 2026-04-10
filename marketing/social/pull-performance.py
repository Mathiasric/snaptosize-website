#!/usr/bin/env python3
"""Pull post performance analytics from Buffer API with pipeline correlation.

Queries published posts, correlates them to pipeline items, aggregates
by content_type/layout/tool_used, generates insights, and writes
weekly analytics JSON + lessons.md updates.

Usage:
    python marketing/social/pull-performance.py              # Pull for current week
    python marketing/social/pull-performance.py --week W15   # Pull for specific week
    python marketing/social/pull-performance.py --dry-run    # Show what would happen
"""

import argparse
import json
import os
import sys
import time
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

ANALYTICS_DIR = PROJECT_ROOT / "marketing" / "social" / "analytics"
LESSONS_FILE = PROJECT_ROOT / "tasks" / "lessons.md"
CONTENT_DIR = PROJECT_ROOT / "marketing" / "social" / "content"

CHANNELS = {
    "pinterest": os.environ.get("BUFFER_PINTEREST_ID", ""),
    "instagram": os.environ.get("BUFFER_INSTAGRAM_ID", ""),
    "tiktok": os.environ.get("BUFFER_TIKTOK_ID", ""),
}

ORG_ID = os.environ.get("BUFFER_ORG_ID", "")

# Pinterest Analytics API (direct)
PINTEREST_TOKEN = os.environ.get("PINTEREST_ACCESS_TOKEN", "")
PINTEREST_API = "https://api.pinterest.com/v5"

POSTS_QUERY = """query GetPosts($input: PostsInput!, $first: Int, $after: String) {
  posts(input: $input, first: $first, after: $after) {
    edges {
      node {
        id
        status
        text
        sentAt
        channelService
        externalLink
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}"""


def fetch_sent_posts(channel_ids: list, limit: int = 50) -> list:
    """Fetch recent sent posts from Buffer channels."""
    if not channel_ids or not TOKEN or not ORG_ID:
        return []

    variables = {
        "input": {
            "organizationId": ORG_ID,
            "filter": {
                "channelIds": channel_ids,
                "status": ["sent"],
            },
        },
        "first": min(limit, 50),
    }

    all_posts = []
    cursor = None

    while len(all_posts) < limit:
        if cursor:
            variables["after"] = cursor

        payload = {"query": POSTS_QUERY, "variables": variables}
        try:
            resp = requests.post(API, json=payload, headers=HEADERS, timeout=15)
            if resp.status_code != 200:
                print(f"  API error {resp.status_code}: {resp.text[:200]}")
                break
            data = resp.json()
            if "errors" in data:
                print(f"  GraphQL errors: {data['errors'][0].get('message', '')}")
                break
            posts_data = data.get("data", {}).get("posts", {})
            edges = posts_data.get("edges", [])
            if not edges:
                break
            for edge in edges:
                node = edge["node"]
                all_posts.append(node)
            page_info = posts_data.get("pageInfo", {})
            if not page_info.get("hasNextPage"):
                break
            cursor = page_info.get("endCursor")
        except Exception as e:
            print(f"  Request failed: {e}")
            break

    return all_posts[:limit]


# ── Pinterest Analytics API ───────────────────────────────────────────


def fetch_pinterest_pin_analytics(pin_ids: list, start_date: str, end_date: str) -> dict:
    """Fetch analytics for a list of pins from Pinterest API v5.

    Returns dict mapping pin_id -> {impressions, clicks, saves, outbound_clicks}.
    Batches requests to avoid rate limits (300/min).
    """
    if not PINTEREST_TOKEN or not pin_ids:
        return {}

    headers = {"Authorization": f"Bearer {PINTEREST_TOKEN}"}
    results = {}
    errors = 0

    for i, pin_id in enumerate(pin_ids):
        if i > 0 and i % 10 == 0:
            time.sleep(1)  # Throttle to avoid 429
        try:
            resp = requests.get(
                f"{PINTEREST_API}/pins/{pin_id}/analytics",
                headers=headers,
                params={
                    "start_date": start_date,
                    "end_date": end_date,
                    "metric_types": "IMPRESSION,PIN_CLICK,SAVE,OUTBOUND_CLICK",
                },
                timeout=10,
            )
            if resp.status_code == 200:
                summary = resp.json().get("all", {}).get("summary_metrics", {})
                results[pin_id] = {
                    "impressions": summary.get("IMPRESSION", 0) or 0,
                    "clicks": summary.get("PIN_CLICK", 0) or 0,
                    "saves": summary.get("SAVE", 0) or 0,
                    "outbound_clicks": summary.get("OUTBOUND_CLICK", 0) or 0,
                }
            elif resp.status_code == 429:
                print(f"    Pinterest rate limited at pin {len(results)}, waiting 60s...")
                time.sleep(60)
                # Retry this pin
                resp2 = requests.get(
                    f"{PINTEREST_API}/pins/{pin_id}/analytics",
                    headers=headers,
                    params={
                        "start_date": start_date,
                        "end_date": end_date,
                        "metric_types": "IMPRESSION,PIN_CLICK,SAVE,OUTBOUND_CLICK",
                    },
                    timeout=10,
                )
                if resp2.status_code == 200:
                    summary = resp2.json().get("all", {}).get("summary_metrics", {})
                    results[pin_id] = {
                        "impressions": summary.get("IMPRESSION", 0) or 0,
                        "clicks": summary.get("PIN_CLICK", 0) or 0,
                        "saves": summary.get("SAVE", 0) or 0,
                        "outbound_clicks": summary.get("OUTBOUND_CLICK", 0) or 0,
                    }
                elif resp2.status_code == 429:
                    print(f"    Still rate limited, stopping after {len(results)} pins")
                    break
            else:
                errors += 1
        except Exception:
            errors += 1

    if errors:
        print(f"    Pinterest API: {errors} errors")
    return results


def fetch_pinterest_top_pins(start_date: str, end_date: str) -> dict:
    """Fetch top pins from Pinterest user account analytics.

    Fallback when pin-level analytics returns 0 (trial access).
    Returns dict mapping pin_id -> metrics.
    """
    if not PINTEREST_TOKEN:
        return {}

    headers = {"Authorization": f"Bearer {PINTEREST_TOKEN}"}
    all_pins = {}

    for sort_by in ["IMPRESSION", "SAVE", "PIN_CLICK", "OUTBOUND_CLICK"]:
        try:
            resp = requests.get(
                f"{PINTEREST_API}/user_account/analytics/top_pins",
                headers=headers,
                params={
                    "start_date": start_date,
                    "end_date": end_date,
                    "sort_by": sort_by,
                    "metric_types": "IMPRESSION,PIN_CLICK,SAVE,OUTBOUND_CLICK",
                },
                timeout=15,
            )
            if resp.status_code == 200:
                for p in resp.json().get("pins", []):
                    pid = p.get("pin_id", "")
                    if pid and pid not in all_pins:
                        m = p.get("metrics", {})
                        all_pins[pid] = {
                            "impressions": m.get("IMPRESSION", 0) or 0,
                            "clicks": m.get("PIN_CLICK", 0) or 0,
                            "saves": m.get("SAVE", 0) or 0,
                            "outbound_clicks": m.get("OUTBOUND_CLICK", 0) or 0,
                        }
        except Exception:
            pass

    return all_pins


def enrich_with_pinterest_analytics(items: list, start_date: str, end_date: str) -> int:
    """Enrich correlated items with Pinterest analytics data.

    Extracts pin_id from external_link and fetches analytics.
    Returns number of items enriched.
    """
    # Collect pin IDs from pinterest items
    pin_map = {}  # pin_id -> item index
    for i, item in enumerate(items):
        if item["platform"] != "pinterest":
            continue
        link = item.get("external_link", "")
        if "/pin/" not in link:
            continue
        pin_id = link.split("/pin/")[-1].rstrip("/")
        if pin_id:
            pin_map[pin_id] = i

    if not pin_map:
        return 0

    print(f"  Fetching Pinterest analytics for {len(pin_map)} pins...")

    # Try pin-level analytics first
    analytics = fetch_pinterest_pin_analytics(list(pin_map.keys()), start_date, end_date)

    # Check if pin-level returned mostly zeros (trial limitation)
    total_impressions = sum(a.get("impressions", 0) for a in analytics.values())
    if total_impressions == 0 and len(analytics) > 5:
        print("    Pin-level returned all zeros, trying top_pins fallback...")
        top_analytics = fetch_pinterest_top_pins(start_date, end_date)
        # Merge top_pins data for pins we care about
        for pid, metrics in top_analytics.items():
            if pid in pin_map:
                analytics[pid] = metrics

    # Enrich items with analytics
    enriched = 0
    for pin_id, idx in pin_map.items():
        if pin_id in analytics:
            a = analytics[pin_id]
            items[idx]["stats"] = {
                "impressions": a["impressions"],
                "clicks": a["clicks"],
                "saves": a["saves"],
                "outbound_clicks": a["outbound_clicks"],
                "engagements": a["clicks"] + a["saves"],
                "comments": 0,
                "shares": 0,
            }
            items[idx]["score"] = score_post({"stats": items[idx]["stats"]})
            if a["impressions"] > 0:
                enriched += 1

    print(f"    Enriched {enriched} pins with non-zero data")
    return enriched


def score_post(post: dict) -> float:
    """Weighted engagement score for ranking.

    Buffer Publish API does not include analytics stats.
    Stats come from platform-specific fields (Pinterest/Instagram APIs)
    or are populated externally. If no stats, score is 0.
    """
    stats = post.get("statistics", {}) or post.get("stats", {}) or {}
    return (
        (stats.get("impressions", 0) or 0) * 0.1
        + (stats.get("engagements", 0) or 0) * 2.0
        + (stats.get("clicks", 0) or 0) * 5.0
        + (stats.get("saves", 0) or 0) * 3.0
        + (stats.get("comments", 0) or 0) * 4.0
        + (stats.get("shares", 0) or 0) * 4.0
    )


# ── Pipeline correlation ─────────────────────────────────────────────


def _load_item_metadata(item: dict) -> dict:
    """Load metadata.json for a pipeline item."""
    files = item.get("files", {})
    meta_path = files.get("metadata", "")
    if meta_path:
        p = Path(meta_path) if Path(meta_path).is_absolute() else PROJECT_ROOT / meta_path
        if p.exists():
            with open(p, encoding="utf-8") as f:
                return json.load(f)
    return {}


def correlate_post_to_item(post: dict, platform: str, items: list) -> dict | None:
    """Match a Buffer post to a pipeline item.

    Strategy:
    1. Match by buffer_post_id (exact, for items scheduled after upgrade)
    2. Match by text substring (caption/description overlap)
    3. Match by timestamp proximity + platform
    """
    post_id = post.get("id", "")
    post_text = (post.get("text", "") or "").lower()[:200]

    # 1. Exact buffer_post_id match
    for item in items:
        if item.get("buffer_post_id") and item["buffer_post_id"] == post_id:
            return item

    # 2. Text substring match -compare post text to item metadata
    if post_text and len(post_text) > 20:
        best_match = None
        best_overlap = 0
        for item in items:
            if item["platform"] != platform:
                continue
            meta = _load_item_metadata(item)
            # Build searchable text from metadata
            search_parts = [
                meta.get("description", ""),
                meta.get("caption", ""),
                meta.get("title", ""),
                item.get("metadata", {}).get("title", ""),
            ]
            search_text = " ".join(p for p in search_parts if p).lower()
            if not search_text:
                continue
            # Check for substring overlap (first 60 chars of post in metadata)
            snippet = post_text[:60].strip()
            if snippet and snippet in search_text:
                overlap = len(snippet)
                if overlap > best_overlap:
                    best_overlap = overlap
                    best_match = item
        if best_match and best_overlap >= 20:
            return best_match

    return None


# ── Aggregation ───────────────────────────────────────────────────────


def _safe_avg(values: list) -> float:
    return round(sum(values) / len(values), 1) if values else 0.0


def aggregate_by_field(matched_items: list, field: str) -> dict:
    """Group matched items by a field and compute avg stats."""
    groups = {}
    for m in matched_items:
        key = m.get(field) or "unknown"
        groups.setdefault(key, [])
        groups[key].append(m)

    result = {}
    for key, items in groups.items():
        scores = [i["score"] for i in items]
        stats_lists = {
            "impressions": [], "clicks": [], "saves": [],
            "engagements": [], "comments": [], "shares": [],
        }
        for i in items:
            stats = i.get("stats", {})
            for k in stats_lists:
                stats_lists[k].append(stats.get(k, 0) or 0)

        result[key] = {
            "count": len(items),
            "avg_score": _safe_avg(scores),
            "total_impressions": sum(stats_lists["impressions"]),
            "avg_impressions": _safe_avg(stats_lists["impressions"]),
            "avg_clicks": _safe_avg(stats_lists["clicks"]),
            "avg_saves": _safe_avg(stats_lists["saves"]),
            "avg_engagements": _safe_avg(stats_lists["engagements"]),
        }
    return result


# ── Insights generation ───────────────────────────────────────────────


def generate_insights(analytics: dict) -> dict:
    """Generate actionable insights from aggregated performance data."""
    insights = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "week": analytics.get("week", ""),
        "do_more": [],
        "do_less": [],
        "best_content_types": [],
        "best_layouts": [],
        "best_platform": None,
        "notes": [],
    }

    matched = analytics.get("items", [])
    if len(matched) < 3:
        insights["notes"].append(f"Only {len(matched)} posts matched -not enough data for reliable insights.")
        return insights

    # Check if platform data is available
    total_impressions = sum(
        item.get("stats", {}).get("impressions", 0) or 0
        for item in matched
    )
    no_platform_data = total_impressions == 0 and len(matched) >= 3

    if no_platform_data:
        insights["notes"].append(
            "⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). "
            "Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data."
        )
        # Populate best_content_types by volume (count) as proxy when no score data
        by_type = analytics.get("by_content_type", {})
        sorted_by_count = sorted(
            [(k, v) for k, v in by_type.items() if k != "unknown"],
            key=lambda x: x[1].get("count", 0), reverse=True,
        )
        if sorted_by_count:
            insights["best_content_types"] = [t[0] for t in sorted_by_count[:3]]
        insights["do_more"].append(
            "Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data"
        )
        insights["best_platform"] = "unknown - no data"
        return insights

    # Best content types
    by_type = analytics.get("by_content_type", {})
    sorted_types = sorted(
        [(k, v) for k, v in by_type.items() if k != "unknown"],
        key=lambda x: x[1]["avg_score"], reverse=True,
    )
    if sorted_types:
        insights["best_content_types"] = [t[0] for t in sorted_types[:3]]
        best = sorted_types[0]
        insights["do_more"].append(
            f"Content type '{best[0]}' -avg score {best[1]['avg_score']:.0f}, "
            f"avg saves {best[1]['avg_saves']:.1f}"
        )
        if len(sorted_types) >= 2:
            worst = sorted_types[-1]
            if worst[1]["avg_score"] < best[1]["avg_score"] * 0.5:
                insights["do_less"].append(
                    f"Content type '{worst[0]}' -avg score {worst[1]['avg_score']:.0f} "
                    f"({worst[1]['count']} posts)"
                )

    # Best layouts
    by_layout = analytics.get("by_layout", {})
    sorted_layouts = sorted(
        [(k, v) for k, v in by_layout.items() if k != "unknown"],
        key=lambda x: x[1]["avg_score"], reverse=True,
    )
    if sorted_layouts:
        insights["best_layouts"] = [l[0] for l in sorted_layouts[:3]]
        best = sorted_layouts[0]
        insights["do_more"].append(
            f"Layout '{best[0]}' -avg score {best[1]['avg_score']:.0f}"
        )

    # Best platform
    by_platform = analytics.get("by_platform", {})
    sorted_platforms = sorted(
        by_platform.items(),
        key=lambda x: x[1]["avg_score"], reverse=True,
    )
    if sorted_platforms:
        insights["best_platform"] = sorted_platforms[0][0]

    # Top saves insight
    top_savers = sorted(matched, key=lambda x: (x.get("stats", {}).get("saves", 0) or 0), reverse=True)
    if top_savers and (top_savers[0].get("stats", {}).get("saves", 0) or 0) > 0:
        top = top_savers[0]
        insights["notes"].append(
            f"Most saved: '{top.get('title', '?')[:50]}' ({top['stats'].get('saves', 0)} saves) "
            f"— content_type={top.get('content_type', '?')}, layout={top.get('layout', '?')}"
        )

    return insights


# ── Main pull + correlate ─────────────────────────────────────────────


def check_api_health() -> dict:
    """Sjekk hvilke API-tokens er konfigurert og fungerer."""
    health = {}
    # Buffer
    health["buffer"] = bool(TOKEN and API)
    # Pinterest
    health["pinterest"] = bool(os.environ.get("PINTEREST_ACCESS_TOKEN", ""))
    # Instagram
    health["instagram_graph"] = bool(os.environ.get("INSTAGRAM_TOKEN", ""))
    return health


def pull_and_correlate(week: str | None = None, dry_run: bool = False) -> dict:
    """Pull Buffer performance, correlate to pipeline items, generate insights."""
    from shared.pipeline_state import PipelineState

    now = datetime.now(timezone.utc)
    if not week:
        week = f"W{now.isocalendar()[1]:02d}"
    year = now.year

    print(f"Pulling performance for {year}-{week}...")

    # API health check
    health = check_api_health()
    status_parts = [
        f"Buffer={'✓' if health['buffer'] else '✗'}",
        f"Pinterest={'✓' if health['pinterest'] else '✗'}",
        f"Instagram={'✓' if health['instagram_graph'] else '✗'}",
    ]
    print(f"API Health: {('  '.join(status_parts))}")
    if not health["pinterest"] and not health["instagram_graph"]:
        print("⚠️  Koble til Pinterest/Instagram API for reelle engasjements-tall")

    # Map channelService names to our platform names
    SERVICE_TO_PLATFORM = {
        "pinterest": "pinterest",
        "instagram": "instagram",
        "tiktok": "tiktok",
    }

    # Fetch from Buffer (all channels in one query)
    active_channel_ids = [cid for cid in CHANNELS.values() if cid]
    if not active_channel_ids:
        print("  No channel IDs configured. Check .env.buffer")
        return {"summary": {"total_posts": 0, "matched": 0, "unmatched": 0, "avg_score": 0}, "items": [], "insights": {}}

    print(f"  Fetching posts from {len(active_channel_ids)} channels...")
    raw_posts = fetch_sent_posts(active_channel_ids, limit=100)
    print(f"    Got {len(raw_posts)} posts total")

    # Group by platform
    all_posts = {}
    for p in raw_posts:
        service = p.get("channelService", "").lower()
        platform = SERVICE_TO_PLATFORM.get(service, service)
        p["_platform"] = platform
        p["_score"] = score_post(p)
        all_posts.setdefault(platform, [])
        all_posts[platform].append(p)

    for platform, posts in all_posts.items():
        print(f"    {platform}: {len(posts)} posts")

    # Load pipeline state
    state = PipelineState.load()
    published_items = state.get_items_by_stage("published")
    print(f"\n  Pipeline: {len(published_items)} published items")

    # Correlate
    matched_items = []
    unmatched_posts = []
    used_item_ids = set()

    flat_posts = []
    for platform, posts in all_posts.items():
        for p in posts:
            flat_posts.append((platform, p))

    for platform, post in flat_posts:
        # Only try to match against items not already matched
        available_items = [i for i in published_items if i["id"] not in used_item_ids]
        item = correlate_post_to_item(post, platform, available_items)

        # Buffer Publish API doesn't return analytics.
        # Stats are placeholder zeros - will be populated when platform APIs are connected.
        stats = post.get("statistics", {}) or post.get("stats", {}) or {}
        entry = {
            "buffer_post_id": post.get("id", ""),
            "platform": platform,
            "text": (post.get("text", "") or "")[:100],
            "sent_at": post.get("sentAt", ""),
            "external_link": post.get("externalLink", ""),
            "stats": {
                "impressions": stats.get("impressions", 0) or 0,
                "engagements": stats.get("engagements", 0) or 0,
                "clicks": stats.get("clicks", 0) or 0,
                "saves": stats.get("saves", 0) or 0,
                "comments": stats.get("comments", 0) or 0,
                "shares": stats.get("shares", 0) or 0,
            },
            "score": post["_score"],
        }

        if item:
            entry["pipeline_id"] = item["id"]
            entry["content_type"] = item.get("content_type")
            entry["layout"] = item.get("layout")
            entry["tool_used"] = item.get("tool_used")
            entry["title"] = item.get("metadata", {}).get("title", "")
            matched_items.append(entry)
            used_item_ids.add(item["id"])
        else:
            entry["pipeline_id"] = None
            unmatched_posts.append(entry)

    total_posts = len(flat_posts)
    print(f"  Matched: {len(matched_items)}/{total_posts} posts to pipeline items")
    if unmatched_posts:
        print(f"  Unmatched: {len(unmatched_posts)} posts (no pipeline item found)")

    # Enrich Pinterest items with real analytics from Pinterest API
    from datetime import timedelta
    start_date = (now - timedelta(days=30)).strftime("%Y-%m-%d")
    end_date = now.strftime("%Y-%m-%d")
    all_items = matched_items + unmatched_posts
    enriched = enrich_with_pinterest_analytics(all_items, start_date, end_date)
    if enriched:
        print(f"  Pinterest analytics: {enriched} pins with real engagement data")

    # Aggregate
    all_correlated = matched_items  # Only aggregate matched items
    by_content_type = aggregate_by_field(all_correlated, "content_type")
    by_layout = aggregate_by_field(all_correlated, "layout")
    by_tool = aggregate_by_field(all_correlated, "tool_used")
    by_platform = aggregate_by_field(all_correlated, "platform")

    # Build analytics report
    all_items_sorted = sorted(matched_items + unmatched_posts, key=lambda x: x["score"], reverse=True)

    analytics = {
        "week": f"{year}-{week}",
        "pulled_at": now.isoformat(),
        "summary": {
            "total_posts": total_posts,
            "matched": len(matched_items),
            "unmatched": len(unmatched_posts),
            "avg_score": _safe_avg([i["score"] for i in all_correlated]) if all_correlated else 0,
        },
        "by_content_type": by_content_type,
        "by_layout": by_layout,
        "by_tool_used": by_tool,
        "by_platform": by_platform,
        "top_5": all_items_sorted[:5],
        "bottom_5": all_items_sorted[-5:] if len(all_items_sorted) >= 5 else [],
        "items": all_items_sorted,
        "insights": {},
    }

    # Generate insights
    insights = generate_insights(analytics)
    analytics["insights"] = insights

    if dry_run:
        print(f"\n[DRY RUN] Would save to {ANALYTICS_DIR / f'{year}-{week}.json'}")
        print(f"\nInsights:")
        for key in ["do_more", "do_less", "best_content_types", "best_layouts", "notes"]:
            val = insights.get(key, [])
            if val:
                print(f"  {key}: {val}")
        return analytics

    # Save analytics report
    ANALYTICS_DIR.mkdir(parents=True, exist_ok=True)
    report_path = ANALYTICS_DIR / f"{year}-{week}.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(analytics, f, indent=2, ensure_ascii=False)
    print(f"\nSaved analytics to {report_path}")

    # Append insights to lessons.md
    if matched_items:
        _append_lessons(analytics, week, year)

    return analytics


def _append_lessons(analytics: dict, week: str, year: int):
    """Append top/bottom performers + insights to lessons.md."""
    insights = analytics.get("insights", {})
    lines = [f"\n\n## Performance Insights -{year}-{week}\n"]

    top = analytics.get("top_5", [])[:3]
    if top:
        lines.append("### Top Performers")
        for i, p in enumerate(top, 1):
            stats = p.get("stats", {})
            pid = p.get("pipeline_id", "?")
            ct = p.get("content_type", "?")
            lines.append(
                f"{i}. [{p['platform']}] {pid} \"{p.get('title', p['text'][:60])}\" "
                f"(score: {p['score']:.0f}, impressions: {stats.get('impressions', 0)}, "
                f"clicks: {stats.get('clicks', 0)}, saves: {stats.get('saves', 0)}, "
                f"type: {ct})"
            )

    bottom = analytics.get("bottom_5", [])[-3:]
    if bottom:
        lines.append("\n### Low Performers")
        for i, p in enumerate(bottom, 1):
            stats = p.get("stats", {})
            pid = p.get("pipeline_id", "?")
            lines.append(
                f"{i}. [{p['platform']}] {pid} \"{p.get('title', p['text'][:60])}\" "
                f"(score: {p['score']:.0f}, impressions: {stats.get('impressions', 0)})"
            )

    # Actionable insights
    do_more = insights.get("do_more", [])
    do_less = insights.get("do_less", [])
    notes = insights.get("notes", [])

    if do_more:
        lines.append("\n### Do More")
        for item in do_more:
            lines.append(f"- {item}")

    if do_less:
        lines.append("\n### Do Less")
        for item in do_less:
            lines.append(f"- {item}")

    if notes:
        lines.append("\n### Notes")
        for note in notes:
            lines.append(f"- {note}")

    lines.append("")

    LESSONS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LESSONS_FILE, "a", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Appended insights to {LESSONS_FILE}")


def main():
    parser = argparse.ArgumentParser(description="Pull post performance from Buffer")
    parser.add_argument("--week", type=str, help="Week identifier (e.g., W15)")
    parser.add_argument("--dry-run", action="store_true", help="Preview without saving")
    args = parser.parse_args()

    pull_and_correlate(week=args.week, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
