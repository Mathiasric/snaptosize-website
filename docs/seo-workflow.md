# Standard SEO Content Workflow

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

## Template pages
- Size pages: `etsy-8x10-print-size/page.tsx`
- Guide pages: `how-to-resize-images-for-etsy/page.tsx`
- Niche pages: `etsy-gallery-wall-print-sizes/page.tsx`

## Every page requires
Article + BreadcrumbList + FAQPage schema, 3+ CTAs, CSS-only hero, trust pills, internal links, OG image.

Do not instantiate agents unless explicitly instructed.
