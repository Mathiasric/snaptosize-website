# CONTENT_PLAYBOOK.md — Channel Strategy & Content Specs
**Last updated:** 2026-05-23

> **How to run the pipelines:** See [PIPELINE_OPERATIONS.md](PIPELINE_OPERATIONS.md) for commands, stages, and troubleshooting.

---

## Product Modes & Messaging

Three ways to use SnapToSize. Every social / SEO / video angle should map to one of these. (Exact sizes, ratios, and CTAs live in `marketing/CONTENT_REFERENCE.md`.)

### 1. Ratio Packs — the flagship flow
Upload one high-res image → get a complete ratio set (2:3, 3:4, 4:5, ISO A-series, Common Sizes) as named, print-ready 300 DPI files, delivered as one ZIP per ratio.
- **Who:** any Etsy print / digital-download seller listing a new design.
- **Angle:** "One upload → every Etsy print size." The hours-to-under-a-minute transformation.

### 2. Quick Export — single size on demand
Export one specific size — portrait, landscape, or square — without generating a whole pack.
- **Who:** sellers patching a missing size, or testing one ratio.
- **Angle:** "Need just one size? One file, named, 300 DPI, in seconds."

### 3. My Packs — saved custom size sets (NEW, May 2026)
Save your own size set once, then reuse it in one click on every new design — no rebuilding the same lineup each time.
- **What users can do:** pick the exact sizes/ratios they always sell, name and save them as a reusable pack, then apply that pack to any new artwork in one click.
- **Freemium:** Free = 1 saved pack. Pro = unlimited saved packs.
- **Who:** repeat / scaling sellers with a consistent catalog (e.g., always ship 4×5 + ISO A-series).
- **Angle:** "Save your winning size set once — reuse on every new design in one click." Speaks to the *repeat* workflow, not first-time setup → strong upgrade driver for high-volume sellers.

**Cross-mode messaging:** all output is 300 DPI, correctly named, organized, and Etsy-ready. Free tier is watermarked (small centered "SNAPTOSIZE FREE" mark) + daily limits (5 quick exports + 2 packs/day); Pro removes the watermark and the limits. Frame the watermark as "evaluate for free, upgrade to sell" — free users get fully usable *proof* of quality, Pro gets the clean, sellable files.

---

## Messaging Foundation — Benefits & Proof

**Positioning (one line):** SnapToSize turns one artwork into every print size Etsy buyers expect — print-ready in under a minute, no Photoshop. (Full ICP, funnel & pricing → `docs/GROWTH_STATE.md`.)

**Lead with these benefits (the positives):**
- **Speed** — 30+ Etsy print sizes in under a minute (vs 1+ hour by hand).
- **Completeness** — every standard ratio + size in one go, so buyers can print any size.
- **Print quality** — 300 DPI, correctly named, organized, delivered as clean ZIPs, ready to upload to Etsy.
- **Reuse (My Packs)** — save your size set once, reuse on every new design in one click.
- **No software** — runs in the browser, desktop or mobile. No Photoshop, no installs.
- **Risk-free trial** — free to try (watermarked); upgrade to Pro for clean, unlimited, watermark-free exports.

**Competitive angles (live comparison pages exist):**
- **vs Canva** — Canva = rebuild the same sizes by hand every time; SnapToSize = save once, reuse in one click + correct 300 DPI ZIPs.
- **vs Photoshop** — no software, no manual resizing/exporting; upload once, done.

**Proof & social-proof rules (keep us honest + FTC-safe):**
- Cite only **verified, current** metrics — check PostHog before using any export/seller count. Never invent counts, MRR, or revenue.
- Unnamed value-statement quotes are fine ("Perfect for Etsy sellers"). Named testimonials only from real, approved customers — never fabricate a named person, avatar, or company.
- Real production numbers are usable once accurate (e.g., "X+ exports") — confirm the figure first.

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

**Live pages** — `app-next/data/page-registry.json` is the source of truth (101 entries as of 2026-06-19). Snapshot: distortion-free-crop (Perfect Fit feature page), etsy-print-sizes, etsy-print-ratios, etsy-20mb-file-limit, how-to-sell-digital-downloads-on-etsy, what-files-to-include-etsy-digital-download, etsy-8x10-print-size, etsy-5x7-print-size, etsy-digital-download-not-selling, how-to-sell-printables-on-etsy-without-photoshop, how-to-resize-images-for-etsy, best-resolution-for-etsy-printables, how-many-sizes-etsy-printable, how-to-package-digital-wall-art-for-etsy, sizes, etsy-16x20-print-size, best-file-format-etsy-printables, etsy-24x36-print-size, how-to-price-etsy-printables, etsy-18x24-print-size, etsy-nursery-wall-art-sizes, etsy-4x6-print-size, etsy-12x16-print-size, etsy-print-size-calculator, 2-3-vs-4-5-ratio, etsy-botanical-print-sizes, etsy-8-5x11-print-size, etsy-digital-download-blurry-prints, etsy-a3-print-size, etsy-gallery-wall-print-sizes, etsy-11x14-print-size, etsy-a4-print-size, etsy-quote-wall-art-sizes, etsy-minimalist-wall-art-sizes, snaptosize-vs-canva, etsy-20x30-print-size, etsy-a5-print-size, snaptosize-vs-photoshop, etsy-20x24-print-size, etsy-11x17-print-size, etsy-12x18-print-size, etsy-print-on-demand-vs-digital-download, etsy-landscape-print-sizes, etsy-square-print-sizes, etsy-abstract-wall-art-sizes, etsy-ai-art-print-sizes, etsy-listing-photo-size, etsy-photography-print-sizes, etsy-13x19-print-size, etsy-a1-print-size, etsy-vintage-art-print-sizes, etsy-pet-portrait-sizes, etsy-sticker-sheet-size, etsy-bookmark-size, etsy-celestial-wall-art-sizes, etsy-floral-print-sizes

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
- Pain-quote hook (now the live homepage hero): "I manually resize every artwork into 2:3, 4:5, 3:4… — Etsy seller" → "We do all of that in 45 seconds."

---

### 3. Pinterest (Pipeline: automated)
**Target:** 4 pins/week — quality over volume. (Reduced 2026-05-31: high volume with low engagement suppresses distribution.)
**Format:** Static images (1000×1500, 2:3)
**Pipeline:** Part of social pipeline

**Pin types (priority order):**
1. Educational reference sheets (print size charts, frame guides, ratio explainers) — highest save rate
2. Seller-pain before/after — problem shown first, SnapToSize as solution in caption
3. Aspirational lifestyle (Gemini) — successful seller context, warm palette
4. Product workflow — only after seller problem is established

**Seller-first rule:** Every hook must provide value if SnapToSize didn't exist. "70 files ready" fails this test. "The print sizes IKEA Ribba buyers look for" passes it.

**Rules:**
- NO custom hashtags (Pinterest removed them)
- USE topic tags from Pinterest categories
- Keywords in description — Pinterest is a search engine, optimize descriptions for it
- Description structure: value statement → specific sizes/data → Etsy relevance → SnapToSize → CTA
- Board targeting: Print Size Guides (reference), Seller Tools (lifestyle), Digital Prints (workflow)

**Confirmed winning visual spec (W22-P04 — 953 impressions, Jun 2026):**
- Background: Dark navy (#0A0F1C) with large bold white headline + teal accent (#2DD4BF) — NOT warm cream
- Structure: Proportional rectangles showing relative print sizes, each labeled "[dimension] — [use case]" (e.g. "11×14 in — #1 bestseller")
- Highlight: Teal border/accent on most-searched size
- Footer: stats strip ("All 9 sizes · 300 DPI · Etsy-ready ZIP") + CTA block with app.snaptosize.com
- Why it works: sellers bookmark it to reference when listing new artwork → save-intent = high
- Template: KONSEPT 14 in `marketing/social/GEMINI_PROMPT_LIBRARY.md`

**Save-intent gate:** Before publishing, ask: "Would an Etsy seller save this pin to reference later?" If no → don't publish.

**Analytics:** Pinterest Business Analytics via `python marketing/social/pinterest-analytics.py`. Target: saves > 20/pin in 30 days. Primary KPI = saves (Pinterest's own algorithm signal — more saves → more distribution).

---

### 4. Community Outreach (Manual)
**Tracker:** `marketing/outreach/outreach-tracker.json`
**Skills:** `/outreach-add`, `/outreach-status`, `/outreach-update`

**Reddit:** r/EtsySellers, r/Etsy, r/PassiveIncome — DEPRIORITIZED: direct posts get flagged as marketing. Skip unless genuinely value-first (answer a question, no link push).
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
