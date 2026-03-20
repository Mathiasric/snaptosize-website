---
name: strategic-advisor
description: "Strategic decision-making advisor. Use at session start, before major decisions, or when unsure where to focus. Queries NotebookLM for context, reads current state from docs, and recommends the highest-impact next action. Invoke with /strategy"
---

# Strategic Advisor

The strategic brain for SnapToSize. Makes data-driven decisions about where to focus energy for maximum impact toward $1M ARR.

## When to Use

- **Session start** — run `/strategy` to get oriented
- **Before major work** — "should I build X or focus on Y?"
- **Weekly planning** — what's the highest-leverage work this week?
- **After milestones** — recalibrate priorities when metrics change

## How It Works

### Step 1: Gather Current State (parallel)

Read all of these simultaneously:
1. `docs/NEXT_ACTIONS.md` — what's planned
2. `docs/MILESTONES.md` — where we are (MRR, users, pages)
3. `docs/GROWTH_STATE.md` — business metrics, channels, ICP
4. `marketing/outreach/outreach-tracker.json` — outreach status
5. `marketing/queue/seo-pipeline-state.json` — SEO pipeline
6. `marketing/social/queue/pipeline-state.json` — social pipeline

### Step 2: Query NotebookLM for Strategic Context

Query the notebook (ID: `4853724d-ed87-4546-963a-e84665b869f5`) with:

```
Given our current state: [MRR], [paying users], [SEO pages], [outreach status], [social traction] —
what is the single highest-impact action we should take this week to move toward 10 paying users?
Consider: educator outreach status, SEO ranking timeline, social media traction, product gaps, conversion optimization.
Be specific and actionable, not generic advice.
```

If NotebookLM auth fails, run: `PYTHONIOENCODING=utf-8 nlm login 2>&1` then `mcp__notebooklm-mcp__refresh_auth`

### Step 3: Decision Framework

Evaluate every potential action against this matrix:

| Criteria | Weight | Question |
|----------|--------|----------|
| Time to revenue impact | 40% | How quickly does this put money in the bank? |
| Effort required | 25% | Can this be done today, or does it take weeks? |
| Compounding value | 20% | Does this keep paying dividends over time? |
| Risk of inaction | 15% | What do we lose by NOT doing this? |

### Step 4: Output Format

```markdown
## Strategic Assessment — [DATE]

### Current Position
- MRR: $XX | Paying users: X | SEO pages: X
- Outreach: X sent / X responded / X converted
- Social: [traction summary]
- Pipeline blockers: [any]

### NotebookLM Insight
[Key insight from notebook query]

### This Week's #1 Priority
**[SPECIFIC ACTION]**
- Why: [data-backed reasoning]
- Expected impact: [specific outcome]
- Time required: [estimate]
- Dependency: [what needs to happen first, if anything]

### Priority Stack (ordered by impact)
1. [#1 — already detailed above]
2. [Next highest impact]
3. [Ongoing autopilot items]

### What NOT to Do This Week
- [Things that feel productive but aren't highest impact right now]

### Decision Log
- [Any strategic decisions made, with reasoning, for future reference]
```

### Step 5: Update Docs

After generating the assessment:
1. Update `docs/NEXT_ACTIONS.md` with the new priority stack
2. If milestones changed, update `docs/MILESTONES.md`
3. Sync to NotebookLM if major strategic shift occurred

## Key Principles

1. **Distribution before product** — at <10 users, nobody knows about us. Fix that first.
2. **One thing at a time** — focus beats breadth. Pick ONE priority, execute fully.
3. **Measure then build** — don't build features without evidence of demand.
4. **Stretch is the differentiator** — never suggest cropping. Stretch preserves composition.
5. **Educator partnerships are the fastest path** — one mention = 50-200 signups.
6. **SEO compounds but takes 3-6 months** — keep the pipeline running, don't expect results yet.
7. **Social is a lottery** — keep posting but don't bet the farm on it.
8. **Manual before automated** — don't build systems for things that haven't been validated.

## Anti-Patterns (Never Recommend)

- Building batch upload before having 10 paying users
- Paid ads (CAC $802 vs LTV $144 — impossible right now)
- New platforms (Shopify, Gumroad) before Etsy is proven
- Refactoring / architecture changes during growth phase
- Adding cropping to the product (stretch IS the differentiator)
- Building dashboards / analytics tools before having data
