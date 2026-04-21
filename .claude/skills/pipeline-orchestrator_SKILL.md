---
name: pipeline-orchestrator
description: "Run the automated social media content pipeline. Produces 35 pieces/week across Pinterest, Instagram, and TikTok. Single-skill execution — no manual handoffs between stages."
---

# Pipeline Orchestrator (Inline)

You are activating the **Pipeline Orchestrator** — the single entry point for the weekly content pipeline.

## Commands

- **`/pipeline-run-week`** — Run the full weekly cycle (inline, 1-2 user touchpoints)
- **`/pipeline-run-day`** — Run a daily batch: 3 Pinterest + 1 Instagram (see Daily Mode below)
- **`/pipeline-status`** — Show current pipeline state summary
- **`/pipeline-retry-failed`** — Retry all failed content items

## Daily Batch Mode (MANDATORY when user asks for daily content)

**Target per day: 3 Pinterest + 1 Instagram = 4 items total.**

### Tool mix (hard rule)
- **2 Gemini lifestyle pins** (Pinterest only, 2:3) — aspirational, styled scenes, app visible on screen when relevant
- **2 React social-slide screenshots** — 1 Pinterest + 1 Instagram, must use strong templates

### Artwork uniqueness (hard rule)
Before picking a template + artwork combo for a React slide, scan existing content folders:
```bash
grep -r '"artwork"' marketing/social/content/ marketing/social/archive/ | grep '"<candidate>"'
```
Never reuse the same `template + artwork` combo that has already shipped. Rotate through fresh artwork from `app-next/public/assets/listings/` (owl, mysthical_portal, littledeerquote, slothing_through_life, landscpae_line_art_bears, anime-hero, wildflower_botanical_art, geometric_colorful art — check archive before picking).

### Template strength rules
- **Strong (use freely):** `NeonPackShowcase`, `RatioSplitShowcase`, `RatioProofShowcase`, `BrightPackShowcase`, `StatsCard`, `Checklist`
- **WorkflowSteps — CAUTION:** Has hardcoded poppies artwork (`/assets/Composition_Pictures/poppies_orginal_2x3.jpg`). Do NOT use as standalone post — it's been used multiple times. Only valid for Remotion video source.
- **Weak (do NOT ship alone):** `PainSolutionSlide` — text-heavy, no real artwork. Skip unless paired with a product demo or real visual.
- Every React slide MUST show real product artwork from `/assets/listings/` or teach specific data. No text-only panels.

### File naming (hard rule)
Content file name MUST match the folder slug, not `pin.png`/`post.png`.
Example: `content/pinterest/2026-04-17-deer-pack-showcase/2026-04-17-deer-pack-showcase.png`
QA accepts any `*.png/.jpg/.webp` in the folder, but the scheduler relies on `metadata.image` pointing to the slug name. Gen scripts and screenshot scripts MUST write to `{slug}.png`.

### Daily flow
1. Initialize or reuse current week batch (`--init --week W{current}`)
2. Pick 4 topics following LESSON-087 angles (Pain→Solution, Contrast, Benefit-first, Data-hook)
3. Generate 2 Gemini lifestyle pins using Mal A/B/C from the prompt templates below
4. Screenshot 2 React slides with verified-unused template+artwork combos
5. Write `metadata.json` for each (id format: `W{WW}-P01..P03`, `W{WW}-I01`)
6. Register items in pipeline state, advance to `qa`
7. **Pre-QA checklist (mandatory before showing user):**
   - Count packs visible in each Gemini image — must show ALL 5 (2:3, 3:4, 4:5, ISO, Extras)
   - Verify `snaptosize.com` or `app.snaptosize.com` is legible in every image
   - Compare visually against last 7 days of published content (check `content/` + `archive/`) — no near-duplicate images
   - Every React slide must show actual product artwork (not hardcoded placeholder)
8. Pause for user QA review → schedule on approval

## Before Starting

Read these files:
1. `marketing/CONTENT_REFERENCE.md` — Product data, sizes, CTAs, style rules
2. `tasks/lessons.md` — Previous corrections and patterns
3. `marketing/social/queue/pipeline-state.json` — Current state + `previous_insights` section
4. Latest analytics: `marketing/social/analytics/` — read the most recent `YYYY-WXX.json` file

If `previous_insights` or analytics exist, use them to guide content creation:
- Prioritize content_types listed in `best_content_types`
- Use layouts listed in `best_layouts` more often
- Follow `do_more` recommendations (proven formats/angles)
- Avoid patterns listed in `do_less`
- Reference `notes` for specific observations (e.g. most-saved post format)

## /pipeline-run-week — Full Inline Flow

This runs the entire pipeline in a single skill activation. No sub-skill handoffs.

### Step 1: Initialize Batch
```bash
python marketing/social/run-pipeline.py --init --week W{current_week}
```
If batch already exists, skip.

### Step 2: Research & Ideation (inline)

Read `CONTENT_REFERENCE.md` + `tasks/lessons.md` + any performance data.

Generate 10 content topics using Gemini flash for bulk ideation:
- Use `gemini-query` with a prompt that includes: product features, ICP pain points, trending angles, and lessons learned
- Output: 10 topics with platform assignment, hook, caption draft, hashtags

**Obligatorisk innholdssjekk (LESSON-087) — før hvert topic godkjennes:**
Still spørsmålet: "Gjør dette noen som helst til å ville prøve SnapToSize?"
Hvert topic MÅ ha én av disse vinklene:
- **Pain→Solution** — "Resizer du manuelt én og én?"
- **Kontrast** — "3 størrelser vs. 30 — hva Etsy faktisk krever"
- **Benefit-first** — "1 upload = 70 filer klare for print-on-demand"
- **Data-hook** — "De mest søkte Etsy-størrelsene i 2024"

❌ **Avvis topic hvis:** Generisk romfoto uten SnapToSize-referanse, size-guide uten hook, lifestyle-mockup uten app på skjerm eller CTA-tekst i bildet.
✅ **Sterke content-types:** `workflow-hack`, `before-after`, `product-showcase` — ikke bare `size-guide`.

**Targets per week:**
- Pinterest: 21 pins (image, 2:3 ratio)
- Instagram: 7 posts (video reels preferred, 4:5 for static)
- TikTok: 7 videos (9:16, shared with Instagram Reels)

### Step 3: Content Creation

For each topic, pick the best tool and create:

| Content Type | Primary Tool | Fallback |
|---|---|---|
| Pinterest pin (educational/data) | `gemini-generate-image` (2:3) | Playwright template |
| Pinterest pin (comparison/table) | Playwright `gen-social.js` (size-table, comparison, tips-list, stats-card, cheat-sheet) | gemini-generate-image |
| Pinterest pin (visual/branded) | `gemini-generate-image` (2:3) | — |
| Instagram static (data/tips) | Playwright `gen-social.js` (4:5) | gemini-generate-image |
| Instagram static | `gemini-generate-image` (4:5) | — |
| Video (tips/list) | Remotion `TikTokVertical` or `QuickList` | — |
| Video (punchy hook) | Remotion `TextSlam` | — |
| Video (problem/solution) | Remotion `BeforeAfter` | — |
| Video (countdown/suspense) | Remotion `CountdownReveal` | — |
| Video (stats/metrics) | Remotion `StatHighlight` | — |
| Video (educational explainer) | NotebookLM studio | Remotion |

**Tool selection logic:**
- Educational/data-heavy → NotebookLM
- Visual/branded/product → Gemini image gen
- Text-on-motion listicle → Remotion (rotate templates — see below)
- Talking head/explainer → NotebookLM studio

### Gemini Prompt-maler (LESSON-087)

Bruk én av disse malene for alle Gemini-genererte bilder. Velg mal basert på innholdsvinkel.

**Mal A — Before/After kontrast:**
```
Create a lifestyle photo showing two sides: LEFT: someone frustrated at a laptop, multiple browser tabs open, manually cropping the same image repeatedly. RIGHT: same person relaxed, SnapToSize app visible on screen showing "70 files ready to download". Clean home office. Warm natural lighting. Text overlay space at bottom: "The old way vs. SnapToSize"
```

**Mal B — Aspirational lifestyle med app synlig på skjerm:**
```
Create a cozy home office photo: Etsy seller at desk, laptop screen clearly showing SnapToSize app interface with a completed pack of print sizes ready to download. Wall behind has framed prints in various sizes (8x10, 5x7, 11x14). Natural light from window. Mood: productive and calm. Leave space at bottom for caption text.
```

**Mal C — Data-drevet hook:**
```
Create a clean infographic-style image: bold headline "The 5 most-searched Etsy print sizes" with size labels (8x10, 5x7, 4x6, 11x14, A4) displayed as framed artwork on a white gallery wall. Small SnapToSize logo in bottom corner. Professional, editorial feel. No clutter.
```

❌ Ikke generer Gemini-bilder uten én av disse malene som utgangspunkt.

**Remotion template rotation (MANDATORY):**
- 6 templates available: TikTokVertical, TextSlam, BeforeAfter, CountdownReveal, StatHighlight, QuickList
- Use at least 4 different templates across a weekly batch of 7 videos
- Never use the same template more than 2× per batch
- Match template to content type:
  - Tips/how-to → TikTokVertical or QuickList
  - "X reasons" / countdown → CountdownReveal
  - Before/after, with/without → BeforeAfter
  - Short punchy statements → TextSlam
  - Numbers/stats → StatHighlight
- Also rotate color themes (default, emerald, sunset, midnight, coral)
- See `remotion_SKILL.md` for full props reference per template

For each item created:
1. Save content file to `marketing/social/content/{platform}/{date}-{slug}/`
2. Save `metadata.json` with: title, description/caption, link, tags, hashtags, board (pinterest)
3. Add to pipeline state: `state.add_content_item(id, platform, format)`
4. Set content metadata on the item:
   ```python
   state.update_item(item_id,
       tool_used="gemini-generate-image",  # or "playwright-social-slide", "remotion-slideshow"
       content_type="cheat-sheet",          # see taxonomy below
       layout="gemini-infographic",         # see taxonomy below
   )
   ```
5. Advance to `creation` stage

**Content type taxonomy:** `cheat-sheet`, `comparison`, `size-guide`, `tips-list`, `ratio-spotlight`, `before-after`, `product-showcase`, `workflow-hack`, `behind-scenes`

**Layout taxonomy:**
- Gemini: `gemini-infographic`, `gemini-lifestyle`
- Playwright: `playwright-size-table`, `playwright-comparison`, `playwright-tips-list`, `playwright-stats-card`, `playwright-cheat-sheet`
- Remotion: `remotion-tiktok-vertical`, `remotion-text-slam`, `remotion-before-after`, `remotion-countdown-reveal`, `remotion-stat-highlight`, `remotion-quick-list`

For Remotion videos, render batch:
```bash
python marketing/social/run-pipeline.py --render-videos
```

### Step 4: QA Validation

Run automated QA checks:
```bash
python marketing/social/run-pipeline.py --stage qa
```

This validates:
- File exists with correct format
- Image dimensions within spec
- metadata.json present and complete
- Caption/description length
- Hashtag count within limits
- Link URL present (Pinterest required)
- File size within limits

**Pass** → item advances to `publishing`
**Fail** → item stays at `created` with error logged

### Step 5: User Review (PAUSE HERE)

Present to user:
- Summary of all items (passed/failed)
- Show failed items with specific errors
- Ask: "Approve publishing X items? Fix Y failed items?"

**This is the first touchpoint.** Wait for user approval.

### Step 6: Schedule via Buffer

On user approval:
```bash
python marketing/social/run-pipeline.py --stage scheduler
```
Or dry run first:
```bash
python marketing/social/run-pipeline.py --stage scheduler --dry-run
```

This handles:
- R2 upload for each asset
- Buffer API scheduling with correct metadata per platform
- Pinterest board assignment
- Instagram reel/post type
- Staggered scheduling times

### Step 7: Update Metrics

Pipeline state auto-saves metrics on every `save()` call.
Show final summary:
```bash
python marketing/social/run-pipeline.py --status
```

### Step 8: Track Performance (48h+ after publishing)

Run the tracker stage to pull performance analytics from Buffer:
```bash
python marketing/social/run-pipeline.py --stage tracker
```
Or dry-run first:
```bash
python marketing/social/run-pipeline.py --stage tracker --dry-run
```

This:
- Pulls impressions, clicks, saves, shares from Buffer API
- Correlates Buffer posts to pipeline items (by buffer_post_id or text matching)
- Aggregates performance by content_type, layout, tool_used, platform
- Generates `do_more` / `do_less` insights
- Saves weekly report to `marketing/social/analytics/YYYY-WXX.json`
- Appends top/bottom performers to `tasks/lessons.md`
- Stores insights on pipeline-state.json for next batch

**Run this 48+ hours after publishing** so platforms have time to report stats.
Insights are automatically loaded into the next batch via `previous_insights`.

## /pipeline-status

```bash
python marketing/social/run-pipeline.py --status
```

## /pipeline-retry-failed

1. Load state
2. Find items with `stage == "failed"`
3. For each: clear error, reset to `creation` stage
4. Re-run creation step with alternative tool
5. Re-run QA

## Board Mapping (Pinterest)

| Board | ID |
|---|---|
| Print Size Guides | `1088463872381113663` |
| Seller Tools | `1088463872381113672` |
| Digital Prints | `1088463872381113667` |
| Wall Art Business | `1088463872381113671` |

## Important Notes

- This orchestrator runs **inline** — it does NOT delegate to sub-skills
- Sub-skills (analyst, researcher, ideator, etc.) still exist for standalone use
- The weekly run collapses analyst+researcher+ideator+scripter into one Gemini call
- Only 2 user touchpoints: (1) review after QA, (2) approve scheduling
- Always save pipeline-state.json after any modification
