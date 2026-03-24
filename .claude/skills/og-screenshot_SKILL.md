---
name: og-screenshot
description: Generate OG (Open Graph) images for SEO pages by screenshotting the hero section with Playwright. Use when the user mentions "OG image," "open graph image," "social preview image," "og:image," "twitter card image," "take OG screenshot," or wants to create/update social sharing images for any page. Also use when creating new SEO pages that need OG images, or when updating existing pages and the OG image needs refreshing.
---

# OG Screenshot Generator

Generate 1200×630 OG images by screenshotting the hero section of pages with Playwright, hiding the navigation bar.

## Prerequisites

- Playwright must be installed: `npm install --no-save playwright` (in repo root)
- Chromium browsers must be installed: `npx playwright install chromium`

## Critical Rules

1. **Never use `replace_all` when updating OG image paths in page metadata.** Pages may use their original hero background image in an `<Image>` component AND reference an OG image in metadata. Using `replace_all` on the image path will replace BOTH, causing the hero to display the OG screenshot (which contains text) as its background — creating recursive text doubling. Always target only the specific `openGraph` and `twitter` metadata sections.

2. **Always use a static build for screenshots**, not dev server. Dev mode has hydration issues that cause doubled content. Build first, then serve:
   ```bash
   cd app-next && npx next build
   npx serve out -l 3333 &
   ```

3. **Use `addInitScript` with `MutationObserver`** to remove the header — this catches React hydration re-renders that add the header back after initial removal.

4. **Use `clip` parameter** to capture exactly 1200×630 from the top-left corner.

## Workflow

### Step 1: Build and serve static site

```bash
cd app-next && npx next build
npx kill-port 3333 2>/dev/null
npx serve out -l 3333 &
sleep 3
```

### Step 2: Write and run the screenshot script

Create a temporary `og-screenshot.mjs` in the repo root:

```javascript
import { chromium } from 'playwright';
import { join } from 'path';

const pages = [
  // { slug: 'etsy-print-sizes', filename: 'etsy-print-sizes.png' },
  // Add pages here
];

const baseUrl = 'http://localhost:3333';
const outDir = join(import.meta.dirname, 'app-next/public/assets/og');

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1200, height: 630 } });

// MutationObserver removes header even after React hydration re-renders
await context.addInitScript(() => {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('header').forEach(el => el.remove());
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
});

for (const { slug, filename } of pages) {
  const page = await context.newPage();
  const url = slug ? `${baseUrl}/${slug}` : baseUrl;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    document.querySelectorAll('header').forEach(el => el.remove());
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);

  await page.screenshot({
    path: join(outDir, filename),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  console.log(`✓ ${filename}`);
  await page.close();
}

await browser.close();
```

Run with: `node og-screenshot.mjs`

### Step 3: Verify screenshots

Always visually verify each screenshot after generation by reading the image file. Check for:
- No navigation bar visible
- No doubled/overlapping text
- Hero content is readable and well-framed
- No dev overlays or error indicators

### Step 4: Update metadata (CAREFULLY)

For each page's `page.tsx`, update ONLY the metadata sections:

```tsx
// In openGraph.images:
images: [{ url: "/assets/og/[slug].png", width: 1200, height: 630, alt: "..." }]

// In twitter.images:
images: ["/assets/og/[slug].png"]
```

**Do NOT touch any `<Image>` component `src` attributes** — those are hero background images, not OG images.

### Step 5: Clean up

```bash
rm og-screenshot.mjs
npx kill-port 3333 2>/dev/null
```

## Output location

All OG images go in: `app-next/public/assets/og/[slug].png`

Homepage uses: `app-next/public/assets/og/home.png`

## Common issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Doubled/overlapping text | Hero `<Image>` src was changed to OG path | Restore original hero image path, only change metadata |
| Header still visible | React hydration re-adds header | Use `addInitScript` + `MutationObserver`, not post-load `evaluate` |
| Blurry or wrong size | Viewport not set correctly | Ensure `viewport: { width: 1200, height: 630 }` on context |
| Script can't find playwright | Not installed in working dir | Run `npm install --no-save playwright` in repo root |
| File lock errors on Windows | Previous process holding file | Kill existing serve/node processes, retry |

## SnapToSize page inventory

| Page | Slug | OG filename |
|------|------|-------------|
| Homepage | (root) | home.png |
| Etsy Print Sizes | etsy-print-sizes | etsy-print-sizes.png |
| Etsy Print Ratios | etsy-print-ratios | etsy-print-ratios.png |
| How to Sell | how-to-sell-digital-downloads-on-etsy | how-to-sell-digital-downloads-on-etsy.png |
| What Files to Include | what-files-to-include-etsy-digital-download | what-files-to-include-etsy-digital-download.png |
| Etsy 20MB Limit | etsy-20mb-file-limit | etsy-20mb-file-limit.png |
