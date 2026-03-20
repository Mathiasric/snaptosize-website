# MILESTONES.md — Revenue Targets & Progress
**Last updated:** 2026-03-20

---

## Current State
- **Paying users:** 1
- **MRR:** $12
- **SEO pages live:** 19
- **First paying customer:** 2026-03-03
- **Target:** $1M ARR (~7,500 paying users)

---

## The Math

$1M ARR requires:
- $83,333 MRR
- ~7,500 paying users (mix monthly/annual)
- At 7% free→pro: ~107,000 free users needed
- At 10% landing→signup: 1M+ organic visits/year
- **= 90k-180k organic sessions/month via multi-channel content**

---

## Revenue Milestones

| Milestone | Users | MRR | Status | Action when hit |
|-----------|-------|-----|--------|-----------------|
| First paying | 1 | $12 | ✅ Done | Ship content daily |
| 10 paying | 10 | $120 | ❌ | Double content volume |
| 50 paying | 50 | $600 | ❌ | Launch affiliates |
| 100 paying | 100 | $1,200 | ❌ | Test pricing changes |
| 500 paying | 500 | $6,000 | ❌ | Scale paid ads |
| 1,000 paying | 1,000 | $12,000 | ❌ | Expand to Shopify/Gumroad |
| 7,500 paying | 7,500 | $83,333 | ❌ | $1M ARR 🎯 |

---

## What's Built

### Product
- ✅ Core app (upload → ZIP packs) — live, stable
- ✅ Free/Pro plans with Stripe billing
- ✅ Clerk auth + PostHog analytics
- ✅ Watermark on free, unlimited on Pro

### Marketing Infrastructure
- ✅ Marketing site (snaptosize.com, Cloudflare Pages)
- ✅ 15 SEO pages live (2 new pages deployed 2026-03-18)
- ✅ PostHog pageview tracking
- ✅ Lead capture backend (Worker /subscribe)
- ✅ Email capture component on site
- ✅ Resend integration (alerts + email list)
- ✅ Hero WebP optimization + OG images
- ✅ Lead capture: email + PDF + 2 automated follow-up emails (Resend)
- ✅ PostHog dashboards on webapp + marketing site
- ✅ Pinterest, Instagram, TikTok accounts active (daily posting)
- ✅ DM outreach workflow to Etsy sellers

### Pipelines & Automation
- ✅ SEO content pipeline (10 pages/week target)
- ✅ Social media pipeline (7 videos + 21 pins/week)
- ✅ Remotion video rendering (TikTokVertical template)
- ✅ Outreach tracker
- ✅ Growth reporter
- ✅ Partner program (landing page + ref tracking + PostHog attribution)
- ✅ PostHog API CLI access (query events, persons, funnels via personal API key)
- ✅ Buffer API integration
- ✅ Cloudflare R2 for content hosting

### Agents
- ✅ content-researcher — keyword research + briefs
- ✅ seo-writer — brief → deployable page prompt
- ✅ social-media-analyst — performance analysis
- ✅ social-media-researcher — trends + competitors
- ✅ social-media-ideator — content ideas
- ✅ social-media-scripter — full scripts
- ✅ social-media-content-creator — produce final content
- ✅ visual-content-creator — tool selection for visuals
- ✅ social-media-publisher — Buffer publishing

---

## What's NOT Built Yet

- ✅ ~~Landing → App UTM attribution~~ (ref/source tracking via PartnerRefCapture)
- ✅ ~~Affiliate program~~ (partner page live, ref tracking working)
- ❌ Revenue dashboard (MRR tracking view)
- ❌ Analytics agent team (PostHog API querying, funnel analysis, automated reports) — trigger: 100+ users
- ❌ Automated partner commission tracking (Stripe Connect) — trigger: 3+ active partners
- ❌ In-product upsell modal
- ❌ YouTube channel
- ❌ Paid acquisition
- ❌ Batch processing feature
- ❌ Premium tier
- ❌ Planner/printable layout adaptation (Letter→A4→A5 re-layout) — adjacent market, different product. Explore after wall art PMF proven.
- ❌ Auto mockup generator (upload image → 10-20 frame/wall mockups) — bundle with SnapToSize as premium tier ($29/mo). Trigger: 10+ paying users. Proves resize demand first, then add mockups for higher price + lower churn.
- ❌ Community listening agent — monitors Reddit/Etsy forums for sizing pain points, feeds into SEO + social pipelines

---

## Completed This Week (2026-03-19)
- ✅ Partner program live: /partners landing page + /ref/[name] referral redirects
- ✅ Partner referral tracking: PostHog person properties (partner_ref, partner_source) verified working
- ✅ PostHog API CLI access: query events, persons, funnels via personal API key
- ✅ UTMPersistence updated to forward ref/source params to app links
- ✅ Footer updated with Partner Program link
- ✅ Docs: PARTNER_PROGRAM.md, APP_PARTNER_TRACKING_SPEC.md, NotebookLM synced
- ✅ CLAUDE.md: added secrets-in-committed-files rule
- ✅ Educator outreach prep: 20 prospects researched, 20 personalized emails written, follow-up templates ready
- ✅ Outreach tracker populated (20 entries) — ready to send
- ✅ Gap analysis: educator content vs SnapToSize features (95% coverage, no blockers)

## Completed Previous Week (2026-03-18)
- ✅ 2 new SEO pages: etsy-16x20-print-size, best-file-format-etsy-printables
- ✅ Lead capture fully live: email + PDF cheat sheet + 2 automated follow-up emails
- ✅ PostHog dashboards built for webapp + marketing site click tracking
- ✅ Social media active daily: Pinterest 4/day, Instagram 2-3/day + reels, TikTok 1/day
- ✅ DM outreach to Etsy sellers started (5-10/day)
- ✅ Mega menu navigation deployed
- ✅ Scaling plan updated — dropped Reddit/Facebook (bad ROI)

## Completed Last Week (2026-03-17)
- ✅ 3 new SEO pages: best-resolution-for-etsy-printables, how-many-sizes-etsy-printable, how-to-package-digital-wall-art-for-etsy
- ✅ Hero upgrades for how-to-sell-digital-downloads + what-files-to-include (CSS-only visuals)
- ✅ Cross-linking between all new pages + nav/footer entries
- ✅ OG images generated for all new + upgraded pages
- ✅ NotebookLM scaling playbook notebook created with 6 sources
- ✅ $1M ARR scaling plan written (docs/plans/scaling-to-1m-arr.md)
- ✅ CLAUDE.md updated with auto-sync rules + NotebookLM integration
