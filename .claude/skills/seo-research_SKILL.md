---
name: seo-research
description: SEO pipeline refill — use when the SEO queue has < 3 tasks or when deciding what to build next. Combines Firecrawl competitor scraping + demand validation to output a ranked list of candidate pages into the vault task queue. NOT a monthly cadence — triggered by need.
---

# SEO Research — Pipeline Refill

Run when `tasks/queue.md` has fewer than 3 SEO tasks. Outputs 8-15 ranked candidates with rationale. Every session then draws from this list — no guessing, no GSC-only bias.

## Trigger condition

- Queue has < 3 `[SEO]` tasks in `## Ready`
- OR strategic shift (new ICP insight, new competitor, new cluster)

## Tools required

- Firecrawl MCP (already configured — 500 free credits)
- WebSearch
- `app-next/data/page-registry.json` (our 111+ pages)
- `C:\dev\snaptosize-brain\tasks\queue.md` (output destination)
- `C:\dev\snaptosize-brain\wiki\channels\seo\cluster-map.md` (check before adding)

---

## Confirmed competitor domains

These sites rank for our core queries. Scrape these first:

| Domain | Why relevant |
|--------|-------------|
| `bello.art` | Art SaaS with dedicated Etsy seller resources |
| `bulkmockup.com` | Mockup tool doing aggressive content marketing |
| `elistit.com` | Etsy-focused content site, similar audience |
| `nicolesteffen.com` | Design blog, dense print size content |
| `growingyourcraft.com` | Etsy seller education, overlapping queries |

Add new competitors as found. Remove if they pivot away from print/Etsy content.

---

## Workflow

### Step 1 — Scrape competitor sitemaps

For each competitor, use Firecrawl to get their sitemap or crawl top pages:

```
mcp__firecrawl__firecrawl_map: { url: "https://bello.art", limit: 200 }
mcp__firecrawl__firecrawl_map: { url: "https://bulkmockup.com", limit: 200 }
mcp__firecrawl__firecrawl_map: { url: "https://elistit.com", limit: 200 }
mcp__firecrawl__firecrawl_map: { url: "https://nicolesteffen.com", limit: 200 }
mcp__firecrawl__firecrawl_map: { url: "https://growingyourcraft.com", limit: 200 }
```

Extract: all URLs + page titles. Filter to pages about print sizes, DPI, pixels, Etsy, frame sizes, ratios, digital downloads. Discard: about/contact/pricing/legal.

### Step 2 — Diff against our pages

Read `app-next/data/page-registry.json`. Extract all slugs.

For each competitor page, check:
- Does a slug or title in our registry cover the same query?
- Fuzzy match OK — "8x10 print size" and "8×10-print-size" are the same

Output: gap list — competitor pages with NO close match in our registry.

### Step 3 — Validate demand (top 20 gaps only)

For each gap candidate, run WebSearch:
```
"[topic] site:google.com" — look for autocomplete signal
OR search the topic and check if results have high-quality competitors (signal of real demand)
```

Score each gap:
- **High**: Multiple strong competitors ranking, clear search intent, maps to our ICP (Etsy digital print seller)
- **Med**: Some competitors, intent is adjacent to our ICP
- **Low**: Thin results, too niche, or not Etsy-seller focused

### Step 4 — Cannibalization check

Before adding any candidate to queue, check `wiki/channels/seo/cluster-map.md`:
- Is there an existing page within 2 hops?
- Would this page split traffic with an existing page?
- If yes: instead of new page, add as "IMPROVE: [existing slug]" task

### Step 5 — Write to queue

Add top 8-15 candidates to `C:\dev\snaptosize-brain\tasks\queue.md` under `## Ready`:

```markdown
- [ ] [SEO] {slug} — priority: HIGH/MED — est: 2h — gap vs {competitor}: {their-url} | demand: HIGH/MED | cluster: {cluster-name}
```

Also update `wiki/channels/seo/cluster-map.md` with new planned pages so future refills don't re-discover the same gaps.

---

## Output quality rules

- Max 2 pages per competitor domain as source (avoid copying one competitor's full sitemap)
- At least 60% of candidates must map directly to Etsy seller pain (not just general print size curiosity)
- No page that is within 2 hops of an existing page (cannibalization rule)
- Every candidate needs a one-line rationale: what competitor has it + why our ICP would search it

---

## Scoring formula (simple, no Ahrefs needed)

```
Score = ICP_fit (0-3) + competitor_count (0-3) + differentiation (0-3)

ICP_fit:
  3 = Etsy digital print seller, direct pain
  2 = adjacent (general print buyer, Canva user)
  1 = tangential
  0 = irrelevant

competitor_count (how many of our 5 track this topic):
  3 = 3+ competitors have a dedicated page
  2 = 2 competitors
  1 = 1 competitor
  0 = none (probably no demand)

differentiation (how well can we own it vs competitors):
  3 = we have unique angle (SnapToSize output proof, ratio pack fan, spec table)
  2 = we can match quality
  1 = competitor already has definitive page we can't beat
```

Score ≥ 7: HIGH priority  
Score 5-6: MED  
Score < 5: skip

---

## When to run again

- When queue drops below 3 SEO tasks
- After a major competitor publishes a content burst (Firecrawl alert if set up)
- After ICP shift (new customer type discovered)

Do NOT run on a calendar schedule — run on need.

---

## Anti-patterns (don't do these)

- Don't add "X vs Y" pages if we already have 3+ in that cluster
- Don't add ISO/A-series pages unless demand validation shows Etsy sellers specifically
- Don't add anything just because GSC shows impressions — GSC tells you about YOUR existing traffic, not gaps
- Don't build a page that a competitor has a definitive 5000-word guide on unless we have a truly different angle

---

## Related

- `blueprints/competitor-analysis.md` — deeper competitor dive (full site audit, not just page list)
- `wiki/channels/seo/cluster-map.md` — existing cluster structure
- `wiki/channels/seo/learnings.md` — what has/hasn't worked
- `/gsc-review` skill — for improving EXISTING pages (separate workflow)
