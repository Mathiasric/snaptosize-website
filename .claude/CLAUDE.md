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
- After ANY correction: update `tasks/lessons.md` with the pattern (55 lessons and growing)
- Review `tasks/lessons.md` at session start for relevant rules

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

**Screenshots:** Default to viewport-only screenshots (1440×900 desktop, 390×844 mobile). Never use `fullPage: true` unless a specific full-page QA review is requested. Use `clip` to capture specific sections when only part of the page is relevant.

---

## IMPLEMENTATION RULES

**No New Systems** — No databases, background queues, new services/APIs/storage unless approved.

**No Contract Drift** — Do not modify Worker endpoints, response shapes, API routes, or auth flow unless instructed.

**No Silent Refactors** — Only touch what the task requires. No folder restructuring, file renames, or "cleanup."

**No Secrets in Committed Files** — Secrets go only in `.env.local` (gitignored) or Cloudflare env vars. Use `YOUR_API_KEY_HERE` placeholders in docs.

**No Fake Social Proof** — Never fabricate testimonials, reviews, quotes, or user counts. Only use real metrics from production data or approved testimonials. Violates FTC guidelines.

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

### MCP Servers

| MCP Server | Use For | Key Notes |
|------------|---------|-----------|
| **Playwright** | Screenshots, visual QA, social slide capture | **Primary visual tool.** Section clips via `chromium.launch()` in `app-next/`. |
| **Gemini** | Lifestyle image gen, text analysis, captions | `gemini-generate-image` for aspirational pins only. Social slides preferred for branded visuals. |
| **n8n-mcp** | Workflow automation docs/templates | Docs-only mode. 1396 nodes, 2709 templates. Connect N8N_API_URL later for automation. |
| **Firecrawl** | Web scraping for SEO research | 500 free credits. Scrape SERP results for content briefs. |
| **NotebookLM** | Strategic brain, project context queries | Notebook ID: `4853724d-ed87-4546-963a-e84665b869f5`. Refresh auth first. |
| **Canva** | Design creation/editing | Unreliable auth — use as fallback |
| **Figma** | Design-to-code extraction | `get_design_context` for component code |
| **Sentry** | Error monitoring, issue search | `search_issues`, `get_issue_details` |
| **Cloudflare** | Workers inspection, R2, KV, D1 | `workers_get_worker_code`, `accounts_list` |
| **claude-mem** | Cross-session memory | Automatic — no manual action needed |
| **context-mode** | Context window optimization | Use `ctx_execute` instead of Bash for large outputs. `ctx_batch_execute` for multi-command research. `/ctx-stats` shows savings. |

### CLI Tools

| Tool | Command | Use For |
|------|---------|---------|
| **Playwright** | `npx playwright screenshot --viewport-size="1440,900" <url> <out.png>` | Static page screenshots |
| **Playwright (node)** | `node -e "..."` with `chromium.launch()` | Interactive screenshots, section clips, social slide capture |
| **Remotion** | `cd marketing/remotion && npx tsx render-slideshow-videos.ts` | Render SlideshowVertical videos from social slide screenshots |
| **gh** | `gh pr create`, `gh issue view` | GitHub operations |
| **nlm** | `PYTHONIOENCODING=utf-8 nlm <cmd> \| cat` | NotebookLM CLI (pipe through `\| cat` on Windows to avoid Unicode crash) |
| **Buffer** | `python marketing/social/schedule-batch.py` | Social media scheduling |
| **GSC** | `python marketing/gsc-analytics/pull_gsc.py` | Google Search Console API data pull + analysis |

  | **Weekly Brief** | `python marketing/intelligence/weekly-brief.py` | Combined GSC + social + pipeline intelligence report →
  `marketing/intelligence/YYYY-MM-DD-brief.md` |
  | **Link Builder** | `python marketing/seo-optimizer/link-builder.py` | Scan all SEO pages for internal link opportunities →
  `marketing/seo-optimizer/link-opportunities.json` |
  | **Title Optimizer** | `python marketing/seo-optimizer/title-optimizer.py` | Find low-CTR pages via GSC, suggest better titles →
  `marketing/seo-optimizer/optimization-log.json` |
 
  | **Content Gap Detector** | `python marketing/seo-optimizer/content-gap-detector.py` | Find keyword clusters with impressions but no page →
  `marketing/seo-optimizer/content-gaps.json` |
  | **Striking Distance** | `python marketing/seo-optimizer/striking-distance.py` | Find pages ranking pos 5-15 with optimization actions →
  `marketing/seo-optimizer/striking-distance.json` |


### Playwright Visual QA

Static: `npx playwright screenshot --viewport-size="1440,900" <url> <out.png>`
Interactive (dropdowns, modals): use `node -e` with `chromium.launch()` — click, waitForTimeout(300), screenshot.

### Key Services

| Service | Purpose |
|---------|---------|
| **PostHog** | Analytics tracking (client + server-side events) |
| **Resend** | Transactional email, alerts, drip sequence, lead capture |
| **Stripe** | Subscriptions, checkout, customer portal |
| **Pushover** | Real-time mobile alerts for critical failures |
| **Cloudflare R2** | `snaptosize-social` bucket for social media images (social.snaptosize.com) |

### Active Plugins (Claude.ai)

- **frontend-design** + **ui-ux-pro-max** — UI/UX, component design, visual layouts (activate either for design work)
- **superpowers** — Structured dev workflow: planning, subagent coordination, verification
- **claude-mem** — Cross-session memory (automatic)
- **context-mode** — Context window optimization (always active)

### External References

- **awesome-design-md** (`github.com/VoltAgent/awesome-design-md`) — 58 DESIGN.md files from top brands. Use as inspiration when building new social slide templates.
- **awesome-claude-code** (`github.com/hesreallyhim/awesome-claude-code`) — Curated list of Claude Code skills, workflows, and tools. Bookmark for discovering new capabilities.

---

## DESIGN SYSTEM

**Colors:** Teal (#2DD4BF) for conversion elements, purple (#A78BFA) for mid-content inline CTAs
**shadcn/ui:** Reference only — fetch from `ui.shadcn.com/docs/components/<name>` and adapt. Don't install.

### Shared Components

| Component | Usage |
|-----------|-------|
| `EmailCaptureSection` | Teal top accent, document icon, elevated card. One per page near bottom. |
| `FinalCTA` | Teal left accent bar, stat line, app link. Last CTA before FAQ. |
| `Button` | Always wrap in `<a>`, never give `href` prop to Button itself. |
| `Card` | With `accent` prop for purple mid-content CTAs. |
| `FAQAccordion` | FAQ section — items must match FAQPage schema exactly. |
| `Container` | Page-width wrapper. |
| `Badge` | Status indicators. |
| `RelatedPages` | Cross-links at page bottom. |

### Social Slide System (Primary Visual Pipeline)

All branded visuals (pins, posts, video slides) are built as React components and screenshotted with Playwright. This is the **default tool** for all visual content.

**Source:** `app-next/app/social-slides/_components/`
**Page:** `app-next/app/social-slides/page.tsx` (noindex, screenshot-only)
**Wrapper:** `SlideWrapper` → Pinterest 1000×1500, Instagram 1080×1350
**Design:** Dark gradients (#0B0B12), purple/teal glow orbs, real artwork from `/assets/Composition_Pictures/`

**Templates:** BeforeAfter, PackSpotlight, StatsCard, Checklist, SizeComparison, WorkflowSteps, NumberHighlight

**Flow:**
1. React component in `_components/` using `SlideWrapper`
2. Rendered on `/social-slides` (noindex)
3. Playwright screenshot with `clip` on element ID
4. Used directly as pin/post, OR placed in `remotion/public/` for SlideshowVertical video slides

**Rules:**
- Social slide components are the DEFAULT for all branded visuals
- Gemini only for lifestyle/aspirational content (room mockups, styled scenes)
- Never use raw page screenshots or text-only Remotion for social content
- New visual concepts → build a new `_components/` template, reference `BeforeAfter.tsx`

See `docs/PIPELINE_OPERATIONS.md` for full workflow and screenshot commands.

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

Agent definitions live in `.claude/agents/`. Active content agents:

| Agent | Role |
|-------|------|
| `content-researcher` | SEO keyword research + content briefs with internal link discovery |
| `seo-writer` | Converts brief into complete Next.js page with pre-submit checklist |

Social pipeline agents (used by `/pipeline-run-week`):
`content-orchestrator`, `social-media-analyst`, `social-media-content-creator`, `social-media-ideator`, `social-media-publisher`, `social-media-researcher`, `social-media-scripter`, `visual-content-creator`, `cross-platform-adapter`

### Standard SEO Content Workflow

Run in parallel where possible:

1. **Research** (parallel): WebSearch + brief writing per keyword → `marketing/briefs/`
2. **Write** (parallel): Read brief + template page → write Next.js page
3. **Lifestyle image**: Generate Gemini mockup at `aspect_ratio: "4:3"` → `public/assets/visuals/[slug]-mockup.jpg`
4. **Build check**: `npx next build` to verify compilation
5. **OG image**: Run `og-screenshot` skill (`.claude/skills/og-screenshot_SKILL.md`) → `public/assets/og/[slug].png`, update metadata
6. **Visual QA**: Playwright screenshots — hero at 1440x900 + 390x844
7. **Backlinks**: Search existing pages for unlinked mentions of new topic, add links
8. **Deploy**: `git add` + commit + push → Cloudflare Pages auto-deploys
9. **Nav/Footer**: Add new page to `Header.tsx` (desktop + mobile) and `Footer.tsx` under relevant section
10. **Auto-sync**: Update page-registry, CONTENT_PLAYBOOK, MILESTONES, pipeline state

Template pages:
- Size pages: `etsy-8x10-print-size/page.tsx`
- Guide pages: `how-to-resize-images-for-etsy/page.tsx`
- Niche pages: `etsy-gallery-wall-print-sizes/page.tsx`

Every page requires: Article + BreadcrumbList + FAQPage schema, 3+ CTAs, CSS-only hero, trust pills, internal links, OG image.

Do not instantiate agents unless explicitly instructed.

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

## NOTEBOOKLM INTEGRATION

Active notebook: "SnapToSize — 1M ARR Scaling Playbook" (ID: `4853724d-ed87-4546-963a-e84665b869f5`)

**How to sync** (auth expires frequently):
1. MCP: `mcp__notebooklm-mcp__refresh_auth` then `source_add` with type=text
2. CLI fallback: `PYTHONIOENCODING=utf-8 nlm source add <id> --type text --title "<name>" --text "$(cat <file>)" | cat`

**When to sync:** After major milestones, 10+ new SEO pages, or strategic review. Key sources: PROJECT_STATE, GROWTH_STATE, MILESTONES, CONTENT_PLAYBOOK.

---

## EMAIL / RESEND

- Resend integrated for alerts (support@snaptosize.com verified)
- Resend Audience for email list storage
- Lead capture uses Resend API
- Do not introduce new email providers

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
