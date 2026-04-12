/**
 * Render two TikTok videos using SlideshowVertical with real Playwright screenshots.
 *
 * Video 1: "70 Files From One Upload" — emerald theme
 * Video 2: "Still Resizing One By One?" — midnight/sunset theme
 *
 * Usage:
 *   cd marketing/remotion && npx tsx render-slideshow-videos.ts
 */

import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import * as path from "path";
import * as fs from "fs";

const ENTRY_POINT = path.resolve(__dirname, "src/index.ts");
const CONTENT_BASE = path.resolve(__dirname, "../social/content/tiktok");

const videos = [
  {
    id: "70-files-stat",
    folder: "2026-04-08-70-files-stat",
    props: {
      hook: "4 Sizes Every\nEtsy Seller Needs",
      hookSub: "Are you offering all of them?",
      slides: [
        {
          image: "seo-8x10.png",
          label: "#1 Bestseller",
          text: "8×10 — 2400×3000px at 300 DPI. 4:5 ratio.",
        },
        {
          image: "seo-5x7.png",
          label: "#2 Gift Favorite",
          text: "5×7 — 1500×2100px. Cards, small frames, gifts.",
        },
        {
          image: "seo-16x20.png",
          label: "Gallery Wall Hero",
          text: "16×20 — 4800×6000px. Statement piece size.",
        },
        {
          image: "seo-24x36.png",
          label: "Poster Size",
          text: "24×36 — 7200×10800px. The largest standard frame.",
        },
      ],
      cta: "Get All 70 Sizes",
      ctaSub: "One upload. 60 seconds. snaptosize.com",
      theme: "emerald" as const,
      tag: "Print Size Tips",
    },
  },
  {
    id: "before-after-resize",
    folder: "2026-04-08-before-after-resize",
    props: {
      hook: "Why One Size\nKills Your Sales",
      hookSub: "Etsy buyers want options.",
      slides: [
        {
          image: "02-before-after.png",
          label: "The Problem",
          text: "Manual resizing = hours. Wrong sizes = refunds.",
        },
        {
          image: "04-ratios.png",
          label: "Same Art, Every Ratio",
          text: "2:3, 3:4, 4:5, ISO, Common — no cropping.",
        },
        {
          image: "section-coastal-hero.png",
          label: "Coastal Art Sellers",
          text: "Beach to nautical — buyers want 6+ frame sizes",
        },
        {
          image: "section-gallery-hero.png",
          label: "Gallery Wall Sets",
          text: "Every arrangement from one upload",
        },
      ],
      cta: "Generate All Sizes Free",
      ctaSub: "One upload. 70 files. snaptosize.com",
      theme: "midnight" as const,
      tag: "Etsy Seller Tips",
    },
  },
];

async function main() {
  console.log("Bundling Remotion project...");
  const bundled = await bundle({ entryPoint: ENTRY_POINT });

  for (const video of videos) {
    const outDir = path.join(CONTENT_BASE, video.folder);
    fs.mkdirSync(outDir, { recursive: true });
    const outputPath = path.join(outDir, "video.mp4");

    console.log(`\nRendering ${video.id}...`);
    console.log(`  Slides: ${video.props.slides.length}`);
    console.log(`  Theme: ${video.props.theme}`);
    console.log(`  Output: ${outputPath}`);

    const composition = await selectComposition({
      serveUrl: bundled,
      id: "SlideshowVertical",
      inputProps: video.props,
    });

    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: "h264",
      outputLocation: outputPath,
    });

    // Update metadata
    const metadataPath = path.join(outDir, "metadata.json");
    const existing = fs.existsSync(metadataPath)
      ? JSON.parse(fs.readFileSync(metadataPath, "utf-8"))
      : {};

    const metadata = {
      ...existing,
      composition: "SlideshowVertical",
      theme: video.props.theme,
      slides: video.props.slides.length,
      tool_used: "remotion+playwright",
      re_rendered: new Date().toISOString(),
    };
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

    console.log(`  ✓ Done: ${video.id}`);
  }

  console.log("\n✓ All videos rendered.");
}

main().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
