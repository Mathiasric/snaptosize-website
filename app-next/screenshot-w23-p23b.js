// W23-P23b: WorkflowSteps (Koi artwork) — workflow-steps-pinterest
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1600 });
  await page.goto("http://localhost:3000/social-slides", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(3000);

  const el = await page.$("#workflow-steps-pinterest");
  if (!el) { console.error("Element #workflow-steps-pinterest not found"); await browser.close(); process.exit(1); }

  await page.evaluate((el) => el.scrollIntoView({ block: "start" }), el);
  const topOffset = await page.evaluate((el) => el.getBoundingClientRect().top, el);
  await page.evaluate((top) => window.scrollBy(0, top), topOffset);
  await page.waitForTimeout(600);

  const box = await el.boundingBox();
  console.log("boundingBox:", JSON.stringify(box));

  const outDir = path.join(__dirname, "../marketing/social/content/pinterest/2026-05-28-workflow-steps-pinterest");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "2026-05-28-workflow-steps-pinterest.png");

  await page.screenshot({ path: outPath, clip: { x: box.x, y: box.y, width: box.width, height: box.height } });
  console.log("Saved:", outPath);
  await browser.close();
})();
