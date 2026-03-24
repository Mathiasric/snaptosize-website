# Remotion Video Templates Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 5 visually distinct, engaging 15-second TikTok/Reels video templates in Remotion that rotate across weekly content batches.

**Architecture:** Each template is a standalone React composition registered in Root.tsx. All templates share the existing theme system (5 color palettes), brand fonts, and common components (AnimatedBackground, BrandWatermark). Each has unique props, timing, layout, and animation style. 15 seconds = 450 frames at 30fps.

**Tech Stack:** Remotion 4.x, React, TypeScript, existing brand system

---

## File Structure

```
marketing/remotion/src/
├── compositions/
│   ├── TikTokVertical.tsx          # existing (keep as-is)
│   ├── TextSlam.tsx                # NEW — fullscreen word-by-word slam
│   ├── BeforeAfter.tsx             # NEW — split-screen problem/solution reveal
│   ├── CountdownReveal.tsx         # NEW — countdown 5→1 with context
│   ├── StatHighlight.tsx           # NEW — big number + context zoom
│   └── QuickList.tsx               # NEW — fast stacking swipe-in points
├── components/
│   ├── AnimatedBackground.tsx      # MODIFY — add new bg variants
│   ├── TextOverlay.tsx             # existing (reuse)
│   ├── CallToAction.tsx            # existing (reuse)
│   ├── BrandWatermark.tsx          # existing (reuse)
│   ├── SceneTransition.tsx         # MODIFY — add new transition types
│   └── ProgressDots.tsx            # existing (reuse in QuickList)
├── styles/
│   └── brand.ts                    # existing (themes already added)
├── Root.tsx                        # MODIFY — register 5 new compositions
└── index.ts                        # existing
```

---

## Chunk 1: Shared Infrastructure Updates

### Task 1: Add new AnimatedBackground variants

**Files:**
- Modify: `marketing/remotion/src/components/AnimatedBackground.tsx`

- [ ] **Step 1: Add 3 new background variants**

Add `"pulse-glow"`, `"diagonal-sweep"`, and `"minimal-dots"` to the variant type and implement each:

```tsx
// Add to AnimatedBackgroundProps interface:
variant?: "gradient-shift" | "particles" | "mesh" | "pulse-glow" | "diagonal-sweep" | "minimal-dots";

// pulse-glow: single large accent orb that pulses rhythmically
// diagonal-sweep: gradient bar that sweeps corner-to-corner
// minimal-dots: grid of small dots that fade in/out in waves
```

`pulse-glow`: Dark bg with a single large centered orb that scales between 0.8x and 1.2x using `Math.sin(frame * 0.08)`. Color from `BRAND.colors.accentGlow`.

`diagonal-sweep`: Dark bg with a 400px wide gradient bar (accent color, 20% opacity) that sweeps from top-left to bottom-right over 450 frames using `interpolate(frame, [0, 450], [-400, 2400])` for position.

`minimal-dots`: Dark bg with a 6×10 grid of 4px dots at 5% opacity. Each dot fades to 30% based on a wave: `opacity = 0.05 + 0.25 * Math.sin(frame * 0.05 + (row + col) * 0.5)`.

- [ ] **Step 2: Verify existing templates still render**

Run: `cd marketing/remotion && npx remotion render src/index.ts TikTokVertical out/test.mp4 --frames=0-30`
Expected: Renders without errors.

- [ ] **Step 3: Commit**

```bash
git add marketing/remotion/src/components/AnimatedBackground.tsx
git commit -m "feat(remotion): add 3 new animated background variants"
```

### Task 2: Add new SceneTransition types

**Files:**
- Modify: `marketing/remotion/src/components/SceneTransition.tsx`

- [ ] **Step 1: Add `"zoom-blur"` and `"slice"` transition types**

`zoom-blur`: Scale from 1→3 with opacity 0.8→0 over duration. Creates a zoom-out flash effect.

`slice`: 5 horizontal bars that slide alternately left/right to reveal. Each bar covers 1920/5 = 384px height.

- [ ] **Step 2: Commit**

```bash
git add marketing/remotion/src/components/SceneTransition.tsx
git commit -m "feat(remotion): add zoom-blur and slice scene transitions"
```

---

## Chunk 2: TextSlam Template

### Task 3: Build TextSlam composition

**Files:**
- Create: `marketing/remotion/src/compositions/TextSlam.tsx`
- Modify: `marketing/remotion/src/Root.tsx`

**Concept:** Fullscreen text, 1-3 words at a time, slamming into frame with scale+rotation. Ultra punchy. Each phrase fills the entire screen for ~15-20 frames then cuts to next.

- [ ] **Step 1: Create TextSlam.tsx**

```tsx
export interface TextSlamProps {
  phrases: string[];    // e.g. ["STOP", "Resizing", "Manually.", "30 Sizes", "60 Seconds", "snaptosize.com"]
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}
```

**Timing at 450 frames (15s):**
- Each phrase: `Math.floor(390 / phrases.length)` frames
- Last 60 frames: CTA scene with pulse animation

**Animation per phrase:**
- Frame 0-3: Scale from 3→1 with `spring({damping: 15, stiffness: 200})` — slam in
- Frame 3-end: Slight drift `translateY(-0.5px/frame)` for kinetic feel
- Alternate rotation: even phrases rotate -2°→0°, odd rotate +2°→0°
- Random-ish X offset: `(index % 3 - 1) * 40px` so text doesn't always center

**Layout:** `AbsoluteFill` with flex center. Font size dynamically calculated: `Math.min(200, 900 / longestWord.length)` so text always fills width.

**Background:** Use `"pulse-glow"` variant.

- [ ] **Step 2: Register in Root.tsx**

Add `TextSlam` composition with id `"TextSlam"`, 450 frames, 30fps, 1080×1920.

Default props:
```tsx
{
  phrases: ["STOP", "Resizing", "Every.", "Single.", "File.", "30 Sizes", "60 Sec", "snaptosize.com"],
  cta: "Link in bio",
  theme: "sunset",
  episodeTag: "Print Tips"
}
```

- [ ] **Step 3: Test render**

Run: `cd marketing/remotion && npx remotion render src/index.ts TextSlam out/textslam-test.mp4`
Expected: 15s video, words slamming in fullscreen, CTA at end.

- [ ] **Step 4: Commit**

```bash
git add marketing/remotion/src/compositions/TextSlam.tsx marketing/remotion/src/Root.tsx
git commit -m "feat(remotion): add TextSlam template — fullscreen word slam"
```

---

## Chunk 3: BeforeAfter Template

### Task 4: Build BeforeAfter composition

**Files:**
- Create: `marketing/remotion/src/compositions/BeforeAfter.tsx`
- Modify: `marketing/remotion/src/Root.tsx`

**Concept:** Screen split vertically. Left = problem (red/muted), right = solution (green/accent). Wipe reveal at midpoint.

- [ ] **Step 1: Create BeforeAfter.tsx**

```tsx
export interface BeforeAfterProps {
  hookQuestion: string;       // "Still resizing manually?"
  beforeTitle: string;        // "WITHOUT SnapToSize"
  beforePoints: string[];     // ["1 size at a time", "15 min per listing", "Messy ZIP files"]
  afterTitle: string;         // "WITH SnapToSize"
  afterPoints: string[];      // ["30 sizes instantly", "60 seconds total", "Organized ratio packs"]
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}
```

**Timing (450 frames):**
- 0-60: Hook question fades in centered (full screen)
- 60-75: Transition
- 75-210: "Before" side — full screen, red-tinted bg. Points appear one by one with X-strike animation
- 210-225: Wipe transition (accent color bar sweeps left→right)
- 225-360: "After" side — full screen, green/accent-tinted bg. Points appear with checkmark + spring
- 360-375: Transition
- 375-450: CTA

**Before styling:** Dark bg with subtle red tint (`rgba(239, 68, 68, 0.1)` overlay). Points in muted gray. Each point gets a red "✗" that slams in.

**After styling:** Dark bg with accent tint. Points in white. Each point gets a green "✓" that springs in with glow.

**Wipe reveal:** Accent-colored vertical bar (80px wide) sweeps from left=0% to left=100% over 15 frames.

- [ ] **Step 2: Register in Root.tsx**

Add composition id `"BeforeAfter"`, 450 frames, 30fps, 1080×1920.

- [ ] **Step 3: Test render**

Run: `cd marketing/remotion && npx remotion render src/index.ts BeforeAfter out/beforeafter-test.mp4`

- [ ] **Step 4: Commit**

```bash
git add marketing/remotion/src/compositions/BeforeAfter.tsx marketing/remotion/src/Root.tsx
git commit -m "feat(remotion): add BeforeAfter template — split problem/solution reveal"
```

---

## Chunk 4: CountdownReveal Template

### Task 5: Build CountdownReveal composition

**Files:**
- Create: `marketing/remotion/src/compositions/CountdownReveal.tsx`
- Modify: `marketing/remotion/src/Root.tsx`

**Concept:** Big number fills screen (5, 4, 3, 2, 1), zooms out to reveal the point. Builds tension.

- [ ] **Step 1: Create CountdownReveal.tsx**

```tsx
export interface CountdownRevealProps {
  hook: string;              // "5 reasons you're losing sales"
  items: string[];           // exactly 5 items, shown 5→1
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}
```

**Timing (450 frames):**
- 0-50: Hook text (spring-scale in)
- 50-60: Flash transition
- Items 5→1: 65 frames each = 325 frames total (60-385)
  - Frame 0-15: Large number (font-size 400px) slams in with scale 5→1
  - Frame 15-20: Number shrinks to top-left corner (scale 1→0.3, position shift)
  - Frame 20-60: Point text springs in from bottom, number stays as badge
  - Frame 60-65: Quick fade out
- 385-450: CTA scene

**Number animation:** Each number uses a different accent color from theme to create visual variety within the video.

- [ ] **Step 2: Register in Root.tsx**

Add composition id `"CountdownReveal"`, 450 frames, 30fps, 1080×1920.

- [ ] **Step 3: Test render**

Run: `cd marketing/remotion && npx remotion render src/index.ts CountdownReveal out/countdown-test.mp4`

- [ ] **Step 4: Commit**

```bash
git add marketing/remotion/src/compositions/CountdownReveal.tsx marketing/remotion/src/Root.tsx
git commit -m "feat(remotion): add CountdownReveal template — countdown 5 to 1"
```

---

## Chunk 5: StatHighlight Template

### Task 6: Build StatHighlight composition

**Files:**
- Create: `marketing/remotion/src/compositions/StatHighlight.tsx`
- Modify: `marketing/remotion/src/Root.tsx`

**Concept:** One giant stat/number fills the screen, then context text zooms in below. Data-driven, authority-building.

- [ ] **Step 1: Create StatHighlight.tsx**

```tsx
export interface StatHighlightProps {
  stats: Array<{
    number: string;      // "60%", "30", "20MB", "300"
    unit?: string;       // "percent", "sizes", "limit", "DPI"
    context: string;     // "of buyers want more than one size"
  }>;
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}
```

**Timing (450 frames) for 3 stats:**
- Each stat: 120 frames
  - 0-8: Number counter animation (interpolate from 0 to target number)
  - 8-15: Number settles with spring bounce
  - 15-20: Unit text fades in below number
  - 20-50: Context sentence springs up from bottom
  - 50-110: Hold for reading
  - 110-120: Zoom-blur transition out
- Last 90 frames: CTA

**Number styling:** Font-size 300px, accent color, bold 900 weight. Centered vertically. Number animates like a counter spinning up.

**Context styling:** Font-size 48px, white, appears below with `spring-up`. Max width 800px, centered text.

- [ ] **Step 2: Register in Root.tsx**

Add composition id `"StatHighlight"`, 450 frames, 30fps, 1080×1920.

- [ ] **Step 3: Test render**

Run: `cd marketing/remotion && npx remotion render src/index.ts StatHighlight out/stat-test.mp4`

- [ ] **Step 4: Commit**

```bash
git add marketing/remotion/src/compositions/StatHighlight.tsx marketing/remotion/src/Root.tsx
git commit -m "feat(remotion): add StatHighlight template — big stat with context"
```

---

## Chunk 6: QuickList Template

### Task 7: Build QuickList composition

**Files:**
- Create: `marketing/remotion/src/compositions/QuickList.tsx`
- Modify: `marketing/remotion/src/Root.tsx`

**Concept:** Fast-stacking items that swipe in from alternating sides. Like the existing TikTokVertical but much faster, punchier, with better animations. Items stay visible and stack.

- [ ] **Step 1: Create QuickList.tsx**

```tsx
export interface QuickListProps {
  hook: string;
  items: string[];          // 4-6 short items
  cta: string;
  theme?: ThemeName;
  episodeTag?: string;
}
```

**Timing (450 frames):**
- 0-60: Hook (typewriter animation, centered)
- 60-70: Slice transition
- Items: `Math.floor(290 / items.length)` frames each (70-360)
  - Each item swipes in from alternating sides (odd=left, even=right)
  - Uses `spring({damping: 12, stiffness: 150})` — snappy, not floaty
  - `translateX` from ±500px to 0
  - Items stack vertically, each appearing below the last
  - As items accumulate, all items scale down slightly to fit: `scale(1 - completedItems * 0.03)`
  - Each item has a thin left/right accent border (alternating sides matching swipe direction)
- 360-450: All items visible for 30 frames, then CTA fades over them

**Key difference from TikTokVertical:** No number badges, faster springs (stiffer), items are full-width bars not cards, alternating swipe direction creates visual rhythm.

- [ ] **Step 2: Register in Root.tsx**

Add composition id `"QuickList"`, 450 frames, 30fps, 1080×1920.

- [ ] **Step 3: Test render**

Run: `cd marketing/remotion && npx remotion render src/index.ts QuickList out/quicklist-test.mp4`

- [ ] **Step 4: Commit**

```bash
git add marketing/remotion/src/compositions/QuickList.tsx marketing/remotion/src/Root.tsx
git commit -m "feat(remotion): add QuickList template — fast stacking swipe-in list"
```

---

## Chunk 7: Integration & Documentation

### Task 8: Update pipeline documentation

**Files:**
- Modify: `docs/PIPELINE_OPERATIONS.md`

- [ ] **Step 1: Add template reference table**

Add to the "Content Creation Tools" section:

```markdown
### Remotion Templates

| Template | Use case | Props | Duration |
|----------|----------|-------|----------|
| TikTokVertical | Numbered tip lists | hook, subHook, points[], cta, episodeTag, theme | Variable |
| TextSlam | Bold statement, brand awareness | phrases[], cta, theme, episodeTag | 15s |
| BeforeAfter | Problem→solution comparison | hookQuestion, beforeTitle, beforePoints[], afterTitle, afterPoints[], cta, theme | 15s |
| CountdownReveal | Top 5 lists, tension builders | hook, items[5], cta, theme, episodeTag | 15s |
| StatHighlight | Data-driven authority posts | stats[{number, unit, context}], cta, theme | 15s |
| QuickList | Fast tip lists, punchy delivery | hook, items[], cta, theme, episodeTag | 15s |

**Themes:** default (navy+orange), emerald (green+mint), sunset (dark+red), midnight (purple), coral (pink)

**Render any template:**
```bash
cd marketing/remotion && npx remotion render src/index.ts <TemplateId> out/video.mp4 --props='{ ... }'
```
```

- [ ] **Step 2: Commit**

```bash
git add docs/PIPELINE_OPERATIONS.md
git commit -m "docs: add Remotion template reference to pipeline operations"
```

### Task 9: Test all templates render cleanly

- [ ] **Step 1: Render all 5 new templates with test props**

```bash
cd marketing/remotion
npx remotion render src/index.ts TextSlam out/test-textslam.mp4
npx remotion render src/index.ts BeforeAfter out/test-beforeafter.mp4
npx remotion render src/index.ts CountdownReveal out/test-countdown.mp4
npx remotion render src/index.ts StatHighlight out/test-stat.mp4
npx remotion render src/index.ts QuickList out/test-quicklist.mp4
```

Expected: All 5 render to ~15s MP4s without errors.

- [ ] **Step 2: Verify visual variety**

Open each test video and confirm:
- Different visual styles between templates
- Theme colors applied correctly
- Text readable, no overflow
- CTA visible at end
- Animations smooth (no jank)

- [ ] **Step 3: Clean up test files**

```bash
rm marketing/remotion/out/test-*.mp4
```

- [ ] **Step 4: Final commit**

```bash
git commit --allow-empty -m "feat(remotion): complete 5 new video templates — TextSlam, BeforeAfter, CountdownReveal, StatHighlight, QuickList"
```
