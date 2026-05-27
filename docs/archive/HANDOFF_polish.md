# SnapToSize — Polish Pass Handoff

**Written:** 2026-05-19
**Author:** previous session (continuing a multi-day polish pass)
**Status snapshot:** My Packs prod-hardened, Quick Export polish iteration 2 in PR #23 (ready to merge), worker observability + Fly OOM alerts live in prod.

---

## How to use this document

Paste the **Quick start prompt** below into a fresh chat. It primes the new session with the workflow, locked-in decisions, and where to find everything else. The rest of this file is reference.

### Quick start prompt (copy-paste into new chat)

```
We are mid-way through a multi-day design polish pass on SnapToSize.

Read docs/HANDOFF_polish.md for the full state. Key points:

1. Workflow: ALL design changes go through preview branch + CF Pages preview
   build + Playwright capture-script verification BEFORE merge. Never push
   straight to main.
2. Three repos: snaptosize-website (this one, marketing + docs), snaptosize-app
   (the product UI, Next.js → CF Pages), snaptosize-worker (Cloudflare Worker
   + Fly.io Python runner). Cross-repo PRs require coordinated deploys.
3. Design system locked in: --accent #7C3AED purple is the single primary,
   --info #2DD4BF teal for callouts only. Sentence-case section labels,
   tabular-nums numerics, rounded-md action buttons, rounded-xl cards,
   focus-visible:ring-2 ring-accent/50 standard everywhere.
4. Open PRs: snaptosize-app #23 (Quick Export hero + depth + footer). Ready
   for merge after user verification.
5. Next polish targets in ROI order: my-packs page-level pass, sub-nav tabs,
   app-header, ProGate copy, mobile pass.

What's next is in section "ROI roadmap" of the handoff. Confirm where you
want to start and I'll get the right context loaded.
```

---

## 1. The three repos and how they relate

| Repo | Purpose | Deploy target | Working dir on disk |
|------|---------|---------------|---------------------|
| `snaptosize-website` | Marketing site, docs, scripts, this handoff | snaptosize.com (CF Pages, static Next.js) | `C:/dev/snaptosize-website` |
| `snaptosize-app` | Product UI (My Packs, Quick Export, billing, auth) | app.snaptosize.com (CF Pages, edge Next.js) | `C:/dev/snaptosize-app` |
| `snaptosize-worker` | Cloudflare Worker (auth, plan-gating, KV, queue) + Fly.io Python runner (Pillow resize, ZIP build) | worker.snaptosize-mathias.workers.dev + snaptosize-runner2.fly.dev | `C:/dev/snaptosize-worker` |

Each is a separate git repo. Each has its own `main` branch and its own PRs.

**Cross-repo dependency map for polish work:**
- Pure design changes: only `snaptosize-app` typically
- Shared components (UploadZone, GenerateButton, PackSelector): in `snaptosize-app/app/app/components/` — affect both `/app/packs` (Quick Export) and `/app/my-packs`
- Backend behavior changes (size validation, orientation, etc.): `snaptosize-worker` services/runner/main.py + services/worker/src/index.ts
- For a feature spanning frontend + backend: PR in each repo, deploy worker/runner first (backend backwards-compat additive), then merge app PR (the consumer)

---

## 2. The polish workflow (this is the dance we always run)

For every visual/UX change:

```
1. baseline    capture current state via scripts/capture-preview.mjs
               or scripts/capture-viewports.mjs
2. branch      cd C:/dev/snaptosize-app && git checkout main && git pull
               git checkout -b polish/<topic>
3. implement   edit files, run npx tsc --noEmit, fix errors
4. commit/push commit with descriptive message + Co-Authored-By:
               Claude Opus 4.7 (1M context) <noreply@anthropic.com>
5. preview     gh pr create → wait for CF Pages preview URL
               (script polls gh pr view PR# --json statusCheckRollup)
6. verify      Update scripts/capture-preview.mjs with new URL,
               run node scripts/capture-preview.mjs.
               Inspect captures/*.png side-by-side with prod.
7. user gate   user verifies visually before merge (RULE: NEVER merge
               design changes without explicit user OK)
8. merge       gh pr merge <PR#> --squash --delete-branch
               git checkout main && git pull
9. prod        CF Pages auto-deploys main to app.snaptosize.com (~2 min)
```

Reversal plan for every PR: `git revert <commit-sha>` on main + push. CF Pages redeploys instantly. For worker/runner repos there's no preview — see section 5.

---

## 3. Localhost setup (when CF Pages preview is too slow to iterate)

```bash
cd C:/dev/snaptosize-app
npm run dev
```

Default port 3000. Visit http://localhost:3000/app/packs or /app/my-packs.

Requirements:
- `.env.local` with Clerk keys (you have this from past development)
- Worker secrets are set in Cloudflare directly, NOT replicated locally; localhost fetches from prod worker by default
- Hot-reload kicks in on file save

**When to use localhost vs preview:**
- Localhost: rapid iteration on visuals (skeleton, typography, spacing)
- CF Pages preview: final verification on real edge runtime + Clerk auth state matching prod

---

## 4. Playwright capture scripts (key tooling)

Located in `C:/dev/snaptosize-website/scripts/`:

**`capture-preview.mjs`** — captures 4 URLs (prev_packs, prod_packs, prev_mypacks, prod_mypacks) at desktop 1440×900 + mobile 390×844. Saves to `captures/`. Update the URLS object before running.

**`capture-viewports.mjs`** — same URL across 7 viewports (1920, 1440, 1366, 1280, 1024, 768, 390). Saves to `captures/viewports/`. Use this to verify above-the-fold behavior on common laptop sizes (1366/1280).

Both run via `node scripts/<name>.mjs`. Use `npx playwright` (1.59+) under the hood. Independent of MCP browser lock — works even when mcp-chrome is busy.

**Workflow:**
```
node scripts/capture-preview.mjs
# inspect captures/*.png via Read tool
# iterate code
# re-capture
```

---

## 5. Cross-repo deploy mechanics

### snaptosize-app (CF Pages)
- Auto-deploys main → app.snaptosize.com (~2 min)
- PR branches → unique preview URL `https://<hash>.snaptosize-app.pages.dev`
- Get preview URL: `gh pr view <PR#> --comments --json comments -q '.comments[-1].body' | grep -oE 'https://[a-z0-9-]+\.snaptosize-app\.pages\.dev'`
- Status check: `gh pr view <PR#> --json statusCheckRollup -q '.statusCheckRollup[0].status'` — wait for "COMPLETED"

### snaptosize-worker (Cloudflare Worker)
- NO preview environment. Single deploy target.
- Manual deploy: `cd services/worker && npm run deploy` (uses wrangler under the hood)
- Auto-deploys ONLY when merged to main? NO — must run `npm run deploy` manually after merge.
- Rollback: `wrangler deployments list` then `wrangler rollback <id>`, or `git revert` + `npm run deploy`

### snaptosize-runner2 (Fly.io Python)
- NO preview environment. Single deploy target.
- Manual deploy: `cd services/runner && fly deploy`
- Rollback: `fly releases` then `fly releases rollback <version>`, or `git revert` + `fly deploy`

**Cross-repo deploy order rule:** Backend (worker/runner) ALWAYS first, frontend (app) second. Backend changes must be backwards-compatible so existing frontend doesn't break during the deploy gap.

---

## 6. Design system — LOCKED IN after this polish pass

### Colors (snaptosize-app/app/globals.css)
```css
--accent: #7C3AED;         /* purple, primary CTA + accent everywhere */
--accent-light: #8B5CF6;   /* lighter purple, hover states */
--success: #22C55E;        /* green, done states */
--info: #2DD4BF;           /* teal, callouts ONLY (How it works etc.) */
--error: #EF4444;
--background: #0B0B12;     /* page bg */
--surface: #13111C;        /* card bg */
--border: #1E1B2E;
--foreground: #E5E5E5;
```

Tailwind classes: `text-accent`, `bg-accent/10`, `border-accent/40`, `text-info`, `text-success`, etc. Single accent = purple. NO dual-brand confusion.

### Typography rules
- **Section labels:** sentence-case, `text-sm font-medium text-foreground/75`. NEVER `text-xs font-semibold uppercase tracking-wider` — that was the brutalist pattern we eliminated app-wide.
- **Numerics:** ALWAYS `tabular-nums` on counters, prices, file sizes, size lists. Stripe principle — digit-width stability.
- **Mono font:** used for filenames, file paths, code-like content (font-mono Tailwind class).

### Border-radius scale
- Buttons (action): `rounded-md` (8px)
- Inputs: `rounded-md` (8px)
- Cards: `rounded-xl` (12px)
- Modals: `rounded-2xl` (16px)
- Mini-elements (badges, chips): `rounded` or `rounded-sm`

### Focus rings (a11y)
Standard pattern everywhere:
```
outline-none focus-visible:ring-2 focus-visible:ring-accent/50
  focus-visible:ring-offset-2 focus-visible:ring-offset-background
```
(adjust `ring-offset-<surface|background>` per context)

### Component patterns
- **TemplateRatioPreview** (app/app/my-packs/page.tsx) — mini rectangles per size scaled to aspect ratio, accent-tinted on hover
- **OutputPreviewPanel** (app/app/components/OutputPreviewPanel.tsx) — Quick Export right-column hero, ZIP-filename-as-visual + per-pack rows
- **StackedFilesIllustration** (in OutputPreviewPanel) — CSS-drawn empty state, 3 rotated rectangles fanning

---

## 7. Anti-patterns we've decided against (do NOT propose these again)

1. **MB / file-size progress bars** — anti-positioning. SnapToSize handles ZIP compression invisibly via JPEG quality fallback. Surfacing MB creates user anxiety. (PR #16 had a progress bar; reverted same PR.)
2. **Logo redesign** — low ROI for 15 Pro users. Re-evaluate at 500+ Pro users or rebrand event.
3. **Fake social proof** — "400+ Etsy sellers" or similar fabricated metrics. We have 15 Pro users; FTC violation territory. Memory feedback memo enforces this.
4. **Dismissible "How it works" callout inside OutputPreviewPanel** — removed since the panel itself visualizes the output. Redundant.
5. **Glassmorphism, gradient text, side-stripe borders > 1px, hero-metric template, identical card grids** — per impeccable skill's absolute bans.
6. **`text-xs font-semibold uppercase tracking-wider`** — old brutalist label style. Replaced everywhere with sentence-case `text-sm font-medium`.
7. **Dual-accent (teal + purple as competing primaries)** — investigated and rejected. Code was already purple-disciplined; only inline teal was "How it works" callout, now tokenized as `--info`.

---

## 8. Recent PR history (snapshot)

### snaptosize-app (recent polish PRs, all merged unless noted)
- #14 — My Packs iteration 1: skeleton + container + typography + tabular-nums
- #15 — My Packs iteration 2: radius + badge + focus rings
- #16 — My Packs iteration 3: ratio preview + MB revert
- #17 — TemplatesModal consistency
- #18 — UploadZone + GenerateButton consistency
- #19 — PackSelector typography + tabular-nums
- #20 — ProGate visual polish (status: ready-for-verification, see open items)
- #21 — `--info` design token (housekeeping)
- #22 — OutputPreviewPanel v3 (Quick Export right column)
- **#23 — Quick Export hero + depth + footer + progressive disclosure** ← OPEN, awaiting merge

### snaptosize-worker (recent polish/observability PRs, all merged + deployed)
- #4 — cap 7 sizes + orientation persistence
- #5 — runner orientation swap in custom_sizes
- #6 — ISO cm landscape swap
- #7 — production hardening (PACK_EXCLUDED_LABELS + DELETE atomic order)
- #8 — structured logs + rate limit on CRUD
- #9 — Fly OOM polling cron
- #10 — stuck-job R2 pre-check (eliminates false-positive Pushover)

---

## 9. ROI roadmap — what's next

In order of impact × ease:

### Immediate (this session or next)
- **Merge PR #23** if approved (Quick Export hero/footer)
- **Merge PR #20** if approved (ProGate polish, also still open)

### Next polish iteration (~1-2 hours)
- **/app/my-packs page-level pass** — same treatment as /app/packs got in #23. Page hero, output panel structure parity, trust footer. Currently my-packs has good component-level polish but no page-level structure beyond `mx-auto max-w-[1180px] px-4 py-8`.
- **Sub-nav tabs polish** — the "Packs / Quick Export / (My Packs)" tabs. Currently text-only with bottom underline. Could be more substantial.
- **App-header polish** — "SnapToSize" wordmark + Log in / Sign up. Currently minimal. Could integrate avatar/menu for signed-in.

### Mobile pass (~1 hour)
- Run `capture-viewports.mjs` on all key pages
- Verify PackBuilderModal touch targets
- Test orientation-mismatch banner on mobile
- Adjust any overflow / cramped layouts

### Conversion-focused (~1-2 hours each)
- **Download/success state polish** — when JobCards complete, the download experience could be more celebratory + functional
- **Error states** — orientation mismatch, free-tier limit hit, file upload reject. Currently functional but plain.
- **First-run / activation UX** — what does a brand-new Pro user see when they first land on /app/my-packs? Currently empty templates list. Could pre-populate or guide better.

### Lower priority / requires data
- **ProGate copy** — strengthen value-prop with real metrics ONCE we have meaningful numbers (>100 Pro users)
- **Recent activity feeds** — needs aggregated data we don't currently surface
- **Marketing site landing (snaptosize.com)** — separate repo, own audit. Lower priority since dashboard polish has direct user-facing impact, marketing-site less so for 15-Pro-user stage.

### Open ProGate items (PR #20 — verify before merge)
- Visual changes made: Yearly/Monthly sentence-case, tabular-nums on prices, focus rings + rounded-md CTAs, secondary CTA demoted to text-link.
- Awaiting visual verification by user (requires Pro→Free state, hard to test without separate account).

---

## 10. Skills, plugins, repos available + when to use them

### Skills loaded in default environment
- `impeccable` — CRITIQUE/POLISH/AUDIT/REFINE existing UI. Use for polish iterations. Has setup gates (PRODUCT.md, DESIGN.md, shape brief). Run `node .claude/skills/impeccable/scripts/load-context.mjs` for context.
- `frontend-design` — build NEW components from scratch. Use for adding new features.
- `ui-ux-pro-max` — 50+ styles, 161 palettes, 99 UX guidelines. Use for design pattern reference.
- `firecrawl` — web search/scrape for research. Use for design inspiration or competitive research.
- `firecrawl-search` — focused web search with content extraction.

### Skills selectively used
- `superpowers:brainstorming` — explore intent before creative work
- `superpowers:writing-plans` — multi-step task planning
- `superpowers:verification-before-completion` — sanity-check before claiming done
- `claude-mem:make-plan` — phased implementation plans
- `claude-mem:do` — execute plans with subagents
- `claude-mem:mem-search` — search persistent memory

### MCP servers
- `claude.ai_Cloudflare_Developer_Platform` — KV, R2, Workers, D1 access for diagnostics
- `claude.ai_PostHog` — analytics queries, event verification
- `firecrawl` — web research
- `playwright` — browser automation (occasionally locks; fall back to scripts/capture-*.mjs)
- `plugin_context-mode` — context compression (drops out occasionally)
- `plugin_claude-mem` — persistent memory across sessions

### Documentation references (DESIGN.md files from awesome-design-md)
- Used Linear + Stripe DESIGN.md as inspiration in early polish work
- Saved findings in `.firecrawl/design-principles.json`
- Don't re-crawl: known patterns already integrated

---

## 11. Memory file pointers (live state across sessions)

In `C:/Users/mathi/.claude/projects/C--dev-snaptosize-website/memory/`:

Key files this work touched:
- `project_my_packs_runner_bug.md` — My Packs production-readiness state (now mostly resolved)
- `feedback_advisor_usage.md` — Call advisor() before multi-file or architectural work
- `feedback_token_optimization.md` — token efficiency rules
- `cf-pages-dynamic-routes-broken.md` — dynamic `[id]` routes broken on CF Pages, use query params
- `feedback_react_template_visuals.md` — template visuals must show artwork
- `feedback_norsk.md` — speak Norwegian bokmål to this user
- `feedback_verify_before_push.md` — always Playwright-verify locally before push
- `feedback_no_taskkill.md` — never run kill commands

---

## 12. Known gotchas

### Browser MCP lock
`mcp-chrome` sometimes locks (`C:/Users/mathi/AppData/Local/ms-playwright/mcp-chrome-f5d9f25/lockfile`). User must close any open chrome with mcp-chrome in window title, OR fall back to standalone Playwright CLI via the scripts. Per memory, NEVER taskkill from agent side.

### CF KV eventual consistency
KV writes from Fly runner can lag behind R2 writes across regions → false-positive stuck-job alerts. PR #10 added R2 pre-check before alert. If a Pushover comes in suggesting stuck-job, first check Cloudflare logs for `stuck_false_positive_r2_present` vs real `stuck_job_detected`.

### Fly token rotation reminder
The current Fly API token in worker secrets (`FLY_API_TOKEN`) was exposed in chat history during setup. Rotate when convenient:
```
fly tokens revoke "worker-oom-poll"
fly tokens create deploy -a snaptosize-runner2 --expiry 8760h --name "worker-oom-poll-v2"
# then: wrangler secret put FLY_API_TOKEN
```

### Edit tool indentation gotcha
The Edit tool requires EXACT string match including whitespace. If `replace_all: true` only matches one of two seemingly-identical labels, indentation differs subtly. Fall back to a unique `old_string` per occurrence.

### Read tool hook blocks re-reads
Files already read in the session are summarized to "Only line 1 was read". Use Grep with `-C` (context lines) to see specific sections again.

### Subhead copy decisions
Quick Export subhead: "Upload once. Get every standard Etsy print size as a ZIP." (PR #23). The earlier version was 2 lines causing 4-line mobile wrap.

---

## 13. Architecture quick-reference (for impeccable context)

- **PRODUCT.md** is in `C:/dev/snaptosize-website/PRODUCT.md` — defines users (Etsy sellers, non-technical), brand voice (direct, warm, practical, NO hype), anti-references (purple gradients on white, glassmorphism, "boost productivity" copy, Inter font everywhere, stock photos).
- **DESIGN.md** is in `C:/dev/snaptosize-website/DESIGN.md` — has SOME inconsistencies with actual app code (says teal primary, app uses purple). Treat actual app code (globals.css) as ground truth for the app side. DESIGN.md may need update if marketing site lands on different primary.

---

## 14. Open branches in snaptosize-app

```bash
cd C:/dev/snaptosize-app && git branch -a | grep -v main
```

Recently merged (deletable):
- All `polish/*` branches except active ones

Currently open (do NOT delete):
- `polish/page-hero-and-depth` (PR #23) — awaiting merge
- `polish/pro-gate` (PR #20) — awaiting verification

---

## 15. Workflow rules established with user

1. **Speak Norwegian bokmål** (per memory)
2. **Never push to prod without user verification** for design changes (preview-first)
3. **Always show reversal plan** in every change
4. **Use advisor() before multi-file or architectural changes**
5. **One PR per polish iteration** — don't bundle multiple iterations
6. **Capture baseline before, verify after** with Playwright
7. **Branch naming:** `polish/<topic>`, `fix/<topic>`, `feat/<topic>`
8. **Commit message format:** scope + description + Co-Authored-By footer

---

## 16. The "elite" goal — what 1M ARR-look means here

User has explicitly named the target: design quality that wouldn't embarrass a $1M ARR SaaS. NOT a brand redesign. NOT logo work. The criteria are:

- **Hierarchy:** every page has clear visual structure (hero → action → trust footer pattern established)
- **Consistency:** typography, spacing, colors, focus rings — same system across every surface
- **Density:** dashboards feel substantial, not empty. Quick Export panel-balance and trust footer addressed the worst empty-void issue.
- **Trust signals:** placed where they build confidence BEFORE commit, not after. (Moved from below Generate to inside OutputPreviewPanel + dedicated footer.)
- **Progressive disclosure:** intro content for new users hides for returning ones (PR #23). Reduces cognitive load.
- **Accessibility:** focus rings, ARIA labels (added to UploadZone), keyboard navigation working (Enter/Space on drop zone).
- **Performance:** kept lean, no unnecessary deps, no over-engineering. The "no MB progress bar" decision reflects this.

### What we have NOT done yet (gap to elite)
- **/app/my-packs** doesn't have the same page-level structure as /app/packs got in #23 (no hero, no trust footer)
- **Animation/motion** — minimal. impeccable says exponential ease-out curves, no bounce. Opportunity to add subtle micro-interactions on pack selection, file upload, export completion.
- **Mobile-pass** — not run thoroughly. Modal layouts on small screens unknown.
- **Error states** — generic. Could be more on-brand.
- **Empty states beyond My Packs / Output panel** — other surfaces have generic empty states.

---

## End of handoff

Save this file with the project. The next session should reference it explicitly, then proceed to whichever polish target you prioritize.
