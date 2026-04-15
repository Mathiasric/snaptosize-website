# MILESTONES.md — Revenue Targets & Progress
**Last updated:** 2026-04-10

---

## Current State
- **Paying users:** 6 (5 monthly, 1 yearly)
- **MRR:** $68 (5× $11.99 monthly + $97/year amortized)
- **Total revenue collected:** $156.95 (1× $97 yearly + 5× $11.99 monthly)
- **SEO pages live:** 66 (69 total incl. non-SEO)
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
| First paying | 1 | $12 | ✅ Done (2026-03-03) | Ship content daily |
| 3 paying | 3 | $32 | ✅ Done (2026-03-23) — $109 revenue today | Keep pushing distribution |
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
- ✅ 28 sizes across 5 ratio packs + 8 square + 3 large via single export (up to 70 files from one upload)
- ✅ Free/Pro plans with Stripe billing
- ✅ Clerk auth + PostHog analytics
- ✅ Watermark on free, unlimited on Pro

### Marketing Infrastructure
- ✅ Marketing site (snaptosize.com, Cloudflare Pages)
- ✅ 66 SEO pages live (2 new pages deployed 2026-04-15: etsy-black-and-white-art-sizes + etsy-anime-manga-art-sizes)
- ✅ 64 SEO pages live (2 new pages deployed 2026-04-14: etsy-typography-wall-art-sizes + etsy-map-art-print-sizes)
- ✅ 62 SEO pages live (2 new pages deployed 2026-04-13: etsy-japandi-art-sizes + etsy-line-art-sizes)
- ✅ 60 SEO pages live (2 new pages deployed 2026-04-12: etsy-celestial-wall-art-sizes + etsy-floral-print-sizes)
- ✅ 58 SEO pages live (2 new pages deployed 2026-04-10)
- ✅ 3-email nurture sequence live for free app signups (Worker /app-signup + Resend, day 0/2/5)
- ✅ Onboarding hint added to app (3-step guide, auto-dismisses after first export)
- ✅ Marketing CTAs: "No account needed" across all 69 SEO pages
- ✅ 4 SEO page titles improved based on SERP analysis
- ✅ 56 SEO pages live (2 new pages deployed 2026-04-10: etsy-sticker-sheet-size + etsy-bookmark-size)
- ✅ 54 SEO pages live (2 new pages deployed 2026-04-10: etsy-6x9-print-size + etsy-8x12-print-size)
- ✅ 29 SEO pages live (2 new pages deployed 2026-03-25: A3 international + gallery wall print sizes)
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
- ✅ ~~Product Hunt launch~~ — launched 2026-03-31, all assets deployed, email blast sent, social posted
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

### Future Product Expansion — New Pack Types
- ❌ **Panoramic / wide ratio packs** (1:2, 1:3) — sizes like 12×24, 10×20, 8×24, 12×36. Growing niche on Etsy for landscape art and above-sofa statement pieces. Same technology, new ratio group.
- ❌ **Square pack (1:1)** — currently 8 sizes in single export only. Bundling into a ZIP pack would add value for Instagram-driven art, nursery sets, and gallery wall collections. Low engineering effort.
- ❌ **Social media sizing pack** — 1080×1080, 1080×1350, 1080×1920 etc. Different ICP (content creators), but same core technology.

### Adjacent Markets (Post-PMF)
- ❌ Planner/printable layout adaptation (Letter→A4→A5 re-layout)
- ❌ Social media image sizing (secondary ICP, same technology)

---

## Completed This Week (2026-03-31)
- ✅ **Product Hunt launched!** All assets, email blast, social media, IG Story — everything deployed
- ✅ 8 new SEO pages deployed (20×24, 11×17, 12×18, POD vs digital download, quote wall art, and more)
- ✅ PRODUCTHUNT promo code live (100% off first month, 200 redemptions, expires Apr 30)

## Completed Previous Week (2026-03-24)
- ✅ 2 new SEO pages deployed: `/etsy-8-5x11-print-size` (US Letter size page) + `/etsy-digital-download-blurry-prints` (problem-solution troubleshooter)
- ✅ Nav, footer, page registry, pipeline state all updated
- ✅ Removed A0, 24×36, 24×32 from ZIP packs (single export only) — fixed ISO A-series timeout bug for Pro user
- ✅ Reframed all 27 SEO pages: "up to 70 files" / "30+ sizes" positioning (was "28 sizes")
- ✅ Added 11×17 to Extras pack listings across all pages (6 sizes now)
- ✅ Updated Remotion defaults, CONTENT_REFERENCE.md, lessons.md for new marketing language
- ✅ 3 educator outreach emails sent (Cassie Smallwood, Renae Christine, Giggles Galore) — 7 total sent

## Completed Previous Week (2026-03-23)
- ✅ **2 new paying customers!** (1 Pro Monthly $11.99 + 1 Pro Yearly $97) — $109 revenue today, MRR $12 → $32
- ✅ App improvements: added 5×5 square size + 13×19 extras size, added 11×17 to Extras pack
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
