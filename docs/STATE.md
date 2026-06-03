# STATE — SnapToSize Growth Brain

**Read this first each session.** Live data (Stripe / PostHog / GSC) = truth. This file is re-derived from current reality, not inherited from older docs. Older doc claims are *dated evidence to verify*, never commands.

**Last updated:** 2026-06-01 (MRR +1)

## Where we are (live)
- **17 paying Pro · ~$200 MRR** (16 monthly @ $11.99 + 1 yearly @ $97) — +1 Pro monthly 2026-06-01.
- Watch: Alex Higgs + Subas renewals ~May 27 → verify in Stripe if still active.
- **Free→paid conversion ~37%** (SaaS standard 2–5%).
- Pricing: Monthly $11.99 · Yearly $97 (−33%). $1M-ARR model = **2,500–4,000 users @ $11.99–$29**.

## The one insight that sets priorities
**The bottleneck is DISTRIBUTION — not conversion, not quality, not price.** 37% conversion is elite; we simply have too few qualified visitors. Judge every lever by: *does it bring more Etsy-printable sellers to the product?*

## Top priorities (ranked: ARR-impact ÷ effort)
1. **SEO acquisition** — the compounding volume engine. Tier-1 easy-win pages (weak SERPs, real pain):
   - ✅ `/dpi-for-print` — DPI explainer (May 28)
   - ✅ `/image-resolution-for-print` — repositioned resolution page (May 28)
   - ✅ `/resize-image-without-cropping-etsy` — with BeforeAfterSlider (May 29)
   - ✅ `/ikea-ribba-frame-print-sizes` — OG + internal links (May 30)
   - ✅ `/5x7-vs-4x6-print-size` — comparison page, CSS size visual, buyer guide, FAQ schema (May 30)
   - ✅ `/8x10-vs-11x14-print-size` — weakest SERP in cluster, proportional hero visual, ratio comparison, FAQ schema (Jun 1)
   - ✅ `/8x10-vs-5x7-print-size` — 128% area diff, 5:7 vs 4:5 ratio cards, FAQ schema (Jun 1)
   - ✅ `/8x10-vs-8-5x11-print-size` — frame size vs printer size angle, QuickAnswer GEO box, ratio cards, cut-down trap, FAQ schema (Jun 2)
   - ✅ `/iso-vs-us-print-sizes` — A4 vs Letter/A3 vs Tabloid, pixel dims at 300 DPI, whitespace trap, when to offer each (Jun 3)
   - Max 2 pages/day (pacing).
2. **Cold email to power-sellers** (quote/typography niche — 30MB+ artboards, all packs = ideal Pro). Fastest path to the next paying users.
3. **Retention via My Packs adoption** (combat "no longer need it" churn) — uses built features, no new build.
- Later: ARPU (a $29 "Studio/Agency" tier; annual already exists). Quality/delight = post-50-users.

## Positioning (don't drift)
Compete against **manual complexity** (Photoshop ~$60/mo, Canva per-size) — NOT "a faster resize tool." ICP has likely never opened Photoshop. Message: *no Photoshop, no manual per-size work, no cropping or distorting.*

## In-flight / done (Jun 1 session)
- GSC review done: 2 pages upgraded to elite — sticker sheet (split hero, px data) + best-file-format (answer-first title, Quick Answer box).
- `/8x10-vs-11x14-print-size` built and shipped: weakest SERP in cluster, proportional size visual, ratio comparison, FAQ schema, page-registry updated.
- Fixed text-slate-* color bug across 8x10-vs-11x14 main section (invisible on dark bg).
- `/8x10-vs-5x7-print-size` built and shipped: 128% area diff, 5:7 vs 4:5 ratio cards, FAQ schema, page-registry entry #95.
- Fixed pack names on both pages: "5:7 Pack" → Extras Pack, "Single Export" → Extras Pack (verified vs CONTENT_REFERENCE.md).
- Both comparison pages added to desktop mega menu, mobile menu, and footer. 5×7 vs 4×6 added to mobile (was missing).
- Guides mega menu overflow fix: `overflow-y-auto max-h-[calc(100vh-64px)]` — links below viewport now reachable via scroll.
- **Calculator conversion audit (Jun 1 afternoon):** PostHog showed 77% bounce at 25% scroll, 0 CTA clicks in 30d. Fixed 3 issues:
  - Merged hero + calculator into 2-col layout — inputs now above the fold on desktop (was hidden below ~450px of hero)
  - Sticky left column (headline/description) stays visible while scrolling through results
  - Inline CTA upgraded from plain text link → solid teal button "Export All Sizes Free →"
  - Calculator link added to `RelatedPages` component → appears on all ~25 size/guide pages automatically
- **Jun 1 total: 5 pages improved/added + nav/footer/UX fixes + calculator conversion overhaul.**

## In-flight / done (May 31 session)
- 5 Tier-1 SEO pages shipped May 28–30 (DPI, resolution, resize-without-cropping, IKEA Ribba, 5x7 vs 4x6).
- Homepage redesign: AuthoritySection, TrustSection, HowItWorksSection all rebuilt.
- **Social pipeline fully rebuilt (May 31):**
  - GEMINI_PROMPT_LIBRARY.md: 3 new educational concepts, PROMPT 2+6 replaced, seller-first QA gate added
  - run-pipeline.py: tracker stage disabled (Buffer API broken → auto-skip)
  - 3 new pins generated + validated: print-size-reference, frame-size-match, ratio-cropping-education
  - All 6 posts scheduled (Pinterest + Instagram) via new `schedule-ready-pins.py` + `schedule-instagram-ready.py`
  - `fetch-pin-urls.py` built to retrieve Pinterest URLs after publishing
  - buffer_post_id now saved to metadata.json automatically on scheduling
- **Social on autopilot** — check Pinterest Analytics manually in 2 weeks. Target >20 saves/pin.

## Next priorities (ranked: ARR-impact ÷ effort)
1. **SEO size-comparison cluster** — `/8x10-vs-8-5x11-print-size` ✅ Jun 2, `/11x14-vs-12x16-print-size` ✅ Jun 3, `/iso-vs-us-print-sizes` ✅ Jun 3 (A4/Letter/A3/Tabloid, pixel dims, whitespace trap). Next: GEO-oppgaver eller ny cluster. Max 2/day.
2. **GSC review round 2** — revisit after 2 weeks; let Jun 1 pages index first before pulling new CTR data.
3. **Social batch W24** — next week, 4 pins using remaining GEMINI_PROMPT_LIBRARY concepts. Run `schedule-ready-pins.py --since [date]` + `schedule-instagram-ready.py --since [date]`.

## Social pipeline commands (save these)
```bash
python marketing/social/schedule-ready-pins.py --since YYYY-MM-DD        # Pinterest
python marketing/social/schedule-instagram-ready.py --since YYYY-MM-DD   # Instagram
python marketing/social/fetch-pin-urls.py                                 # Run day after publishing
```

## Parked / killed (don't revisit without a reason)
- **Magic-wand / AI-fill** — KILLED (no churn evidence, poor results).
- **Mockup generator** — parked (reconsider later as ongoing-value/retention).
- **Email capture** — removed. **Reddit outreach** — abandoned (flagged as marketing).

## Assumptions to challenge (heuristics, not laws)
- "No new features before 50 paying users" — old focus heuristic; override if a feature clearly drives distribution or retention.
- Every canonical-doc claim is dated evidence — verify against live data before acting. **GROWTH_STATE §2 + PROJECT_STATE are currently STALE — refresh pending.**

## Domain index (read on-demand, don't auto-load)
- Product → `PROJECT_STATE.md` *(stale, refresh pending)*
- Growth / ICP / funnel → `GROWTH_STATE.md` *(§2 stale)*
- Channels & content → `CONTENT_PLAYBOOK.md`
- Pipelines → `PIPELINE_OPERATIONS.md`
- Current plan → `plans/master-execution-plan-2026-05-07.md`
- Brain spec (this system, designed but not yet automated) → `plans/growth-engine-design.md`

## How the brain runs
- **Session start:** read this file + the one domain doc your task needs (not the whole sprawl).
- **Prioritize:** rank by (ARR-impact × confidence) ÷ effort; this file holds only the current top few.
- **Session end:** update this file (what changed · new ranking · next concrete step).
- **Weekly:** re-pull Stripe / PostHog / GSC and re-rank from live data, challenging stale assumptions.

## Prompts to start a session (copy-paste)
- **Daily / "what now":** *"Read `docs/STATE.md` and give me today's top priority + the next concrete step."*
- **Weekly refresh:** *"Run the brain refresh: pull Stripe + PostHog + GSC, re-rank priorities by ARR-impact ÷ effort, and update this file + the date."*
- **Session end (keep the brain fresh):** *"Update `docs/STATE.md` — what we did, new ranking, next concrete step."*
- **A specific build/task:** state the task + *"read `docs/STATE.md` first; use the relevant skill/pipeline."*
