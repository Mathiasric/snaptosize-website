/**
 * Screenshot new social slide templates:
 *   - RatioProofShowcase (fox pinterest, misty_lake pinterest, landscape_abstract instagram)
 *   - PainSolutionSlide (missing-size, folder-chaos, manual-resize × pinterest)
 *
 * Usage: node app-next/screenshot-new-templates.js
 */

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3001/social-slides";

const SLIDES = [
  // RatioProofShowcase
  {
    id: "ratio-proof-showcase-fox-pinterest",
    w: 1000, h: 1500,
    outDir: null, // QA only
  },
  {
    id: "ratio-proof-showcase-misty_lake-pinterest",
    w: 1000, h: 1500,
    outDir: null,
  },
  {
    id: "ratio-proof-showcase-landscape_abstract-instagram",
    w: 1080, h: 1350,
    outDir: null,
  },
  // PainSolutionSlide
  {
    id: "pain-solution-missing-size-pinterest",
    w: 1000, h: 1500,
    outDir: null,
  },
  {
    id: "pain-solution-folder-chaos-pinterest",
    w: 1000, h: 1500,
    outDir: null,
  },
  {
    id: "pain-solution-manual-resize-pinterest",
    w: 1000, h: 1500,
    outDir: null,
  },
  {
    id: "pain-solution-missing-size-instagram",
    w: 1080, h: 1350,
    outDir: null,
  },
  {
    id: "pain-solution-manual-resize-instagram",
    w: 1080, h: 1350,
    outDir: null,
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 900 });

  console.log("Loading social slides page...");
  await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);

  const outBase = path.join(__dirname, "..");
  for (const slide of SLIDES) {
    const escaped = slide.id.replace(/([.:])/g, "\\$1");
    const el = page.locator(`#${escaped}`);
    const count = await el.count();
    if (count === 0) {
      console.error(`  MISSING: #${slide.id}`);
      continue;
    }

    const outPath = path.join(outBase, `app-next/${slide.id}.jpg`);
    await el.screenshot({ path: outPath, type: "jpeg", quality: 92 });
    console.log(`  OK: ${slide.id} → ${path.basename(outPath)}`);
  }

  await browser.close();
  console.log("\nDone.");
})();
