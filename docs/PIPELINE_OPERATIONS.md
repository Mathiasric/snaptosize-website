# PIPELINE_OPERATIONS.md — How to Run the Content Pipeline
**Last updated:** 2026-04-08

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
| 8. **Track performance** | Pull analytics from Buffer, correlate to items, generate insights | `run-pipeline.py --stage tracker` |

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

# Pull performance + generate insights (48h+ after publishing)
python marketing/social/run-pipeline.py --stage tracker
python marketing/social/run-pipeline.py --stage tracker --dry-run
python marketing/social/pull-performance.py --week W15
python marketing/social/pull-performance.py --dry-run
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
| **Pinterest/IG (primary)** | Social slide components → Playwright | **Default for all branded visuals.** Before/after, ratios, stats, checklists, size comparisons |
| Pinterest pin (lifestyle) | `gemini-3-pro-image-preview` Python script (2:3) | Aspirational/artistic content only — bedroom mockups, styled gallery walls. Copy `marketing/social/gen-w17-gemini-images.py` as template. |
| **Video (primary)** | `render-next-video.ts` — auto pool selection | **Default for all videos.** Alternates PortraitSlideshow (lifestyle photos) → InfoReveal (infographics) → TikTokVertical (text hook). Uses `image-pool.json` to track usage and always pick freshest images. |
| Video (manual) | Individual render scripts in `marketing/remotion/` | Use when you want a specific narrative or theme |

### Social Slide System (Primary Visual Pipeline)

**This is the core of all visual content.** React components → Playwright screenshot → use as pin, post, or video slide.

#### Architecture

```
app-next/app/social-slides/_components/  ← React components (SlideWrapper + templates)
app-next/app/social-slides/page.tsx      ← Renders all templates on /social-slides
                    ↓
              Playwright screenshot (clip by element ID)
                    ↓
         ┌─────────┼──────────┐
    Pinterest    Instagram    Remotion SlideshowVertical
    (direct)    (direct)     (→ video slides)
```

#### Design System

All slides use `SlideWrapper` which provides:
- **Pinterest:** 1000×1500 (2:3)
- **Instagram:** 1080×1350 (4:5)
- Dark gradient background (#0B0B12 → #110E1F)
- Purple/teal glow orbs
- `snaptosize.com` footer
- Same aesthetic as `app-next/app/producthunt/page.tsx`

Visual assets: Real product artwork from `/assets/Composition_Pictures/` (koi fish, poppies). SVG icons inline. No AI-generated images.

#### Available Templates

| Template | ID prefix | What it shows | Good for |
|----------|-----------|-------------|----------|
| `BeforeAfter` | `before-after-` | Manual resizing vs One Click, red/green split, fanned cards | Pain → solution |
| `PackSpotlight` | `pack-spotlight-` | Single ratio pack with all sizes listed | Pack education |
| `StatsCard` | `stats-card-` | Key metrics with big numbers | Social proof |
| `Checklist` | `checklist-` | Feature/benefit checklist with checkmarks | Feature highlights |
| `SizeComparison` | `size-comparison-` | Side-by-side size visuals | Size education |
| `WorkflowSteps` | `workflow-steps-` | 3-step flow: Upload → Pick → Download | How-it-works |
| `NumberHighlight` | `number-highlight-` | Big number + context (configurable: number, label, color) | Value props, stats |

Each template accepts `ratio="pinterest"` or `ratio="instagram"`. Some accept extra props (e.g., `NumberHighlight` takes `number`, `label`, `accentColor`).

#### How to Screenshot

```bash
# Terminal 1: Start dev server
cd app-next && npx next dev --port 3099

# Terminal 2: Screenshot (from app-next/)
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 8000 } });
  await page.goto('http://localhost:3099/social-slides', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Screenshot one slide by ID
  const el = await page.locator('#before-after-pinterest').boundingBox();
  if (el) {
    await page.screenshot({ path: 'out/pin.png', clip: { x: el.x, y: el.y, width: el.width, height: el.height } });
  }
  await browser.close();
})();
"
```

**Batch screenshot all slides:**
```js
const IDS = [
  'before-after', 'pack-spotlight', 'stats-card',
  'checklist', 'size-comparison', 'workflow-steps', 'number-highlight'
];
for (const id of IDS) {
  for (const ratio of ['pinterest', 'instagram']) {
    const el = await page.locator('#' + id + '-' + ratio).boundingBox();
    if (el) await page.screenshot({ path: 'out/' + id + '-' + ratio + '.png', clip: el });
  }
}
```

#### How to Create New Templates

1. Create `_components/NewTemplate.tsx`
2. Use `SlideWrapper` for dimensions/background/footer
3. Reference `BeforeAfter.tsx` for the pattern (scaling per ratio, inline SVG icons, real artwork)
4. Add to `page.tsx` with both ratios: `<NewTemplate ratio="pinterest" />` + `<NewTemplate ratio="instagram" />`
5. Screenshot with Playwright

**Design rules for new templates:**
- Use real artwork from `/assets/Composition_Pictures/` — never placeholder images
- Inline SVG icons — never emoji or external icon libraries
- Hardcode all text — these are precise marketing visuals, not dynamic templates
- Scale per ratio using a `SCALE` object (see `BeforeAfter.tsx` pattern)
- Every visual must teach something specific or show a real product difference

#### Using Slides in Videos

Screenshot social slide components → save to `marketing/remotion/public/` → use as `image` in SlideshowVertical props.

For video slides, the 920×550 display area crops wide images. Best source: pinterest ratio slides (1000×1500) cropped to the key visual area, or purpose-built 920×550 images.

**Default render command:** `cd marketing/remotion && npx tsx render-next-video.ts`

Pool system: `marketing/remotion/image-pool.json` tracks all available images, usage counts, and last template used. Add new images to the pool with `"times_used": 0` and they will be auto-selected on next run.

#### When to Use Gemini Instead

Only for lifestyle/aspirational content where artistic style matters more than data accuracy: styled room mockups, aesthetic gallery wall arrangements, dreamy nursery scenes. Never for product UI, data, or feature comparisons — those must be pixel-perfect social slide components.

### Performance Feedback Loop

After posts have been live 48+ hours:

```bash
python marketing/social/run-pipeline.py --stage tracker
# or directly:
python marketing/social/pull-performance.py --week W15
```

This:
1. Queries Buffer API for post analytics (impressions, clicks, saves, shares, comments)
2. Correlates Buffer posts to pipeline items (by `buffer_post_id` or text matching)
3. Aggregates performance by `content_type`, `layout`, `tool_used`, platform
4. Generates actionable insights: `do_more`, `do_less`, `best_content_types`, `best_layouts`
5. Saves weekly report to `marketing/social/analytics/YYYY-WNN.json`
6. Appends top/bottom performers + insights to `tasks/lessons.md`
7. Stores insights on `pipeline-state.json` → auto-loaded into next batch via `previous_insights`

**Analytics JSON format:**
```json
{
  "week": "2026-W15",
  "summary": { "total_posts", "matched", "avg_score" },
  "by_content_type": { "cheat-sheet": { "count", "avg_score", "avg_saves" } },
  "by_layout": { "playwright-tips-list": { "count", "avg_score" } },
  "by_tool_used": { "gemini-generate-image": { ... } },
  "by_platform": { "pinterest": { ... } },
  "items": [ { "pipeline_id", "stats", "score", "content_type", "layout" } ],
  "insights": { "do_more": [], "do_less": [], "best_content_types": [], "best_layouts": [] }
}
```

**Pipeline item fields for tracking:**
- `content_type`: cheat-sheet, comparison, size-guide, tips-list, ratio-spotlight, before-after, product-showcase, workflow-hack
- `layout`: gemini-infographic, playwright-tips-list, playwright-comparison, playwright-stats-card, etc.
- `buffer_post_id`: stored automatically at scheduling time for reliable correlation

### File Structure

```
marketing/social/
├── queue/
│   └── pipeline-state.json          # Pipeline state (single source of truth)
├── content/
│   ├── pinterest/{date}-{slug}/     # Pin images + metadata.json
│   ├── instagram/{date}-{slug}/     # Posts + metadata.json
│   └── tiktok/{date}-{slug}/        # Videos + metadata.json
├── analytics/
│   └── YYYY-WNN.json               # Weekly analytics reports with insights
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
| Tracker shows 0 matched | Old items lack `buffer_post_id` — falls back to text matching. Set content_type/layout on new items |
| No insights generated | Need 3+ matched posts for reliable insights |

---

## Growth Engine Tools

Three automated tools for data-driven growth optimization. Run regularly.

| Tool | Command | Output | When to Run |
|------|---------|--------|-------------|
| **Weekly Brief** | `python marketing/intelligence/weekly-brief.py` | `marketing/intelligence/YYYY-MM-DD-brief.md` | Monday mornings — combined GSC + social + pipeline report |
| **Link Builder** | `python marketing/seo-optimizer/link-builder.py` | `marketing/seo-optimizer/link-opportunities.json` | After deploying new SEO pages — finds internal link gaps |
| **Title Optimizer** | `python marketing/seo-optimizer/title-optimizer.py` | `marketing/seo-optimizer/optimization-log.json` | After GSC pull — finds low-CTR pages + suggests better titles |
| **Content Gap Detector** | `python marketing/seo-optimizer/content-gap-detector.py` | `marketing/seo-optimizer/content-gaps.json` | After GSC pull — finds keyword clusters with no matching page |
| **Striking Distance** | `python marketing/seo-optimizer/striking-distance.py` | `marketing/seo-optimizer/striking-distance.json` | After GSC pull — finds pages ranking pos 5-15 with push actions |

**Weekly routine:**
1. Run `python marketing/gsc-analytics/pull_gsc.py` → fresh GSC data
2. Run `python marketing/intelligence/weekly-brief.py` → weekly brief
3. Run `python marketing/seo-optimizer/title-optimizer.py` → title suggestions
4. Review brief + apply high-impact title changes
5. Run `python marketing/seo-optimizer/link-builder.py` → link opportunities
6. Add top internal links to pages during next content session
7. Run `python marketing/seo-optimizer/content-gap-detector.py` → new page opportunities
8. Run `python marketing/seo-optimizer/striking-distance.py` → optimize near-page-1 pages

**Feedback loop (automated since 2026-04-09):**
- Social pipeline now carries `previous_insights` → analyst/researcher/ideator agents use last week's performance to guide next batch
- Content creator agent now sets `content_type` + `layout` on every item → insights engine can aggregate properly
- PostHog tracks: `email_capture_view/submitted/success`, `cta_clicked` (with source/type), `scroll_depth` (25/50/75/100%)

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `.claude/agents/shared/pipeline_state.py` | PipelineState class — all state read/write |
| `.claude/agents/shared/batch_init.py` | Batch initialization + archiving + insights carryforward |
| `.claude/skills/pipeline-orchestrator_SKILL.md` | `/pipeline-run-week` skill definition |
| `marketing/queue/seo_qa_validate.py` | SEO page QA — meta, schema, component validation |
| `marketing/intelligence/weekly-brief.py` | Weekly intelligence brief generator |
| `marketing/seo-optimizer/title-optimizer.py` | GSC-driven title/description optimization |
| `marketing/seo-optimizer/link-builder.py` | Internal link opportunity scanner |
| `marketing/seo-optimizer/content-gap-detector.py` | Keyword cluster gap detector |
| `marketing/seo-optimizer/striking-distance.py` | Position 5-15 optimization pusher |
| `marketing/CONTENT_REFERENCE.md` | Product data for content creation |
| `tasks/lessons.md` | Corrections + performance feedback |
| `docs/CONTENT_PLAYBOOK.md` | Channel specs + content strategy |
