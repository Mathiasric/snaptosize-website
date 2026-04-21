# SnapToSize — CLAUDE.md

## AUTHORITY

Seven docs define ground truth. Check relevant ones before implementing.

| Doc | Authority |
|-----|-----------|
| `docs/PROJECT_STATE.md` | Technical (infra, API contracts, Worker, billing) |
| `docs/GROWTH_STATE.md` | Business (ICP, funnel, pricing, conversion rules) |
| `docs/CONTENT_PLAYBOOK.md` | Content (channel specs, video/pin/SEO templates) |
| `docs/PIPELINE_OPERATIONS.md` | Pipeline ops (social + SEO pipelines, stages) |
| `marketing/CONTENT_REFERENCE.md` | Product data for content (sizes, ratios, CTAs) |
| `docs/NEXT_ACTIONS.md` | Current priorities (this week's tasks, blockers) |
| `docs/MILESTONES.md` | Progress tracker (built vs not, revenue targets) |

If this file conflicts with a state file, the state file wins.
Before implementing: read the relevant state file(s). Do not assume features exist.

---

## YOUR ROLE

Senior Engineer inside a live production SaaS. Implement precisely what is requested.
- Preserve architectural integrity and Worker contract
- No improvisation, speculative improvements, or refactors unless requested
- Keep changes minimal, scoped, and production-safe

---

## ARCHITECTURE QUICK REFERENCE

**Marketing site:** snaptosize.com (Next.js static, Cloudflare Pages)
**App:** app.snaptosize.com (Next.js, Cloudflare Pages) — fully separated, no embedding
**Worker:** Cloudflare Worker — central backend, plan enforcement, job orchestration
**Runner:** Fly.io Python FastAPI — CPU-intensive image resizing + ZIP creation (Pillow)
**Storage:** Cloudflare R2 (inputs/*, jobs/* with 7-day auto-expiry)
**State:** Cloudflare KV (job status, quotas, rate limits, drip sequence tracking)
**Auth:** Clerk JWTs — Worker extracts plan (free/pro) from JWT
**Billing:** Stripe subscriptions → Clerk metadata via webhooks → JWT

Key constraints:
- Free: 5 quick exports + 2 packs/day, 2 concurrent jobs, watermarked
- Pro: unlimited, 7 concurrent jobs, no watermark
- All output ZIPs must stay under 20MB (Etsy limit) — Runner uses progressive quality fallback
- Frontend must enqueue packs sequentially (ctx.waitUntil() time limits)
- All `posthogCapture()` on edge runtime MUST be awaited (silent drops otherwise)

---

## WORKFLOW ORCHESTRATION

### Plan Before Build
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- Write plan to `tasks/todo.md` with checkable items before touching code
- If something goes sideways, STOP and re-plan immediately

### Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis
- One task per subagent for focused execution

### Self-Improvement Loop
- After ANY correction: update `tasks/lessons.md` with the pattern
- Only check `tasks/lessons.md` for lessons *relevant to the current task* — never read the whole file

### Verification Before Done
- Never mark a task complete without proving it works
- `npx next build` for compilation, Playwright for visual QA
- Ask: "Would a staff engineer approve this?"

### Autonomous Bug Fixing
- When given a bug report: just fix it, zero hand-holding required
- Point at logs/errors/failing tests, then resolve

---

## CONTEXT EFFICIENCY RULES

These are hard rules, not guidelines. Violating them wastes tokens and shortens the session.

**Bash output:** Any command that produces >20 lines MUST use `ctx_execute` or `ctx_batch_execute` instead of Bash. This includes: git log, grep across many files, npm/build output, python scripts with large output. Bash is only for: git add/commit/push, mkdir, rm, mv, and short-output commands.

**File reads:** Never read a file in full if you only need part of it. For files >200 lines, always use `offset` + `limit` to target the section needed. Never read a file to analyze it — use `ctx_execute_file` instead. Read is only for files you are about to Edit.

**Read before edit:** Always read (or grep for) the exact section before editing. Before modifying a function, grep for all callers. Research before you edit — editing without reading causes retries and wastes tokens.

**Screenshots:** Default to viewport-only screenshots (1440×900 desktop, 390×844 mobile). Never use `fullPage: true` unless a specific full-page QA review is requested. Use `clip` to capture specific sections when only part of the page is relevant.

**Playwright:** NEVER use `browser_snapshot` — dumps entire DOM tree (3000–5000 tokens). Use `browser_take_screenshot` + read the image instead. Only use `browser_snapshot` when you need element refs for interactive actions (click, fill).

**Token & repo hygiene (check periodically):**
- `app-next/*.png/jpg`: delete after use — never let QA screenshots accumulate (now gitignored)
- `tasks/lessons.md`: cap at ~50 lessons — archive to `tasks/lessons-archive.md` when adding new ones
- `tasks/lessons.md` has 45 lessons (last archived Apr 2026)
- Run `/ctx-stats` if a session feels slow — check if context-mode is saving tokens
- Agent AGENT.md files total ~115KB — don't spawn agents unless the task requires it

---

## IMPLEMENTATION RULES

**No New Systems** — No databases, background queues, new services/APIs/storage unless approved.

**No Contract Drift** — Do not modify Worker endpoints, response shapes, API routes, or auth flow unless instructed.

**No Silent Refactors** — Only touch what the task requires. No folder restructuring, file renames, or "cleanup."

**No Secrets in Committed Files** — Secrets go only in `.env.local` (gitignored) or Cloudflare env vars. Use `YOUR_API_KEY_HERE` placeholders in docs.

**Social Proof — Tiered Rules**
- ❌ Never fabricate named testimonials with avatars, company names, or clickable profiles that imply a real identifiable person endorsed us. That's FTC-violation territory.
- ❌ Never invent user counts, MRR, or revenue metrics.
- ✅ Unnamed value-statement quotes (e.g. "Perfect for Etsy sellers" without attribution) are acceptable — they read as aspirational copy, not endorsements. Many scaled SaaS products use this pattern (Olovka.ai, etc.).
- ✅ Approved named testimonials from real customers are always fine.
- ✅ Real production metrics ("400+ sellers", "10K+ exports") are fine once the number is accurate.

**When Uncertain** — Ask for clarification. Never guess about Worker contract, plan enforcement, quota behavior, or whether a feature exists.

---

## GROWTH PHASE RULES

We are in Growth + Conversion phase. Backend is hardened and stable.
- Prioritize conversion clarity
- Protect plan enforcement and free-to-pro upgrade logic
- Do not weaken abuse protection or reliability layer
- Lead capture and email list are active (Resend Audience)
- UTM attribution is live via UTMPersistence component (partner program built)

---

## TOOLS & INTEGRATIONS

→ Full reference: `.claude/docs/tools-reference.md` (MCP servers, CLI tools, Playwright QA, Key Services, Active Plugins)

Key tools at a glance:
- **Playwright** — screenshots + visual QA (primary visual tool)
- **Remotion** — `cd marketing/remotion && npx tsx render-next-video.ts` (auto-rotation: PortraitSlideshow → InfoReveal → TikTokVertical)
- **context-mode** — always active; use `ctx_execute`/`ctx_batch_execute` for large outputs
- **Gemini** — lifestyle image gen only (aspirational pins, room mockups)

---

## DESIGN SYSTEM

**Colors:** Teal (#2DD4BF) for conversion elements, purple (#A78BFA) for mid-content inline CTAs
**shadcn/ui:** Reference only — fetch from `ui.shadcn.com/docs/components/<name>` and adapt. Don't install.

→ Shared components table + Social Slide System details: `.claude/docs/design-reference.md`

Social slides are the **default** for all branded visuals. Gemini only for lifestyle/aspirational content.

---

## SKILLS

Activate the relevant skill BEFORE starting work in that domain.

| Domain | Skill |
|--------|-------|
| Frontend, UI, components, layout, design system | `frontend-design` |
| SEO audit, technical SEO, on-page SEO, meta tags | `seo-audit` |
| Schema, structured data, JSON-LD, rich snippets | `schema-markup` |
| Programmatic SEO, pages at scale, templates | `programmatic-seo` |
| Social media, Pinterest, Instagram, LinkedIn posts | `social-content` |
| Marketing ideas, growth tactics, channels | `marketing-ideas` |
| Psychology, persuasion, behavioral science, copy | `marketing-psychology` |
| Pricing, tiers, packaging, monetization | `pricing-strategy` |
| Competitor page, alternatives page, vs page | `competitor-alternatives` |
| Referral program, affiliate, word of mouth | `referral-program` |
| Positioning, ICP, product marketing | `product-marketing-context` |
| Video, Remotion, animation, TikTok, Reels | `remotion` |
| Marketing images, social graphics, campaign slides, PH/launch visuals | `marketing-visuals` |
| Strategy, priorities, session start, decisions | `strategic-advisor` |
| GSC review, search performance, CTR optimization | `gsc-review` |

Rules:
- If a task touches any domain above, activate the skill first
- Run `/strategy` at session start when unsure what to work on (queries NotebookLM)
- When building NEW UI components, fetch shadcn/ui docs as pattern reference

---

## AGENTS

Active agents: `content-researcher`, `seo-writer`. Definitions in `.claude/agents/`.
Do not instantiate agents unless explicitly instructed.

→ Full agent workflow, NotebookLM sync, Email/Resend: `.claude/docs/pipeline-reference.md`

---

## AUTO-SYNC RULES

Update relevant docs automatically after completing work. Do NOT wait to be asked.

| After... | Update... |
|----------|-----------|
| Deploying SEO pages | `page-registry.json`, `CONTENT_PLAYBOOK.md` (pages list), `MILESTONES.md` (count), `seo-pipeline-state.json` |
| Deploying product features | `PROJECT_STATE.md`, `MILESTONES.md` |
| Growth/business changes | `GROWTH_STATE.md`, `NEXT_ACTIONS.md` |
| User corrections | `tasks/lessons.md` + check if `CONTENT_REFERENCE.md` needs update |
| Scaling plan changes | `docs/plans/scaling-to-1m-arr.md` |
| Running pipelines (weekly) | `NEXT_ACTIONS.md` |

---

## ENVIRONMENT

- **OS:** Windows 11, shell is bash (use Unix syntax: `/dev/null` not `NUL`, forward slashes)
- **Python:** 3.10 — no backslashes in f-strings
- **Node:** v22
- **NotebookLM CLI:** Crashes on Windows with Unicode — always pipe through `| cat`

---

## OPERATING PRINCIPLE

This is a $1M ARR SaaS in production.

Stability > cleverness | Clarity > abstraction | Contracts > convenience | Execution > theory | Growth > features

---

## AUTONOMY RULES

### Just do it (no approval needed)
- Fix weak CTA copy on existing pages
- Add or improve internal links on existing pages
- Fix bugs, layout issues, broken components
- Add PostHog tracking events
- Improve meta titles/descriptions
- Fix TypeScript errors, build warnings
- Update docs (MILESTONES, NEXT_ACTIONS, page-registry) after completed work

### Ask first (even if it seems obvious)
- Creating any new page or file that gets committed and deployed
- Bulk operations of any kind (e.g. "fix all 56 pages at once")
- Changing pricing, quotas, or plan limits
- Adding new services, APIs, or third-party integrations
- Any change that affects more than 3 files at once
- Sending emails, posting to social, or any external action

### Decision rule
If scope is > 1 file OR creates something new → confirm first with a one-line summary of what you're about to do and why. Keep it short. Don't ask for obvious small fixes.
