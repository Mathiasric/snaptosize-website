"""
Internal Link Builder for SnapToSize SEO Pages

Scans all marketing pages for unlinked keyword mentions and generates
a report of internal linking opportunities. Read-only — never modifies pages.

Usage:
    cd C:/dev/snaptosize-website
    python marketing/seo-optimizer/link-builder.py
"""

import json
import re
from datetime import datetime, timezone
from pathlib import Path

# Project root (script lives in marketing/seo-optimizer/)
PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
REGISTRY_PATH = PROJECT_ROOT / "app-next" / "data" / "page-registry.json"
MARKETING_DIR = PROJECT_ROOT / "app-next" / "app" / "(marketing)"
OUTPUT_PATH = Path(__file__).resolve().parent / "link-opportunities.json"


def load_registry() -> list[dict]:
    """Load page registry JSON."""
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def read_page_content(slug: str) -> str | None:
    """Read page.tsx content for a given slug. Returns None if not found."""
    page_path = MARKETING_DIR / slug / "page.tsx"
    if not page_path.exists():
        return None
    with open(page_path, "r", encoding="utf-8") as f:
        return f.read()


def build_size_variations(keyword: str) -> list[str]:
    """
    For size keywords like '8x10', generate common variations:
    '8x10', '8×10', '8 x 10', '8 × 10'
    """
    variations = [keyword]

    # Match patterns like NxN, NxN, or N.NxN etc.
    size_pattern = re.compile(
        r"(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)", re.IGNORECASE
    )
    m = size_pattern.search(keyword)
    if m:
        w, h = m.group(1), m.group(2)
        candidates = [
            f"{w}x{h}",
            f"{w}\u00d7{h}",        # × multiplication sign
            f"{w} x {h}",
            f"{w} \u00d7 {h}",
        ]
        for c in candidates:
            if c not in variations:
                variations.append(c)

    return variations


def extract_text_regions(content: str) -> list[tuple[int, str]]:
    """
    Extract (line_number, line_text) pairs that contain renderable text.
    Skips imports, metadata exports, schema JSON-LD const blocks, script tags,
    and URL assignments. Returns lines that are likely visible page content.
    """
    lines = content.split("\n")
    regions = []

    skip_depth = 0
    in_skip = False

    for i, line in enumerate(lines, start=1):
        stripped = line.strip()

        # Skip import lines
        if stripped.startswith("import "):
            continue

        # Start skipping: metadata export block
        if not in_skip and "export const metadata" in stripped:
            in_skip = True
            skip_depth = 0

        # Start skipping: JSON-LD variable declarations
        if not in_skip and re.match(
            r"^const\s+\w*(jsonLd|JsonLd)\w*\s*=", stripped, re.IGNORECASE
        ):
            in_skip = True
            skip_depth = 0

        # Start skipping: <script blocks
        if not in_skip and "<script" in stripped:
            in_skip = True
            skip_depth = 0

        # Track brace/bracket depth to know when block ends
        if in_skip:
            skip_depth += stripped.count("{") + stripped.count("[")
            skip_depth -= stripped.count("}") + stripped.count("]")
            # Also check for closing </script> tag
            if "</script>" in stripped:
                in_skip = False
            elif skip_depth <= 0:
                in_skip = False
            continue

        # Skip empty lines and comments
        if stripped.startswith("//") or stripped == "":
            continue

        # Skip const URL assignments (const appUrl = "https://...")
        if re.match(r'^const\s+\w+\s*=\s*$', stripped):
            continue
        if re.match(r'^const\s+\w+\s*=\s*["\']https?://', stripped):
            continue

        # Skip function signature lines
        if re.match(r"^(export\s+)?(default\s+)?function\s+", stripped):
            continue

        # Skip return ( lines
        if stripped in ("return (", "return;", "return(", ");"):
            continue

        # Include this line as potential content
        regions.append((i, line))

    return regions


def has_existing_link_to(content: str, target_slug: str) -> bool:
    """Check if the page already contains a Link to the target slug."""
    # Match <Link href="/slug" or <a href="/slug" or href="/slug"
    pattern = re.compile(
        r"""(?:href=["']/""" + re.escape(target_slug) + r"""["'])"""
    )
    return bool(pattern.search(content))


def is_inside_link_tag(line: str, match_start: int) -> bool:
    """
    Check if the match position is inside a <Link>...</Link> or <a>...</a> tag.
    Simple heuristic: look for unclosed <Link or <a before the match on the same line.
    """
    before = line[:match_start]

    # Check for <Link ...> or <a ...> that hasn't been closed
    # This is a line-level heuristic; multi-line links are caught by has_existing_link_to
    for tag in ["<Link", "<a "]:
        last_open = before.rfind(tag)
        if last_open != -1:
            # Check if there's a closing > after the tag and before our match
            between = before[last_open:]
            if ">" in between:
                # Tag was closed, check if </Link> or </a> also appeared
                close_tag = "</Link>" if "Link" in tag else "</a>"
                if close_tag not in between:
                    return True
            else:
                # Tag still open (attributes span), we're inside it
                return True

    return False


def is_in_jsx_attribute(line: str, match_start: int) -> bool:
    """Check if match is inside a JSX attribute value like className="..." or href="..."."""
    before = line[:match_start]
    # Find the last quote before the match
    last_double = before.rfind('"')
    last_single = before.rfind("'")
    last_backtick = before.rfind("`")

    for last_q, q_char in [(last_double, '"'), (last_single, "'"), (last_backtick, "`")]:
        if last_q == -1:
            continue
        # Check if there's an = sign before the quote (like className="...)
        pre_quote = before[:last_q].rstrip()
        if pre_quote.endswith("="):
            # We're potentially inside an attribute value
            # Check that the quote hasn't been closed yet
            after_match = line[match_start:]
            close_pos = after_match.find(q_char)
            if close_pos != -1:
                return True

    return False


def is_in_url_or_filepath(line: str, match_start: int) -> bool:
    """Check if match is inside a URL, file path, or filename pattern."""
    before = line[:match_start]
    after = line[match_start:]

    # Inside a URL (https://, http://, /path/)
    url_pattern = re.compile(r"https?://[^\s\"']+$")
    if url_pattern.search(before):
        return True

    # Inside a file path or filename (artwork_8x10_300dpi.jpg)
    # Check if preceded by underscore, dot, or slash without space
    if before and before[-1] in "_./":
        return True

    # Check if followed by underscore, dot (like .jpg), or slash
    if after and len(after) > 0:
        rest = after.lstrip()
        # Skip the matched keyword itself
        for c in rest:
            if c in "_":
                return True
            break

    # Inside source= or kind= or similar query params
    if re.search(r"[?&]\w+=[^&\s]*$", before):
        return True

    return False


def get_context_snippet(line: str, match_start: int, match_end: int, width: int = 60) -> str:
    """Extract a context snippet around the match."""
    start = max(0, match_start - width)
    end = min(len(line), match_end + width)
    snippet = line[start:end].strip()
    # Clean up JSX noise
    snippet = re.sub(r"<[^>]+>", "", snippet)
    snippet = re.sub(r"\{/\*.*?\*/\}", "", snippet)
    snippet = snippet.strip()
    if start > 0:
        snippet = "..." + snippet
    if end < len(line):
        snippet = snippet + "..."
    return snippet


def find_opportunities(registry: list[dict]) -> list[dict]:
    """Main logic: find all unlinked keyword mentions across pages."""
    opportunities = []

    # Pre-load all page contents
    page_contents: dict[str, str] = {}
    for entry in registry:
        content = read_page_content(entry["slug"])
        if content:
            page_contents[entry["slug"]] = content

    # For each page in registry, look for its keywords in OTHER pages
    for target_entry in registry:
        target_slug = target_entry["slug"]
        target_keywords = target_entry.get("keywords", [])
        target_title = target_entry["title"]

        if not target_keywords:
            continue

        # Build all keyword variations (including size format variants)
        all_variations = []
        for kw in target_keywords:
            all_variations.extend(build_size_variations(kw))

        # Also add the raw size from slug if it's a size page (e.g. "8x10" from "etsy-8x10-print-size")
        slug_size_match = re.search(r"(\d+(?:-\d+)?x\d+)", target_slug.replace("-", ""))
        if not slug_size_match:
            # Try with hyphens for things like 8-5x11
            slug_size_match = re.search(r"(\d+(?:-\d+)?x\d+)", target_slug)
        if slug_size_match:
            raw_size = slug_size_match.group(1).replace("-", ".")
            all_variations.extend(build_size_variations(raw_size))

        # Deduplicate
        seen = set()
        unique_variations = []
        for v in all_variations:
            lower = v.lower()
            if lower not in seen:
                seen.add(lower)
                unique_variations.append(v)

        # Search every OTHER page for these keywords
        for source_slug, source_content in page_contents.items():
            if source_slug == target_slug:
                continue

            # Skip if source already has a link to target
            if has_existing_link_to(source_content, target_slug):
                continue

            # Extract text regions
            text_regions = extract_text_regions(source_content)

            for variation in unique_variations:
                # Build a regex that matches the keyword as a whole word/phrase
                # Use word boundaries, case-insensitive
                escaped = re.escape(variation)
                pattern = re.compile(
                    r"(?<![a-zA-Z0-9/\-])" + escaped + r"(?![a-zA-Z0-9/\-])",
                    re.IGNORECASE,
                )

                for line_num, line_text in text_regions:
                    for m in pattern.finditer(line_text):
                        # Skip if inside a Link/a tag
                        if is_inside_link_tag(line_text, m.start()):
                            continue

                        # Skip if inside JSX attribute
                        if is_in_jsx_attribute(line_text, m.start()):
                            continue

                        # Skip if inside URL or file path
                        if is_in_url_or_filepath(line_text, m.start()):
                            continue

                        # Skip if inside a JSX comment {/* ... */}
                        before_match = line_text[:m.start()]
                        if "{/*" in before_match:
                            comment_start = before_match.rfind("{/*")
                            after_comment = line_text[comment_start:]
                            comment_end = after_comment.find("*/}")
                            if comment_end == -1 or comment_start + comment_end > m.start():
                                continue

                        # Skip if this looks like it's in a variable name
                        before_char = line_text[m.start() - 1] if m.start() > 0 else " "
                        if before_char in "/.":
                            continue

                        context = get_context_snippet(
                            line_text, m.start(), m.end()
                        )

                        # Skip if context is empty after cleanup
                        if not context or len(context.strip()) < 5:
                            continue

                        # Calculate priority: longer keyword matches are more specific
                        priority = "high" if len(variation) > 15 else (
                            "medium" if len(variation) > 6 else "low"
                        )

                        opportunities.append({
                            "target_page": f"/{target_slug}",
                            "target_title": target_title,
                            "target_keywords": unique_variations[:5],  # top 5 for brevity
                            "matched_keyword": variation,
                            "found_in": f"/{source_slug}",
                            "context": context,
                            "line_number": line_num,
                            "priority": priority,
                            "already_linked": False,
                        })
                        # Only report first match per variation per source page
                        break

    return opportunities


def deduplicate_opportunities(opportunities: list[dict]) -> list[dict]:
    """
    Deduplicate and resolve conflicts:
    1. One opportunity per target-source pair
    2. When the same keyword (e.g. "8x10") matches multiple targets in the
       same source, prefer the most specific page (e.g. /etsy-8x10-print-size
       over /2-3-vs-4-5-ratio)
    """
    # First: one entry per target-source pair
    seen_target_source = set()
    deduped = []
    for opp in opportunities:
        key = (opp["target_page"], opp["found_in"])
        if key not in seen_target_source:
            seen_target_source.add(key)
            deduped.append(opp)

    # Second: for each (source, matched_keyword), keep only the most specific target.
    # "Most specific" = the target whose slug contains the keyword pattern.
    # E.g., "8x10" -> /etsy-8x10-print-size wins over /2-3-vs-4-5-ratio
    keyword_groups: dict[tuple[str, str], list[dict]] = {}
    for opp in deduped:
        # Normalize keyword to a simple form for grouping
        kw_norm = opp["matched_keyword"].lower().replace("\u00d7", "x").replace(" ", "")
        group_key = (opp["found_in"], kw_norm)
        keyword_groups.setdefault(group_key, []).append(opp)

    final = []
    seen_final = set()
    for group_key, group in keyword_groups.items():
        source, kw_norm = group_key
        if len(group) == 1:
            opp = group[0]
            final_key = (opp["target_page"], opp["found_in"])
            if final_key not in seen_final:
                seen_final.add(final_key)
                final.append(opp)
        else:
            # Multiple targets for same keyword in same source — pick most specific
            # Prefer target whose slug contains the keyword
            best = None
            for opp in group:
                slug = opp["target_page"].lstrip("/")
                slug_norm = slug.replace("-", "").replace("\u00d7", "x")
                if kw_norm in slug_norm:
                    best = opp
                    break
            if best is None:
                # Fall back to longest keyword match (more specific)
                best = max(group, key=lambda o: len(o["matched_keyword"]))
            final_key = (best["target_page"], best["found_in"])
            if final_key not in seen_final:
                seen_final.add(final_key)
                final.append(best)

    return final


def main():
    print("Loading page registry...")
    registry = load_registry()
    print(f"  {len(registry)} pages in registry")

    print("Scanning pages for link opportunities...")
    opportunities = find_opportunities(registry)

    # Deduplicate: one opportunity per target-source pair
    opportunities = deduplicate_opportunities(opportunities)

    # Sort by target page for readability
    opportunities.sort(key=lambda x: (x["target_page"], x["found_in"]))

    # Count unique source pages involved
    source_pages = set(opp["found_in"] for opp in opportunities)

    # Count by priority
    priority_counts = {"high": 0, "medium": 0, "low": 0}
    for opp in opportunities:
        p = opp.get("priority", "low")
        priority_counts[p] = priority_counts.get(p, 0) + 1

    report = {
        "generated": datetime.now(timezone.utc).isoformat(),
        "total_opportunities": len(opportunities),
        "unique_source_pages": len(source_pages),
        "by_priority": priority_counts,
        "opportunities": opportunities,
    }

    # Write report
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    print(f"\nFound {len(opportunities)} link opportunities across {len(source_pages)} pages")
    print(f"  High priority: {priority_counts['high']}")
    print(f"  Medium priority: {priority_counts['medium']}")
    print(f"  Low priority: {priority_counts['low']}")
    print(f"Report saved to: {OUTPUT_PATH}")

    # Print top 15 as preview, sorted by priority
    if opportunities:
        priority_order = {"high": 0, "medium": 1, "low": 2}
        sorted_preview = sorted(
            opportunities,
            key=lambda x: (priority_order.get(x["priority"], 3), x["found_in"]),
        )
        print(f"\n--- Top 15 opportunities (by priority) ---")
        for opp in sorted_preview[:15]:
            print(
                f"  [{opp['priority'].upper():6s}] {opp['found_in']} -> {opp['target_page']}  "
                f"(matched: \"{opp['matched_keyword']}\")"
            )
            print(f"           Line {opp['line_number']}: {opp['context'][:80]}")


if __name__ == "__main__":
    main()
