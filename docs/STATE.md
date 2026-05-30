# STATE — SnapToSize Growth Brain

**Read this first each session.** Live data (Stripe / PostHog / GSC) = truth. This file is re-derived from current reality, not inherited from older docs. Older doc claims are *dated evidence to verify*, never commands.

**Last updated:** 2026-05-30 (session update)

## Where we are (live)
- **16 paying Pro · ~$188 MRR** (15 monthly @ $11.99 + 1 yearly @ $97) — +1 Pro monthly confirmed 2026-05-29.
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
   - ⬜ size-comparison cluster (5x7 vs 4x6, 4x6 vs 5x7 etc) — **NEXT**
   - ⬜ ISO vs US print sizes explainer
   - Max 2 pages/day (pacing).
2. **Cold email to power-sellers** (quote/typography niche — 30MB+ artboards, all packs = ideal Pro). Fastest path to the next paying users.
3. **Retention via My Packs adoption** (combat "no longer need it" churn) — uses built features, no new build.
- Later: ARPU (a $29 "Studio/Agency" tier; annual already exists). Quality/delight = post-50-users.

## Positioning (don't drift)
Compete against **manual complexity** (Photoshop ~$60/mo, Canva per-size) — NOT "a faster resize tool." ICP has likely never opened Photoshop. Message: *no Photoshop, no manual per-size work, no cropping or distorting.*

## In-flight (this session)
- 4 Tier-1 SEO pages shipped May 28–30 (DPI, resolution, resize-without-cropping, IKEA Ribba).
- BeforeAfterSlider component built + added to ratio + resize-without-cropping pages.
- Brand audit: no rebrand needed. Logo color minor mismatch noted (logo purple vs #A78BFA).
- 24×36 unblocked in packs; runner deployed with corrected PACK_EXCLUDED_LABELS.
- reply_to fix on size-request emails (support replies now go to requesting user).
- **Next:** size-comparison cluster (5x7 vs 4x6) — next Tier-1 SEO page.

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
