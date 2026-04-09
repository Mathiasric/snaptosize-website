"""
Content Gap Auto-Detector
=========================
Analyzes GSC query data to find keyword clusters that drive impressions
but have no matching page on snaptosize.com.

Usage:
    python marketing/seo-optimizer/content-gap-detector.py

Output:
    marketing/seo-optimizer/content-gaps.json

Reads:
    - Latest GSC queries export (marketing/gsc-export/api/*_queries.json)
    - Latest GSC query-page export (marketing/gsc-export/api/*_query-page.json)
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
OUTPUT_PATH = Path(__file__).resolve().parent / "content-gaps.json"

# Minimum thresholds to filter noise
MIN_CLUSTER_IMPRESSIONS = 10
MIN_CLUSTER_QUERIES = 2
MIN_SINGLE_QUERY_IMPRESSIONS = 25  # solo queries need higher bar

# Stop words to exclude from bigram clustering
STOP_WORDS = {
    "the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "will", "would", "could",
    "should", "may", "might", "can", "shall", "for", "and", "nor", "but",
    "or", "yet", "so", "at", "by", "from", "in", "into", "of", "on",
    "to", "with", "how", "what", "which", "who", "whom", "this", "that",
    "these", "those", "i", "me", "my", "we", "you", "your", "it", "its",
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


def load_registry() -> list[dict]:
    data = load_json(REGISTRY_PATH)
    return data if data else []


def build_existing_keywords(registry: list[dict]) -> set[str]:
    """Build a set of all keywords and slug-derived terms from existing pages."""
    keywords = set()
    for page in registry:
        slug = page.get("slug", "")
        # Add explicit keywords
        for kw in page.get("keywords", []):
            keywords.add(kw.lower().strip())
        # Add slug-derived terms (e.g. "etsy-8x10-print-size" -> "etsy 8x10 print size")
        slug_words = slug.replace("-", " ").lower()
        keywords.add(slug_words)
    return keywords


def build_existing_slugs(registry: list[dict]) -> set[str]:
    return {p.get("slug", "") for p in registry}


def normalize_query(query: str) -> str:
    """Normalize a query for matching."""
    q = query.lower().strip()
    q = re.sub(r"[\"']", "", q)
    q = re.sub(r"\s+", " ", q)
    return q


def extract_bigrams(text: str) -> list[tuple[str, str]]:
    words = [w for w in text.split() if w not in STOP_WORDS and len(w) > 1]
    return [(words[i], words[i + 1]) for i in range(len(words) - 1)]


def query_matches_existing(query: str, existing_keywords: set[str], existing_slugs: set[str]) -> bool:
    """Check if a query is already well-covered by an existing page."""
    nq = normalize_query(query)

    # Direct keyword match
    if nq in existing_keywords:
        return True

    # Check if query is a close subset of an existing keyword
    for kw in existing_keywords:
        if nq in kw or kw in nq:
            return True

    # Check if all meaningful query words appear in any slug
    query_words = [w for w in nq.split() if w not in STOP_WORDS and len(w) > 1]
    if query_words:
        for slug in existing_slugs:
            slug_normalized = slug.replace("-", " ")
            if all(w in slug_normalized for w in query_words):
                return True
            # Also check partial: majority of words match (covers "a3 size" -> "etsy-a3-print-size")
            matches = sum(1 for w in query_words if w in slug_normalized)
            if len(query_words) <= 2 and matches == len(query_words):
                return True
            if len(query_words) > 2 and matches >= len(query_words) - 1:
                return True

    return False


def cluster_queries(queries: list[dict], existing_keywords: set[str], existing_slugs: set[str]) -> list[dict]:
    """
    Cluster uncovered queries by shared bigrams.
    Returns clusters sorted by total impressions descending.
    """
    # Filter to uncovered queries only
    uncovered = []
    for row in queries:
        query = row["keys"][0]
        if not query_matches_existing(query, existing_keywords, existing_slugs):
            uncovered.append({
                "query": query,
                "impressions": row["impressions"],
                "clicks": row["clicks"],
                "ctr": row["ctr"],
                "position": row["position"],
            })

    if not uncovered:
        return []

    # Build bigram index
    bigram_to_queries = defaultdict(list)
    for q in uncovered:
        bigrams = extract_bigrams(normalize_query(q["query"]))
        for bg in bigrams:
            bigram_to_queries[bg].append(q)

    # Score bigrams by total impressions
    bigram_scores = {}
    for bg, qs in bigram_to_queries.items():
        total_imp = sum(q["impressions"] for q in qs)
        bigram_scores[bg] = total_imp

    # Greedy clustering: pick highest-scoring bigram, assign its queries, repeat
    assigned = set()
    clusters = []

    for bg in sorted(bigram_scores, key=lambda b: bigram_scores[b], reverse=True):
        cluster_queries_list = [
            q for q in bigram_to_queries[bg]
            if q["query"] not in assigned
        ]
        if not cluster_queries_list:
            continue

        total_impressions = sum(q["impressions"] for q in cluster_queries_list)
        total_clicks = sum(q["clicks"] for q in cluster_queries_list)
        avg_position = (
            sum(q["position"] * q["impressions"] for q in cluster_queries_list)
            / total_impressions
            if total_impressions > 0
            else 0
        )

        # Apply thresholds
        if len(cluster_queries_list) >= MIN_CLUSTER_QUERIES and total_impressions >= MIN_CLUSTER_IMPRESSIONS:
            cluster_name = " ".join(bg)
            clusters.append({
                "cluster": cluster_name,
                "queries": sorted(cluster_queries_list, key=lambda q: -q["impressions"]),
                "total_impressions": total_impressions,
                "total_clicks": total_clicks,
                "avg_position": round(avg_position, 1),
                "query_count": len(cluster_queries_list),
            })
            for q in cluster_queries_list:
                assigned.add(q["query"])

    # Also capture high-impression solo queries not yet assigned
    for q in uncovered:
        if q["query"] not in assigned and q["impressions"] >= MIN_SINGLE_QUERY_IMPRESSIONS:
            clusters.append({
                "cluster": normalize_query(q["query"]),
                "queries": [q],
                "total_impressions": q["impressions"],
                "total_clicks": q["clicks"],
                "avg_position": round(q["position"], 1),
                "query_count": 1,
            })

    # Sort by total impressions
    clusters.sort(key=lambda c: -c["total_impressions"])
    return clusters


def suggest_page_type(cluster: dict) -> str:
    """Suggest what type of page to create based on cluster keywords."""
    name = cluster["cluster"].lower()
    if any(w in name for w in ["vs", "versus", "compare", "difference"]):
        return "comparison"
    if any(w in name for w in ["how", "guide", "tutorial", "step"]):
        return "guide"
    if any(w in name for w in ["size", "dimension", "resolution", "dpi", "pixel"]):
        return "size-reference"
    if any(w in name for w in ["best", "top", "recommend"]):
        return "guide"
    if any(w in name for w in ["fix", "error", "problem", "issue", "limit"]):
        return "fix"
    return "reference"


def estimate_potential_clicks(cluster: dict) -> int:
    """Estimate monthly clicks if we ranked in top 3 (15% CTR)."""
    return round(cluster["total_impressions"] * 0.15)


def generate_brief_outline(cluster: dict) -> dict:
    """Generate a minimal content brief for the cluster."""
    page_type = suggest_page_type(cluster)
    top_query = cluster["queries"][0]["query"] if cluster["queries"] else cluster["cluster"]

    return {
        "suggested_slug": re.sub(r"[^a-z0-9]+", "-", top_query.lower()).strip("-"),
        "page_type": page_type,
        "primary_keyword": top_query,
        "secondary_keywords": [q["query"] for q in cluster["queries"][1:5]],
        "estimated_monthly_clicks_top3": estimate_potential_clicks(cluster),
    }


def run():
    print("Content Gap Auto-Detector")
    print("=" * 40)

    # Load data
    queries_path = find_latest(GSC_DIR, ".json", "*_queries")
    query_page_path = find_latest(GSC_DIR, ".json", "*_query-page")

    if not queries_path:
        print("ERROR: No GSC queries data found in", GSC_DIR)
        return

    print(f"Using queries: {queries_path.name}")
    queries_data = load_json(queries_path)
    query_page_data = load_json(query_page_path) if query_page_path else None

    if not queries_data:
        print("ERROR: Could not load queries data")
        return

    # Build set of queries that already have a matching page
    covered_queries = set()
    if query_page_data:
        for row in query_page_data:
            covered_queries.add(row["keys"][0].lower())

    registry = load_registry()
    existing_keywords = build_existing_keywords(registry)
    existing_slugs = build_existing_slugs(registry)

    print(f"Loaded {len(queries_data)} queries, {len(registry)} pages in registry")
    print(f"Existing keywords/terms: {len(existing_keywords)}")

    # Cluster uncovered queries
    clusters = cluster_queries(queries_data, existing_keywords, existing_slugs)

    # Enrich with briefs
    opportunities = []
    for cluster in clusters:
        brief = generate_brief_outline(cluster)
        opportunities.append({
            **cluster,
            **brief,
            "priority": "high" if cluster["total_impressions"] >= 50 else
                        "medium" if cluster["total_impressions"] >= 20 else "low",
        })

    # Summary stats
    high = sum(1 for o in opportunities if o["priority"] == "high")
    medium = sum(1 for o in opportunities if o["priority"] == "medium")
    low = sum(1 for o in opportunities if o["priority"] == "low")
    total_potential = sum(o["estimated_monthly_clicks_top3"] for o in opportunities)

    output = {
        "generated": datetime.now(timezone.utc).isoformat(),
        "source": queries_path.name,
        "total_gaps": len(opportunities),
        "by_priority": {"high": high, "medium": medium, "low": low},
        "total_estimated_monthly_clicks": total_potential,
        "opportunities": opportunities,
    }

    OUTPUT_PATH.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"\nFound {len(opportunities)} content gaps:")
    print(f"  High priority: {high}")
    print(f"  Medium priority: {medium}")
    print(f"  Low priority: {low}")
    print(f"  Estimated monthly clicks if top-3: {total_potential}")
    print(f"\nTop 10 opportunities:")

    for i, opp in enumerate(opportunities[:10], 1):
        print(f"  {i}. [{opp['priority'].upper()}] \"{opp['cluster']}\" "
              f"— {opp['total_impressions']} imp, {opp['query_count']} queries, "
              f"avg pos {opp['avg_position']}")
        print(f"     -> Suggested: /{opp['suggested_slug']} ({opp['page_type']})")

    print(f"\nOutput saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    run()
