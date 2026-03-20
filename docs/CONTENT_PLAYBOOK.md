# CONTENT_PLAYBOOK.md — Channel Strategy & Content Specs
**Last updated:** 2026-03-11

> **How to run the pipelines:** See [PIPELINE_OPERATIONS.md](PIPELINE_OPERATIONS.md) for commands, stages, and troubleshooting.

---

## Active Channels

### 1. SEO Content (Pipeline: automated)
**Target:** 10 pages/week (5 size, 2 ratio, 2 problem, 1 niche)
**Pipeline:** `/seo-run-week`, `/seo-status`, `/seo-deploy [slug]`
**Agents:** content-researcher → seo-writer → review → deploy → verify
**Output:** `marketing/briefs/` → `marketing/drafts/` → deployed pages

**Page types:**
- Size-specific: `/etsy-[size]-print` (50 planned)
- Ratio comparison: `/[ratio]-vs-[ratio]` (10 planned)
- Problem-solution: `/etsy-[problem]` (20 planned)
- Niche vertical: `/etsy-[niche]-sizes` (15 planned)

**Rules:**
- Schema required: Article + BreadcrumbList + FAQPage
- 3+ CTAs per page with `?source=seo_[slug]&kind=guide`
- Internal links to pillar + related pages
- OG images via Playwright after deploy (see `og-screenshot` skill)
- Hero design via `frontend-design` skill — unique CSS-only hero per page, no plain gradients
- Page registry (`app-next/data/page-registry.json`) auto-manages sitemap + internal links

**Live pages (19):** etsy-print-sizes, etsy-print-ratios, etsy-20mb-file-limit, how-to-sell-digital-downloads-on-etsy, what-files-to-include-etsy-digital-download, etsy-8x10-print-size, etsy-5x7-print-size, etsy-digital-download-not-selling, how-to-sell-printables-on-etsy-without-photoshop, how-to-resize-images-for-etsy, best-resolution-for-etsy-printables, how-many-sizes-etsy-printable, how-to-package-digital-wall-art-for-etsy, sizes, etsy-16x20-print-size, best-file-format-etsy-printables, etsy-24x36-print-size, how-to-price-etsy-printables, etsy-18x24-print-size, etsy-nursery-wall-art-sizes

**First size-specific page deployed:** etsy-8x10-print-size (CSS-only blueprint hero, 4:5 ratio family table, 6 FAQs, OG image). Use as template for future size pages.

---

### 2. TikTok + Instagram Reels (Pipeline: automated)
**Target:** 7 videos/week (1/day), dual-posted to both platforms
**Tool:** Remotion (primary) → Gemini video (fallback) → NotebookLM (educational)
**Pipeline:** `/pipeline-run-week`, `/pipeline-status`

**Video specs:**
- Resolution: 1080×1920 (9:16)
- FPS: 30
- Duration: 15-45 seconds (sweet spot: 30s)
- Same file used for TikTok AND Reels

**Remotion template:** `TikTokVertical`
- Props: `hook`, `subHook`, `points[]`, `cta`, `episodeTag`
- Render: `cd marketing/remotion && npx remotion render src/index.ts TikTokVertical out/video.mp4 --props='{...}'`
- Batch: `python marketing/social/run-pipeline.py --render-videos`

**Content style:**
- Text-on-motion listicles (primary)
- Spring animations, accent flashes, progress dots
- Hook in first 1.7s (bold statement or surprising stat)
- Pattern interrupts every 3-5s
- CTA: "Link in bio → snaptosize.com"
- Series format: "Print Tips · Day X"

**What performs:**
- Educational tips (5 Print Sizes Every Seller Needs)
- Surprising stats (90% of sellers get this wrong)
- Before/after (manual workflow vs SnapToSize)
- Problem → solution → result structure

---

### 3. Pinterest (Pipeline: automated)
**Target:** 21 pins/week (3/day)
**Format:** Static images (1000×1500, 2:3)
**Pipeline:** Part of social pipeline

**Pin types:**
- Infographic carousels (7 slides)
- Single image with text overlay
- Size chart visuals

**Rules:**
- NO custom hashtags (Pinterest removed them)
- USE topic tags from Pinterest categories
- Keywords in description (searchable text)
- Board names: "Etsy Seller Tips", "Printables Business"

---

### 4. Community Outreach (Manual)
**Tracker:** `marketing/outreach/outreach-tracker.json`
**Skills:** `/outreach-add`, `/outreach-status`, `/outreach-update`

**Reddit:** r/EtsySellers, r/Etsy, r/PassiveIncome
**Facebook:** Etsy seller groups, digital download communities
**Approach:** Answer questions, provide value, link to guides (not app)

---

### 5. YouTube (Not started)
**Format:** 5-10 min tutorials, screen recording + voiceover
**Priority:** Start after social pipeline is producing consistently
**Topics:** Print size guides, 300 DPI explained, Etsy upload errors

---

### 6. Partnerships / Affiliates (Not started)
**Gate:** Start after 50 paying users
**Structure:** 30% recurring commission, 90-day cookie
**Targets:** Etsy educator YouTube channels, printable business bloggers

---

### 7. Paid Acquisition (Not started)
**Gate:** Start after 7% free→pro conversion + LTV data
**Channels:** Google Ads (high-intent search), Facebook/Instagram (lookalike)

---

## Video Fallback Chain

1. **Remotion** — templated/branded video (primary, $0/video)
2. **NotebookLM Studio** — educational explainers (9:16 supported, 30+ min generation)
3. **Gemini Veo** — 8-sec B-roll clips only (composite into Remotion)
4. **Static frames** — Canva/manual as last resort

## Tool Inventory

| Tool | Use for | Status |
|------|---------|--------|
| Remotion | Video rendering | ✅ Installed, templates built |
| Buffer API | Social scheduling | ✅ Connected |
| Cloudflare R2 | Image/video hosting | ✅ `snaptosize-social` bucket |
| Gemini MCP | Text tools, captions | ✅ Working (image gen needs billing) |
| NotebookLM MCP | Educational video, research | ✅ Connected |
| Canva MCP | Static graphics | ⚠️ Unreliable auth |
| PostHog | Analytics | ✅ Live |
| Resend | Email list + alerts | ✅ Domain verified |
