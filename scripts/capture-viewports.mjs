import { chromium } from "playwright";
import fs from "node:fs";

const URL = "https://3d3ac246.snaptosize-app.pages.dev/app/packs";

const VIEWPORTS = [
  { name: "1920", w: 1920, h: 1080 },
  { name: "1440", w: 1440, h: 900 },
  { name: "1366", w: 1366, h: 768 },
  { name: "1280", w: 1280, h: 800 },
  { name: "1024", w: 1024, h: 768 },
  { name: "768", w: 768, h: 1024 },
  { name: "390", w: 390, h: 844 },
];

fs.mkdirSync("captures/viewports", { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const vp of VIEWPORTS) {
  await page.setViewportSize({ width: vp.w, height: vp.h });
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.screenshot({
    path: `captures/viewports/packs-${vp.name}.png`,
    fullPage: false,
  });
  console.log(`captured ${vp.name} (${vp.w}x${vp.h})`);
}

await browser.close();
console.log("done");
