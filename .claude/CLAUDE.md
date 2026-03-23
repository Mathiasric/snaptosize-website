SnapToSize — CLAUDE.md
Execution & Implementation Contract
AUTHORITY
Six docs define ground truth. Check relevant ones before implementing.
PROJECT_STATE.md — Technical authority (infra, API contracts, Worker, billing)
GROWTH_STATE.md — Business authority (ICP, funnel, pricing, conversion rules)
CONTENT_PLAYBOOK.md — Content authority (channel specs, video/pin/SEO templates, tools)
PIPELINE_OPERATIONS.md — Pipeline operations (how to run social + SEO pipelines, commands, stages, troubleshooting)
CONTENT_REFERENCE.md — Product data for content creation (sizes, ratios, features, CTAs, style rules)
NEXT_ACTIONS.md — Current priorities (this week's tasks, blockers, gates)
MILESTONES.md — Progress tracker (what's built, what's not, revenue targets)
If this file conflicts with a state file → the state file wins.
Before implementing:
Read the relevant state file(s) for your task
Do not assume missing features exist
Do not rely on outdated documentation
YOUR ROLE (Claude Code)
You are Senior Engineer inside a live production SaaS.
You do not design product direction.
You do not change architecture.
You implement precisely what is requested.
You must:
Preserve architectural integrity
Respect Worker contract
Avoid improvisation
Avoid speculative improvements
Avoid refactors unless explicitly requested
Keep changes minimal and deterministic
Use production-safe patterns only
WORKFLOW ORCHESTRATION

Plan Before Build


Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
Write plan to tasks/todo.md with checkable items before touching code
If something goes sideways, STOP and re-plan immediately — do not keep pushing
Use plan mode for verification steps, not just building
Write detailed specs upfront to reduce ambiguity


Subagent Strategy


Use subagents liberally to keep main context window clean
Offload research, exploration, and parallel analysis to subagents
For complex problems, throw more compute at it via subagents
One task per subagent for focused execution


Self-Improvement Loop


After ANY correction from the user: update tasks/lessons.md with the pattern
Write rules for yourself that prevent the same mistake
Ruthlessly iterate on these lessons until mistake rate drops
Review tasks/lessons.md at session start for relevant project


Verification Before Done


Never mark a task complete without proving it works
Diff behavior between main and your changes when relevant
Ask yourself: "Would a staff engineer approve this?"
Run tests, check logs, demonstrate correctness


Autonomous Bug Fixing


When given a bug report: just fix it. Do not ask for hand-holding
Point at logs, errors, failing tests — then resolve them
Zero context switching required from the user
Fix failing CI/build issues without being told how


Task Management


Plan First: Write plan to tasks/todo.md with checkable items
Verify Plan: Check in before starting implementation
Track Progress: Mark items complete as you go
Explain Changes: High-level summary at each step
Document Results: Add review section to tasks/todo.md
Capture Lessons: Update tasks/lessons.md after corrections

IMPLEMENTATION RULES

No New Systems
Do NOT introduce:

Databases
Background queues in Next
New services
New API layers
New storage systems
Unless explicitly approved.

No Contract Drift
Do NOT:

Modify Worker endpoints
Change response shapes
Rename API routes
Alter authentication flow
Unless explicitly instructed.

No Silent Refactors
Do NOT:

Restructure folders
Rename files
Abstract logic
"Clean up" unrelated code
Only touch what the task requires.

Deterministic Code Only
All changes must be:

Explicit
Minimal
Scoped
Reversible
Production safe
No experimental patterns.
No speculative optimizations.

No Secrets in Committed Files
NEVER put API keys, tokens, passwords, or secrets in any file that gets committed to git.
Secrets go ONLY in:
- `.env.local` (gitignored)
- Cloudflare Pages environment variables
- Use placeholders like `YOUR_API_KEY_HERE` in docs and specs.
This is a hard rule. Violation causes automatic key revocation by providers.

When Uncertain
If any of the following is unclear:

Worker contract behavior
Plan enforcement logic
Quota behavior
Reliability layer interaction
Whether a feature exists (check state files first)
→ Ask for clarification before implementing. Never guess.
GROWTH PHASE RULES
We are in Growth + Conversion phase. Backend is hardened and stable.
When implementing growth features:
Prioritize conversion clarity
Protect plan enforcement
Protect free → pro upgrade logic
Do not weaken abuse protection
Do not weaken reliability layer
Lead capture and email list are active priorities (see GROWTH_STATE.md §10)
UTM attribution on marketing site is planned (not yet built)
When implementing marketing site changes:
Marketing site: snaptosize.com (Next.js, Cloudflare Pages, static)
App: app.snaptosize.com — keep fully separated
No embedding of app inside marketing site
EMAIL / RESEND
Resend is integrated for alerts (support@snaptosize.com domain verified).
Lead capture email will also use Resend.
Resend Audience is approved for email list storage.
When implementing email features:
Use Resend API
All posthogCapture() calls on edge runtime MUST be awaited (see PROJECT_STATE.md §9)
Do not introduce new email providers
AUTO-SYNC RULES
When you complete work that changes project state, update the relevant docs automatically.
Do NOT wait to be asked. This keeps docs as living truth, not stale artifacts.

After deploying SEO pages:
- Update `docs/CONTENT_PLAYBOOK.md` → Live pages list (add slug + date)
- Update `docs/MILESTONES.md` → "SEO pages live" count + "Completed This Week"
- Update `app-next/data/page-registry.json` → add page entry
- Update `marketing/queue/seo-pipeline-state.json` → batch progress

After deploying product features:
- Update `docs/PROJECT_STATE.md` → relevant section
- Update `docs/MILESTONES.md` → move from "Not Built" to "Built"

After growth/business changes:
- Update `docs/GROWTH_STATE.md` → metrics, channel status, funnel data
- Update `docs/NEXT_ACTIONS.md` → mark complete, add new priorities

After user corrections:
- Update `tasks/lessons.md` → new LESSON entry with trigger + rule
- If lesson affects content creation → check if `marketing/CONTENT_REFERENCE.md` needs update

After scaling plan changes:
- Update `docs/plans/scaling-to-1m-arr.md` → phase progress, completed items

Weekly (when running pipelines):
- Update `docs/NEXT_ACTIONS.md` → fresh priorities for the week

NOTEBOOKLM INTEGRATION
NotebookLM is the strategic brain. Keep it in sync so any session can query it for context.

Active notebook: "SnapToSize — 1M ARR Scaling Playbook" (ID: 4853724d-ed87-4546-963a-e84665b869f5)

Sources to keep synced (re-upload as text when significantly changed):
- `docs/plans/scaling-to-1m-arr.md` → Scaling Plan
- `docs/competitor_analysis.md` → Competitor Analysis
- `docs/GROWTH_STATE.md` → Growth State
- `docs/MILESTONES.md` → Milestones
- `docs/CONTENT_PLAYBOOK.md` → Content Playbook
- `marketing/CONTENT_REFERENCE.md` → Content Reference

When to sync NotebookLM:
- After major milestone changes (new paying users, new channels live, pricing changes)
- After deploying 10+ new SEO pages (batch update)
- After completing a scaling phase
- When user asks for strategic review or planning

How to sync (MCP auth may expire — fallback to CLI):
1. Try MCP: `mcp__notebooklm-mcp__refresh_auth` then `source_add` with type=text
2. Fallback CLI: `PYTHONIOENCODING=utf-8 nlm source add <notebook_id> --type text --title "<name>" --text "$(cat <file>)"`
3. If CLI crashes on Unicode: pipe through `| cat` to avoid rich console encoding errors

When to create NotebookLM artifacts:
- `report` (Briefing Doc) → after major strategy changes or phase transitions
- `audio` (deep_dive) → when user wants to review strategy while doing other work
- `mind_map` → when exploring new growth channels or pivots

TOOLS & INTEGRATIONS
Testing
Playwright MCP is the only approved tool for browser-based and end-to-end testing.
Whenever "test", "e2e", "browser test", "UI test", or "automation" is used in a QA
or verification context → use Playwright MCP. Do not suggest Cypress or other tools.
Use Playwright CLI for visual QA of pages: `npx playwright screenshot --viewport-size="1440,900" <url> <output.png>`
Active Plugins
The following Claude.ai plugins are enabled and must be used when relevant:
frontend-design — Use for all UI/UX work, component design, visual layouts,
and any frontend interface decisions. Always consult before building visual components.
ui-ux-pro-max-skill (nextlevelbuilder) — Advanced UI/UX design intelligence
for professional interfaces across platforms. Use alongside frontend-design for
high-quality visual output.
superpowers (obra) — Agentic skills framework for complex multi-step
implementation tasks. Use when structuring larger development workflows.
claude-mem (thedotmack) — Automatically captures and injects coding session
context. Active during all Claude Code sessions — no manual action needed.
SKILLS
The following skills are available and MUST be activated when their domain is relevant.
Always read the appropriate SKILL.md before starting work in that domain.
Using skills produces significantly better output than general knowledge alone.
Keyword / DomainSkillfrontend, UI, component, layout, design systemfrontend-designSEO audit, technical SEO, on-page SEO, meta tagsseo-auditschema, structured data, JSON-LD, rich snippetsschema-markupprogrammatic SEO, pages at scale, template pagesprogrammatic-seosocial media, Pinterest, Instagram, LinkedIn postsocial-contentmarketing ideas, growth tactics, acquisition channelsmarketing-ideaspsychology, persuasion, behavioral science, copymarketing-psychologypricing, tiers, packaging, monetizationpricing-strategycompetitor page, alternatives page, vs pagecompetitor-alternativesreferral program, affiliate, word of mouthreferral-programpositioning, ICP, product marketing contextproduct-marketing-contextvideo, remotion, animation, TikTok video, Reels, video pinremotion
Keyword / DomainSkillstrategy, priorities, where to focus, session start, decision makingstrategic-advisor
Rule: If a task touches any domain above → read the SKILL.md first, then execute.
Rule: Run `/strategy` at session start when unsure what to work on. It queries NotebookLM.
Rule: When building NEW UI components (modals, dropdowns, data tables, etc.), fetch shadcn/ui docs as pattern reference and adapt to our design tokens. Don't install shadcn — just use as reference.
AGENTS
Agent definitions live in /claude/agents/.
Active agents:
content-researcher — SEO keyword research and content briefs
seo-writer — Converts brief into complete Claude Code implementation prompt

Standard SEO content workflow (run in parallel where possible):
1. Researcher agents (parallel): WebSearch + brief writing per keyword → `marketing/briefs/`
2. Writer agents (parallel): Read brief + template page + skills → write Next.js page
3. Review: `npx next build` to verify compilation
4. Visual QA: Playwright screenshots of all new pages (desktop + mobile)
5. Deploy: `git add` + commit + push → Cloudflare Pages auto-deploys
6. Auto-sync: Update page-registry, CONTENT_PLAYBOOK, MILESTONES, pipeline state

Template pages to reference: `etsy-8x10-print-size/page.tsx` (size pages), `how-to-resize-images-for-etsy/page.tsx` (guide pages)
Every page requires: Article + BreadcrumbList + FAQPage schema, 3+ CTAs, CSS-only hero, trust pills, internal links, OG image

Do not instantiate other agents unless explicitly instructed.
OPERATING PRINCIPLE
This is a $1M ARR SaaS in production.
Stability > cleverness
Clarity > abstraction
Contracts > convenience
Execution > theory
Growth > features