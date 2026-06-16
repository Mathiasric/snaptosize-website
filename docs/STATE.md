# STATE — SnapToSize Growth Brain

**Read this first each session.** Live data (Stripe / PostHog / GSC) = truth. This file is re-derived from current reality, not inherited from older docs. Older doc claims are *dated evidence to verify*, never commands.

**Last updated:** 2026-06-16 (homepage marketing overhaul — see Jun 16 changes below)

**Jun 16 changes:** Removed off-topic Etsy shop buyer reviews from homepage. Replaced FounderStorySection with product-proof demo (real filenames, pack labels, mode pills, country flags, CTA). Redesigned PricingTeaserSection — full feature lists, asymmetric visual weight, $0 forever framing, "export anytime" differentiator. My Packs Pro limit unknown — copy neutral until confirmed.

## Where we are (live)
- **~19 paying Pro · ~$224 MRR** (18 monthly @ $11.99 + 1 yearly @ $97) — Jun 15 PostHog estimate: +2 checkouts Jun 9-10, -1 churn wk Jun 7 vs Jun 12 baseline of 18. Verify exact count in Stripe.
- **GSC (3 months to Jun 14):** 38 clicks / 3,050 impr / 1.25% CTR, 35 pages with data. Biggest untapped: `/etsy-20mb-file-limit` 1,131 impr @ pos 8.1 → 0.2% CTR. 9 pages ≥20 impr with 0% CTR.
- **PostHog (Jun 1-15):** MAU 815 (↑ from 715 prior week). DAU: 2-3 quick-export + 3-7 pack-export (steady). Rate limit hits normalized (8/day Jun 1 → 0-2/day now).
- **Free→paid conversion ~37%** (SaaS standard 2–5%).
- Pricing: Monthly $11.99 · Yearly $97 (−33%). $1M-ARR model = **2,500–4,000 users @ $11.99–$29**.

## The one insight that sets priorities
**The bottleneck is DISTRIBUTION — not conversion, not quality, not price.** 37% conversion is elite; we simply have too few qualified visitors. Judge every lever by: *does it bring more Etsy-printable sellers to the product?*

## Top priorities (ranked: ARR-impact ÷ effort)
1. **CTR rescue sprint** ← ACTIVE while cold email is parked (batch-01 sent Jun 15, see #3). GSC Jun 15 data — titles aren't surfacing the answer:
   - `/etsy-20mb-file-limit` — 1,131 impr, pos 8.1, **0.2% CTR** → biggest single lever. Fix title to show the numbers ("20 MB limit, 5 files per listing").
   - `/best-file-format-etsy-printables` — 475 impr, pos 5.7, 0% CTR
   - `/best-resolution-for-etsy-printables` — 188 impr, pos 6.9, 0% CTR
   - `/etsy-print-sizes` — 115 impr, pos 7.8, 0% CTR
   - `/how-to-package-digital-wall-art-for-etsy` — 76 impr, pos 7.4, 0% CTR
   - `/how-many-sizes-etsy-printable` — 62 impr, pos 6.2, 0% CTR
   - Max 2 CTR fixes/day (same pacing rule as SEO pages).
2. **New SEO pages** — compounding volume engine, max 2/day. Candidates: `/a4-vs-letter-print-size`, `/etsy-print-size-tool`.
   - ✅ `/dpi-for-print` (May 28) · ✅ `/image-resolution-for-print` (May 28) · ✅ `/resize-image-without-cropping-etsy` (May 29) · ✅ `/ikea-ribba-frame-print-sizes` (May 30) · ✅ `/5x7-vs-4x6-print-size` (May 30)
   - ✅ `/8x10-vs-11x14-print-size` (Jun 1) · ✅ `/8x10-vs-5x7-print-size` (Jun 1) · ✅ `/8x10-vs-8-5x11-print-size` (Jun 2) · ✅ `/iso-vs-us-print-sizes` (Jun 3) · ✅ `/11x14-vs-11x17-print-size` (Jun 4) · ✅ `/etsy-poster-sizes` (Jun 9)
3. **Cold email — ⏳ SENT & AWAITING SIGNAL (parked — do NOT restart yet).** Batch 01 = 6 qualified DIGITAL sellers sent Jun 15 (`marketing/social/cold-email-batch-01-SEND-READY.txt`; tracker `cold-email-batch-01-tracker.csv`). Learning probe — judge by reply quality, NOT sales. **Trigger to act:** a reply lands, OR ~Jun 20 silence → F1 follow-up + decide scale-or-pivot. Only then re-scan the 97-email list for digital-only → batch 02. (9 of first 15 were cut as physical-print/wrong-type — qualify digital BEFORE writing copy. See [[project_cold_email_ownsite_sellers]].)
- Later: Quick-export paywall gate (app-repo, 1-2h dev — 21 rate limit hits in 14d with no upgrade shown), ARPU tier ($29 Studio), My Packs adoption drive.

## Positioning (don't drift)
Compete against **manual complexity** (Photoshop ~$60/mo, Canva per-size) — NOT "a faster resize tool." ICP has likely never opened Photoshop. Message: *no Photoshop, no manual per-size work, no cropping or distorting.*

## In-flight / done (Jun 15 session)
- **Brain refresh — alle tre datakilder pullet:**
  - **PostHog:** MAU 815 (↑715). DAU stabil 2-3 quick-export + 3-7 pack-export. 2 nye betalinger Jun 9-10 (paywall funnel), 1 churn uke Jun 7. Rate limit hits normalisert (peak 8/dag Jun 1 → 0-2/dag nå).
  - **Stripe (Link CSV):** ~19 betalende brukere estimert, ~$224 MRR. Verify nøyaktig tall direkte i Stripe.
  - **GSC (3 måneder til Jun 14):** 38 clicks / 3,050 impr / 1.25% CTR på 35 sider. Kritisk funn: `/etsy-20mb-file-limit` har 1,131 impr på pos 8.1 men kun 0.2% CTR — dette er den største enkelt-siden CTR-muligheten vi har. 9 sider med 0% CTR og ≥20 impr.
- **CTR-funn fra jun-6-fixes:** Tidlig GSC indikasjon — etsy-a4-print-size (119 impr, pos 12.7, 0% CTR) og how-to-price (54 impr, pos 7.9, 0% CTR) viser at tittelfikser ikke har slått inn enda (for tidlig). Etsy-poster-sizes enda ikke indexert i dette datasettet (shippa Jun 9).
- **Cold email batch-01 SENT Jun 15** — 6 kvalifiserte DIGITALE selgere (9 av 15 kuttet: fysiske print-shops/feil produkttype, fanget via digital-vs-fysisk scan). Frame TV-feilpåstand fanget pre-send → LESSON-098. Nå parkert i vente-modus til svar / ~Jun 20-trigger.
- **Prioriteter omrangert (post-send)** — CTR-sprint #1 (aktiv mens cold email venter), nye SEO-sider #2, cold email #3 (parkert). Se Top priorities.

## In-flight / done (Jun 9 session)
- **New SEO page: `/etsy-poster-sizes`** — zero editorial competition on this SERP (YouTube/Reddit/Etsy marketplace dominated). Full guide: pixel dimensions table for all 6 poster sizes at 300 DPI, per-size use-case cards, 24×36/20×30 Etsy 20 MB warning (user-side fixes only — no mention of JPEG quality compression), ratio family grouping (2:3 and 3:4), ContextualCTA, 3-tier seller decision guide, landscape table, framing guide, 7-FAQ schema + Article + Breadcrumb JSON-LD, AuthorByline, QuickAnswer GEO box.
- Registered in page-registry.json (10 relatedSlugs), Header nav (desktop + mobile), Footer Size Guides column. Committed + pushed (c541b11).
- SEO page count: 90 → **91**.
- **Next GSC check**: ~Jun 15 — monitor CTR on the 5 Jun 6 pages + check if etsy-poster-sizes appears in Search Console.

## In-flight / done (Jun 6 session)
- **CTR-fix 5 striking-distance sider** — alle hadde 0% CTR tross pos 5-9. Kjerneproblem: titler svarte «how-to» mens queries spurte etter konkrete tall/størrelser.
  - `how-to-price-etsy-printables`: "$3–$20 range" synlig i tittel (187 impr, 0% CTR)
  - `etsy-digital-planner-sizes`: A4/Letter/Half Page eksplisitt i tittel (74 impr, 0% CTR)
  - `etsy-pet-portrait-sizes`: "8×10, 11×14 & 16×20" i tittel (29 impr, 0% CTR)
  - `etsy-12x16-print-size`: "3600×4800 px" i tittel (36 impr, 0% CTR)
  - `etsy-13x19-print-size`: "Aspect Ratio 13:19" leder tittelen (52 impr, 0% CTR)
- Alle 5 fikk AuthorByline (E-E-A-T) og oppdatert dateModified 2026-06-06.
- **etsy-20mb-file-limit skippet** — data stale (apr 11), sist endret mai 30, ikke trygt å re-editere uten fersk GSC.
- **Neste GSC-review**: ~Jun 15 — mål CTR på alle 5 sider (forventet 2-5% fra 0%).

## In-flight / done (Jun 4 session)
- **GEO pass komplett**: 12 sider fikk QuickAnswer-bokser (7 high-priority + 5 how-to pages). Alle tier-1 sider er nå AI Overview-klare.
- **Homepage positioning skjerpet**: "up to 70 files" (var "30+ sizes"), identity badge "The Etsy print sizing tool", meta title eier kategorien. AuthoritySection oppdatert.
- **Paywall copy optimert** (app-repo): PaywallInterstitial og UpsellBanner fikk pris i CTA ($11.99/mo), "Resets at midnight" → "or come back tomorrow", "That's watermarked. Pro isn't."
- **PostHog-analyse**: paywall er live og konverterer (pre-fix ~32% av de som så paywall). Post-fix kun 4 brukere — for lite til å konkludere. Viktigere funn: paywall dekker kun packs-siden, ikke quick-export (5 av 8 rate-limit-hits fikk ingen paywall Jun 1).
- **Strategisk research**: Etsy-only bekreftet riktig posisjonering. Printify = fysisk, Gumroad/Payhip = ingen primærkilder, Creative Market = annen ICP. Platformen-klyngen er låst til Etsy.
- **Ny SEO-side**: `/11x14-vs-11x17-print-size` — full comparison page m/OG-bilde, relatedSlugs-backlinks fra 3 søstersider, Playwright QA-validert, alle em-streker fjernet.
- **A4 CTR-fiks**: `etsy-a4-print-size` tittel nå `"A4 at 300 DPI = 2,480 × 3,508 px"` — svaret synlig direkte i SERP uten å klikke.

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
1. **Educator outreach** — 5 DMs til Etsy-edukatorer (ShootingStarSVG, Gold City Ventures). En nevnelse = mer distribusjon enn 20 SEO-sider. Ikke delegerbart.
2. ✅ **GSC review round 2** — gjennomført Jun 15. Se "In-flight / done (Jun 15 session)" for funn.
3. **Social batch W27** — neste uke. Kjør `schedule-ready-pins.py --since [date]` + `schedule-instagram-ready.py --since [date]`.
4. **My Packs adoption** — drive awareness til free-brukere, combat "no longer need it" churn.

## In-flight / done (Jun 3 session)
- `/iso-vs-us-print-sizes` bygget og skipet: A4 vs Letter, A3 vs Tabloid, pixel dims ved 300 DPI, whitespace trap-forklaring, "When to offer each"-guide, 7 FAQs, OG-bilde, nav + footer + registry oppdatert.
- **RelatedPages** fikset (gjelder alle ~98 sider): korte titler uten verbose suffiks ("8×10 vs 11×14" ikke full SERP-tittel), sentrert på bredt skjerm med `max-w-3xl mx-auto`.
- **page-registry.json**: 9 encoding-bugs fikset (â€" → —, Ã× → ×) — ga feil tegn i RelatedPages på produksjon.
- **Footer redesign**: kompakt 4-kolonne layout, Size Guides med 2-col intern grid (Popular/Comparisons/Framing/Niche), ~30% kortere (506px vs ~750px).
- **Meta-justeringer** på ISO-siden: title trimmet 76→60 chars, A4 pixelhøyde 3507→3508 fikset gjennomgående.

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
