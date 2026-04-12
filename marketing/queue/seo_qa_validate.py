#!/usr/bin/env python3
"""SEO page QA validation — automated quality gates for deployed pages.

Validates meta title/description lengths, JSON-LD schema presence,
H1 keyword inclusion, CTA count, and required components.

Usage:
    python marketing/queue/seo_qa_validate.py                          # Validate all deployed items in current batch
    python marketing/queue/seo_qa_validate.py --slug etsy-8x10-print-size  # Validate a specific page
    python marketing/queue/seo_qa_validate.py --dry-run                # Show results without updating state
    python marketing/queue/seo_qa_validate.py --all                    # Validate all pages in registry
"""

import argparse
import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent.parent
APP_DIR = PROJECT_ROOT / "app-next" / "app" / "(marketing)"
REGISTRY_PATH = PROJECT_ROOT / "app-next" / "data" / "page-registry.json"

sys.path.insert(0, str(PROJECT_ROOT / ".claude" / "agents"))

from shared.seo_pipeline_state import SeoPipelineState

# --- Limits ---
MAX_TITLE_LENGTH = 60
MAX_DESC_LENGTH = 160
MIN_WORD_COUNT = 800
MIN_CTA_COUNT = 2
REQUIRED_SCHEMAS = ["Article", "BreadcrumbList", "FAQPage"]
REQUIRED_COMPONENTS = ["FAQAccordion", "FinalCTA"]
# EmailCapture is recommended for new pages but not yet deployed on existing pages
RECOMMENDED_COMPONENTS = ["EmailCapture|EmailCaptureSection"]


def find_page_file(slug: str) -> Path | None:
    """Find the page.tsx for a given slug."""
    page = APP_DIR / slug / "page.tsx"
    if page.exists():
        return page
    # Try without (marketing) group
    alt = PROJECT_ROOT / "app-next" / "app" / slug / "page.tsx"
    if alt.exists():
        return alt
    return None


def extract_metadata(source: str) -> dict:
    """Extract title and description from Next.js metadata export."""
    result = {"title": None, "description": None}

    # Match title in metadata export
    title_match = re.search(r'title:\s*["\'](.+?)["\']', source)
    if title_match:
        result["title"] = title_match.group(1)

    # Match description — may span lines with template literals or string concat
    desc_match = re.search(r'description:\s*\n?\s*["\'](.+?)["\']', source, re.DOTALL)
    if desc_match:
        result["description"] = desc_match.group(1).strip()

    return result


def check_schemas(source: str) -> list[str]:
    """Check for required JSON-LD schema types."""
    missing = []
    for schema_type in REQUIRED_SCHEMAS:
        # Look for @type declaration in JSON-LD blocks
        pattern = rf'"@type"\s*:\s*"{schema_type}"'
        if not re.search(pattern, source):
            missing.append(schema_type)
    return missing


def check_components(source: str) -> list[str]:
    """Check for required component imports/usage."""
    missing = []
    for comp in REQUIRED_COMPONENTS:
        # Support alternatives separated by |
        alternatives = comp.split("|")
        if not any(alt in source for alt in alternatives):
            missing.append(alternatives[0])
    return missing


def count_ctas(source: str) -> int:
    """Count distinct CTA touchpoints on the page.

    Counts: explicit app links, FinalCTA components, ContextualCTA components,
    and accent Card CTAs.
    FinalCTA/ContextualCTA render their own app links internally, so we count
    component usage rather than the href to avoid under-counting.
    """
    # Direct app links in page source (not inside component definitions)
    app_links = len(re.findall(r'app\.snaptosize\.com', source))
    # FinalCTA component usage (renders its own link internally)
    final_cta = len(re.findall(r'<FinalCTA', source))
    # ContextualCTA component usage (renders its own link internally)
    contextual_cta = len(re.findall(r'<ContextualCTA', source))
    # Accent Card = inline mid-content CTA
    card_cta = len(re.findall(r'<Card[^>]*accent', source))
    # Use max of app_links vs component count to avoid double-counting
    return max(app_links, final_cta + contextual_cta + card_cta)


def check_h1_keyword(source: str, slug: str) -> tuple[bool, str]:
    """Check if H1 contains the primary keyword derived from slug."""
    # Extract H1 content
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', source, re.DOTALL)
    if not h1_match:
        return False, "No <h1> found"

    h1_text = re.sub(r'<[^>]+>', '', h1_match.group(1)).lower().strip()

    # Derive keyword parts from slug (e.g., etsy-8x10-print-size → [etsy, 8x10, print, size])
    keyword_parts = slug.replace("-", " ").split()
    # Check that most keyword parts appear in H1
    matches = sum(1 for part in keyword_parts if part.lower() in h1_text)
    ratio = matches / len(keyword_parts) if keyword_parts else 0

    if ratio >= 0.5:
        return True, h1_text
    return False, f"H1 '{h1_text}' missing keyword parts from '{slug}'"


def estimate_word_count(source: str) -> int:
    """Rough word count of visible text content (strip JSX/HTML tags)."""
    # Remove imports, JSON-LD blocks, and code
    text = re.sub(r'import\s+.*?;', '', source)
    text = re.sub(r'const\s+\w+JsonLd\s*=\s*\{.*?\};', '', text, flags=re.DOTALL)
    text = re.sub(r'<script[^>]*>.*?</script>', '', text, flags=re.DOTALL)
    # Remove JSX tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Remove JS code artifacts
    text = re.sub(r'[{}()\[\];=]', ' ', text)
    # Count words (only alphabetic tokens 3+ chars)
    words = [w for w in text.split() if len(w) >= 3 and re.match(r'^[a-zA-Z]', w)]
    return len(words)


def validate_page(slug: str) -> dict:
    """Validate a single SEO page. Returns {passed: bool, gates: dict}."""
    gates = {}
    page_path = find_page_file(slug)

    if not page_path:
        return {
            "passed": False,
            "gates": {"file": {"passed": False, "detail": f"Page file not found for slug: {slug}"}},
        }

    source = page_path.read_text(encoding="utf-8")

    # --- Gate: seo_onpage (meta title + description lengths) ---
    meta = extract_metadata(source)
    seo_issues = []

    if meta["title"]:
        tlen = len(meta["title"])
        if tlen > MAX_TITLE_LENGTH:
            seo_issues.append(f"Title too long: {tlen} chars (max {MAX_TITLE_LENGTH})")
    else:
        seo_issues.append("No meta title found")

    if meta["description"]:
        dlen = len(meta["description"])
        if dlen > MAX_DESC_LENGTH:
            seo_issues.append(f"Description too long: {dlen} chars (max {MAX_DESC_LENGTH})")
    else:
        seo_issues.append("No meta description found")

    h1_ok, h1_detail = check_h1_keyword(source, slug)
    if not h1_ok:
        seo_issues.append(h1_detail)

    cta_count = count_ctas(source)
    if cta_count < MIN_CTA_COUNT:
        seo_issues.append(f"Only {cta_count} CTAs found (min {MIN_CTA_COUNT})")

    gates["seo_onpage"] = {
        "passed": len(seo_issues) == 0,
        "detail": "; ".join(seo_issues) if seo_issues else f"title={len(meta['title'] or '')}ch, desc={len(meta['description'] or '')}ch, {cta_count} CTAs, H1 OK",
    }

    # --- Gate: schema ---
    missing_schemas = check_schemas(source)
    gates["schema"] = {
        "passed": len(missing_schemas) == 0,
        "detail": f"Missing: {', '.join(missing_schemas)}" if missing_schemas else "Article + BreadcrumbList + FAQPage present",
    }

    # --- Gate: components ---
    missing_components = check_components(source)
    # Check recommended (non-blocking) components
    missing_recommended = []
    for comp in RECOMMENDED_COMPONENTS:
        alternatives = comp.split("|")
        if not any(alt in source for alt in alternatives):
            missing_recommended.append(alternatives[0])

    detail_parts = []
    if missing_components:
        detail_parts.append(f"Missing required: {', '.join(missing_components)}")
    if missing_recommended:
        detail_parts.append(f"Recommended: {', '.join(missing_recommended)}")
    if not detail_parts:
        detail_parts.append("All required components present")

    gates["components"] = {
        "passed": len(missing_components) == 0,  # Only required components block
        "detail": "; ".join(detail_parts),
    }

    # --- Gate: content_depth ---
    word_count = estimate_word_count(source)
    depth_issues = []
    if word_count < MIN_WORD_COUNT:
        depth_issues.append(f"~{word_count} words (min {MIN_WORD_COUNT})")

    # Count FAQ items
    faq_count = len(re.findall(r'question:', source))
    if faq_count < 3:
        depth_issues.append(f"Only {faq_count} FAQs (min 3)")

    gates["content_depth"] = {
        "passed": len(depth_issues) == 0,
        "detail": "; ".join(depth_issues) if depth_issues else f"~{word_count} words, {faq_count} FAQs",
    }

    # --- Gate: internal_links ---
    # Load registry to check if linked slugs are valid
    registry_slugs = set()
    if REGISTRY_PATH.exists():
        with open(REGISTRY_PATH, encoding="utf-8") as f:
            registry = json.load(f)
            registry_slugs = {entry["slug"] for entry in registry}

    internal_links = re.findall(r'href="/([\w-]+)"', source)
    valid_links = [l for l in internal_links if l in registry_slugs]
    gates["internal_links"] = {
        "passed": len(valid_links) >= 2,
        "detail": f"{len(valid_links)} valid internal links" + (f" (need 2+)" if len(valid_links) < 2 else ""),
    }

    all_passed = all(g["passed"] for g in gates.values())
    return {"passed": all_passed, "gates": gates}


def run_validation(slugs: list[str], dry_run: bool = False, update_state: bool = True) -> dict:
    """Validate multiple pages and optionally update pipeline state."""
    results = {}
    passed_count = 0
    failed_count = 0

    for slug in slugs:
        result = validate_page(slug)
        results[slug] = result

        status = "PASS" if result["passed"] else "FAIL"
        if result["passed"]:
            passed_count += 1
        else:
            failed_count += 1

        print(f"\n  {status}  {slug}")
        for gate_name, gate in result["gates"].items():
            icon = "+" if gate["passed"] else "x"
            print(f"    [{icon}] {gate_name}: {gate['detail']}")

    # Update pipeline state if not dry run
    if update_state and not dry_run:
        state = SeoPipelineState.load()
        for slug, result in results.items():
            # Find item by slug — handle both id-based and slug-only formats
            for item in state.raw.get("content_items", []):
                if item.get("slug") == slug:
                    item_id = item.get("id", slug)
                    # Ensure quality_gates exists on the item
                    if "quality_gates" not in item:
                        item["quality_gates"] = {}
                    for gate_name, gate in result["gates"].items():
                        state.set_gate(item_id, gate_name, gate["passed"], gate["detail"])
                    break
        state.save()
        print("\nPipeline state updated with quality gate results.")

    print(f"\nSEO QA: {passed_count} passed, {failed_count} failed out of {len(slugs)} pages")
    return results


def main():
    parser = argparse.ArgumentParser(description="SEO page QA validation")
    parser.add_argument("--slug", type=str, help="Validate a specific page by slug")
    parser.add_argument("--dry-run", action="store_true", help="Show results without updating state")
    parser.add_argument("--all", action="store_true", help="Validate all pages in registry")
    args = parser.parse_args()

    print("Running SEO page QA validation...")
    if args.dry_run:
        print("[DRY RUN]\n")

    if args.slug:
        slugs = [args.slug]
        run_validation(slugs, dry_run=args.dry_run)
    elif args.all:
        if REGISTRY_PATH.exists():
            with open(REGISTRY_PATH, encoding="utf-8") as f:
                registry = json.load(f)
            slugs = [entry["slug"] for entry in registry]
            run_validation(slugs, dry_run=args.dry_run, update_state=False)
        else:
            print("ERROR: page-registry.json not found")
            sys.exit(1)
    else:
        # Default: validate deployed items in current batch
        state = SeoPipelineState.load()
        # Handle both stage/status field names in content items
        deployed = [
            i for i in state.raw.get("content_items", [])
            if i.get("stage") == "deployed" or i.get("status") == "deployed"
        ]
        if not deployed:
            print("No deployed items in current batch to validate.")
            return
        slugs = [item["slug"] for item in deployed]
        run_validation(slugs, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
