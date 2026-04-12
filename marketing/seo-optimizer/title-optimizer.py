"""
Title & Meta Description Optimizer for SnapToSize SEO Pages.

Reads the latest GSC analysis, identifies pages with CTR below expected,
extracts current metadata from page.tsx files, finds top queries per page,
and generates algorithmic title/description suggestions.

Usage:
    python marketing/seo-optimizer/title-optimizer.py
"""

import json
import re
import glob
from datetime import datetime, timezone
from pathlib import Path

# ── Paths ─────────────────────────────────────────────────────────────────

ROOT = Path(__file__).resolve().parent.parent.parent  # snaptosize-website/
GSC_API_DIR = ROOT / "marketing" / "gsc-export" / "api"
PAGES_DIR = ROOT / "app-next" / "app" / "(marketing)"
OUTPUT_PATH = ROOT / "marketing" / "seo-optimizer" / "optimization-log.json"


# ── Page topic classification ─────────────────────────────────────────────

# Slug keywords that indicate the page intent, used to pick title patterns
TOPIC_HINTS = {
    "how-to": "guide",
    "price": "guide",
    "package": "guide",
    "how-many": "guide",
    "best": "comparison",
    "vs": "comparison",
    "ratio": "reference",
    "ratios": "reference",
    "sizes": "reference",
    "size": "reference",
    "resolution": "reference",
    "format": "comparison",
    "limit": "fix",
    "fix": "fix",
}


def _classify_page(page_slug: str) -> str:
    """Classify a page into: fix, guide, comparison, or reference."""
    slug = page_slug.lower()
    for keyword, topic in TOPIC_HINTS.items():
        if keyword in slug:
            return topic
    return "guide"  # default


# ── Title pattern banks per topic ─────────────────────────────────────────

PATTERNS = {
    "fix": [
        "{q}: Quick Fix for Etsy Sellers ({year})",
        "{q} — Fix It in Under 2 Minutes",
        "How to Fix {q} ({year} Guide)",
        "{q}: Step-by-Step Solution ({year})",
        "{q} — Easy Fix for Digital Downloads",
    ],
    "guide": [
        "{q}: Complete Guide ({year})",
        "{q} — What Etsy Sellers Need to Know",
        "{q}: The Etsy Seller's Guide ({year})",
        "{q} — Practical Guide for Sellers",
        "{q} — Everything You Need to Know",
    ],
    "comparison": [
        "{q}: Which One Should You Use? ({year})",
        "{q} — Side-by-Side Comparison",
        "{q} Compared: Best Choice for Etsy",
        "{q}: Pros, Cons & Best Pick ({year})",
        "{q} — The Definitive Comparison",
    ],
    "reference": [
        "{q}: Complete Chart ({year})",
        "{q} — Every Size You Need for Etsy",
        "{q}: The Definitive Reference ({year})",
        "{q} — Full Chart for Print Sellers",
        "{q}: All You Need to Know ({year})",
    ],
}

DESC_PATTERNS = {
    "fix": [
        "Struggling with {q}? Here's the exact fix Etsy sellers use — works in under 2 minutes. Free tool included.",
        "Hit a wall with {q}? Step-by-step solution with screenshots. Most sellers fix this in seconds.",
    ],
    "guide": [
        "Everything you need to know about {q} as an Etsy seller. Step-by-step guide with real examples.",
        "The complete guide to {q} for Etsy digital download sellers. Save time and boost sales.",
    ],
    "comparison": [
        "Not sure about {q}? Side-by-side comparison with pros, cons, and the best choice for Etsy sellers.",
        "{q_cap} — we compare every option so you can pick the right one for your Etsy printables.",
    ],
    "reference": [
        "Complete {q} reference chart for Etsy sellers. Copy-paste the exact specs you need for print-quality downloads.",
        "The definitive {q} chart for digital downloads. Pixel dimensions, DPI, and file sizes — all in one place.",
    ],
}


# ── Helpers ───────────────────────────────────────────────────────────────

def find_latest_analysis() -> Path:
    """Find the newest *_analysis.json in the GSC api directory."""
    pattern = str(GSC_API_DIR / "*_analysis.json")
    files = sorted(glob.glob(pattern))
    if not files:
        raise FileNotFoundError(
            "No *_analysis.json files found in " + str(GSC_API_DIR)
        )
    return Path(files[-1])


def find_matching_query_page(analysis_path: Path) -> Path:
    """Find the query-page.json that matches the analysis date."""
    date_prefix = analysis_path.name.split("_analysis")[0]
    qp_path = analysis_path.parent / (date_prefix + "_query-page.json")
    if not qp_path.exists():
        raise FileNotFoundError("No query-page file: " + str(qp_path))
    return qp_path


def extract_metadata_from_page(page_slug: str) -> dict:
    """
    Read a page.tsx and extract the title and description from
    `export const metadata: Metadata = { ... }`.
    Returns {"title": str|None, "description": str|None}.
    """
    slug = page_slug.lstrip("/")
    page_file = PAGES_DIR / slug / "page.tsx"
    result = {"title": None, "description": None}

    if not page_file.exists():
        return result

    content = page_file.read_text(encoding="utf-8")

    # Extract the metadata block (from `export const metadata` to its closing)
    meta_match = re.search(
        r"export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{",
        content,
    )
    if not meta_match:
        return result

    # Find the matching closing brace by counting depth
    depth = 0
    meta_block = ""
    for i in range(meta_match.end() - 1, len(content)):
        ch = content[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
        meta_block += ch
        if depth == 0:
            break

    # Extract top-level title (not openGraph.title)
    title_match = re.search(
        r'^\s*title\s*:\s*["\'](.+?)["\']',
        meta_block,
        re.MULTILINE,
    )
    if title_match:
        result["title"] = title_match.group(1)

    # Extract top-level description
    # Handle multi-line: `description:\n    "..."`  or  `description: "..."`
    desc_match = re.search(
        r'^\s*description\s*:\s*\n?\s*["\'](.+?)["\']',
        meta_block,
        re.MULTILINE,
    )
    if desc_match:
        result["description"] = desc_match.group(1)

    return result


def build_page_query_index(query_page_data: list) -> dict:
    """
    Build a dict: page_path -> list of (query, impressions, clicks).
    Aggregates impressions per (query, page) pair.
    """
    index = {}
    for row in query_page_data:
        keys = row.get("keys", [])
        if len(keys) < 2:
            continue
        query, url = keys[0], keys[1]
        # Normalize URL to path
        path = url.replace("https://snaptosize.com", "").rstrip("/")
        if not path:
            path = "/"
        if path not in index:
            index[path] = {}
        imp = row.get("impressions", 0)
        clicks = row.get("clicks", 0)
        if query in index[path]:
            index[path][query] = (
                index[path][query][0] + imp,
                index[path][query][1] + clicks,
            )
        else:
            index[path][query] = (imp, clicks)
    return index


def get_top_query_for_page(page_query_index: dict, page_slug: str) -> tuple:
    """
    From the pre-built index, find the query with most impressions
    for the given page. Returns (query, impressions).
    """
    path = page_slug.rstrip("/")
    queries = page_query_index.get(path, {})
    if not queries:
        return None, 0

    best_query = max(queries, key=lambda q: queries[q][0])
    return best_query, queries[best_query][0]


# ── Title / Description Generation ────────────────────────────────────────

def _clean_query(query: str) -> str:
    """Remove all quotes and normalize whitespace."""
    q = query.replace('"', "").replace("'", "")
    q = re.sub(r"\s+", " ", q).strip()
    return q


def _capitalize_query(query: str) -> str:
    """Title-case a query string, keeping small words lowercase."""
    small = {
        "a", "an", "the", "for", "and", "or", "but",
        "in", "on", "at", "to", "of", "vs", "is",
    }
    words = query.split()
    result = []
    for i, w in enumerate(words):
        if i == 0 or w.lower() not in small:
            # Keep all-caps tokens like "DPI", "MB", "PDF"
            if w.isupper() and len(w) >= 2:
                result.append(w)
            else:
                result.append(w.capitalize())
        else:
            result.append(w.lower())
    return " ".join(result)


def _truncate(text: str, limit: int) -> str:
    """Truncate to limit characters, cutting at last word boundary."""
    if len(text) <= limit:
        return text
    truncated = text[:limit]
    last_space = truncated.rfind(" ")
    if last_space > limit // 2:
        truncated = truncated[:last_space]
    return truncated.rstrip(" :,—-")


def _slug_to_readable(slug: str) -> str:
    """Convert a slug like /etsy-20mb-file-limit to a readable phrase."""
    s = slug.lstrip("/").replace("-", " ")
    # Drop trailing "for etsy" since patterns already include Etsy context
    s = re.sub(r"\s+for\s+etsy$", "", s, flags=re.IGNORECASE)
    return _capitalize_query(s)


def generate_title_suggestions(
    current_title: str, top_query: str, page_slug: str
) -> list:
    """
    Generate 2 alternative title suggestions using topic-aware patterns.
    Keeps all titles under 60 characters.
    """
    topic = _classify_page(page_slug)
    year = str(datetime.now().year)

    # Use top query if available, otherwise derive from slug
    if top_query:
        q_clean = _clean_query(top_query)
        q_title = _capitalize_query(q_clean)
    else:
        q_title = _slug_to_readable(page_slug)

    # If query-based title is too long (>35 chars), try slug-based instead
    if len(q_title) > 35:
        slug_title = _slug_to_readable(page_slug)
        if len(slug_title) < len(q_title):
            q_title = slug_title

    patterns = PATTERNS.get(topic, PATTERNS["guide"])

    suggestions = []
    seen = set()
    for template in patterns:
        title = template.format(q=q_title, year=year)
        if len(title) <= 60 and title not in seen:
            suggestions.append(title)
            seen.add(title)
        elif len(title) > 60:
            # Try with shorter query
            shorter_q = _truncate(q_title, 28)
            title = template.format(q=shorter_q, year=year)
            if len(title) <= 60 and title not in seen:
                suggestions.append(title)
                seen.add(title)
        if len(suggestions) >= 2:
            break

    # Fallback
    while len(suggestions) < 2:
        fb = _truncate(q_title, 38) + " (" + year + ")"
        if fb not in seen:
            suggestions.append(fb)
            seen.add(fb)
        else:
            fb2 = _truncate(q_title, 42) + " Guide"
            suggestions.append(fb2)
        break

    return suggestions[:2]


def generate_description_suggestion(
    top_query: str, current_description: str, page_slug: str
) -> list:
    """
    Generate 1 meta description suggestion under 160 chars.
    Uses topic-aware patterns with the top query included.
    """
    topic = _classify_page(page_slug)

    if top_query:
        q_clean = _clean_query(top_query)
    else:
        q_clean = _slug_to_readable(page_slug).lower()

    q_lower = q_clean.lower()
    q_cap = _capitalize_query(q_clean)

    templates = DESC_PATTERNS.get(topic, DESC_PATTERNS["guide"])

    for template in templates:
        desc = template.format(q=q_lower, q_cap=q_cap)
        if len(desc) <= 160:
            return [desc]

    # Fallback
    desc = "Complete guide to {} for Etsy sellers.".format(q_lower)
    return [_truncate(desc, 160)]


# ── Main ──────────────────────────────────────────────────────────────────

def run():
    # 1. Load latest analysis
    analysis_path = find_latest_analysis()
    print("Loading analysis: " + str(analysis_path.name))
    with open(analysis_path, "r", encoding="utf-8") as f:
        analysis = json.load(f)

    # 2. Load query-page mapping and build index
    qp_path = find_matching_query_page(analysis_path)
    print("Loading query-page: " + str(qp_path.name))
    with open(qp_path, "r", encoding="utf-8") as f:
        query_page_data = json.load(f)

    page_query_index = build_page_query_index(query_page_data)

    # 3. Extract title optimization opportunities
    title_opps = analysis.get("opportunities", {}).get("title_optimization", [])
    if not title_opps:
        print("No title optimization opportunities found.")
        return

    print("Found {} title optimization opportunities.\n".format(len(title_opps)))

    # 4. Process each opportunity
    now_iso = datetime.now(timezone.utc).isoformat()
    opportunities = []

    for opp in title_opps:
        page_slug = opp["page"]
        impressions = opp["impressions"]
        clicks = opp["clicks"]
        ctr = opp["ctr"]
        position = opp["position"]
        expected_ctr = opp["expected_ctr"]

        # Extract current metadata
        meta = extract_metadata_from_page(page_slug)
        current_title = meta["title"] or "(not found)"
        current_desc = meta["description"] or "(not found)"

        # Find top query
        top_query, top_query_impr = get_top_query_for_page(
            page_query_index, page_slug
        )

        # Classify page topic
        topic = _classify_page(page_slug)

        # Generate suggestions
        suggested_titles = generate_title_suggestions(
            current_title, top_query or "", page_slug
        )
        suggested_descs = generate_description_suggestion(
            top_query or "", current_desc, page_slug
        )

        entry = {
            "page": page_slug,
            "current_title": current_title,
            "current_description": current_desc,
            "impressions": impressions,
            "clicks": clicks,
            "ctr": ctr,
            "position": position,
            "expected_ctr": expected_ctr,
            "top_query": top_query or "(no query data)",
            "top_query_impressions": top_query_impr,
            "topic": topic,
            "suggested_titles": suggested_titles,
            "suggested_descriptions": suggested_descs,
            "status": "pending",
            "date_suggested": now_iso,
        }
        opportunities.append(entry)

        # Print summary line
        gap = expected_ctr - ctr
        print(
            "  {page}  CTR={ctr}% (exp {exp}%, gap {gap:+.1f}pp)  "
            "pos={pos}  impr={impr}  [{topic}]".format(
                page=page_slug,
                ctr=ctr,
                exp=expected_ctr,
                gap=gap,
                pos=position,
                impr=impressions,
                topic=topic,
            )
        )
        print("    Current:  " + current_title)
        if top_query:
            print(
                "    Top query: \"{}\" ({} impr)".format(top_query, top_query_impr)
            )
        else:
            print("    Top query: (none found in query-page data)")
        for i, t in enumerate(suggested_titles):
            print("    Alt {}:     {} [{}ch]".format(i + 1, t, len(t)))
        if suggested_descs:
            desc_preview = suggested_descs[0]
            if len(desc_preview) > 80:
                desc_preview = desc_preview[:77] + "..."
            print("    Desc:      " + desc_preview)
        print()

    # 5. Sort by impact: impressions * CTR gap
    opportunities.sort(
        key=lambda o: o["impressions"] * (o["expected_ctr"] - o["ctr"]),
        reverse=True,
    )

    # 6. Save to optimization-log.json
    output = {
        "generated": now_iso,
        "analysis_source": analysis_path.name,
        "opportunities": opportunities,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print("=" * 60)
    print("Saved {} opportunities to {}".format(
        len(opportunities), OUTPUT_PATH.relative_to(ROOT)
    ))
    print()
    print("Priority ranking (by impressions x CTR gap):")
    for i, o in enumerate(opportunities[:5]):
        gap = o["expected_ctr"] - o["ctr"]
        score = o["impressions"] * gap
        print(
            "  {}. {} — {:.0f} impact score ({} impr x {:.1f}pp gap)".format(
                i + 1, o["page"], score, o["impressions"], gap
            )
        )


if __name__ == "__main__":
    run()
