# SnapToSize — Scaling to $1M ARR Execution Plan
**Created:** 2026-03-17
**Status:** 1 paying user · $12 MRR · 23 SEO pages · Calculator live · Social active · Lead capture live · Partner program live · 4 outreach emails sent
**Last updated:** 2026-03-22

---

## The Gap

| Metric | Now | Target | Gap |
|--------|-----|--------|-----|
| Paying users | 1 | 7,500 | 7,499x |
| MRR | $12 | $83,333 | 6,944x |
| Organic traffic | ~50/mo (est.) | 90-180k/mo | 2,000-3,600x |
| SEO pages | 23 | 200+ | ~9x |
| Conversion rate | Unknown | 7-10% | No data |
| Distribution channels | 6 (SEO + Pinterest + Instagram + TikTok + Email + Partners) | 8+ active | Adding 3 new |

---

## Phase 1: Foundation (Now → 10 paying users)
**Timeline:** Weeks 1-8 · **Gate:** 10 users proves willingness to pay

### 1.1 SEO Dominans — AI-Powered Content Blitz
**Why:** Zero competition for "Etsy printable sizing" niche (confirmed by competitor analysis). No mainstream competitor offers end-to-end automation. We own this. Claude Max = unlimited compute for content production.

**Target: 100 pages by week 4, 200 by week 8** (5-10 pages/day using parallel agent execution)

**Page types to build:**
| Type | Count | Status |
|------|-------|--------|
| Size-specific (11x14, 18x24, 24x36, A4, A3, etc.) | 25 | 9 built (8x10, 5x7, 16x20, 24x36, 18x24, 11x14, A4, 4x6, 12x16) |
| Ratio comparisons (2:3-vs-3:4, etc.) | 10 | 0 built |
| Problem/troubleshooting (file-too-big, wrong-dpi, etc.) | 15 | 5 built |
| Niche verticals (nursery, botanical, wedding, minimalist) | 10 | 1 built (nursery) |
| How-to guides (pricing, beginner, passive income) | 15 | 7 built |
| Comparison/alternatives (vs-canva, vs-photoshop) | 10 | 0 built |
| **Total target** | **85 new pages** | **23 live** |

**Priority keywords:**
- "how to price your etsy printables" (medium comp, high volume)
- "etsy printables beginner guide" (medium comp, high volume)
- "etsy digital download tips" (medium comp)
- "how to make passive income on etsy" (high volume, broader)
- All remaining Etsy print size long-tail queries

**Quality gates (never sacrifice for speed):**
- Every page passes `npx next build`
- Playwright screenshot QA (desktop + mobile)
- Unique, valuable content (not thin programmatic filler)
- Article + BreadcrumbList + FAQPage schema, 3+ CTAs, internal links

**Estimated impact:** 200 pages × 300 sessions/mo = 60,000 sessions/mo

### 1.2 Conversion Tracking — We're Flying Blind
**Why:** We don't know our conversion rate. Can't optimize what we can't measure.

**Actions:**
- [ ] **UTM attribution on marketing site** (listed as not built in MILESTONES.md)
  - Every CTA → `?source=seo_[slug]&kind=guide` (already on new pages)
  - Track: landing page → app click → signup → first export → upgrade
- [ ] **PostHog funnel dashboard** — landing→signup→export→upgrade flow
- [ ] **Weekly metrics check** — MRR, signups, exports, conversion rate
- [ ] Wire up "Landing → App click" tracking (listed as missing in GROWTH_STATE.md §7)

### 1.3 YouTube Educator Partnerships + Community Presence
**Why:** SEO takes 3-6 months to compound. Educator partnerships can drive targeted signups NOW at $0 cash cost. eRank grew primarily through Starla Moore.

**❌ All outreach channels dropped:**
- Reddit/Facebook — flagged as ads, bad ROI
- Etsy DMs — account flagged/suspended after outreach

**YouTube Educator Outreach (highest-impact fast channel):**
- [ ] Research 20 Etsy micro-educators (5K-50K YouTube followers)
- [ ] Write personalized outreach emails (Claude generates these)
- [ ] Offer: Free Pro account forever + 25% recurring affiliate commission
- [ ] Provide: Demo video link + personalized landing page
- [ ] Target educators: Starla Moore, Kara Buntin, Brandon Timothy Canada, Dylan Jahraus + 16 more micro-creators
- [ ] Build `/partners` affiliate page on snaptosize.com
- [ ] Follow up at day 3 and day 7

**Community Presence (zero-cost, value-first):**
- [ ] Join Discord communities: Etsy Empire, Fireflies, Ecom Queens
- [ ] Join community.etsy.com forums (Education & Insights)
- [ ] Weeks 1-2: Answer print sizing questions only (value-first)
- [ ] Week 3+: Share tool naturally when asked "how do you handle all those sizes?"

**Estimated impact:** 1 educator partnership = 50-200 targeted signups. 3-5 partners = pipeline to 10+ paying users.

### 1.4 Email Nurture ✅ LIVE
**Why:** Visitors who don't convert immediately need follow-up.

**Done:**
- [x] Lead capture live on site (email + PDF cheat sheet download)
- [x] 2 automated follow-up emails after signup
- [x] Email → PDF → nurture sequence working

**Remaining:**
- [ ] Weekly newsletter with sizing tips + new guide announcements
- [ ] Track email → signup → upgrade conversion

### 1.5 Product Hunt Launch (NEW — added 2026-03-22)
**Why:** Free launch event that can deliver 200-2000 visits in a single day. Etsy-niche SaaS tools perform well on PH. Zero cost, fast feedback.

**Actions:**
- [ ] Write tagline + description (< 260 chars)
- [ ] Prepare 4-5 product screenshots (hero, upload flow, ZIP output, before/after)
- [ ] Short demo GIF or clip from existing 50-sec video
- [ ] Set up maker profile
- [ ] Schedule launch Tuesday-Thursday
- [ ] Prep "first comment" with founder story
- [ ] Share launch link via email list + social channels on launch day

**Estimated impact:** 500-2000 visits, 30-100 signups, validation signal from tech/SaaS audience

### 1.6 ✅ Interactive Free Tool — "Etsy Print Size Calculator" (DONE — 2026-03-22)
**Why:** Captures tool-intent searches (completely different from article SEO). Free tools are proven traffic magnets — Ahrefs free backlink checker, Canva free tools, Coolors palette generator all used this playbook. People using a calculator are in "doing" mode, not "reading" mode — higher intent.

**Actions:**
- [x] Build `/etsy-print-size-calculator` page on marketing site
- [x] Features: enter image dimensions → crop %, DPI quality, orientation for all 30 sizes
- [x] Reference tab with complete 30-size table (pixels, megapixels, use cases)
- [x] CTA: "Want all sizes automatically? Try SnapToSize Free"
- [x] Schema markup (WebApplication + FAQPage + Article + BreadcrumbList)
- [x] Added to Header nav, Footer, 8 internal links from key pages, OG image generated
- [ ] Share on social + Product Hunt + email sequence

**Target keywords:** "etsy print size calculator", "print dpi calculator", "image size checker for etsy"
**Estimated impact:** 500-2000 sessions/mo within 2-3 months, high conversion intent

### 1.7 Cold Email to Etsy Sellers (NEW — added 2026-03-22)
**Why:** Etsy DMs got the account flagged, but email is a completely separate channel. Many top Etsy printable sellers have public email in their shop About page, linked website, or via Hunter.io. These are exactly our ICP — sellers who already have the problem we solve.

**Actions:**
- [ ] Find 50 top Etsy printable sellers with public email addresses
- [ ] Write personalized cold email template (genuine, personal, short — not spam)
- [ ] Send 5-10 per day manually
- [ ] Offer: "I built this tool for sellers like you. Try it free — I'd love your feedback."
- [ ] Track in `marketing/outreach/outreach-tracker.json`

**Estimated impact:** 1-3% conversion → 1-3 signups from first 50 emails

### 1.8 AppSumo / Lifetime Deal Marketplace (NEW — added 2026-03-22)
**Why:** AppSumo has 1M+ newsletter subscribers who actively buy SaaS tools. At $12 MRR with 1 user, we need users more than margin. A lifetime deal campaign can deliver 200-2000 users in 30 days, plus reviews, feedback, and word-of-mouth.

**Actions:**
- [ ] Research AppSumo partner submission (appsumo.com/partners)
- [ ] Decide pricing: $29 (1-code), $58 (2-code stack)
- [ ] Prepare listing: screenshots, demo video, description
- [ ] Submit application
- [ ] Alternatives if slow: PitchGround, Dealify, StackSocial

**Tradeoff:** Giving away lifetime access cheap. But at $12 MRR, 200 users at $29 = $5,800 cash + product validation + reviews + word-of-mouth. Worth it.

**Estimated impact:** 200-2000 lifetime sales, $5,800-$58,000 one-time revenue

### 1.9 Facebook Group Admin Partnerships (NEW — added 2026-03-22)
**Why:** Group admins are gatekeepers to thousands of Etsy sellers. One partnership = access to 5,000-20,000 target users. Different from "posting in groups" (which gets flagged). This is direct admin-to-admin partnership.

**Actions:**
- [ ] Identify top 5 Facebook groups for Etsy digital download sellers
- [ ] Contact admins directly (not post in group)
- [ ] Offer: "Free Pro for all members for 1 month" or exclusive group discount
- [ ] Provide admin with affiliate link for recurring commission
- [ ] If successful: replicate across more groups

**Estimated impact:** Access to 10,000+ Etsy sellers through 2-3 group partnerships

---

## Phase 2: Validate (10 → 50 paying users)
**Timeline:** Weeks 8-16 · **Gate:** 50 users proves product-market fit signal

### 2.1 Social Media Scale-Up
**Why:** Accounts exist, ~50 posts shipped. Now scale volume and consistency.

**Actions:**
- [ ] **Analyze what's working:** Which pins/posts get saves, clicks, engagement?
- [ ] Remotion videos: "Etsy Print Tips" series — 30-sec educational clips
- [ ] Pinterest: Size guide infographics (high save rate in craft/seller niche)
- [ ] Consistency > virality: post every single day for 90 days

**Estimated impact:** Pinterest alone drives 5-15k sessions/mo for craft niches within 3 months

### 2.2 YouTube — Long-Form Authority
**Why:** "How to sell printables on Etsy" has 100k+ monthly searches. Video ranks in Google AND YouTube.

**Actions:**
- [ ] Launch YouTube channel with 3 cornerstone videos:
  1. "Complete Guide to Selling Digital Prints on Etsy (2026)"
  2. "How to Create 30 Print Sizes in 10 Seconds"
  3. "Etsy Printable Sizing Guide — Every Ratio Explained"
- [ ] Use NotebookLM for educational video production (9:16 supported)
- [ ] Screen recordings of SnapToSize workflow (upload → download ZIPs)
- [ ] 2 videos/week cadence

### 2.3 Partnerships & Influencers
**Why:** Competitor analysis confirms "no mainstream competitors" — Etsy educators will gladly recommend us.

**Actions:**
- [ ] Identify 20 Etsy educator YouTubers (10k-100k subs)
- [ ] Offer: free lifetime Pro + affiliate commission (20-30%)
- [ ] Guest posts on Etsy seller blogs (link building + authority)
- [ ] Co-branded "Printable Starter Kit" guide with top Etsy coaches

### 2.4 In-Product Conversion
**Why:** Free users need clear upgrade triggers.

**Actions:**
- [ ] **In-app upsell modal** after 3rd free export: "You've created 3 packs. Pro gives you unlimited + no watermark"
- [ ] **Watermark upgrade CTA** on download: "Remove watermark → upgrade for $11.99/mo"
- [ ] **Usage dashboard** showing "X exports used today / 5 free limit"

---

## Phase 3: Scale (50 → 500 paying users)
**Timeline:** Weeks 16-32 · **Gate:** 500 users proves growth engine works

### 3.1 Affiliate Program
**Why:** Etsy sellers trust other sellers. Word-of-mouth is the strongest channel.

**Actions:**
- [ ] Launch affiliate program: 30% recurring commission
- [ ] Affiliate landing page with unique tracking links
- [ ] Recruit top Etsy sellers (they recommend tools to their audience)
- [ ] Target: 50 active affiliates driving 10 signups/month each = 500/month

### 3.2 SEO at Scale — Programmatic Pages
**Why:** 200+ pages capturing every long-tail "etsy [size] print" query.

**Actions:**
- [ ] Programmatic size pages: all 30 sizes get dedicated pages
- [ ] Programmatic ratio pages: all ratio combinations
- [ ] "Etsy vs" pages: "SnapToSize vs Photoshop", "SnapToSize vs Canva for printables"
- [ ] Niche verticals: botanical, minimalist, nursery, abstract — size guides per niche
- [ ] Target: 200 pages indexed by week 32

**Estimated impact:** 200 pages × 300 sessions/mo = 60,000 sessions/mo

### 3.3 Batch Processing Feature
**Why:** High-volume sellers (50+ listings) need to process multiple images at once. Justifies premium tier.

**Actions:**
- [ ] Build batch upload: select 10 images → generate all packs in one go
- [ ] Premium tier: $29/mo or $249/year
- [ ] Target segment: sellers with 50+ listings doing $2k+/mo

### 3.4 Adjacent Markets (Preparation Only)
**Why:** Same problem exists on Shopify, Creative Market, Gumroad.

**Actions:**
- [ ] Build landing pages: `/shopify-printable-sizes`, `/creative-market-print-guide`
- [ ] Test organic traffic before building platform-specific features
- [ ] Do NOT build integrations yet — validate demand first

---

## Phase 4: Accelerate (500 → 7,500 paying users)
**Timeline:** Weeks 32-52 · **Gate:** $1M ARR

### 4.1 Paid Acquisition
**Only after:** conversion rate proven (7%+), LTV:CAC viable

**Actions:**
- [ ] Google Ads: "etsy printable sizes", "etsy digital download tool"
- [ ] Pinterest Ads: promoted pins targeting printable sellers
- [ ] Facebook/Instagram ads targeting Etsy seller audiences
- [ ] Budget: start $500/mo, scale to $5k/mo if CAC < $30

### 4.2 Platform Expansion
- [ ] Shopify digital download sizing
- [ ] Creative Market requirements
- [ ] Gumroad file organization
- [ ] Custom ratio support for non-standard platforms

### 4.3 Enterprise / Agency Tier
- [ ] White-label or API access for print-on-demand shops
- [ ] Custom branding on ZIP packs
- [ ] Team accounts with shared asset library

---

## Revenue Model to $1M

| Phase | Users | MRR | Traffic/mo | Pages | Channels |
|-------|-------|-----|------------|-------|----------|
| Phase 1 (wk 1-8) | 10 | $120 | 5-10k | 200 | SEO + educators + PH + cold email + AppSumo + FB groups |
| Phase 2 (wk 8-16) | 50 | $600 | 20-40k | 300 | + social + YouTube + affiliates + interactive tools |
| Phase 3 (wk 16-32) | 500 | $6,000 | 60-100k | 400+ | + partnerships + premium tier |
| Phase 4 (wk 32-52) | 7,500 | $83,333 | 150-200k | 500+ | + paid ads + platforms |

---

## Biggest Levers (Ranked by Impact — updated 2026-03-22)

1. **Product Hunt + launch events** — One-day burst that can deliver 500+ signups. Fast feedback, zero cost. Do this FIRST.

2. **Educator partnerships** — 1 mention = 50-200 targeted signups. 3-5 partners = pipeline to 10+ paying. 4 emails sent, awaiting responses.

3. **Interactive free tools** — Print size calculator, DPI checker. Captures tool-intent searches (higher conversion than articles). Proven playbook.

4. **AppSumo lifetime deal** — 200-2000 users in 30 days. Trades margin for user base. At $12 MRR, users > margin.

5. **SEO volume** — 200 pages capturing every "etsy [size/ratio/problem]" query. Zero competition. Compounding. Won't rank for 3-6 months but builds moat.

6. **Cold email** — Direct access to ICP. 5-10/day, 1-3% conversion. Slow but steady and highly targeted.

7. **FB group admin partnerships** — Gatekeepers to 5,000-20,000 sellers per group. One partnership = massive distribution.

8. **Conversion optimization** — Going from unknown to 10% free→paid is the difference between 500 and 5,000 paying users on the same traffic.

9. **Pinterest** — Massively underrated for craft/seller niches. Pins have 3-6 month lifespan. 21 pins/week compounds fast.

10. **YouTube** — "How to sell printables on Etsy" videos get 50-500k views. One good video = months of signups.

---

## AI-Powered Production Capacity

Claude Max + Gemini MCP + Remotion + Agent systems = production at 10x human team rate.

| Asset | Tool | Volume/day | Cost |
|-------|------|-----------|------|
| SEO pages | Claude Max + SEO pipeline agents | 5-10 pages | $0 |
| Pinterest pins | Gemini image gen + Buffer | 4 pins | $0 |
| Instagram posts | Gemini + Buffer | 2-3 posts | $0 |
| TikTok/Reels | Remotion + manual upload | 1 video | $0 |
| Outreach emails | Claude Max | 5-10 personalized | $0 |
| OG images | Playwright screenshot | Per new page | $0 |

---

## What to Do THIS WEEK (Mar 22-28)

### Already done ✅
- [x] TikTok + Instagram + Pinterest accounts created and active
- [x] Social media: Pinterest 4/day, Instagram 2-3/day + reels, TikTok 1/day
- [x] PostHog dashboards live on webapp + marketing site
- [x] UTM attribution on SEO page CTAs
- [x] 23 SEO pages live
- [x] Lead capture live: email + PDF cheat sheet + 2 automated follow-up emails
- [x] Demo video on homepage (50 sec, 1.5x speed)
- [x] Partner program live (/partners + ref tracking)
- [x] 20 educator prospects researched, 20 personalized emails written
- [x] 4 outreach emails sent

### ❌ Dropped channels
- Reddit/Facebook outreach — flagged as ads, bad ROI
- Etsy DM outreach — account flagged/suspended
- Paid ads — CAC $802 vs LTV $144, impossible economics

### This week — Fast-Feedback Growth Channels
- [ ] **Product Hunt:** Prep listing (tagline, screenshots, GIF, first comment), schedule launch Tue-Thu
- [x] **Interactive tool:** `/etsy-print-size-calculator` deployed with crop analysis, DPI checker, 30-size reference
- [ ] **Cold email:** Find 50 Etsy printable seller emails, send first 10
- [ ] **AppSumo:** Research submission process, decide pricing, prepare listing
- [ ] **FB groups:** Identify top 5 groups, contact 3 admins with partnership offer
- [ ] **Educator outreach:** Send remaining batch of 5, follow up on first 4
- [ ] **SEO:** Continue 2 quality pages/day via pipeline

### Next week (Mar 29 - Apr 4)
- [ ] **Product Hunt launch day** (if prep done)
- [ ] **Submit AppSumo application**
- [ ] **Cold email:** Send next 20 emails, track responses
- [ ] **Calculator v2:** Add "Is My Image Print-Ready?" upload checker
- [ ] **Review PostHog funnel data** — first real conversion insights
- [ ] **SEO:** Continue pages, target 30+ total

---

## Key Insight from Competitor Analysis

> "There are currently **no mainstream competitors** offering end-to-end printable generation specifically tailored for Etsy's digital download rules."

This is a **blue ocean**. The threat isn't competition — it's **speed of execution**. Every week we don't ship content, we leave the door open for someone else to build the same thing with better distribution.

The moat is: content authority + first-mover + production stability. All three require relentless execution.

---

## Success Criteria per Phase

| Phase | Key Metric | Pass/Fail |
|-------|-----------|-----------|
| 1 | 10 paying users | If <5 after 8 weeks → revisit pricing/positioning |
| 2 | 50 paying users, known conversion rate | If <3% conversion → fix onboarding before scaling |
| 3 | 500 paying users, positive unit economics | If CAC > LTV → don't start paid ads |
| 4 | 7,500 paying users, $83k MRR | If growth stalls → expand to adjacent markets |
