# SnapToSize Homepage — Good → Amazing

**Strategic plan · DRAFT for review · 2026-06-20**
Owner: Mathias · Author: Claude (head-of-business lens)
Status: **planning only — no build until this is approved**

---

## 0. Strategic frame (read this first — it sizes everything below)

Four independent competitor teardowns (image-utility tools, Canva/Adobe, niche rivals, out-of-niche craft) converged on one conclusion: **the page should demonstrate the product working, not just describe it.** That's the north star.

But three hard truths constrain *how much* we invest here:

1. **The bottleneck is distribution, not this page.** Free→Pro conversion is ~37% (SaaS norm 2–5%). People who land already convert at an elite rate — there just aren't enough of them (GSC: ~3,050 impressions → 38 clicks/mo). So this plan is deliberately **sized to be cheap + high-leverage**, not a rebuild. The master trade-off behind every item: *opportunity cost vs. the CTR/distribution work that actually moves revenue.*
2. **We cannot measure conversion lift here.** At ~38 clicks/month, no A/B test reaches significance in a useful timeframe. Therefore **no change is justified by "it'll lift conversion X%."** Each change must earn its place by being (a) cheap, (b) fixing genuinely broken proof, (c) surfacing the wedge, or (d) protecting/raising perceived professionalism — measured qualitatively, not by a number we can't read.
3. **Good → amazing is mostly subtraction.** The page is already ~6,800px with real redundancy (two pain sections, repeated "stop resizing" CTAs, two imported-but-dead sections). Adding without cutting = bloat. Craft reads as premium; clutter reads as amateur.

**So "amazing" = three levers, not "more stuff":**
- **Show, don't tell** (the demo) — biggest perceived-quality jump.
- **Surface the wedge** (Perfect Fit is currently invisible on the marketing site) — turns "a resizer" into "a differentiated product."
- **Subtract the noise** — consolidate, restrain, delete dead code.

---

## 1. What is already great — PROTECT, do not touch

- **Hero headline + seller-pain quote.** "I manually resize every artwork into 2:3, 4:5… check DPI, rename, zip…" → **"We do all of that in 45 seconds."** Relatable, specific, time-framed. A visitor *gets it* in 3 seconds. This is doing its job; changing it is pure downside risk.
- **No-signup CTA + "no credit card."** Our structural advantage over Canva/Adobe (who account-wall export). Keep it loud.
- **The concrete proof vocabulary** (named files · 300 DPI · <20 MB · ZIP). Credible and specific.

Rule for this whole project: **every change is reversible and ships incrementally.** No A/B safety net at this traffic → we rely on judgment + one-command revert.

---

## 2. The changes — each with what it BRINGS, the POSITIVES, the NEGATIVES/RISKS, and a verdict

### A. Hero trust-chip row (under the CTA)
**Brings:** honest risk-reversal at the decision point + states our 20 MB moat no rival mentions.
Chips: *No signup to try · 300 DPI · Every ZIP under 20 MB (Etsy's exact limit) · Files auto-delete in 7 days.*
- **Positives:** cheapest high-converging move (3 of 4 scouts). Kills objections honestly. Surfaces the moat. Reinforces trust without faking scale.
- **Negatives / risks:** chip overload adds clutter right under the single CTA and can dilute focus (Hick's law); pushes the demo lower on the fold. **Mitigation:** max 4 chips, one muted line, icons small.
- **Verdict:** ✅ Ship. `[ROI: High] [Effort: Easy]`

### B. Make the hero demo self-evident (the flagship "show, don't tell")
**Brings:** proof the product works *before* a click — the single biggest gap vs best-in-class. Today the demo is hidden behind a play-button modal.
Direction: a short **auto-playing, muted, looping** clip (artwork in → fan of named, sized ZIP tiles out), OR a **"No artwork yet? Try a sample →"** interactive that runs a real pack. Keep the full 49s demo available in the modal beneath it.
- **Positives:** removes "will it work on my file?" doubt; best-in-class pattern (remove.bg samples, Screen.studio loops); large perceived-professionalism jump.
- **Negatives / risks:** ⚠️ **the serious one — performance.** An auto-play video adds weight and can hurt LCP/Core Web Vitals → hurts the SEO that feeds the *actual* bottleneck. A bad/janky loop looks worse than the current clean modal. Real production effort to do well. Accessibility: must honor `prefers-reduced-motion`. **Mitigations:** strict perf budget (small optimized webm/mp4, poster frame, lazy below-fold assets, no CLS); keep the modal as the deep demo; reduced-motion fallback to a static output grid.
- **Verdict:** ✅ Ship — but **last**, with craft (impeccable) and a perf gate. Highest upside, highest care. `[ROI: High] [Effort: Med-High]`

### C. 4-modes section — replaces the dead "No cropping" section
**Brings:** fixes broken proof + differentiates the modes + finally surfaces Perfect Fit. One section doing the job of three.
The current "Same artwork. Every ratio. No cropping." shows the *same artwork three times at near-identical framing* (all `object-contain`) → a buyer sees three identical pictures and the "every ratio" payoff is invisible. Your point stands that the *intent* (Lanczos keeps full detail across ratios) is real — the **execution** hides it.
New section:
- **Size Packs (default/hero mode):** same art in *visibly different frame shapes* (2:3, 4:5, 3:4 + ISO/11×14 as you suggested) so the eye registers "every ratio, full detail kept."
- **Perfect Fit (the wedge):** the crop demo video (§3).
- **Quick Export + My Packs:** compact cards, each by what it's good for.
- **Positives:** kills the dead section; makes the modes legible; surfaces the wedge; consolidates.
- **Negatives / risks:** ⚠️ **paradox of choice.** The hero's power is simplicity ("one upload, every size"); introducing 4 modes mid-page can muddy the core promise and overwhelm a buyer who just wants "resize my art." More assets to produce + maintain. **Mitigation:** strict hierarchy — Size Packs visually dominant, the other three clearly secondary; frame as *"one tool, the right mode for each job,"* never a 4-way menu.
- **Verdict:** ✅ Ship — the flagship strategic change. **Mock up before any code.** `[ROI: High] [Effort: Med]`

### D. Named size/ratio grid surfaced higher
**Brings:** matches how sellers actually search (by exact size) + keyword-rich content that also helps SEO/distribution.
- **Positives:** concrete = trust; doubles as on-page SEO; easy.
- **Negatives / risks:** can be redundant with the dedicated `/sizes` page; adds length; risks clutter. **Mitigation:** a compact strip, not a giant grid; or fold into the Size Packs mode card.
- **Verdict:** ✅ Ship as a compact strip. `[ROI: Med] [Effort: Easy]`

### E. Trust / professional polish (restraint)
**Brings:** higher perceived professionalism, the cheapest "amazing" lever.
- Pull the privacy line up near the CTA ("files auto-delete in 7 days, never used to train AI").
- Dark-theme restraint: the hero currently runs **teal *and* purple competing**; mute the sub-copy, single accent in the hero, float the demo card on a soft border/glow (Linear-grade).
- **Positives:** cheap, cumulative, raises the whole-page "premium" read.
- **Negatives / risks:** subjective; over-muting kills energy; purple is also brand identity — removing it entirely reduces distinctiveness. **Mitigation:** reduce *competition* in the hero only; keep brand colors elsewhere.
- **Verdict:** ✅ Ship. `[ROI: Med] [Effort: Easy]`

### F. SUBTRACT — consolidate redundancy + delete dead code
**Brings:** the other half of good→amazing. Net section count should **not** balloon.
- Two pain/benefit sections ("Stop wasting hours…" + "What you stop doing the moment you switch") overlap → merge to one.
- "Stop resizing" CTA recurs (§2 theme, final CTA) → keep one strong final CTA.
- `WhatYouGetSection` + `PainSection` are **imported but never rendered** → delete dead code.
- **Positives:** shorter, sharper, faster page; less to maintain; craft signal.
- **Negatives / risks:** cutting a section that's quietly contributing; low risk but verify each isn't load-bearing before removing. **Mitigation:** review content before deleting; keep the strongest line from any merged section.
- **Verdict:** ✅ Do alongside additions so the page gets *tighter*, not longer. `[ROI: Med] [Effort: Easy]`

---

## 3. The Perfect Fit asset decision (your direct question: 5 images or a video?)

**Make the short looping crop video — it beats 5 static images.** The wedge is *control*, and control is motion: drag-to-frame → live reframe is the one thing no rival can show. Static images can't convey "you choose the framing."
- **Crop video** → anchors the Perfect Fit slot in the 4-modes section + re-shoots into the hero demo.
- **Before/after image strip** (the one we already built for `/distortion-free-crop`) = the cheap static complement; reuse on the landing page + social.
- ⚠️ **Hard guardrail:** the before/after contrast is **external**, never against our own modes. "A generic tool crops to center, blind → Perfect Fit, you choose the frame." Never "stretched vs Perfect Fit" — that downplays Size Packs and breaks the tone rule. The villain is geometry/other tools, the hero is always us.

---

## 4. Sequenced roadmap (reversible phases — each gets branch → Playwright+tsc verify → preview → your verify → merge on go)

**Phase 0 — Subtract + cheap wins (fast, near-zero risk).** Change A (trust chips), E (restraint + privacy up), F (consolidate + delete dead code), D (size strip). Ship as one tidy pass. Outcome: tighter, more trustworthy page with no new heavy assets.

**Phase 1 — The wedge (flagship).** Change C (4-modes section) + §3 crop video. **Static mockup first** for your approval, then build with frontend-design + impeccable polish. Outcome: modes legible, Perfect Fit finally visible.

**Phase 2 — Hero demo upgrade (highest craft, perf-gated).** Change B. Built last, with a strict performance budget and reduced-motion fallback. Outcome: the page *shows* itself working.

**Parallel, separate track (not this plan): nav exposure of Perfect Fit** on the marketing header — small, but a positioning decision; flagged, not bundled.

---

## 5. Cross-cutting risks (the master list)

| Risk | Why it matters | Mitigation |
|---|---|---|
| **Opportunity cost vs distribution** | Homepage isn't the bottleneck; CTR/SEO is | Time-box to Phase 0–1; don't let it become a multi-week rebuild |
| **Performance regression** | Heavy hero assets hurt LCP → hurt the SEO that feeds the bottleneck | Perf budget; optimized assets; lazy-load; measure CWV before/after |
| **Page bloat** | Already long + redundant | Subtraction (F) is mandatory, paired with additions |
| **Can't A/B at this traffic** | No statistical safety net | High-confidence changes only; one-command revert; ship incrementally |
| **Paradox of choice** (4 modes) | Could muddy the simple core promise | Size Packs dominant; others clearly secondary |
| **Asset maintenance** | Videos break when UI changes | Keep assets simple; document re-shoot steps |
| **Downplaying our own product** | Tone-rule violation, self-damage | External villain only; verify every comparison line |

---

## 6. How we'll know it worked (honest success criteria)

We **cannot** read conversion deltas at 38 clicks/mo. So success is:
- **Qualitative:** wedge is visible; demo is self-evident; page feels premium + trustworthy; no downplaying.
- **Leading indicators (PostHog):** demo-play / sample-run rate, scroll depth to the modes section, CTA→app click rate — directional, not significance-tested.
- **Guardrail metric:** Core Web Vitals **must not regress** (this protects the real bottleneck).
- **Not a success metric:** a short-term conversion-rate number — unmeasurable here, and conversion is already elite.

---

## 7. Tools we'll use
- **impeccable** (`craft`/`polish`) — the modes section + hero demo craft pass.
- **frontend-design** — build the components on the existing design system.
- **Firecrawl** — any further competitor/example pulls if we want more references.
- **Playwright** — DOM-assert QA + screenshots (localhost :3098 → CF preview).
- **Crop video** — screen-record the live Perfect Fit app (v2 drag+progress UX) or Remotion compose; optimize for web.

---

## Open decisions for Mathias
1. Approve the **phasing** (0 → 1 → 2) and the principle that we **subtract while we add**?
2. Start with **Phase 0** (cheap tightening) or jump to **Phase 1** (the wedge mockup)?
3. Perfect Fit in the **marketing-site nav** — yes/no (separate small track)?
4. Any real, **verified** numbers we're allowed to state ("X sellers / Y exports")? (Needed before any count goes on the page.)
