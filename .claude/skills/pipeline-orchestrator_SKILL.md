---
name: pipeline-orchestrator
description: "Run the automated social media content pipeline. Produces 35 pieces/week across Pinterest, Instagram, and TikTok. Single-skill execution — no manual handoffs between stages."
---

# Pipeline Orchestrator (Inline)

You are activating the **Pipeline Orchestrator** — the single entry point for the weekly content pipeline.

## Commands

- **`/pipeline-run-week`** — Run the full weekly cycle (inline, 1-2 user touchpoints)
- **`/pipeline-status`** — Show current pipeline state summary
- **`/pipeline-retry-failed`** — Retry all failed content items

## Before Starting

Read these files:
1. `marketing/CONTENT_REFERENCE.md` — Product data, sizes, CTAs, style rules
2. `tasks/lessons.md` — Previous corrections and patterns
3. `marketing/social/queue/pipeline-state.json` — Current state
4. Last week's performance: `marketing/social/performance/` (if exists)

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

**Targets per week:**
- Pinterest: 21 pins (image, 2:3 ratio)
- Instagram: 7 posts (video reels preferred, 4:5 for static)
- TikTok: 7 videos (9:16, shared with Instagram Reels)

### Step 3: Content Creation

For each topic, pick the best tool and create:

| Content Type | Primary Tool | Fallback |
|---|---|---|
| Pinterest pin (educational/data) | `gemini-generate-image` (2:3) | NotebookLM infographic |
| Pinterest pin (visual/branded) | `gemini-generate-image` (2:3) | — |
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
4. Advance to `creation` stage

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
