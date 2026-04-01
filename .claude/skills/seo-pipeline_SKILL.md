---
name: seo-pipeline
description: "Run the SEO content pipeline. 3 touchpoints per week. Invoke with /seo-run-week for full cycle, /seo-status for current state, or /seo-deploy [slug] to deploy a reviewed draft."
---

# SEO Pipeline

You are activating the **SEO Pipeline** — manages the flow from research to deployed page in 3 touchpoints.

## Commands

- **`/seo-run-week`** — Run the full weekly cycle (3 touchpoints)
- **`/seo-status`** — Show current SEO pipeline state summary
- **`/seo-deploy [slug]`** — Deploy a reviewed draft to the marketing site

## Before Activating

Read these files:
1. `docs/PROJECT_STATE.md`
2. `docs/GROWTH_STATE.md`
3. `marketing/CONTENT_REFERENCE.md` — Product data for content
4. `.claude/agents/shared/seo_pipeline_state.py` — SeoPipelineState class
5. `marketing/queue/seo-pipeline-state.json` — Current state
6. `app-next/data/page-registry.json` — Existing pages + internal linking

## Pipeline Overview: 3 Touchpoints

```
TOUCHPOINT 1: User approves keywords + content blueprints
TOUCHPOINT 2: User reviews generated drafts (quality gates pre-run)
TOUCHPOINT 3: User confirms deploy (build verified, sitemap updated)
```

### Weekly Targets

10 pages per week:
- 5 size-specific pages (e.g., "8x10 prints etsy")
- 2 ratio pages (e.g., "4:5 aspect ratio for prints")
- 2 problem pages (e.g., "etsy image too small error")
- 1 niche page (e.g., "nursery wall art sizes")

---

## Running `/seo-run-week`

1. **Load state:** Read `seo-pipeline-state.json`
2. **Initialize if needed:** If no current batch, call `state.start_batch("WXX")`
3. **Determine next stage:** `state.next_pending_stage()`
4. **Execute the stage** (see below)
5. **Save state after each stage**

---

## TOUCHPOINT 1 — APPROVE KEYWORDS + CONTENT BLUEPRINTS

**Pipeline stage:** `research`

### Skills to activate first:
- `product-marketing-context` — ICP, positioning
- `programmatic-seo` — scale patterns
- `marketing-ideas` — growth angles
- `marketing-psychology` — conversion framing

### Steps:

1. **Read `app-next/data/page-registry.json`** to find what's already covered
2. **Read `marketing/CONTENT_REFERENCE.md`** for all sizes/ratios available
3. **Identify coverage gaps** — sizes, ratios, problems without pages
4. **For each candidate keyword, run WebSearch to:**
   - Analyze top 3 ranking pages (sections, word count, depth)
   - Pull "People Also Ask" questions and related searches
   - Identify content gaps (what competitors miss or do poorly)
   - Assess search intent (informational → guide, transactional → CTA-heavy)
5. **Cluster candidates** into groups of 2-3 that interlink
6. **For each keyword, produce a content blueprint:**
   - Recommended H2 sections based on what's ranking + gaps found
   - FAQ questions pulled from actual search queries (People Also Ask)
   - Conversion angle based on intent (problem-aware → solution, size-curious → reference + CTA)
   - Which existing pages to link to and from (using page-registry.json)
7. **Present table to user:**

```
| # | Keyword | Intent | Sections | Competitor Gaps | Cluster |
|---|---------|--------|----------|-----------------|---------|
| 1 | ... | ... | ... | ... | ... |
```

8. **User approves/swaps/removes**
9. **Save approved batch** to `marketing/briefs/YYYY-WXX-batch.json`
10. **Add items to pipeline state** via `state.add_item()`
11. **Mark stage complete:** `state.set_stage_status("research", "completed")`

### Content Blueprint Format (in batch JSON):

```json
{
  "keyword": "etsy 8x10 print size",
  "slug": "etsy-8x10-print-size",
  "intent": "informational+commercial",
  "sections": [
    "Exact pixel dimensions at 300 DPI",
    "Which ratio pack includes 8x10",
    "Framing and matting considerations",
    "File format and color profile",
    "Common mistakes with 8x10 prints"
  ],
  "faqs": [
    "What DPI do I need for an 8x10 Etsy print?",
    "What pixel dimensions is 8x10 at 300 DPI?",
    "Does 8x10 fit a standard frame?",
    "Should I include bleed for 8x10?",
    "What file format for 8x10 Etsy prints?"
  ],
  "competitor_gaps": "No one explains which ratio pack includes 8x10. No mention of 20MB limit for high-res.",
  "conversion_angle": "Reference page with calculator feel → CTA after dimensions table",
  "link_to": ["etsy-print-sizes", "etsy-print-ratios"],
  "link_from": ["etsy-print-sizes"],
  "cluster": "sizes"
}
```

**The research determines page structure. Every page is different because every keyword has different searcher needs. No predefined templates.**

---

## TOUCHPOINT 2 — REVIEW DRAFTS

**Pipeline stage:** `drafts`

### Skills to activate first:
- `frontend-design` — **REQUIRED** for hero design and page layout. Every page gets a unique, CSS-only hero with visual elements that communicate the page topic (e.g., blueprint frame for size pages, comparison diagrams for ratio pages, warning iconography for problem pages). No plain gradient heroes. No generic layouts.
- `schema-markup` — JSON-LD validation

### Hero Design Process:
1. Activate `frontend-design` skill before writing any page
2. Design a CSS-only hero that visually communicates the page's topic — not just text on a gradient
3. Use techniques from the 8×10 page as reference: dot grids, geometric shapes, dimension labels, gradient mesh blobs, monospace labels, accent lines
4. Each page type should have a distinct visual language:
   - **Size pages**: blueprint/technical drawing aesthetic (frame outlines, dimension callouts, tick marks)
   - **Ratio pages**: overlapping ratio rectangles, proportion visualizations
   - **Problem pages**: warning patterns, diagnostic/fix visual metaphor
   - **Guide pages**: editorial layout with typographic hierarchy, section previews
   - **Niche pages**: lifestyle-oriented, softer gradients, category-specific visual cues
5. Hero must look good as a 1200×630 OG image (top portion captured)

### Steps:

1. **For each approved keyword in batch**, generate page based on its content blueprint:
   - Sections come from the blueprint (what's ranking + gaps to exploit)
   - FAQ questions from real search queries found in research
   - CTA placement driven by intent analysis
   - Use `RelatedPages` component (no hardcoded links)
   - Add page-registry.json entry as part of output
2. **Generate visuals** specified in the brief's "Visual plan" section:
   - **Size pages:** Create HTML diagram in `tests/diagrams/[slug]-comparison.html` using `tests/diagrams/gen-diagram.js` as reference. Screenshot with Playwright at 1200×500. Save to `app-next/public/assets/visuals/etsy-[slug]-size-comparison.png`.
   - **Niche pages:** Generate 1 Gemini room mockup via `gemini-generate-image` MCP. Prompt MUST include "no text, no words, no labels, no watermarks" (LESSON-008/019). Save to `app-next/public/assets/visuals/etsy-[slug]-mockup.jpg`.
   - **Comparison pages:** Create Playwright feature comparison chart if applicable.
   - Insert `<img>` tags in draft at positions specified by visual plan.
3. **Save drafts** to `marketing/drafts/YYYY-WXX-[slug]/page.tsx`
4. **Run quality gates automatically** (see Quality Gates below)
4. **Present results to user:**

```
| # | Slug | Title | Words | Sections | Gates |
|---|------|-------|-------|----------|-------|
| 1 | ... | ... | 1,800 | 6 H2s | ✅ All pass |
| 2 | ... | ... | 1,200 | 4 H2s | ❌ Content depth (< 1500 words) |
```

5. **User approves/rejects each draft**
6. **Advance approved items:** `state.advance_item(id, "reviewed")`
7. **Mark stage complete:** `state.set_stage_status("drafts", "completed")`

### Writer Guidelines:

- Study existing pages for style (not structure — structure comes from blueprint)
- Use existing components: Container, Button, Card, FAQAccordion, EmailCapture
- Dark background, purple CTA buttons, trust pills under hero CTA
- Use `RelatedPages` component — never hardcode related links
- Include page-registry.json entry in output
- Match design quality of live pages
- Read `marketing/CONTENT_REFERENCE.md` for product data accuracy

---

## TOUCHPOINT 3 — DEPLOY

**Pipeline stage:** `deploy`

### Steps:

1. **For each reviewed item:**
   - Copy `marketing/drafts/YYYY-WXX-[slug]/page.tsx` → `app-next/app/(marketing)/[slug]/page.tsx`
   - Add entry to `app-next/data/page-registry.json` (auto-updates sitemap + internal links)
2. **Run `npm run build`** in app-next to verify all pages compile
3. **Generate OG image** using `og-screenshot` skill (build static → serve → Playwright screenshot → save to `app-next/public/assets/og/[slug].png` → update metadata with `openGraph.images` and `twitter.images`)
4. **Run `seo-audit` skill** for post-deploy check
4. **Present results:**

```
| # | Slug | Build | URL |
|---|------|-------|-----|
| 1 | ... | ✅ | https://snaptosize.com/... |
```

5. **Advance items:** `state.advance_item(id, "deployed")`
6. **Mark stage complete:** `state.set_stage_status("deploy", "completed")`

---

## Quality Gates

Run automatically after draft generation, before Touchpoint 2 review.

| Gate | Check | How |
|------|-------|-----|
| Schema | Article + BreadcrumbList + FAQPage JSON-LD present | Search draft for `application/ld+json` blocks |
| SEO on-page | H1 has keyword, title < 60ch, desc < 160ch, 3+ CTAs | Regex check on draft |
| Content depth | Word count > 1500, 5+ FAQ questions, no duplicate H2s | Text analysis |
| Internal links | 2+ links to pages in registry | Check for registry slugs in draft |
| Components | Uses Container, Button, FAQAccordion, EmailCapture | Import check |
| Visuals | Visual plan from brief executed, images exist in /assets/visuals/ | File existence check + draft img tag count |
| QuickAnswer | QuickAnswer component present after hero, before first H2 | Import + JSX check |
| Build | Draft compiles without errors | `npm run build` (run once for all drafts) |

Store gate results via `state.set_gate(item_id, gate_name, passed, detail)`.

Failed gates show specific errors at Touchpoint 2. Items with failed gates are flagged but still presented for user decision (user may approve with known issues).

---

## Running `/seo-deploy [slug]`

1. Find item with matching slug in state
2. Verify item stage is `reviewed`
3. Copy draft to `app-next/app/(marketing)/[slug]/page.tsx`
4. Add entry to `app-next/data/page-registry.json`
5. Run `npm run build`
6. Advance item to `deployed`
7. Save state

---

## Running `/seo-status`

Output format:

```
SEO Pipeline: 2026-W11
Target: 10 pages

Stages:
  research: completed
  drafts:   in_progress
  deploy:   pending

Items: 8 total, 3 deployed, 1 failed (37% success)
By stage:
  briefed:  2
  drafted:  2
  reviewed: 0
  deployed: 3
  failed:   1

Failed Items:
  W11-SEO-05: nursery-wall-art-sizes — Missing FAQ section

Quality Gate Summary:
  Schema:         8/8 pass
  SEO on-page:    7/8 pass
  Content depth:  6/8 pass
  Internal links: 8/8 pass
  Components:     8/8 pass
```

---

## Pipeline State

Location: `marketing/queue/seo-pipeline-state.json`

```python
import sys
from pathlib import Path
sys.path.insert(0, str(Path('.claude/agents')))
from shared.seo_pipeline_state import SeoPipelineState

state = SeoPipelineState.load()
print(state.summary())
```

## Important Notes

- This pipeline is SEPARATE from the social media pipeline
- Social pipeline state: `marketing/social/queue/pipeline-state.json` — DO NOT modify
- SEO pipeline state: `marketing/queue/seo-pipeline-state.json`
- Touchpoint 2 requires human approval — do not auto-advance past it
- Always save seo-pipeline-state.json after any modification
- New pages auto-appear in sitemap when added to page-registry.json
