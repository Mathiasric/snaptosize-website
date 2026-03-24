/**
 * Batch Video Renderer
 *
 * Reads pipeline-state.json for video items at the "creation" stage,
 * renders each using Remotion, and updates the state with output file paths.
 *
 * Usage:
 *   npx tsx render-batch.ts
 *   npx tsx render-batch.ts --dry-run
 */

import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import * as fs from "fs";
import * as path from "path";

const STATE_PATH = path.resolve(
  __dirname,
  "../social/queue/pipeline-state.json"
);
const CONTENT_BASE = path.resolve(__dirname, "../social/content");
const ENTRY_POINT = path.resolve(__dirname, "src/index.ts");

interface ContentItem {
  id: string;
  platform: string;
  format: string;
  stage: string;
  files: Record<string, string>;
  metadata: Record<string, unknown>;
  tool_used: string | null;
  linked_item: string | null;
  [key: string]: unknown;
}

interface PipelineState {
  content_items: ContentItem[];
  [key: string]: unknown;
}

function getVideoItems(state: PipelineState): ContentItem[] {
  return state.content_items.filter(
    (item) =>
      item.format === "video" &&
      item.stage === "creation" &&
      !item.linked_item // Only render primary items, not linked copies
  );
}

function getOutputPath(item: ContentItem): string {
  const date = new Date().toISOString().split("T")[0];
  const dir = path.join(CONTENT_BASE, item.platform, `${date}-${item.id}`);
  fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, "video.mp4");
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");

  if (!fs.existsSync(STATE_PATH)) {
    console.error("No pipeline-state.json found. Run batch init first.");
    process.exit(1);
  }

  const state: PipelineState = JSON.parse(
    fs.readFileSync(STATE_PATH, "utf-8")
  );
  const items = getVideoItems(state);

  if (items.length === 0) {
    console.log("No video items at creation stage.");
    return;
  }

  console.log(`Found ${items.length} video items to render.`);

  if (dryRun) {
    for (const item of items) {
      console.log(`  [DRY RUN] Would render: ${item.id} (${item.platform})`);
    }
    return;
  }

  console.log("Bundling Remotion project...");
  const bundled = await bundle({ entryPoint: ENTRY_POINT });

  for (const item of items) {
    const outputPath = getOutputPath(item);
    const props = item.metadata.remotion_props || {
      hook: item.metadata.hook || "Print Sizes That Sell",
      points: item.metadata.points || ["8×10", "5×7", "11×14"],
      cta: item.metadata.cta || "Try SnapToSize Free →",
    };

    console.log(`Rendering ${item.id}...`);

    const composition = await selectComposition({
      serveUrl: bundled,
      id: "TikTokVertical",
      inputProps: props as Record<string, unknown>,
    });

    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: "h264",
      outputLocation: outputPath,
    });

    // Update state
    item.files.video = outputPath;
    item.tool_used = "remotion";
    item.stage = "qa";
    item.updated_at = new Date().toISOString();

    // Also update linked item (Instagram Reels copy)
    const linked = state.content_items.find(
      (i) => i.linked_item === item.id
    );
    if (linked) {
      linked.files.video = outputPath; // Same file
      linked.tool_used = "remotion";
      linked.stage = "qa";
      linked.updated_at = new Date().toISOString();
    }

    console.log(`  ✓ ${item.id} → ${outputPath}`);
  }

  // Save updated state
  state.updated_at = new Date().toISOString();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  console.log(`\nRendered ${items.length} videos. State updated.`);
}

main().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
