# SnapToSize Growth Engine v2 — Design Spec
**Date:** 2026-03-18
**Status:** Active execution plan
**Context:** 1 paying user, $12 MRR, 15 SEO pages, 2-3 weeks live, Etsy account flagged

---

## Situation Assessment

### What we know
- **Zero mainstream competitors** in Etsy printable sizing automation (confirmed by competitor analysis)
- **SEO takes 3-6 months** to compound — we're 2-3 weeks in, so zero organic traffic is normal
- **Paid ads don't work** at $12/mo (average SaaS CAC is $802, our annual LTV is $144)
- **All outreach channels failed** — Reddit/Facebook flagged as ads, Etsy DMs got account suspended
- **Etsy seller account (60 sales) is flagged** — need to appeal
- **Social media is long game** — Pinterest takes 3-6 months to compound, TikTok/Reels is lottery

### Our unfair advantage
- **Claude Max** = unlimited AI compute for research, content optimization, outreach prep
- **Gemini MCP** = image generation at $0
- **Remotion** = video generation at $0
- **Agent systems** = automated pipelines for social + publishing
- **Zero competition** = we can own the entire "Etsy print sizing" search niche

### What's already working (don't change)
- SEO pages: 2-3 quality pages/day (manually QA'd, not AI slop)
- Social posting: Pinterest 4/day, IG 2-3/day, TikTok 1/day
- Lead capture: email + PDF + 2 automated follow-up emails
- PostHog tracking: live on both sites
- Demo video: 50 sec on homepage

---

## Priority Stack (Objective Order)

### Priority 1: Build Affiliate/Partners Infrastructure
**Why first:** This is a prerequisite for educator outreach. Can't pitch partnerships without a system to track referrals and pay commissions.

**Deliverables:**
- `/partners` page on snaptosize.com — what the program offers, how it works, signup
- Affiliate tracking: UTM-based referral links (`?ref=educator-name`) tracked in PostHog
- Stripe referral code or coupon system for commission attribution
- Personalized landing pages: `/ref/[name]` → redirect to app with UTM params
- Commission structure: 25% recurring on all referred paying users
- Offer: Free Pro account forever for all partners

**Effort:** 1-2 days to build
**Dependency:** Must be live before any educator outreach

### Priority 2: YouTube Educator Research + Outreach
**Why #2:** This is the single highest-impact channel for getting customers in weeks, not months. eRank's entire growth trajectory came from Starla Moore (Etsy YouTube educator). One mention from a 10K-50K channel = 50-200 targeted signups.

**Phase A — Deep Research (Claude Max does this):**
- Identify 20 Etsy micro-educators on YouTube (5K-50K followers, active in 2026)
- For each: audience size, content focus, engagement rate, contact info, recent videos
- Categorize by relevance: digital prints vs. physical products vs. general Etsy
- Known targets: Starla Moore, Kara Buntin, Brandon Timothy Canada, Dylan Jahraus
- Research their existing tool partnerships (eRank, Alura, Marmalead etc.)
- Identify what angle would make them want to feature SnapToSize

**Phase B — Personalized Outreach (Claude Max writes these):**
- 20 personalized emails/DMs, each referencing their specific content
- Pitch: "I built a free tool that solves the exact print sizing problem your audience asks about"
- Offer: Free Pro forever + 25% recurring affiliate + we provide demo assets they can use
- Include: link to demo video, link to /partners page, personalized referral link
- Follow-up templates for day 3 and day 7

**Phase C — Send + Track:**
- Send outreach (manual — you do this, not automated)
- Track responses, partnerships activated, referral signups
- Iterate pitch based on what works

**Effort:** 2-3 days research, 1 day writing outreach, ongoing follow-up
**Expected impact:** 3-5 active partnerships within 4 weeks → pipeline to 10+ paying users

### Priority 3: Conversion Optimization
**Why #3:** When educators send traffic (or SEO starts ranking), the site must convert. This is the multiplier on everything else. No point driving traffic to pages that don't convert.

**Research first (Claude Max):**
- Analyze how eRank, Alura, Marmalead, Dynamic Mockups structure their landing pages
- What's their CTA placement? Pricing page design? Onboarding flow?
- Compare SnapToSize homepage, pricing page, and app onboarding to these
- Identify specific friction points and improvements

**Then optimize:**
- Homepage: Is the value prop instantly clear? Does the demo video auto-play?
- Pricing page: Is annual plan highlighted? Is the "save 33%" anchor visible?
- App onboarding: What happens after signup? How fast to first export?
- SEO pages: Are CTAs compelling? Are they positioned at decision points?
- Trust signals: Social proof, "18,000+ packs generated", testimonials

**Effort:** 1-2 days research, 1-2 days implementation
**Expected impact:** 2-5x improvement in visitor→signup→upgrade conversion

---

## Ongoing Activities (Unchanged)

These continue as-is. No changes needed.

| Activity | Cadence | Owner |
|----------|---------|-------|
| SEO page creation | 2-3 quality pages/day | Manual (with Claude assist) |
| Pinterest posting | 4 pins/day | Buffer pipeline |
| Instagram posting | 2-3 posts/day + reels | Buffer pipeline |
| TikTok posting | 1 video/day | Manual upload |
| Lead capture + email nurture | Automated | Resend |
| PostHog monitoring | Weekly review | Manual |

---

## Channels We Are NOT Pursuing

| Channel | Reason | Revisit when |
|---------|--------|-------------|
| Google/Pinterest/FB Ads | CAC $802 vs LTV $144 | $5K MRR + 7%+ conversion |
| Reddit outreach | Flagged as ads | Never |
| Facebook groups | Flagged as ads | Never |
| Etsy DMs | Account flagged/suspended | Never |
| Paid sponsorships | Cash-negative at current MRR | 50+ paying users |

---

## Timeline

| Week | Focus | Output |
|------|-------|--------|
| 1 | Build /partners + affiliate tracking | Infrastructure ready |
| 1-2 | Research 20 educators + write outreach | 20 profiles + 20 emails ready |
| 2-3 | Send outreach + begin conversion research | Outreach sent, CRO analysis done |
| 3-4 | Follow up + implement CRO improvements | First partnerships activating |
| 5-8 | Educator content going live + SEO indexing | First referred signups |
| 8-12 | Compound effects | Target: 5-10 paying users |

---

## Success Metrics

### Leading (track weekly)
- Educators contacted / responded / activated
- SEO pages deployed (maintain 2-3/day)
- Pages indexed by Google (Search Console)

### Lagging (track monthly)
- Organic sessions/week
- Signups (free accounts)
- Free → Pro conversions
- MRR

### Phase gates
| Gate | Metric | Unlocks |
|------|--------|---------|
| Partners page live | Infrastructure ready | Educator outreach |
| 3 educator partnerships | Distribution channel proven | Scale to 20+ partners |
| 100 SEO pages | Content foundation | Shift to optimization |
| 1,000 sessions/week | Traffic working | Conversion optimization focus |
| 10 paying users | Willingness to pay proven | Consider small ad spend |

---

## Key Insight

The only way to get customers NOW (before SEO compounds) without spending money is **borrowed audiences** — people who already have the trust of Etsy sellers. That's YouTube educators. Everything else either costs money we can't afford (ads), takes months (SEO), or gets flagged (outreach).

The strategy is: build affiliate infrastructure → partner with educators → optimize for conversions → let SEO compound in the background.
