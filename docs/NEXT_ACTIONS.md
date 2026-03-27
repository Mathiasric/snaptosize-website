# NEXT_ACTIONS.md — This Week's Priorities
**Week of:** 2026-03-25
**Updated by:** Claude Code + NotebookLM Strategic Assessment — 2026-03-25

---

## Strategic Context (updated 2026-03-25)

**Current position:** 3 paying users, $32 MRR, 29 SEO pages, 7 educator outreach emails sent (0 responses yet), social active daily. 2 new SEO pages deployed this week (A3 + gallery wall).

**Important:** The "18,000+ packs" stat on the site is a marketing number for social proof, NOT real usage data. Do not use it for strategic analysis.

**Diagnosis:** This is a **pure distribution problem**, not a conversion problem.
1. **Discovery:** Very few people are finding us. SEO is <1 month old (won't rank for 3-6 months). Social is early. No burst traffic yet.
2. **Conversion:** Can't measure — not enough traffic. 3 paying users from near-zero organic traffic is actually a decent signal.
3. **Free tier:** Don't know if it's too generous — not enough users to tell. Don't tighten before we understand.

**The bottleneck is simple:** Nobody knows we exist yet. Fix awareness first, optimize conversion later.

**This week's focus:** Get the product in front of MORE people — educator follow-ups (March 27), Product Hunt prep, cold email, continued SEO/social.

---

## Priority Stack

### 1. Educator Outreach — Keep Pushing (manual — you do this)
**Why:** Highest-leverage channel. One educator mention = 50-200 targeted signups from REAL sellers (ICP), not hobbyists.
**Status:** 7 sent, 0 responses. Follow-ups starting March 27.
- [ ] Follow-ups for batch 1 (Starla, Dylan, Gold City, Nancy) — send March 27
- [ ] Follow-up for batch 2 (Cassie, Renae, Giggles Galore) — send March 27
- [ ] Send next batch: emails 8-12 from `marketing/outreach/emails/` (Mei Pak, RJ Martinez, etc. — many are contact-form-only, lower success rate)
- [ ] If any respond → Free Pro forever + 25% recurring commission + /ref/[name] link
- [ ] Update `marketing/outreach/outreach-tracker.json` with dates

### 2. Product Hunt Launch Prep
**Why:** Free, can deliver 500+ visits in 1 day. NOT too early — "18,000+ print packs generated" is strong utility proof even without user testimonials.
**Status:** Not started. Prep this week, launch next week (Tue-Thu optimal).
- [ ] Write tagline + description (< 260 chars)
- [ ] Prepare 4-5 product screenshots (hero, upload → ZIP flow, before/after)
- [ ] Create short demo GIF or video
- [ ] Set up maker profile on producthunt.com
- [ ] Write "first comment" — founder story, why stretch-only matters, "18k packs" stat
- [ ] Schedule launch for next Tue/Wed/Thu
- [ ] Prep social + email blast for launch day
- **Target:** 100+ upvotes, 500+ visits, 30+ signups

### 3. Cold Email to Etsy Printable Sellers
**Why:** Direct outreach to ICP. Different from educator outreach — these are potential USERS, not distributors.
- [ ] Find 50 top Etsy printable sellers with public email (shop About, linked website)
- [ ] Write personalized cold email template (genuine, personal, short)
- [ ] Send 5-10 per day manually
- [ ] Offer: "I built this tool specifically for sellers like you. Try it free."
- [ ] Track in `marketing/outreach/outreach-tracker.json`
- **Target:** 1-3% conversion → 1-3 signups from first 50

### 4. SEO Pages — Continue Building (2/day target)
**Why:** Long game. Won't rank for 3-6 months but compounding traffic is the endgame.
**Status:** 31 live. Queue: niche verticals, ratio comparisons, comparison pages.
- [ ] Deploy 2 pages this week minimum
- [ ] **Priority niche page:** `etsy-quote-wall-art-sizes` — validated by real paying customer (quote/typography art seller, all packs, 31 MB source files). Big Etsy category.
- [ ] Focus on comparison pages (vs-canva, vs-photoshop) — these capture buyers, not browsers
- [ ] Cross-link all new pages to existing ones

---

## Open Strategic Questions (evaluate before acting)

### Free tier / trial — NOT decided yet
- **We don't have data yet.** With near-zero traffic and 3 paying users, any change is premature.
- **Against free coupon/trial now:** We don't know if payment friction is the problem. Could be pure awareness.
- **Against tightening now:** Same reason — might alienate the few users we DO get while traffic is low.
- **Decision:** Park this until we have 50+ free users and can actually see conversion patterns. Get traffic first.

### Pricing
- Pricing lock rule: no changes before 100 paying users
- NotebookLM says $11.99 is "no man's land" — too expensive for hobbyists, too cheap to fund growth
- But we can't raise price without more data. Park this.

### AppSumo
- Upside: 200-2000 lifetime users, reviews, social proof
- Downside: $29 lifetime = $0.48/mo amortized over 5 years. Attracts deal hunters, not ICP.
- **Decision:** Research but don't submit yet. Prioritize PH first (free, no revenue hit).

### Facebook Group Admin Outreach
- Good idea but requires manual relationship building
- Lower priority than educator outreach (educators have bigger reach)
- Revisit after educator responses come in

---

## Ongoing (autopilot)
- [ ] SEO pages: 2 quality pages/day via pipeline
- [ ] Social: Pinterest 4/day, IG 2-3/day, TikTok 1/day via pipeline
- [ ] Monitor PostHog data accumulation
- [ ] Respond to any email list signups within 24h

---

## NOT this week (explicitly deprioritized)
- ❌ Free coupon / trial — evaluate after PostHog data review
- ❌ AppSumo submission — research only, PH first
- ❌ Batch upload feature (no user complaints)
- ❌ Paid ads (CAC $802 vs LTV $144)
- ❌ New platforms (Shopify, Gumroad — Etsy first)
- ❌ Revenue dashboard (3 users, nothing to dashboard)
- ❌ Mockup generator (research only, build after 10 users)
- ❌ YouTube channel (educator partnerships first)
- ❌ Pricing changes (locked until 100 users)

---

## Blockers
- **0/7 educator responses** — day 5 for batch 1, day 1 for batch 2. Follow-ups on March 27.
- PostHog data thin (4 weeks) — conversion rate analysis may be unreliable
- SEO won't rank for 3-6 months (normal, keep building)
- Many remaining educator prospects are contact-form-only (lower reach rate)

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
| Follow-ups sent | Day 3+7 for all batches | ⏳ Starting March 27 | Response data |
| Conversion audit | 50+ free users in PostHog | ❌ Not enough traffic yet | Free tier decision |
| Product Hunt launch | Launched + 100 upvotes | ❌ Prepping this week | Burst traffic + signups |
| Interactive tool live | Calculator deployed | ✅ Done (2026-03-22) | New SEO channel |
| 3 educator partnerships | Distribution proven | ❌ 0 responses yet | Scale to 20+ partners |
| 100 SEO pages | Content foundation | ❌ 29 live | Shift to optimization |
| 10 paying users | WTP proven | ⏳ 3 users | Small ad spend test, mockup build |
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
| 2026-03-20 | Batch upload deprioritized | 30-60 sec per image is fast enough. No user complaints about speed. |
| 2026-03-20 | Created /strategy skill | NotebookLM-backed strategic advisor for session-start orientation |
