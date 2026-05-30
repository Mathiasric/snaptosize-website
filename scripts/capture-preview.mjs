import { chromium } from "playwright";
import fs from "node:fs";

const URLS = {
  prev_packs: "https://a62532d9.snaptosize-app.pages.dev/app/packs",
  prod_packs: "https://app.snaptosize.com/app/packs",
  prev_mypacks: "https://a62532d9.snaptosize-app.pages.dev/app/my-packs",
  prod_mypacks: "https://app.snaptosize.com/app/my-packs",
};

fs.mkdirSync("captures", { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const [label, url] of Object.entries(URLS)) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `captures/${label}-desktop.png`, fullPage: false });
  await page.screenshot({ path: `captures/${label}-desktop-full.png`, fullPage: true });
  console.log(`captured ${label}-desktop (viewport + full)`);
}

await page.setViewportSize({ width: 390, height: 844 });
for (const [label, url] of Object.entries(URLS)) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `captures/${label}-mobile.png`, fullPage: false });
  console.log(`captured ${label}-mobile`);
}

await browser.close();
console.log("done");
