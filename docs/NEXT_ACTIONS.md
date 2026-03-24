# NEXT_ACTIONS.md — This Week's Priorities
**Week of:** 2026-03-22
**Updated by:** Claude Code + Strategic Assessment — 2026-03-22

---

## Strategic Context (updated 2026-03-22)

**Current position:** 3 paying users, $32 MRR / $109 revenue today (2 monthly + 1 yearly as of 2026-03-23), 27 SEO pages, 7 outreach emails sent, social active daily. Pack system: 28 sizes in 5 packs, up to 70 files total.
**Diagnosis:** Product is strong. Distribution is the only bottleneck. SEO and social are correct long-term bets but won't convert for months. We need **fast-feedback channels** that produce signups in days, not months.
**New insight:** We've been over-indexed on content (SEO + social) which is slow-burn. Adding **launch events** (Product Hunt), **interactive tools** (calculator), **direct outreach** (cold email), and **marketplace deals** (AppSumo) creates multiple shots on goal with faster feedback loops.
**Fastest path to 10 users:** Educator partnerships + Product Hunt + cold email to Etsy sellers. Three independent channels, any one can hit the target.

---

## Priority Stack (in order of speed-to-impact)

### 1. ⭐ CRITICAL: Send educator outreach emails (manual — you do this)
**Why:** Only channel that can produce paying users THIS WEEK. 4 sent, waiting for responses.
- [ ] Send remaining batch: next 5 educators from `marketing/outreach/emails/`
- [ ] Day 3 follow-up for first batch (`marketing/outreach/templates/followup-day3.md`)
- [ ] Day 7 final follow-up (`marketing/outreach/templates/followup-day7.md`)
- [ ] If any respond → offer Free Pro forever + 25% recurring commission
- [ ] Update `marketing/outreach/outreach-tracker.json` with status + dates

### 2. ⭐ NEW: Product Hunt Launch
**Why:** Free, fast, can deliver 200-2000 visits in a single day. Etsy-niche tools do well on PH.
- [ ] Write tagline + description (< 260 chars)
- [ ] Prepare 4-5 product screenshots (hero, upload flow, ZIP output, before/after)
- [ ] Create short demo GIF or use existing 50-sec video
- [ ] Set up maker profile on producthunt.com
- [ ] Schedule launch for Tuesday-Thursday (best PH days)
- [ ] Prep "first comment" with founder story + why we built this
- [ ] Share launch link with email list + social channels
- **Target:** 100+ upvotes, 500+ visits, 30+ signups

### 3. ✅ DONE: Interactive "Etsy Print Size Calculator"
**Deployed 2026-03-22.** `/etsy-print-size-calculator` live with crop analysis, DPI checker, 30-size reference table, WebApplication + FAQPage schema. In Header nav + Footer + 8 internal links. OG image generated.
- [x] Build `/etsy-print-size-calculator` page on marketing site
- [x] Features: enter image dimensions → see crop %, DPI quality, orientation for all 30 sizes
- [x] Reference tab with complete size table (pixels, megapixels, use cases)
- [x] CTA: "Want all sizes automatically? Try SnapToSize Free"
- [x] Schema markup (WebApplication + FAQPage + Article + BreadcrumbList)
- [x] Added to Header nav, Footer, 8 internal links from key pages
- [ ] Share on social + include in email sequence
- **Target:** Rank for "etsy print size calculator", "print size dpi calculator" within 2-3 months

### 4. ⭐ NEW: Cold Email to Etsy Printable Sellers
**Why:** Etsy DMs got flagged, but email is a different channel. Many top sellers have public email on their shop/website. Highly targeted — these are exactly our ICP.
- [ ] Find 50 top Etsy printable sellers with public email (shop About, linked website, Hunter.io)
- [ ] Write personalized cold email template (not spam — genuine, personal, short)
- [ ] Send 5-10 per day manually (not automated mass-send)
- [ ] Offer: "I built this tool specifically for sellers like you. Try it free, I'd love your feedback."
- [ ] Track responses in `marketing/outreach/outreach-tracker.json`
- **Target:** 1-3% conversion → 1-3 signups from first 50 emails

### 5. ⭐ NEW: AppSumo / Lifetime Deal Marketplace
**Why:** AppSumo has 1M+ newsletter subscribers who actively buy SaaS tools. Even at $29 lifetime, getting 200+ users provides user base, reviews, feedback, and word-of-mouth. We need users more than margin right now.
- [ ] Research AppSumo submission process (appsumo.com/partners)
- [ ] Decide pricing: $29 lifetime (1-code), $58 (2-code stack)
- [ ] Prepare AppSumo listing: screenshots, video, description
- [ ] Submit application
- [ ] Alternatives if AppSumo is slow: PitchGround, Dealify, StackSocial
- **Target:** 200-2000 lifetime sales over 30-day campaign

### 6. ⭐ NEW: Facebook Group Admin Outreach
**Why:** Group admins are gatekeepers to thousands of Etsy sellers. One admin partnership = access to 5,000-20,000 target users.
- [ ] Identify top 5 Facebook groups for Etsy digital download sellers
- [ ] Contact admins directly (not post in group)
- [ ] Offer: "Free Pro for all members for 1 month" or exclusive group discount
- [ ] Provide admin with affiliate link for recurring commission
- [ ] If successful: replicate across more groups
- **Target:** Access to 10,000+ Etsy sellers through 2-3 group partnerships

### 7. Test "First Month Free" or 7-day trial
**Why:** Remove payment barrier to test if people aren't signing up because of price or because they haven't found us.
- [ ] Decide: free trial (7 days) vs first month free (coupon code)
- [ ] Implement in Stripe + app flow
- [ ] Add to landing page CTA
- [ ] Track conversion with PostHog

### 8. Conversion optimization — landing page review
**Why:** When traffic arrives from PH/outreach/educators, the landing page needs to convert.
- [ ] Analyze current snaptosize.com homepage flow → signup → first export
- [ ] Compare against eRank, Alura, Marmalead landing pages
- [ ] Fix highest-impact friction (above the fold, CTA clarity, social proof)

### Ongoing (autopilot — don't stop these)
- [ ] SEO pages: 2 quality pages/day via pipeline
- [ ] Social: Pinterest 4/day, IG 2-3/day, TikTok 1/day via pipeline
- [ ] Monitor PostHog data accumulation
- [ ] Respond to any email list signups within 24h

### NOT this week (explicitly deprioritized)
- ❌ Batch upload feature (no user complaints)
- ❌ Paid ads (CAC $802 vs LTV $144)
- ❌ New platforms (Shopify, Gumroad — Etsy first)
- ❌ Revenue dashboard (1 user, nothing to dashboard)
- ❌ Building mockup generator (research only)
- ❌ YouTube channel (educator partnerships first)

---

## Blockers
- Etsy seller account flagged (not blocking growth)
- PostHog data thin (4 weeks) — conversion rates unreliable
- SEO won't rank for 3-6 months (normal, keep building)
- AppSumo approval can take 2-4 weeks

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
| Product Hunt launch | Launched + 100 upvotes | ❌ Not started | Burst traffic + signups |
| Interactive tool live | Calculator deployed | ✅ Done (2026-03-22) | New SEO channel + tool-intent traffic |
| 3 educator partnerships | Distribution proven | ❌ | Scale to 20+ partners |
| 100 SEO pages | Content foundation | ❌ 27 live | Shift to optimization |
| 10 paying users | WTP proven | ⏳ 3 users | Small ad spend test, mockup build |
| 50 paying users | PMF signal | ❌ | Premium tier, affiliates at scale |

---

## Decision Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-03-22 | Add Product Hunt as fast-feedback channel | Free, can deliver 500+ visits in 1 day, low effort to prepare |
| 2026-03-22 | Build interactive calculator tool | Captures tool-intent searches, different from article SEO, proven playbook (Ahrefs, Canva) |
| 2026-03-22 | Cold email Etsy sellers (not DMs) | Email is separate channel from Etsy DMs, sellers have public emails, highly targeted ICP |
| 2026-03-22 | Explore AppSumo lifetime deal | Need users more than margin at $12 MRR, AppSumo provides burst of users + reviews |
| 2026-03-22 | Target FB group admins not members | Admins are gatekeepers to thousands, direct partnership > posting in groups |
| 2026-03-20 | Stretch is a differentiator, not a weakness | Visual comparison shows crop destroys composition; stretch preserves all details |
| 2026-03-20 | Distribution > product at this stage | Product works, nobody knows about it. Fix awareness first. |
| 2026-03-20 | Mockup generator is the next major product bet | Resize + mockup = complete listing flow. Research now, build after 10 users. |
| 2026-03-20 | Batch upload deprioritized | 30-60 sec per image is fast enough. No user complaints about speed. |
| 2026-03-20 | Created /strategy skill | NotebookLM-backed strategic advisor for session-start orientation |
