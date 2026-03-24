---
name: growth-reporter
description: "Generate consolidated weekly growth report. Invoke with /growth-report to read all pipeline states and output a report to marketing/reports/."
---

# Growth Reporter

Generates a consolidated weekly growth report combining all pipeline data.

## Commands

- **`/growth-report`** — Generate this week's growth report

## Data Sources

1. **SEO Pipeline:** `marketing/queue/seo-pipeline-state.json`
2. **Social Pipeline:** `marketing/social/queue/pipeline-state.json`
3. **Outreach Tracker:** `marketing/outreach/outreach-tracker.json`
4. **Growth State:** `docs/GROWTH_STATE.md` (MRR, users, email list)

## Output

File: `marketing/reports/YYYY-MM-DD-weekly.md`

## Report Template

```markdown
# Weekly Growth Report — YYYY-MM-DD

## Business Metrics
- MRR: $XX (from GROWTH_STATE.md)
- Paying users: X
- Email list: X subscribers
- Free users: X

## SEO Pipeline
- Batch: 2026-WXX
- Target: X pages
- Briefed: X | Drafted: X | Reviewed: X | Deployed: X | Failed: X
- Pages live on site: X total (list slugs)

## Social Pipeline
- Batch: 2026-WXX
- Target: Pinterest X, Instagram X, TikTok X
- Published: X | Failed: X | Success rate: X%

## Outreach
- Total opportunities: X
- By status: identified X, contacted X, in_progress X, completed X
- Top priority items:
  - [P0 items listed here]

## Key Actions This Week
- [Auto-generated from state changes]

## Next Week Priorities
- [Suggested based on pipeline gaps]
```

## How It Works

1. Read all three data sources (SEO state, social state, outreach tracker)
2. Read `docs/GROWTH_STATE.md` for current business metrics
3. Compile the report using the template above
4. Write to `marketing/reports/YYYY-MM-DD-weekly.md`
5. Output summary to console

## Reading Pipeline States

```python
import sys
from pathlib import Path
sys.path.insert(0, str(Path('.claude/agents')))

# SEO pipeline
from shared.seo_pipeline_state import SeoPipelineState
seo = SeoPipelineState.load()
print(seo.summary())

# Social pipeline
from shared.pipeline_state import PipelineState
social = PipelineState.load()
print(social.summary())
```

For outreach, read the JSON file directly:
```python
import json
with open("marketing/outreach/outreach-tracker.json") as f:
    outreach = json.load(f)
print(f"Outreach: {len(outreach['items'])} opportunities")
```

## Important Notes

- This skill is READ-ONLY — it does not modify any pipeline state
- Social pipeline state is at `marketing/social/queue/pipeline-state.json` — never modify it
- SEO pipeline state is at `marketing/queue/seo-pipeline-state.json` — never modify it
- Reports accumulate in `marketing/reports/` — one per week
