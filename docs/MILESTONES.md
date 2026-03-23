# MILESTONES.md — Revenue Targets & Progress
**Last updated:** 2026-03-22

---

## Current State
- **Paying users:** 1
- **MRR:** $12
- **SEO pages live:** 25
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
- ✅ 25 SEO pages live (2 new pages deployed 2026-03-23: ratio comparison + niche vertical)
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

### Fast-Feedback Growth (NEW — prioritized 2026-03-22)
- ❌ Product Hunt launch — prep listing, screenshots, GIF, schedule launch
- ✅ ~~Interactive "Etsy Print Size Calculator" tool~~ (`/etsy-print-size-calculator`) — deployed 2026-03-22
- ❌ AppSumo / lifetime deal listing — submit application, prepare assets
- ❌ Cold email campaign to Etsy printable sellers (50 targets identified)
- ❌ Facebook group admin partnerships (top 5 groups identified)

### Product & Conversion
- ✅ ~~Landing → App UTM attribution~~ (ref/source tracking via PartnerRefCapture)
- ✅ ~~Affiliate program~~ (partner page live, ref tracking working)
- ❌ Revenue dashboard (MRR tracking view)
- ❌ In-product upsell modal
- ❌ Batch processing feature — trigger: 50+ paying users
- ❌ Premium tier — trigger: 50+ paying users
- ❌ Auto mockup generator — trigger: 10+ paying users

### Channels (Future)
- ❌ YouTube channel — trigger: after educator partnerships prove out
- ❌ Paid acquisition — trigger: $5K MRR, proven conversion rate
- ❌ Analytics agent team — trigger: 100+ users
- ❌ Automated partner commission tracking (Stripe Connect) — trigger: 3+ active partners
- ❌ Community listening agent — monitors Reddit/Etsy forums for sizing pain points

### Adjacent Markets (Post-PMF)
- ❌ Planner/printable layout adaptation (Letter→A4→A5 re-layout)
- ❌ Social media image sizing (secondary ICP, same technology)

---

## Completed This Week (2026-03-23)
- ✅ 2 new SEO pages deployed: `/2-3-vs-4-5-ratio` (first ratio comparison page) + `/etsy-botanical-print-sizes` (second niche vertical)
- ✅ SEO pipeline W13 batch started — 2 pages researched, written, built, deployed
- ✅ Etsy Print Size Calculator interactive tool page deployed (`/etsy-print-size-calculator`)
- ✅ Design polish: shared EmailCaptureSection + FinalCTA components (teal accents) across all 24 SEO pages
- ✅ Calculator discoverability: added to Header nav, Footer, 8 internal links from key pages, OG image generated
- ✅ 2 new SEO pages deployed (4×6 + 12×16 print sizes)
- ✅ Daily social media content: Pinterest + Instagram + TikTok
- ✅ 4 educator outreach emails sent
- ✅ Strategic assessment: identified 5 new fast-feedback growth channels
- ✅ Updated scaling plan with Product Hunt, interactive tools, AppSumo, cold email, FB group strategies

## Completed Previous Week (2026-03-19)
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
