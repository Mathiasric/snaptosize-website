# NEXT_ACTIONS.md — This Week's Priorities
**Week of:** 2026-03-20
**Updated by:** Claude Code + Strategic Assessment — 2026-03-20

---

## Strategic Context (from 2026-03-20 assessment)

**Current position:** 1 paying user, $12 MRR, 19 SEO pages, 3 weeks live.
**Diagnosis:** Product is strong enough. Stretch differentiation is real. The problem is distribution — nobody knows about us yet.
**Fastest path to 10 users:** Educator partnerships (one mention = 50-200 signups).
**SEO status:** Won't rank for 3-6 months — keep building, don't expect results yet.
**Social status:** Some TikTok views, light Pinterest/Instagram traction — compounding, not converting yet.

---

## Priority Stack (in order of revenue impact)

### 1. ⭐ CRITICAL: Send educator outreach emails (manual — you do this)
**Why:** Only channel that can produce paying users THIS WEEK. Everything else is months away.
- [ ] Review & personalize top 5 emails in `marketing/outreach/emails/`
- [ ] Send to: Starla Moore, Gold City Ventures, Chelsea Shelton, hey.itsteaa, RJ Martinez
- [ ] Update `marketing/outreach/outreach-tracker.json` status → `sent` + date
- [ ] Day 3: send follow-up (`marketing/outreach/templates/followup-day3.md`)
- [ ] Day 7: send final follow-up (`marketing/outreach/templates/followup-day7.md`)
- [ ] If any respond → offer Free Pro forever + 25% recurring commission
- [ ] After first 5, send next batch of 5

### 2. Test "First Month Free" or 7-day trial
**Why:** We don't know if people aren't signing up because of price or because they haven't found us. Remove the payment barrier to test.
- [ ] Decide: free trial (7 days) vs first month free (coupon code)
- [ ] Implement in Stripe + app flow
- [ ] Add to landing page CTA: "Start Free — No Credit Card Required" (if trial) or "First Month Free" (if coupon)
- [ ] Track conversion with PostHog

### 3. Conversion optimization — landing page review
**Why:** When educator traffic comes, the landing page needs to convert.
- [ ] Analyze current snaptosize.com homepage flow → signup → first export
- [ ] Compare against eRank, Alura, Marmalead landing pages
- [ ] Identify top 3 friction points
- [ ] Fix highest-impact friction (above the fold, CTA clarity, social proof)

### 4. Mockup generator — scope & validate (research only, don't build yet)
**Why:** Upload → resize → mockup = complete Etsy listing flow. Massively increases stickiness and differentiates from "just a resize tool." But validate demand first.
- [ ] Research: what mockup tools do Etsy sellers use now? (Placeit, Dynamic Mockups, Corjl)
- [ ] Research: what do they cost? What's missing?
- [ ] Validate: add a "Coming soon: Auto mockups" section to landing page, track clicks
- [ ] Decision: build after 10 paying users confirm demand

### Ongoing (autopilot — don't stop these)
- [ ] SEO pages: 2-3 quality pages/day via pipeline
- [ ] Social: Pinterest 4/day, IG 2-3/day, TikTok 1/day via pipeline
- [ ] Monitor PostHog data accumulation
- [ ] Respond to any email list signups within 24h

### NOT this week (explicitly deprioritized)
- ❌ Batch upload feature (30-60 sec is fast enough, no user complaints)
- ❌ Paid ads (CAC $802 vs LTV $144)
- ❌ New platforms (Shopify, Gumroad — Etsy first)
- ❌ Revenue dashboard (1 user, nothing to dashboard)
- ❌ Building mockup generator (research only)
- ❌ YouTube channel (educator partnerships first)

---

## Blockers
- Etsy seller account flagged (not blocking growth)
- PostHog data thin (3 weeks) — conversion rates unreliable
- SEO won't rank for 3-6 months (normal, keep building)

---

## Dropped Channels
- Reddit/Facebook outreach — flagged as ads
- Etsy DM outreach — account suspended
- Paid ads — CAC $802 vs LTV $144

---

## Growth Gates

| Gate | Metric | Status | Unlocks |
|------|--------|--------|---------|
| Send outreach emails | 5+ emails sent | ❌ Ready to send | Educator partnerships |
| 3 educator partnerships | Distribution proven | ❌ | Scale to 20+ partners |
| 100 SEO pages | Content foundation | ❌ 19 live | Shift to optimization |
| 10 paying users | WTP proven | ❌ 1 user | Small ad spend test, mockup build |
| 50 paying users | PMF signal | ❌ | Premium tier, affiliates at scale |

---

## Decision Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-03-20 | Stretch is a differentiator, not a weakness | Visual comparison shows crop destroys composition; stretch preserves all details |
| 2026-03-20 | Distribution > product at this stage | Product works, nobody knows about it. Fix awareness first. |
| 2026-03-20 | Mockup generator is the next major product bet | Resize + mockup = complete listing flow. Research now, build after 10 users. |
| 2026-03-20 | Batch upload deprioritized | 30-60 sec per image is fast enough. No user complaints about speed. |
| 2026-03-20 | Created /strategy skill | NotebookLM-backed strategic advisor for session-start orientation |
