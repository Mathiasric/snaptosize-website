---
name: remotion
description: |
  Programmatic video generation using Remotion (React). Use when creating TikTok videos,
  Instagram Reels, Pinterest video pins, animated social content, or any video that needs
  text overlays, transitions, or branded motion graphics. Use when: user mentions video
  generation, video templates, animated content, TikTok video, Reels, video pin, or Remotion.
---

# Remotion Video Generator

React-based framework for programmatic video creation. Write React components → render to MP4/WebM.

## When to Use

| Scenario | Tool | Why |
|---|---|---|
| Templated video with text/motion | **Remotion** | Full control, repeatable, branded |
| AI-generated creative video | **Gemini** | Novel imagery, no template needed |
| Slide-based educational content | **NotebookLM** | Auto-generates from text |
| Simple static graphic | **Canva** | Fastest for single images |

**Decision rule:** Use Remotion when you need consistent, branded, repeatable video with precise text placement and timing.

## Fallback Chain (Video)

1. **Remotion** — templated/branded video (primary)
2. **Gemini generate-video** — AI creative video
3. **NotebookLM slides** — educational decks
4. **Canva** — static graphics fallback

## Installation

```bash
npm i remotion @remotion/cli @remotion/renderer @remotion/player
```

Auto-downloads ffmpeg and ffprobe (no manual setup).

## Directory Structure

```
marketing/remotion/
├── remotion.config.ts          # Remotion config
├── src/
│   ├── Root.tsx                # Composition registry
│   ├── compositions/
│   │   ├── TikTokVertical.tsx  # 1080x1920, 9:16
│   │   ├── PinterestPin.tsx    # 1000x1500, 2:3
│   │   ├── InstagramReel.tsx   # 1080x1920, 9:16
│   │   └── InstagramFeed.tsx   # 1080x1080, 1:1
│   ├── components/
│   │   ├── TextOverlay.tsx
│   │   ├── BrandWatermark.tsx
│   │   ├── CallToAction.tsx
│   │   └── SnapToSizeLogo.tsx
│   └── styles/
│       └── brand.ts            # Colors, fonts
├── public/
│   └── fonts/
└── package.json
```

## Platform Specs

| Platform | Resolution | Aspect | FPS | Duration |
|---|---|---|---|---|
| TikTok | 1080×1920 | 9:16 | 30 | 15–60s |
| Instagram Reels | 1080×1920 | 9:16 | 30 | 15–90s |
| Instagram Feed | 1080×1080 | 1:1 | 30 | 3–60s |
| Pinterest Video | 1000×1500 | 2:3 | 30 | 6–15s |

## Template Rotation (MANDATORY)

6 compositions exist. **Never render 2 consecutive videos with the same template.** Rotate across all of them for visual variety.

| Template | Style | Best for | Props |
|---|---|---|---|
| `TikTokVertical` | Numbered slide-in cards with progress dots | Tips, lists, how-tos | `hook, subHook, points[], cta, theme` |
| `TextSlam` | Full-screen words slam in one at a time | Short punchy statements, hooks | `phrases[], cta, episodeTag` |
| `BeforeAfter` | Red "before" → wipe → green "after" | Problem/solution, comparisons | `hookQuestion, beforeTitle, beforePoints[], afterTitle, afterPoints[], cta, theme` |
| `CountdownReveal` | Countdown 5→1 with dramatic number animation | Suspense listicles ("5 reasons...") | `hook, items[], cta, theme` |
| `StatHighlight` | Number counter animation (0→value) | Metrics, social proof, stats | `stats[{number, unit, context}], cta, theme` |
| `QuickList` | Typewriter hook → items swipe in with colored borders | Checklists, quick tips | `hook, items[], cta, theme` |

**Rotation rule for weekly batch of 7 videos:**
- Use at least 4 different templates across 7 videos
- Never use the same template more than 2 times in a batch
- Pair template to content type (stats → StatHighlight, problem/solution → BeforeAfter, etc.)
- Also rotate color themes within each template (default, emerald, sunset, midnight, coral)

## Composition Pattern

Each composition receives typed props:

```tsx
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

interface TikTokProps {
  hook: string;
  points: string[];
  cta: string;
}

export const TikTokVertical: React.FC<TikTokProps> = ({ hook, points, cta }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
      <h1 style={{ opacity, color: "#fff", fontSize: 64 }}>{hook}</h1>
      {/* Points appear sequentially using <Sequence> */}
    </AbsoluteFill>
  );
};
```

Register in `Root.tsx`:

```tsx
import { Composition } from "remotion";
import { TikTokVertical } from "./compositions/TikTokVertical";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="TikTokVertical"
      component={TikTokVertical}
      durationInFrames={900}  // 30s at 30fps
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ hook: "", points: [], cta: "" }}
    />
  </>
);
```

## Rendering

### CLI

```bash
# Preview in browser
npx remotion preview src/Root.tsx

# Render to MP4
npx remotion render src/Root.tsx TikTokVertical out/tiktok.mp4 \
  --props='{"hook":"5 Print Sizes Every Etsy Seller Needs","points":["8x10","11x14","16x20","18x24","20x30"],"cta":"Try SnapToSize Free"}'
```

### Programmatic (Node.js)

```ts
import { renderMedia, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";

const bundled = await bundle({ entryPoint: "src/index.ts" });
const composition = await selectComposition({
  serveUrl: bundled,
  id: "TikTokVertical",
  inputProps: { hook: "...", points: [...], cta: "..." },
});

await renderMedia({
  composition,
  serveUrl: bundled,
  codec: "h264",
  outputLocation: "out/tiktok.mp4",
});
```

## Pipeline Integration

### Output Path Convention

```
marketing/social/content/{platform}/{date}-{slug}/video.mp4
```

### State Tracking

Pipeline state tracks `tool_used: "remotion"` in item metadata.

### Tool Selection Logic

```
if format == "video":
    if template_exists(platform):
        tool = "remotion"
    else:
        tool = "gemini"  # AI-generated fallback
```

### Related Agents

- **visual-content-creator** — orchestrates tool selection for visual content
- **social-media-content-creator** — produces final publish-ready content
- **social-media-scripter** — provides hook/points/CTA that feed into composition props

## Important Constraints

- **Node.js only** — Remotion requires Node.js runtime (ffmpeg, browser automation)
- **NOT compatible** with Cloudflare Workers or edge runtimes
- **CPU/memory intensive** — render locally or on AWS Lambda
- **Lambda for scale:** `@remotion/lambda` package for distributed rendering on AWS
- **Licensing:** Check Remotion license for commercial SaaS usage
- **Keep templates simple:** text + transitions + brand elements for fast renders
