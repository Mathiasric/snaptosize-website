# NEXT_ACTIONS.md — This Week's Priorities
**Week of:** 2026-04-07
**Updated by:** Claude Code — 2026-04-07

---

## Strategic Context (updated 2026-04-07)

**Current position:** 4 paying users (3 monthly + 1 yearly), $44 MRR, 48 SEO pages live (51 total). Product Hunt launched and done. Educator outreach: 0/7 responses. Social active daily.

**Important:** The "18,000+ packs" stat on the site is a marketing number for social proof, NOT real usage data.

**Diagnosis (confirmed by NotebookLM 2026-04-07):** This is a **pure distribution problem**.
1. **Discovery:** Near-zero organic traffic. SEO is ~6 weeks old — won't rank meaningfully for 2-4 more months.
2. **Conversion:** Can't measure yet. 4 paying users from near-zero traffic is a strong WTP signal.
3. **Product:** Stable, working, validated by paying customers. No new features needed until 10+ users.

**NotebookLM verdict:** "You are 6 weeks in with a working engine and no fuel. Stop tinkering with the engine (product/pricing) and start pouring fuel (outreach/partnerships)."

**This week's focus:** DISTRIBUTION — cold email at scale, educator follow-ups, AppSumo submission, founder story positioning.

---

## Priority Stack

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

### 3. AppSumo Submission — Next Burst Channel
**Why:** PH is done. AppSumo is the next big burst lever — 200-2000 users in 30 days. Use for reviews/social proof, not MRR.
**Decision (updated 2026-04-07):** Submit now. PH is complete.
- [ ] Research AppSumo submission process and requirements
- [ ] Prepare listing: screenshots, description, feature list
- [ ] Set lifetime deal: $29 one-time, capped at 500 codes
- [ ] Submit application
- **Target:** 200-500 lifetime users, 50+ reviews, social proof for landing page

### 4. Founder Story on Landing Page — DONE
**Status:** Completed 2026-04-07. Rewritten as "Loved by Etsy buyers" social proof section with 6 real reviews + artwork strip. No NordicCrafters promotion. Full homepage overhaul deployed (hero, timesaved, authority, how-it-works, trust, pricing, footer all polished).

### 5. YouTube Tutorials — Screen Recordings
**Why:** "How I create 70 print files in 30 seconds" is linkbait for seller communities. YouTube SEO ranks faster than blog SEO for tool demos. Video builds trust that text never can.
- [ ] Record 2 screen-capture tutorials showing the full workflow
- [ ] Topics: "Resize images for Etsy in 30 seconds" + "How many sizes should you offer on Etsy?"
- [ ] Upload to YouTube with SEO-optimized titles/descriptions
- [ ] Repurpose as TikTok/Reels clips
- **Target:** 100-500 views/video initially → compounds

### 4. SEO Pages — Continue Building (2/day target)
**Why:** Long game. Won't rank for 3-6 months but compounding traffic is the endgame.
**Status:** 48 SEO pages live (51 total). Visual pipeline upgraded — all pages now have QuickAnswer + size diagrams/mockups.
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
- [ ] **Next opportunities:** etsy photography sub-niches, etsy digital planner sizes, etsy farmhouse art sizes

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

## Ongoing (autopilot)
- [ ] SEO pages: 2 quality pages/day via pipeline
- [ ] Social: Pinterest 4/day, IG 2-3/day, TikTok 1/day via pipeline
- [ ] Monitor PostHog data accumulation
- [ ] Respond to any email list signups within 24h

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
| 100 SEO pages | Content foundation | ⏳ 48 live | Shift to optimization |
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
