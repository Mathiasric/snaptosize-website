# Growth Engine Design — Claude Code as AI-Powered COO
**Created:** 2026-04-09
**Status:** Design — ready for implementation
**Goal:** Transform scattered analytics into a self-optimizing growth machine

---

## The Problem

Vi samler data overalt men bruker den ingen steder:

| System | Collects | Acts On It? |
|--------|----------|-------------|
| GSC pull_gsc.py | Impressions, CTR, position, keyword clusters | ❌ Generates JSON, nobody reads it |
| Social pipeline | 49 posts/week with engagement metrics | ❌ `previous_insights` field exists but is never read by any agent |
| PostHog | Pageviews only | ❌ Missing: click events, email capture, CTA tracking, conversion funnel |
| Buffer analytics | Impressions, saves, clicks per post | ❌ Data pulled but content_type/layout metadata missing → insights always empty |
| Growth report skill | Defined as `/growth-report` | ❌ Never been run, reports directory doesn't exist |

**Result:** Vi flyr blindt. 73 sosiale poster/uke uten å vite hvilke som driver revenue. 58 SEO-sider uten å vite hvilke som konverterer.

---

## The Design: 3 Interlocking Systems

### System 1: Closed-Loop Intelligence ("The Brain")

**What it does:** Combines all data sources into one weekly intelligence brief that tells you exactly what to do.

**Architecture:**

```
GSC Data ──────┐
PostHog Data ──┤
Buffer Data ───┤──→ Weekly Intelligence Script ──→ intelligence-brief.md
Pipeline State ┤                                     ↓
Revenue Data ──┘                              NEXT_ACTIONS.md updates
                                                     ↓
                                              Pipeline agent prompts
```

**Implementation:**

#### 1a. Fix PostHog tracking on marketing site (~30 min)
Currently only tracks pageviews. Add these events:

```
- email_capture_view → when EmailCapture component renders
- email_capture_submitted → when form submits successfully  
- cta_clicked → when any CTA button to app.snaptosize.com is clicked
  Properties: { source: page_slug, cta_type: "hero|inline|final", destination: url }
- scroll_depth → 25%, 50%, 75%, 100% milestones per page
```

**Why:** Without this, we can't know which pages drive signups or which CTAs work.

#### 1b. Fix social pipeline metadata (~20 min)
The `content_type` and `layout` fields in metadata.json are always null/unknown. This breaks the entire insights engine.

Fix: Ensure content-creator agent writes `content_type` (BeforeAfter, StatsCard, Checklist, etc.) and `layout` (pinterest_vertical, instagram_square, etc.) to metadata during creation stage.

**Why:** 49 posts tracked in W15 but zero insights generated because aggregation groups everything under "unknown".

#### 1c. Wire `previous_insights` into pipeline agents (~20 min)
The field exists in pipeline_state.py but no agent reads it.

Fix: Inject `previous_insights` into:
- **Analyst agent** prompt: "Here's what worked last week: {insights}"
- **Ideator agent** prompt: "Prioritize content types from do_more: {do_more}"
- **Researcher agent** prompt: "Focus on themes similar to best performers: {best_content_types}"

**Why:** This is the single biggest gap. The pipeline produces 73 items/week but never learns from itself.

#### 1d. Build weekly intelligence script (`marketing/intelligence/weekly-brief.py`) (~2 hours)

Pulls from all sources, generates one brief:

```markdown
# Weekly Intelligence Brief — W16 (2026-04-07 → 2026-04-13)

## SEO Performance
- Total impressions: 5,200 (+10% WoW)
- Total clicks: 34 (+21% WoW)
- Average position: 8.9 (improved from 9.5)
- **Rising pages:** /etsy-20mb-file-limit (pos 12→8), /etsy-a4-print-size (pos 18→14)
- **Falling pages:** /best-resolution-for-etsy-printables (pos 8→12)
- **Title optimization needed:** 3 pages with >100 impressions but <1% CTR
- **New page opportunities:** 2 keyword clusters without dedicated pages

## Social Performance  
- Pinterest: 36 pins, avg 45 impressions, 2.3 saves/pin
- Instagram: 28 posts, avg 12 likes, 0.8 saves/post
- Best performing: [specific post] — BeforeAfter layout, 340% above average
- Do more: BeforeAfter on Pinterest, StatsCard on Instagram
- Do less: Checklist format (50% below average)

## Conversion Funnel (when PostHog is fixed)
- Marketing site visits: X
- Email captures: X (conversion rate: X%)
- App clicks from marketing: X
- Top converting pages: [ranked list]
- Top CTAs: hero CTA at X%, inline at Y%, final at Z%

## Revenue
- MRR: $44 (no change)
- New signups this week: X
- Upgrade events: X

## Recommendations (auto-generated)
1. **Optimize titles** for: /etsy-20mb-file-limit, /best-file-format-etsy-printables (high impressions, low CTR)
2. **Create new pages** for: [keyword cluster] (150 impressions, no page)
3. **Double down on** BeforeAfter Pinterest pins (top performer)
4. **Stop creating** Checklist-format pins (consistent underperformer)
5. **Fix falling page** /best-resolution-for-etsy-printables — check for SERP changes
```

#### 1e. Auto-run weekly via Claude Code `/schedule` or manual Monday routine

---

### System 2: Self-Optimizing SEO ("The Machine")

**What it does:** Automatically identifies and acts on SEO opportunities instead of just logging them.

**Current state:** `pull_gsc.py` generates analysis JSON with title_optimization, rising/falling, keyword clusters, new page opportunities. Nobody reads it.

**Implementation:**

#### 2a. Title/description A/B testing system (~1 hour)

Script: `marketing/seo-optimizer/title-optimizer.py`

```
1. Read latest GSC analysis → find pages with CTR < expected_ctr
2. For each page:
   a. Read current <title> and <meta description>
   b. Generate 2 alternative titles optimized for the top query driving impressions
   c. Log current title + date in optimization-log.json
   d. Apply new title to page
3. After 14 days: compare CTR before/after
4. If improved → keep. If worse → revert.
```

**Why:** USA har 2,452 impressions men bare 4 klikk (0.16% CTR). Titlene treffer ikke. Systematisk testing fikser dette.

#### 2b. Automatic internal link builder (~1 hour)

Script: `marketing/seo-optimizer/link-builder.py`

```
1. For each SEO page in page-registry.json:
   a. Extract main keywords/topics
   b. Grep all OTHER pages for mentions of those topics without existing links
   c. Generate link insertion suggestions
   d. Auto-insert 2-3 internal links per page (contextually relevant)
   e. Log all changes
```

**Why:** Internal links er en confirmed ranking factor. 58 sider med mangelfulle krysslenker = lavthengende frukt.

#### 2c. Content gap auto-detection + brief generation (~30 min)

Extend `pull_gsc.py`:
```
1. Find keyword clusters with >50 impressions but no matching page
2. Auto-generate content brief in marketing/briefs/
3. Add to seo-pipeline-state.json as "queued"
4. Flag in weekly intelligence brief
```

**Why:** GSC forteller oss allerede hva folk søker etter. Vi bare aldri handler på det.

#### 2d. Striking distance pusher

```
1. Find pages ranking position 5-15 (close to page 1 but not there)
2. Auto-check: does the page have enough internal links? Fresh content? Schema?
3. Generate optimization tasks: add FAQ, update content, build internal links
4. Track position changes over 4 weeks
```

---

### System 3: Conversion Rate Optimization ("The Funnel")

**What it does:** Measures and optimizes the path from visitor → paying user.

**Current state:** We literally cannot measure conversion. PostHog only has pageviews.

**Implementation:**

#### 3a. Full funnel tracking (depends on 1a PostHog fix)

Events to track end-to-end:
```
Marketing site:                    App:
pageview → scroll_depth →          → signup → first_export →
email_capture_view →               → pack_download →
email_capture_submitted →          → billing_view →
cta_clicked →                      → upgrade_clicked →
                                   → checkout_started →
                                   → checkout_completed
```

#### 3b. Page-level conversion scoring

Once PostHog tracks CTA clicks, build:
```
For each SEO page:
  conversion_score = cta_clicks / pageviews
  
Rank pages by conversion_score.
Top pages → study what's different (CTA placement, copy, content type)
Bottom pages → apply learnings from top pages
```

**Why:** Noen sider konverterer bedre enn andre. Vi vet bare ikke hvilke ennå.

#### 3c. CTA variant testing (week 2+)

Once we have baseline data:
```
1. Identify top 10 traffic pages
2. Test CTA variations: copy, color, placement
3. Measure click-through per variant
4. Roll out winners across all pages
```

---

## Implementation Priority

| # | Task | Time | Impact | Depends On |
|---|------|------|--------|------------|
| 1 | Fix PostHog tracking (1a) | 30 min | 🔴 Critical | Nothing |
| 2 | Fix social metadata (1b) | 20 min | 🔴 Critical | Nothing |
| 3 | Wire previous_insights (1c) | 20 min | 🟡 High | #2 |
| 4 | Build internal link system (2b) | 1 hour | 🟡 High | Nothing |
| 5 | Title A/B testing (2a) | 1 hour | 🟡 High | GSC data |
| 6 | Weekly intelligence script (1d) | 2 hours | 🟡 High | #1, #2 |
| 7 | Content gap auto-detection (2c) | 30 min | 🟢 Medium | GSC data |
| 8 | Striking distance pusher (2d) | 1 hour | 🟢 Medium | GSC data |
| 9 | Page conversion scoring (3b) | 30 min | 🟢 Medium | #1 + 2 weeks data |
| 10 | CTA variant testing (3c) | 1 hour | 🟢 Medium | #9 |

**Total estimated time: ~8 hours of Claude Code work**

Tasks 1-3 can be done TODAY. Tasks 4-6 this week. Tasks 7-10 next week.

---

## What This Unlocks

**Before (now):**
- Ship 73 social posts/week blindly
- Ship 2 SEO pages/day without knowing what works
- Zero conversion data
- Manual "gut feel" decisions

**After (2 weeks):**
- Weekly brief tells you exactly what's working and what's not
- Social pipeline auto-adjusts based on last week's performance
- SEO titles auto-optimize for maximum CTR
- Internal links auto-build across 58+ pages
- Conversion funnel visible from first visit to payment
- Content gaps auto-detected and queued

**After (2 months):**
- System has 8 weeks of data → recommendations become reliable
- SEO pages start ranking (3-6 month timeline) WITH optimized titles
- Social content skews toward proven formats
- You spend time on high-leverage activities (partnerships, outreach) while the machine handles content + optimization

---

## The Billionaire Mindset Shift

Du spør "hva bør jeg gjøre denne uken?" Riktig spørsmål er: **"Hva bør systemet gjøre for meg hver uke automatisk?"**

| Menneske-jobb (deg) | Maskin-jobb (Claude Code) |
|---------------------|--------------------------|
| Kundesamtaler | SEO-optimalisering |
| Partnerskap/outreach | Innholdsproduksjon |
| Strategiske beslutninger | Dataanalyse + ukentlig brief |
| AppSumo submission | Intern lenkebygging |
| YouTube recording | Tittel-testing |
| Prisingstrategi (etter 100 brukere) | Konverteringsanalyse |

Du gjør det som krever **menneskelig relasjon**. Maskinen gjør alt som kan **måles og automatiseres**.
