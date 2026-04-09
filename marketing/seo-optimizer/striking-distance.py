"""
Striking Distance Pusher
========================
Finds pages ranking position 5-15 and suggests specific optimizations
to push them onto page 1 or higher on page 1.

Usage:
    python marketing/seo-optimizer/striking-distance.py

Output:
    marketing/seo-optimizer/striking-distance.json

Reads:
    - Latest GSC pages export (marketing/gsc-export/api/*_pages.json)
    - Latest GSC query-page export (marketing/gsc-export/api/*_query-page.json)
    - Link opportunities (marketing/seo-optimizer/link-opportunities.json)
    - Page registry (app-next/data/page-registry.json)
"""

import json
import re
from pathlib import Path
from datetime import datetime, timezone
from collections import defaultdict

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
GSC_DIR = PROJECT_ROOT / "marketing" / "gsc-export" / "api"
REGISTRY_PATH = PROJECT_ROOT / "app-next" / "data" / "page-registry.json"
LINK_OPP_PATH = Path(__file__).resolve().parent / "link-opportunities.json"
OUTPUT_PATH = Path(__file__).resolve().parent / "striking-distance.json"
SITE_URL = "https://snaptosize.com"

# Position ranges
STRIKING_MIN = 5.0
STRIKING_MAX = 15.0

# CTR benchmarks by position range
# CTR benchmarks as percentages (e.g. 15 = 15%)
EXPECTED_CTR_PCT = {
    (1, 3): 15.0,
    (4, 6): 5.0,
    (7, 10): 2.0,
    (11, 20): 1.0,
}


def load_json(path: Path) -> dict | list | None:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError, OSError):
        return None


def find_latest(directory: Path, suffix: str, pattern: str = "*") -> Path | None:
    if not directory.exists():
        return None
    files = sorted(directory.glob(pattern + suffix), reverse=True)
    return files[0] if files else None


def expected_ctr_for_position(pos: float) -> float:
    """Return expected CTR as a percentage (e.g. 5.0 = 5%)."""
    for (lo, hi), ctr_pct in EXPECTED_CTR_PCT.items():
        if lo <= pos <= hi:
            return ctr_pct
    return 0.5


def slug_from_url(url: str) -> str:
    return url.replace(SITE_URL, "").rstrip("/").lstrip("/")


def build_query_index(query_page_data: list[dict]) -> dict[str, list[dict]]:
    """Map page URL -> list of queries with metrics."""
    index = defaultdict(list)
    for row in query_page_data:
        page_url = row["keys"][1]
        query = row["keys"][0]
        index[page_url].append({
            "query": query,
            "impressions": row["impressions"],
            "clicks": row["clicks"],
            "ctr": row["ctr"],
            "position": row["position"],
        })
    # Sort each page's queries by impressions desc
    for url in index:
        index[url].sort(key=lambda q: -q["impressions"])
    return index


def build_link_opp_index(link_data: dict | None) -> dict[str, int]:
    """Map page slug -> count of incoming link opportunities."""
    if not link_data or "opportunities" not in link_data:
        return {}
    counts = defaultdict(int)
    for opp in link_data["opportunities"]:
        target = opp.get("target_page", "").lstrip("/")
        counts[target] += 1
    return dict(counts)


def calculate_impact_score(page: dict) -> float:
    """
    Score = impressions × CTR gap × position proximity factor.
    Higher = more potential gain from optimization.
    """
    impressions = page["impressions"]
    actual_ctr_pct = page["ctr_pct"]  # already in percent
    expected = page["expected_ctr"]   # also in percent
    ctr_gap = max(0, expected - actual_ctr_pct)

    # Pages closer to top of striking range get a boost
    position = page["position"]
    proximity_factor = max(0.1, (STRIKING_MAX - position) / (STRIKING_MAX - STRIKING_MIN))

    return round(impressions * (ctr_gap / 100) * proximity_factor * 100, 1)


def suggest_actions(page: dict, query_index: dict, link_opp_count: int) -> list[str]:
    """Generate specific optimization suggestions for a page."""
    actions = []
    position = page["position"]
    ctr_pct = page["ctr_pct"]  # already in percent
    expected = page["expected_ctr"]  # already in percent
    impressions = page["impressions"]
    slug = page["slug"]

    # Title/description optimization if CTR is significantly below expected
    if ctr_pct < expected * 0.5:
        actions.append(
            f"TITLE: CTR is {ctr_pct:.1f}% vs {expected:.1f}% expected -- "
            f"run title-optimizer.py or manually rewrite title/description"
        )

    # Internal links
    if link_opp_count > 0:
        actions.append(
            f"LINKS: {link_opp_count} internal link opportunities found --"
            f"run link-builder.py and add links from other pages"
        )
    elif link_opp_count == 0:
        actions.append(
            "LINKS: No internal link opportunities detected --"
            "consider mentioning this topic in related blog posts"
        )

    # Position-specific advice
    if 5 <= position <= 7:
        actions.append(
            "CONTENT: Close to top 5 --add FAQ section, expand key sections, "
            "ensure comprehensive coverage vs competitors"
        )
    elif 7 < position <= 10:
        actions.append(
            "CONTENT: Bottom of page 1 --add unique data/examples, "
            "improve content depth, add comparison tables"
        )
    elif 10 < position <= 15:
        actions.append(
            "CONTENT: Page 2 --needs significant content expansion, "
            "fresh examples, and more internal links to break onto page 1"
        )

    # High impressions but low clicks = visibility without conversion
    if impressions > 100 and ctr_pct < 1:
        actions.append(
            f"URGENT: {impressions} impressions but only {ctr_pct:.1f}% CTR -- "
            f"title/description is not compelling enough for searchers"
        )

    # Check top queries for content alignment
    page_url = f"{SITE_URL}/{slug}"
    queries = query_index.get(page_url, [])
    if queries:
        top_q = queries[0]
        if top_q["query"].lower() not in slug.replace("-", " ").lower():
            actions.append(
                f"ALIGNMENT: Top query \"{top_q['query']}\" ({top_q['impressions']} imp) "
                f"doesn't match slug --consider whether title addresses this query directly"
            )

    return actions


def run():
    print("Striking Distance Pusher")
    print("=" * 40)

    # Load data
    pages_path = find_latest(GSC_DIR, ".json", "*_pages")
    query_page_path = find_latest(GSC_DIR, ".json", "*_query-page")

    if not pages_path:
        print("ERROR: No GSC pages data found in", GSC_DIR)
        return

    print(f"Using pages: {pages_path.name}")
    pages_data = load_json(pages_path)
    query_page_data = load_json(query_page_path) if query_page_path else []

    if not pages_data:
        print("ERROR: Could not load pages data")
        return

    registry = load_json(REGISTRY_PATH) or []
    registry_slugs = {p.get("slug", "") for p in registry}
    link_opps = load_json(LINK_OPP_PATH)
    link_opp_counts = build_link_opp_index(link_opps)
    query_index = build_query_index(query_page_data or [])

    print(f"Loaded {len(pages_data)} pages from GSC")
    print(f"Registry has {len(registry_slugs)} pages")

    # Filter to striking distance pages
    striking = []
    for row in pages_data:
        url = row["keys"][0]
        position = row["position"]
        slug = slug_from_url(url)

        if not (STRIKING_MIN <= position <= STRIKING_MAX):
            continue
        if not slug or slug not in registry_slugs:
            continue

        expected = expected_ctr_for_position(position)
        ctr_pct = round(row["ctr"] * 100, 2)  # decimal -> percent
        page_info = {
            "slug": slug,
            "url": url,
            "impressions": row["impressions"],
            "clicks": row["clicks"],
            "ctr_pct": ctr_pct,
            "position": round(position, 1),
            "expected_ctr": expected,
            "ctr_gap": round(expected - ctr_pct, 2),
        }

        # Get top queries
        page_queries = query_index.get(url, [])
        page_info["top_queries"] = [
            {"query": q["query"], "impressions": q["impressions"], "position": round(q["position"], 1)}
            for q in page_queries[:5]
        ]

        # Optimization suggestions
        link_count = link_opp_counts.get(slug, 0)
        page_info["actions"] = suggest_actions(page_info, query_index, link_count)
        page_info["link_opportunities"] = link_count
        page_info["impact_score"] = calculate_impact_score(page_info)

        striking.append(page_info)

    # Sort by impact score
    striking.sort(key=lambda p: -p["impact_score"])

    # Summary
    total_potential_clicks = sum(
        max(0, round(p["impressions"] * p["expected_ctr"] / 100) - p["clicks"])
        for p in striking
    )

    output = {
        "generated": datetime.now(timezone.utc).isoformat(),
        "source": pages_path.name,
        "position_range": f"{STRIKING_MIN}-{STRIKING_MAX}",
        "total_striking_pages": len(striking),
        "total_potential_extra_clicks": max(0, total_potential_clicks),
        "pages": striking,
    }

    OUTPUT_PATH.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"\nFound {len(striking)} pages in striking distance (pos {STRIKING_MIN}-{STRIKING_MAX}):")
    print(f"Potential extra clicks/week if optimized: {max(0, total_potential_clicks)}")

    print(f"\nTop 10 by impact score:")
    for i, p in enumerate(striking[:10], 1):
        print(f"  {i}. /{p['slug']} -- pos {p['position']}, "
              f"{p['impressions']} imp, {p['ctr_pct']:.1f}% CTR "
              f"(expected {p['expected_ctr']:.1f}%), score={p['impact_score']}")
        for action in p["actions"][:2]:
            print(f"     -> {action}")

    print(f"\nOutput saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    run()
