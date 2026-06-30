/**
 * generate-og.mjs — standing OG image generator (replaces per-session scratch scripts).
 *
 * Screenshots the hero of each page at 1200x630 with the nav header stripped,
 * writing to app-next/public/assets/og/<slug>.png.
 *
 * Usage (from app-next/):
 *   npx next build                 # static export -> out/
 *   npx serve out -l 3344 &        # serve the static build (NOT dev server — hydration doubles content)
 *   node scripts/generate-og.mjs etsy-vs-shopify-digital-downloads how-to-upscale-ai-art-for-etsy-prints
 *
 * Env:
 *   OG_BASE_URL  (default http://localhost:3344)
 *   QA_DIR       if set, also writes qa-<slug>-desktop.png (fullPage) + qa-<slug>-mobile.png there
 *
 * Pass slug "" (empty) for the homepage -> home.png.
 * Requires: npm install --no-save playwright && npx playwright install chromium
 */
import { chromium } from "playwright";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseUrl = process.env.OG_BASE_URL || "http://localhost:3344";
const outDir = join(__dirname, "..", "public", "assets", "og");
const qaDir = process.env.QA_DIR || null;

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error("No slugs given. Example: node scripts/generate-og.mjs etsy-vs-shopify-digital-downloads");
  process.exit(1);
}

const stripHeader = () => {
  const obs = new MutationObserver(() => {
    document.querySelectorAll("header").forEach((el) => el.remove());
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
};

const browser = await chromium.launch();

// OG — 1200x630 clip from top-left
const ogCtx = await browser.newContext({ viewport: { width: 1200, height: 630 } });
await ogCtx.addInitScript(stripHeader);
for (const slug of slugs) {
  const filename = (slug || "home") + ".png";
  const page = await ogCtx.newPage();
  await page.goto(`${baseUrl}/${slug}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.evaluate(() => {
    document.querySelectorAll("header").forEach((el) => el.remove());
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outDir, filename), clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log(`OG  ${filename}`);
  await page.close();
}
await ogCtx.close();

// Optional QA shots
if (qaDir) {
  const dCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const mCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  for (const slug of slugs) {
    const dp = await dCtx.newPage();
    await dp.goto(`${baseUrl}/${slug}`, { waitUntil: "networkidle" });
    await dp.waitForTimeout(1000);
    await dp.screenshot({ path: join(qaDir, `qa-${slug || "home"}-desktop.png`), fullPage: true });
    await dp.close();
    const mp = await mCtx.newPage();
    await mp.goto(`${baseUrl}/${slug}`, { waitUntil: "networkidle" });
    await mp.waitForTimeout(1000);
    await mp.screenshot({ path: join(qaDir, `qa-${slug || "home"}-mobile.png`) });
    await mp.close();
    console.log(`QA  ${slug || "home"}`);
  }
  await dCtx.close();
  await mCtx.close();
}

await browser.close();
console.log("DONE");
