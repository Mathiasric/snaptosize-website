// W23-P22: BeforeAfter pinterest — before-after-pinterest
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/social-slides", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(3000);

  const el = await page.$("#before-after-pinterest");
  if (!el) { console.error("Element #before-after-pinterest not found"); await browser.close(); process.exit(1); }

  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  // Scroll so element top is at viewport top
  const elHandle = await page.evaluateHandle(() => document.querySelector("#before-after-pinterest"));
  const rect = await page.evaluate((el) => {
    el.scrollIntoView({ block: "start" });
    return { left: el.getBoundingClientRect().left, top: el.getBoundingClientRect().top, width: el.offsetWidth, height: el.offsetHeight };
  }, elHandle);
  // Scroll up by rect.top to pin element top at y=0
  await page.evaluate((top) => window.scrollBy(0, top), rect.top);
  await page.waitForTimeout(500);
  const box = await el.boundingBox();
  console.log("boundingBox after align:", JSON.stringify(box));
  const outDir = path.join(__dirname, "../marketing/social/content/pinterest/2026-05-26-before-after-pinterest");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "2026-05-26-before-after-pinterest.png");

  await page.setViewportSize({ width: 1440, height: 1600 });
  await page.waitForTimeout(300);
  const box2 = await el.boundingBox();
  console.log("boundingBox after resize:", JSON.stringify(box2));
  await page.screenshot({ path: outPath, clip: { x: box2.x, y: box2.y, width: box2.width, height: box2.height } });
  console.log("Saved:", outPath);
  await browser.close();
})();
