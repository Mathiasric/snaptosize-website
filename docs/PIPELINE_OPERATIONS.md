# PIPELINE_OPERATIONS.md — How to Run the Content Pipeline
**Last updated:** 2026-03-11

> Single source of truth for operating the social media + SEO content pipelines.
> If this file is out of date, update it before running the pipeline.

---

## Architecture Overview

Two independent pipelines produce content weekly:

| Pipeline | Output | Targets/week | Entry point |
|----------|--------|-------------|-------------|
| **Social Media** | Pinterest pins, TikTok videos, Instagram Reels | 35 (21 pin + 7 TikTok + 7 Reels) | `/pipeline-run-week` |
| **SEO Content** | Blog/guide pages on snaptosize.com | 10 pages | `/seo-run-week` |

**State files:**
- Social: `marketing/social/queue/pipeline-state.json`
- SEO: `marketing/queue/seo-pipeline-state.json`

**State manager:** `.claude/agents/shared/pipeline_state.py` (PipelineState class)

---

## Social Media Pipeline

### Quick Start (Weekly Routine)

```
1. /pipeline-run-week          ← runs entire flow inline, 2 touchpoints
2. Review QA results           ← touchpoint 1: approve/fix
3. Approve scheduling          ← touchpoint 2: publish to Buffer
```

That's it. The orchestrator skill handles everything else inline.

### What `/pipeline-run-week` Does

| Step | What happens | Tool used |
|------|-------------|-----------|
| 1. Init batch | Creates weekly batch, archives previous | `run-pipeline.py --init` |
| 2. Research + Ideate | Reads CONTENT_REFERENCE.md + lessons.md + performance data, generates 10 topics with captions | Gemini flash (`gemini-query`) |
| 3. Create content | Generates images/videos per topic | Gemini image gen, Remotion, NotebookLM |
| 4. QA validation | Checks files, dimensions, metadata, captions, hashtags | `run-pipeline.py --stage qa` |
| 5. **User review** | Shows pass/fail summary → user approves | ⏸️ PAUSE |
| 6. Schedule | Uploads to R2, schedules via Buffer | `run-pipeline.py --stage scheduler` |
| 7. Metrics | Auto-saved on every state save | Automatic |

### Manual Stage Commands

Every stage can be run independently:

```bash
# Initialize new week
python marketing/social/run-pipeline.py --init --week W12

# Check status
python marketing/social/run-pipeline.py --status

# Run QA on created items
python marketing/social/run-pipeline.py --stage qa
python marketing/social/run-pipeline.py --stage qa --dry-run

# Schedule to Buffer
python marketing/social/run-pipeline.py --stage scheduler
python marketing/social/run-pipeline.py --stage scheduler --dry-run

# Legacy direct publisher (pre-refactor)
python marketing/social/run-pipeline.py --stage publisher

# Render Remotion videos
python marketing/social/run-pipeline.py --render-videos

# Pull post performance (48h+ after publishing)
python marketing/social/run-pipeline.py --pull-performance
python marketing/social/pull-performance.py --week W11
```

### Content Item Lifecycle

```
ideation → scripting → creation → [QA validates] → publishing → [scheduler posts] → published
                                                                                  ↘ failed

Cross-platform flow (after first scheduling):
published (platform A) → user resizes with SnapToSize → ready/ folder → /cross-platform → publishing → published (platform B)
```

- QA pass → auto-advances to `publishing`
- QA fail → stays at `created` with error set
- Scheduler success → advances to `published`
- Scheduler fail → stays at `publishing` with error set

### QA Validation Rules

| Check | Pinterest | Instagram | TikTok |
|-------|-----------|-----------|--------|
| File exists | pin.jpg/png/webp | post.jpg/png/webp | video.mp4 |
| Dimensions | ~1000×1500 | ~1080×1350 | 1080×1920 |
| metadata.json | required | required | required |
| Caption/description | required (10+ chars) | required (10+ chars) | required (10+ chars) |
| Hashtags | 0 (Pinterest removed them) | ≤ 5 | ≤ 30 |
| Link URL | required | optional | optional |
| File size | < 20MB | < 20MB | < 100MB |

Script: `marketing/social/qa_validate.py`

### Scheduling (Buffer API)

**Script:** `marketing/social/schedule-batch.py`
**Function:** `schedule_from_pipeline(dry_run=False)`

Flow:
1. Load pipeline state → find items at `publishing`
2. Read each item's `metadata.json`
3. Upload asset to R2 (`snaptosize-social` bucket) via wrangler
4. Schedule via Buffer GraphQL API
5. Advance to `published` or set error

**Pinterest boards:**

| Board | Service ID | Use for |
|-------|-----------|---------|
| Print Size Guides | `1088463872381113663` | Size guides, dimensions, DPI |
| Seller Tools | `1088463872381113672` | Tools, automation, workflow |
| Digital Prints | `1088463872381113667` | Product showcases, mockups |
| Wall Art Business | `1088463872381113671` | Decor, gallery walls |

**Channel IDs:** Set in `.env.buffer` as `BUFFER_PINTEREST_ID`, `BUFFER_INSTAGRAM_ID`, `BUFFER_TIKTOK_ID`

### Content Creation Tools

| Content type | Primary tool | When to use |
|-------------|-------------|-------------|
| Pinterest pin (visual) | `gemini-generate-image` (2:3) | Branded visuals, product shots |
| Pinterest pin (educational) | NotebookLM infographic | Data-heavy, charts, comparisons |
| Instagram static | `gemini-generate-image` (4:5) | Feed posts |
| Video (text listicle) | Remotion `TikTokVertical` | Tips, lists, how-tos |
| Video (educational) | NotebookLM studio | Explainers, deep dives |

**Remotion render:**
```bash
cd marketing/remotion && npx remotion render src/index.ts TikTokVertical out/video.mp4 --props='{"hook":"...","subHook":"...","points":["..."],"cta":"...","episodeTag":"..."}'
```

### Performance Feedback Loop

After posts have been live 48+ hours:

```bash
python marketing/social/pull-performance.py
```

This:
1. Queries Buffer API for post analytics
2. Saves to `marketing/social/performance/YYYY-WNN.json`
3. Appends top 3 / bottom 3 to `tasks/lessons.md`
4. Next `/pipeline-run-week` reads this → better topic selection

### File Structure

```
marketing/social/
├── queue/
│   └── pipeline-state.json          # Pipeline state (single source of truth)
├── content/
│   ├── pinterest/{date}-{slug}/     # Pin images + metadata.json
│   ├── instagram/{date}-{slug}/     # Posts + metadata.json
│   └── tiktok/{date}-{slug}/        # Videos + metadata.json
├── performance/
│   └── YYYY-WNN.json               # Weekly analytics reports
├── archive/                         # Previous weeks' state files
├── run-pipeline.py                  # CLI entry point
├── qa_validate.py                   # QA validation script
├── schedule-batch.py                # Buffer scheduling (reusable function)
└── pull-performance.py              # Analytics pull
```

### Environment Variables (`.env.buffer`)

```
BUFFER_API_TOKEN=...
BUFFER_API_URL=https://graph.bufferapp.com/graphql
BUFFER_PINTEREST_ID=...
BUFFER_INSTAGRAM_ID=...
BUFFER_TIKTOK_ID=...
R2_PUBLIC_URL=https://social.snaptosize.com
```

---

## SEO Content Pipeline

### Quick Start

```
1. /seo-run-week                     ← generates briefs + drafts for 10 pages
2. /seo-status                       ← check progress
3. /seo-deploy [slug]                ← deploy a page to production
```

### What `/seo-run-week` Does

| Stage | What happens | Owner |
|-------|-------------|-------|
| 1. **Research** | `content-researcher` agents generate keyword briefs (parallel). Briefs for comparison/guide pages must flag financial claims needing WebSearch verification (LESSON-067) | Subagents |
| 2. **Write** | `seo-writer` agents convert briefs into Next.js pages (parallel). 1 CTA per 3-4 sections, max 3, each with distinct angle (LESSON-066). Financial claims must be line-by-line verified, never approximated | Subagents |
| 3. **Review** | `npx next build` — verify all routes compile, zero errors | Main agent |
| 4. **Deploy** | Update Header, Footer, page-registry, pipeline state, MILESTONES, CONTENT_PLAYBOOK. Git commit + push | Main agent |
| 5. **Verify** | **Visual QA with Playwright** (see checklist below). Includes CTA audit — no back-to-back CTAs, no repeated messaging | Main agent |

#### Verify Stage Checklist (LESSON-052)

The verify stage is **mandatory** — do not skip or mark complete without screenshots.

For each new page, run these Playwright checks:

1. **Hero viewport (desktop)** — `npx playwright screenshot --viewport-size="1440,900" <url> <output.png>`
   - H1 title visible in upper half of viewport
   - Trust pills / checkmarks fully visible without scrolling
   - CSS visual element renders correctly, no overlap with text
   - No excessive empty space at bottom of hero

2. **Hero viewport (mobile)** — `npx playwright screenshot --viewport-size="390,844" <url> <output.png>`
   - H1 and CTA button visible without scrolling
   - Visual element hidden or adapted for mobile

3. **OG image** — `npx playwright screenshot --viewport-size="1200,630" <url> <output.png>`
   - Page title legible and not cut off
   - Visual element renders at OG dimensions
   - No broken layout or overflow

4. **Content spot-check** — Scroll through full page and verify:
   - Internal links point to correct pages (LESSON-045)
   - Tables render correctly on desktop
   - No broken or overlapping elements

5. **Automated QA gates** — Run the SEO QA script to validate meta, schema, components:
   ```bash
   python marketing/queue/seo_qa_validate.py                    # Current batch deployed items
   python marketing/queue/seo_qa_validate.py --slug <slug>      # Specific page
   python marketing/queue/seo_qa_validate.py --all --dry-run    # All registry pages
   ```
   Checks: title ≤60ch, description ≤160ch, H1 keyword match, 2+ CTAs, Article/BreadcrumbList/FAQPage schemas, FAQAccordion/EmailCapture/FinalCTA components, 2+ internal links, 800+ words.

**If any check fails:** Fix the issue (hero padding, link href, layout, meta length) and re-run before completing the verify stage.

**State:** `marketing/queue/seo-pipeline-state.json`
**Briefs:** `marketing/briefs/`
**Drafts:** `marketing/drafts/`

### Targets Per Week

| Type | Count | Pattern |
|------|-------|---------|
| Size-specific | 5 | `/etsy-[size]-print` |
| Ratio comparison | 2 | `/[ratio]-vs-[ratio]` |
| Problem-solution | 2 | `/etsy-[problem]` |
| Niche vertical | 1 | `/etsy-[niche]-sizes` |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `No active batch` | Run `--init --week WNN` |
| QA fails on dimensions | Check Gemini output size, adjust tolerances in `qa_validate.py` RULES |
| Buffer 401 | Token expired → regenerate in Buffer dashboard, update `.env.buffer` |
| R2 upload fails | Check wrangler auth: `npx wrangler whoami` |
| Metrics show 0% | Fixed — `save()` now recalculates metrics automatically |
| Items stuck at `creation` | Run `--stage qa` to validate and advance |
| Items stuck at `publishing` | Run `--stage scheduler` to schedule |
| Performance pull empty | Posts need 48h+ to accumulate stats |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `.claude/agents/shared/pipeline_state.py` | PipelineState class — all state read/write |
| `.claude/agents/shared/batch_init.py` | Batch initialization + archiving |
| `.claude/skills/pipeline-orchestrator_SKILL.md` | `/pipeline-run-week` skill definition |
| `marketing/queue/seo_qa_validate.py` | SEO page QA — meta, schema, component validation |
| `marketing/CONTENT_REFERENCE.md` | Product data for content creation |
| `tasks/lessons.md` | Corrections + performance feedback |
| `docs/CONTENT_PLAYBOOK.md` | Channel specs + content strategy |
