---
name: gsc-review
description: "Review Google Search Console data and generate SEO recommendations. Invoke with /gsc-review for analysis, /gsc-pull to fetch fresh data first."
---

# GSC Review

Analyzes Google Search Console data and provides actionable SEO recommendations.

## Commands

- **`/gsc-review`** — Analyze latest API data and give recommendations
- **`/gsc-pull`** — Run pull script to fetch fresh data, then analyze

## Before Activating

Read these files:
1. Latest `marketing/gsc-export/api/*_analysis.json` — Most recent analysis
2. Latest `marketing/gsc-export/api/*_pages.json` — Raw page data
3. `app-next/data/page-registry.json` — Current pages + keywords

## Running `/gsc-pull`

```bash
python marketing/gsc-analytics/pull_gsc.py
```

Options:
- `--days 7` — Last 7 days only
- `--days 28` — Last 28 days (default)
- `--start YYYY-MM-DD --end YYYY-MM-DD` — Custom range

Then proceed to analysis below.

## Running `/gsc-review`

1. Find latest files in `marketing/gsc-export/api/` (most recent date prefix)
2. Read `*_analysis.json` for computed opportunities
3. Read `*_pages.json` and `*_queries.json` for raw data
4. Cross-reference with `page-registry.json` for coverage gaps
5. Generate report (format below)

## Analysis Framework

### Priority 1: Title Optimization (Highest ROI)
Pages with position < 15 and CTR below expected CTR for that position:
- Position 1-3: Expected CTR > 15%
- Position 4-6: Expected CTR > 5%
- Position 7-10: Expected CTR > 2%
- Position 11-15: Expected CTR > 1%

For each opportunity:
- Read the actual page source to get current `<title>` and `<meta description>`
- Suggest specific improvements (more specific, include numbers, add urgency/benefit)

### Priority 2: New Page Opportunities
Queries with impressions but no dedicated page:
- Cross-reference query clusters in analysis against page-registry.json
- Group related queries and suggest new page slug + target keyword

### Priority 3: Position Defense
Pages losing position week-over-week (from `trends.falling` in analysis):
- Check if content is outdated or thin
- Suggest content refresh actions

### Priority 4: Geographic/Device Insights
- Which countries drive traffic vs clicks
- Mobile vs desktop split

## Output Format

Output a concise markdown report directly in the conversation:

```
## GSC Review — {date range}

### Quick Stats
- Clicks: X | Impressions: X | CTR: X% | Avg position: X
- Pages tracked: X

### Title Optimization (do these NOW)
1. **/page-slug** — X impressions, X% CTR, position X
   - Current title: "..."
   - Suggested: "..."
   - Why: [specific reason CTR is low]

### New Page Opportunities
1. **Keyword cluster** — X impressions across Y queries
   - Suggested slug: /etsy-xxx
   - Top queries: [list]

### Position Changes
- Rising: /page (improved X spots)
- Falling: /page (dropped X spots)

### Next Actions
1. [Highest priority]
2. [Second]
3. [Third]
```

## Integration

- Title optimization items can be acted on immediately
- New page opportunities feed into SEO pipeline research phase
- After acting on recommendations, run `/gsc-pull` again in 1-2 weeks to measure impact

## Important

- GSC data is 2-3 days behind — the script accounts for this automatically
- First run has no WoW comparison. After 2+ runs, trends will appear.
- Focus on actions that move clicks, not vanity metrics
- Keep reports concise — no 20-page analysis needed
