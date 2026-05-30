/**
 * Screenshot W23-P19 — Top5FrameFitShowcase
 * Saves to marketing/social/content/pinterest/2026-05-23-top5-frame-fit-pinterest/pin.jpg
 */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const ctx = await browser.newContext({
    viewport: { width: 1200, height: 1600 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  await page.goto("http://localhost:3000/social-slides", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(3000);

  const el = await page.$("#top5-frame-fit-pinterest");
  if (!el) {
    console.error("ERROR: #top5-frame-fit-pinterest not found");
    await browser.close();
    process.exit(1);
  }

  const outDir = path.join(
    __dirname,
    "../marketing/social/content/pinterest/2026-05-23-top5-frame-fit-pinterest"
  );
  fs.mkdirSync(outDir, { recursive: true });

  const out = path.join(outDir, "pin.jpg");
  await el.screenshot({ path: out, type: "jpeg", quality: 95 });
  console.log(`Saved: ${out}`);
  await browser.close();
})();
