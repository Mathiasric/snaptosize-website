# NEXT_ACTIONS.md — This Week's Priorities
**Week of:** 2026-04-21
**Updated by:** Claude Code — 2026-04-21

---

## Strategic Context (updated 2026-04-07)

**Current position:** 7 paying users ($80 MRR). 3 canceling end of May — churn incoming. 71 SEO pages live. Social active daily. PostHog: 1,270 exports total, ~400 pageviews/week and growing.

**Key discovery (2026-04-21):** Free-to-paid conversion is ~37% (SaaS standard: 2–5%). Product works. Problem is 100% distribution — not conversion, not product, not pricing.

**PostHog signals:**
- 34 rate_limit_hit events in one week → 0 upgrades. Paywall moment is broken.
- 16 rage clicks — something in app UX frustrates users
- `signed_up` tracking now live (added 2026-04-21)

**This week's focus:** Fix rate limit paywall (app) + start cold outreach (manual).

---

## ⚓ Re-anchor (read this if you're feeling lost)

If you're not sure where to put energy, the answer is **always**:

1. **Priority #0** — rate limit paywall (app repo). 34 wasted upgrade-moments per week. Fixing this is the single highest-ROI thing in the entire project.
2. **Priority #1** — cold email outreach. You cannot delegate this. 50-100 emails/day is the path to 10 paying users.

**SEO is not the bottleneck.** It is producing 8021 imp / 32 clicks/month, but at 37% free→paid conversion the bottleneck is not traffic, it's distribution + paywall. Don't let SEO eat the day unless those two are blocked.

---

## 📅 Scheduled check-ins

- **~2026-05-06** — Run `/gsc-review` to measure CTR effect of 2 title rewrites shipped 2026-04-26 (commit d78ceb2): `/etsy-20mb-file-limit` and `/etsy-bookmark-size`. Baseline: pos 8.0 / 0.1% CTR (20mb), pos 14.8 / 0% CTR (bookmark). If CTR moved up, replicate pattern on 3-5 more pages.

---

## What Claude Can Do vs. What You Must Do Manually

### Claude (this repo + MCP tools)
- SEO page builds via `/seo-run-week`
- Hero copy rewrite ("No Photoshop" positioning)
- "Full canvas scaling" one-liner on pricing page
- Weekly GSC/intelligence pipeline
- Social content pipeline
- PostHog analysis + reporting

### Claude (app repo — brief app-Claude)
- Rate limit paywall UX → upgrade moment
- Rage click investigation via PostHog session recordings

### You (manual — cannot be delegated)
- Cold email outreach to power sellers
- Educator follow-up emails
- Any personal response to customers/support

---

## Priority Stack

### 0. Rate Limit Paywall → Upgrade Moment — TOP PRODUCT PRIORITY (app repo)

**Hvorfor:** 34 brukere traff gratis-grensen i én uke (apr 12–18). Null oppgraderte. De forsvant. Folk som treffer rate limit har *bevist* at de bruker produktet — det er det beste tidspunktet å selge Pro. I dag vises sannsynligvis bare en feilmelding.

**Hva det skal bli:**
> "Du har brukt alle 5 eksportene dine i dag. Oppgrader til Pro for ubegrenset eksport."
> [Oppgrader — $11.99/mnd] [Ikke nå]

**Brief til app-Claude:** Finn hvor `rate_limit_hit` PostHog-eventet fires i appen. Erstatt error-tilstanden med en inline upgrade-prompt: verdi + pris + CTA-knapp som sender til `/billing`. Legg til `rate_limit_upgrade_shown` PostHog-event.

**Suksesskriterium:** ≥10% av rate_limit_hit → upgrade_clicked innen 30 dager.

---

### 1. Cold Email to Power Sellers — TOP PRIORITY (manual — you do this)
**Why:** Fastest path to 10 paying users. Direct outreach to validated ICP. NotebookLM: "Look specifically for high-volume quote/typography sellers with 100+ listings — validated as ideal Pro candidates."
**Status:** Not started. Setup this week.
- [ ] Scrape 50 top Etsy printable sellers with public email (shop About, linked website, Instagram bio)
- [ ] Prioritize: quote/typography art, botanical, minimalist sellers with 100+ listings
- [ ] Write personalized cold email template (mention their shop name, art style)
- [ ] Set up Instantly.ai ($30/mo) or Lemlist for automated sequences
- [ ] Send 50-100 emails/day with 3-email sequence (intro → value → soft CTA)
- [ ] Offer: "I built this tool specifically for sellers like you. Try it free."
- [ ] Track in `marketing/outreach/outreach-tracker.json`
- **Target:** 1-3% conversion → 20-50 signups/month, 1-3 Pro conversions

### 2. Educator Outreach — Follow Up + Scale (manual — you do this)
**Why:** Highest single-event leverage. One mention = 50-200 targeted signups.
**Status:** 7 sent, 0 responses. Follow-ups overdue.
- [ ] Follow-ups for batch 1 (Starla, Dylan, Gold City, Nancy) — OVERDUE, send immediately
- [ ] Follow-up for batch 2 (Cassie, Renae, Giggles Galore) — OVERDUE, send immediately
- [ ] Send next batch: emails 8-12 from `marketing/outreach/emails/`
- [ ] If any respond → Free Pro forever + 25% recurring commission + /ref/[name] link
- [ ] Update `marketing/outreach/outreach-tracker.json` with dates

### 3. Hero Copy Rewrite — "No Photoshop" Positioning (Claude — this repo)

**Hvorfor:** Firecrawl-research bekreftet at konkurrenten er Photoshop/Canva-kompleksitet, ikke et annet SaaS. Hero kommuniserer ikke dette. ICP har aldri åpnet Photoshop og vil aldri gjøre det.

- [ ] Oppdater hero-subheadline på homepage: "No Photoshop. No Canva. One upload — every print size, ready for Etsy."
- [ ] Legg til én setning på `/pricing`: "SnapToSize scales your full canvas — no cropping, no lost corner details."

### 4. Founder Story on Landing Page — DONE
**Status:** Completed 2026-04-07. Rewritten as "Loved by Etsy buyers" social proof section with 6 real reviews + artwork strip. No NordicCrafters promotion. Full homepage overhaul deployed (hero, timesaved, authority, how-it-works, trust, pricing, footer all polished).

### 5. YouTube Tutorials — Screen Recordings
**Why:** "How I create 70 print files in 30 seconds" is linkbait for seller communities. YouTube SEO ranks faster than blog SEO for tool demos. Video builds trust that text never can.
- [ ] Record 2 screen-capture tutorials showing the full workflow
- [ ] Topics: "Resize images for Etsy in 30 seconds" + "How many sizes should you offer on Etsy?"
- [ ] Upload to YouTube with SEO-optimized titles/descriptions
- [ ] Repurpose as TikTok/Reels clips
- **Target:** 100-500 views/video initially → compounds

### 6. YouTube Comments Outreach — Backlog
**Why:** Print-on-demand/Etsy tutorials har engasjerte kommentarfelt der seere spør om resize/DPI/ratios. Ekte kommentarer fra egen konto, transparent, ingen bots. Lav innsats, gratis.
**Status:** Ikke startet. Plan: `docs/plans/2026-04-17-youtube-comments-outreach.md`
- Forventet: 1-2 signups/uke etter oppstart. Drop etter 4 uker hvis 0 betalende.

### 4. SEO Pages — Continue Building (2/day target)
**Why:** Long game. Won't rank for 3-6 months but compounding traffic is the endgame.
**Status:** 58 SEO pages live (61 total). Visual pipeline upgraded — all pages now have QuickAnswer + size diagrams/mockups.
- [x] `etsy-quote-wall-art-sizes` — deployed
- [x] `snaptosize-vs-canva` + `snaptosize-vs-photoshop` — deployed
- [x] `etsy-landscape-print-sizes` + `etsy-square-print-sizes` — deployed (Firecrawl-identified opportunities)
- [x] Visual pipeline: 27 new visuals across 28 pages (Playwright diagrams + Gemini mockups)
- [x] `etsy-abstract-wall-art-sizes` — deployed with Gemini mockup + OG image (2026-04-03)
- [x] `etsy-ai-art-print-sizes` — deployed with Gemini mockup + OG image, resolution table moved to H2 2 (2026-04-03)
- [x] `etsy-listing-photo-size` — deployed with Gemini mockup + OG image, bridge page (listing photos → print files) (2026-04-03)
- [x] `etsy-photography-print-sizes` — deployed with Gemini mockup + OG image, camera 3:2 ratio mapping (2026-04-03)
- [x] Cross-links added: 4 inbound backlinks across existing pages
- [x] `etsy-vintage-art-print-sizes` — deployed with CSS vintage frame gallery hero + OG image, 7 vintage sub-style breakdown (2026-04-07)
- [x] `etsy-pet-portrait-sizes` — deployed with CSS paw print frame wall hero + OG image, 6 sub-style breakdown + composition sizing (2026-04-07)
- [x] Cross-links added: 6 inbound backlinks from existing pages (3 per new page)
- [x] `etsy-farmhouse-wall-art-sizes` — deployed with CSS shiplap hero, 6 sub-style breakdown, room-by-room guide (2026-04-08)
- [x] `etsy-coastal-wall-art-sizes` — deployed with CSS ocean hero, 7 sub-style breakdown, gallery wall strategy (2026-04-08)
- [x] Cross-links added: backlinks from vintage, photography, boho, watercolor pages
- [x] `etsy-celestial-wall-art-sizes` — deployed (2026-04-12)
- [x] `etsy-floral-print-sizes` — deployed (2026-04-12)
- [x] `etsy-japandi-art-sizes` — deployed (2026-04-13), blue ocean SERP, ISO sizing + international angle
- [x] `etsy-line-art-sizes` — deployed (2026-04-13), blue ocean SERP, DPI/thin-lines angle
- [x] `etsy-typography-wall-art-sizes` — deployed (2026-04-14), blue ocean SERP, legibility+ratio angle, GEO FAQ included
- [x] `etsy-map-art-print-sizes` — deployed (2026-04-14), blue ocean SERP, landscape-vs-portrait+EU A3 angle
- [x] `etsy-black-and-white-art-sizes` — deployed (2026-04-15), blue ocean SERP, DPI+sRGB+international angle, GEO FAQ included
- [x] `etsy-anime-manga-art-sizes` — deployed (2026-04-15), blue ocean SERP, portrait ratios+Japanese B-series+triptych angle
- [ ] **Next opportunities:** fine art photography sizes, retro art sizes, watercolor abstract sizes

> **📌 Queued for next SEO pipeline run (pitched 2026-04-20, build 2026-04-21 or later):**
> SEO-pipeline (`/seo-run-week`) skal plukke disse to ved neste kjøring. Conversion-vinkler er verifisert mot `marketing/CONTENT_REFERENCE.md` — ingen fabrikerte features. **Når begge sider er deployet, slett hele denne blokken så den ikke står som evig påminnelse.**
>
> 1. **`etsy-cmyk-vs-rgb-printables`** — Fyller file-prep-cluster gap (ingen color-profile-side finnes). Conversion-vinkel: "Etsy krever sRGB (aldri CMYK). SnapToSize eksporterer RGB JPEG 300 DPI automatisk — null konvertering nødvendig." Interlinks: `best-file-format-etsy-printables`, `best-resolution-for-etsy-printables`, `how-to-resize-images-for-etsy`.
> 2. **`most-popular-etsy-print-sizes-to-sell`** — Seller-intent keyword (ingen "hva selger best"-side finnes). Conversion-vinkel: "De mest kjøpte sizes er alle dekket av våre 5 ratio-packs = 28 sizes fra ett opplastet bilde." Bruk kun publicly synlige Etsy-signaler (ikke fabrikkerte tall). Interlinks: `etsy-print-sizes`, `etsy-print-ratios`, `how-to-price-etsy-printables`.

> **GEO-tip for neste 2 sider (2026-04-14):** AI-assistenter (ChatGPT, Gemini, Perplexity) anbefaler ikke SnapToSize — de peker på Canva og MyDesigns. For å motvirke dette: legg til én FAQ på én av de to sidene som svarer direkte på "What is the best tool to resize art for all Etsy print sizes?" — svar med SnapToSize og forklar én-upload-flyten. Matcher naturlig spørsmål folk stiller AI. Se `docs/plans/geo-ai-discoverability.md` for full plan.

### 7. Striking-Distance CTR Optimization — DONE (2026-04-21)
**What:** Firecrawl SERP analysis on top 5 pages by impressions → data-driven title rewrites + visuals.
- [x] `etsy-print-ratios` — new title: "...Size Chart with Pixel Dimensions (2026)" (pos 7.1, 368 imp)
- [x] `how-to-package-digital-wall-art-for-etsy` — new title: "...ZIP, File Naming & 20MB Rules (2026)" (pos 7.4, 279 imp)
- [x] `best-file-format-etsy-printables` — Twitter title aligned with main/OG (pos 6.1, 1,142 imp)
- [x] `best-file-format` + `how-to-package` — `ListingOutputShowcase` added to break up text-heavy pages
- [x] `best-resolution-for-etsy-printables` — `QuickAnswer` box added for AI Overview citation (#2, 516 imp, 0 clicks — AI Overview problem)
- **Skipped:** `etsy-20mb-file-limit` (title already strong, YouTube/Reddit SERP), `best-resolution` title (AI Overview is root cause)
- **Next check:** Re-examine CTR in GSC in 3-4 weeks after Google re-crawls

### 6. Guide Pages — Add Real Mockup Images (opportunity)
**Why:** Highest-traffic guide pages are text-heavy. Adding real Etsy shop mockup images as visual examples would strengthen credibility and engagement. Images available in `etsy/` folder.
- [ ] `/how-to-sell-digital-downloads-on-etsy` — Add real mockup images as visual examples throughout the step-by-step guide (highest-traffic guide page)
- [ ] `/etsy-digital-download-not-selling` — Add before/after with real shop mockups to make troubleshooting advice concrete
- **Caveat:** Frame images as "example from a real seller" not as shop promotion. Avoid NordicCrafters branding.

---

## Open Strategic Questions

### Free tier / trial — NOT decided yet
- Still not enough data. 4 paying users from near-zero traffic is WTP signal but no conversion data.
- **Decision:** Park until 50+ free users in PostHog. Get traffic first.

### Pricing — Locked until 100 users
- Pricing lock rule stands: no changes before 100 paying users (confirmed by NotebookLM 2026-04-07)
- "Changing price with n=4 is playing house rather than growing" — can't measure price sensitivity
- Revisit when we have meaningful conversion data

### Social Media Manager pivot — NEW (NotebookLM 2026-04-07)
- NotebookLM identified that SnapToSize works for converting Pinterest pins to IG feed (aspect ratio conversion)
- Social media managers experience SAME "aspect ratio hell" as Etsy sellers but with HIGHER frequency
- **Decision:** Research only. Don't change positioning yet. Could be a Phase 2 expansion after Etsy traction proven.

### Facebook Group Admin Partnerships
- Partner with admins (don't post in groups — gets flagged)
- Offer affiliate cut or dedicated how-to session for members
- **Decision:** Start after cold email campaign is running (don't split focus)

---

## Growth Engine (built 2026-04-09)

New automated tools for data-driven optimization. See `docs/PIPELINE_OPERATIONS.md` → Growth Engine Tools section for full details.

**Weekly routine (add to Monday checklist):**
1. `python marketing/gsc-analytics/pull_gsc.py` → fresh GSC data
2. `python marketing/intelligence/weekly-brief.py` → weekly intelligence brief
3. `python marketing/seo-optimizer/title-optimizer.py` → review title suggestions
4. Apply high-impact title changes from optimization-log.json
5. `python marketing/seo-optimizer/link-builder.py` → add internal links
6. `python marketing/seo-optimizer/content-gap-detector.py` → find new page opportunities
7. `python marketing/seo-optimizer/striking-distance.py` → optimize pages near page 1

**Fixes deployed 2026-04-09:**
- [x] PostHog tracking: email capture events, CTA clicks (with source/type), scroll depth
- [x] Social pipeline: `content_type` + `layout` now set by agents → insights engine works
- [x] Feedback loop: `previous_insights` carried forward to next batch's analyst/researcher/ideator
- [x] Title optimization: top 5 pages updated (etsy-20mb-file-limit, best-file-format, best-resolution, print-ratios, a4-print-size)

**Customer outreach plan ready:** `docs/plans/2026-04-09-customer-outreach.md` — send personlig e-post til 4 betalende brukere via Stripe

---

## Ongoing (autopilot)
- [ ] SEO pages: 2 quality pages/day via pipeline
- [ ] Social: Pinterest 4/day, IG 2-3/day, TikTok 1/day via pipeline
- [ ] Monitor PostHog data accumulation (now tracking CTA clicks + email captures)
- [ ] Respond to any email list signups within 24h
- [ ] Run weekly intelligence brief every Monday

---

## NOT this week (explicitly deprioritized)
- ❌ Free coupon / trial — evaluate after PostHog data review
- ❌ Batch upload feature (build after 10 users, Pro-only)
- ❌ Paid ads (CAC $802 vs LTV $144 — revisit at $5K MRR)
- ❌ New platforms (Shopify, Gumroad — Etsy first, but start SEO content for them)
- ❌ Revenue dashboard (4 users, nothing to dashboard)
- ❌ Mockup generator (research only, build after 10 users — confirmed by NotebookLM)
- ❌ Pricing changes (locked until 100 users — confirmed by NotebookLM)

---

## Blockers
- **0/7 educator responses** — follow-ups overdue (batch 1+2). Must send immediately.
- PostHog data thin (~6 weeks) — conversion rate analysis still unreliable
- SEO won't rank meaningfully for 2-4 more months (6 weeks in, normal trajectory)
- No burst distribution channel active since PH (cold email setup is the fix)

---

## Dropped Channels
- Reddit/Facebook outreach (posting) — flagged as ads
- Etsy DM outreach — account suspended
- Paid ads — CAC $802 vs LTV $144

---

## Growth Gates

| Gate | Metric | Status | Unlocks |
|------|--------|--------|---------|
| Send outreach emails | 10+ emails sent | ⏳ 7 sent | Educator partnerships |
| Follow-ups sent | Day 3+7 for all batches | ❌ Overdue | Response data |
| Cold email campaign | 50+ cold emails sent | ❌ Not started | Direct user acquisition |
| Conversion audit | 50+ free users in PostHog | ❌ Not enough traffic yet | Free tier decision |
| Product Hunt launch | Launched + 100 upvotes | ✅ Done (2026-03-31) | Burst traffic + signups |
| AppSumo launch | Submitted + approved | ❌ Not submitted | Reviews + social proof burst |
| Interactive tool live | Calculator deployed | ✅ Done (2026-03-22) | New SEO channel |
| YouTube tutorials | 2+ tutorials published | ❌ Not started | Trust-building video content |
| 3 educator partnerships | Distribution proven | ❌ 0 responses yet | Scale to 20+ partners |
| 100 SEO pages | Content foundation | ⏳ 58 live | Shift to optimization |
| 10 paying users | WTP proven | ⏳ 4 users | Mockup build, batch upload |
| 50 paying users | PMF signal | ❌ | Premium tier, affiliates at scale |

---

## Decision Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-03-25 | "18k packs" is marketing, not data | Don't base strategic decisions on social proof numbers. Real usage data is thin — awareness is the bottleneck, not conversion. |
| 2026-03-25 | Defer free tier / trial changes | Not enough users to measure conversion. Get traffic first, optimize second. |
| 2026-03-25 | PH before AppSumo | PH is free, no revenue hit. AppSumo attracts deal hunters at $29 lifetime. |
| 2026-03-25 | Follow-ups start March 27 | Give educators 7 days before first follow-up |
| 2026-03-22 | Add Product Hunt as fast-feedback channel | Free, can deliver 500+ visits in 1 day, low effort to prepare |
| 2026-03-22 | Build interactive calculator tool | Captures tool-intent searches, different from article SEO, proven playbook (Ahrefs, Canva) |
| 2026-03-22 | Cold email Etsy sellers (not DMs) | Email is separate channel from Etsy DMs, sellers have public emails, highly targeted ICP |
| 2026-03-22 | Explore AppSumo lifetime deal | Need users more than margin at $12 MRR, AppSumo provides burst of users + reviews |
| 2026-03-22 | Target FB group admins not members | Admins are gatekeepers to thousands, direct partnership > posting in groups |
| 2026-03-20 | Stretch is a differentiator, not a weakness | Visual comparison shows crop destroys composition; stretch preserves all details |
| 2026-03-20 | Distribution > product at this stage | Product works, nobody knows about it. Fix awareness first. |
| 2026-03-20 | Mockup generator is the next major product bet | Resize + mockup = complete listing flow. Research now, build after 10 users. |
| 2026-03-30 | Competitive research: Artigo, Mockably, Seb's Visuals | Artigo is closest competitor ($59 lifetime desktop app, more features). Our moat is SEO (37 pages vs 0) + browser convenience + 20MB compliance. No feature-chasing needed — distribution wins. Added §8b to GROWTH_STATE. |
| 2026-03-30 | No competitor comparison pages | Artigo/others too small for dedicated vs-pages. Not our style. Focus energy on educational SEO content. |
| 2026-03-30 | Founder story as marketing lever | Seb's Visuals uses "built by a seller" effectively. Consider making founder story more visible on landing page. |
| 2026-03-20 | Batch upload deprioritized | 30-60 sec per image is fast enough. No user complaints about speed. |
| 2026-03-20 | Created /strategy skill | NotebookLM-backed strategic advisor for session-start orientation |
| 2026-04-07 | Cold email is #1 priority | Fastest path to 10 users. Scrape 50 power sellers, use Instantly.ai, 50-100/day. NotebookLM confirmed. |
| 2026-04-07 | AppSumo: submit now (PH done) | Next burst channel after PH. 200-500 LTD users for reviews/social proof. Cap at 500 codes. |
| 2026-04-07 | Pricing lock confirmed at 100 users | NotebookLM: "Changing price with n=4 is playing house. Can't measure sensitivity with sample of four." |
| 2026-04-07 | Mockup generator: confirmed wait for 10 users | NotebookLM: "Building mockup now is distraction from the fact that nobody knows you exist." |
| 2026-04-07 | Founder story as landing page element | Both NotebookLM and competitive research (Seb's Visuals) confirm "built by a seller" builds trust. Add to landing page. |
| 2026-04-07 | YouTube tutorials: start now | Screen recordings showing workflow. Builds trust, ranks fast for tool queries. 2 videos this week. |
| 2026-04-07 | Social media manager market identified | NotebookLM: SnapToSize works for aspect ratio conversion beyond Etsy. Research only — don't pivot yet. |
| 2026-04-07 | NotebookLM CLI restored | notebooklm-py 0.3.4 installed, auth working. Sources synced: MILESTONES, NEXT_ACTIONS, GROWTH_STATE (2026-04-07). |
