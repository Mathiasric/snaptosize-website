#!/usr/bin/env python3
"""
SEO page pre-submit validator.

Usage:
    python marketing/queue/seo_pre_submit.py app-next/app/(marketing)/<slug>/page.tsx

Exits 0 on pass, 1 on fail (with error list).
Stdlib only.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PUBLIC_DIR = REPO_ROOT / "app-next" / "public"


def _extract_string(pattern: str, text: str) -> str | None:
    m = re.search(pattern, text, re.DOTALL)
    if not m:
        return None
    # Strip surrounding quotes and collapse whitespace
    val = m.group(1).strip()
    # Collapse backticks/quotes newlines to a single line for length checks
    val = re.sub(r"\s+", " ", val)
    return val


def validate(page_path: Path) -> list[str]:
    errors: list[str] = []

    if not page_path.exists():
        return [f"File not found: {page_path}"]

    src = page_path.read_text(encoding="utf-8")

    # 1. Title length
    title = _extract_string(r"title:\s*[\"'`]([^\"'`]+)[\"'`]", src)
    if title is None:
        errors.append("metadata.title missing")
    elif len(title) > 60:
        errors.append(f"title too long ({len(title)} > 60): {title!r}")

    # 2. Description length
    desc = _extract_string(r"description:\s*[\"'`]([^\"'`]+)[\"'`]", src)
    if desc is None:
        errors.append("metadata.description missing")
    elif len(desc) > 160:
        errors.append(f"description too long ({len(desc)} > 160): {len(desc)} chars")

    # 3. Canonical URL
    if not re.search(r"alternates:\s*\{[^}]*canonical:", src, re.DOTALL):
        errors.append("alternates.canonical missing")

    # 4. No EmailCaptureSection
    if re.search(r"\bEmailCaptureSection\b", src):
        errors.append("EmailCaptureSection is forbidden on SEO pages (HARD RULE 5)")

    # 5. No <Container className=
    if re.search(r"<Container\s+[^>]*className\s*=", src):
        errors.append("<Container className=...> is invalid — Container does not accept className (HARD RULE 2)")

    # 6. All /assets/... paths exist
    asset_paths = set(re.findall(r"[\"'`](/assets/[^\"'`\s)]+)[\"'`]", src))
    for rel in sorted(asset_paths):
        fs_path = PUBLIC_DIR / rel.lstrip("/")
        if not fs_path.exists():
            errors.append(f"asset missing on disk: {rel}")

    # 7. ListingOutputShowcase imported + used
    if "ListingOutputShowcase" not in src:
        errors.append("ListingOutputShowcase not present (HARD RULE 6)")
    else:
        has_import = re.search(r"import\s+[^;]*ListingOutputShowcase", src) is not None
        has_usage = re.search(r"<ListingOutputShowcase\b", src) is not None
        if not has_import:
            errors.append("ListingOutputShowcase not imported")
        if not has_usage:
            errors.append("ListingOutputShowcase imported but not rendered")

    # 8. Content wrapper uses max-w-[1200px]
    if "max-w-[1200px]" not in src:
        errors.append("content wrapper must use max-w-[1200px] (HARD RULE 1)")
    if re.search(r"max-w-(3xl|4xl|2xl|5xl)\b", src):
        errors.append("forbidden max-w token found (use max-w-[1200px])")

    # 9. JSON-LD schemas: BreadcrumbList, Article, FAQPage
    for schema in ("BreadcrumbList", "Article", "FAQPage"):
        if f'"@type": "{schema}"' not in src and f"'@type': '{schema}'" not in src and f'"{schema}"' not in src:
            errors.append(f"JSON-LD schema missing: {schema}")

    return errors


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("Usage: python marketing/queue/seo_pre_submit.py <path/to/page.tsx>", file=sys.stderr)
        return 2

    page_path = Path(argv[1])
    if not page_path.is_absolute():
        page_path = (Path.cwd() / page_path).resolve()

    errors = validate(page_path)

    rel = page_path
    try:
        rel = page_path.relative_to(REPO_ROOT)
    except ValueError:
        pass

    if errors:
        print(f"FAIL  {rel}")
        for e in errors:
            print(f"  - {e}")
        return 1

    print(f"PASS  {rel}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
