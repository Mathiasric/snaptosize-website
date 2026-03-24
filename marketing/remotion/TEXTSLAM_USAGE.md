# TextSlam Composition

A high-energy 15-second TikTok/Reels video template with fullscreen text slamming into frame.

## Render Command

```bash
cd marketing/remotion

npx remotion render src/index.ts TextSlam out/textslam.mp4 --props='{
  "phrases": ["STOP", "Resizing", "Manually.", "30 Sizes", "60 Seconds", "snaptosize.com"],
  "cta": "Try Free →",
  "theme": "default",
  "episodeTag": "Seller Hack #1"
}'
```

## Props

```tsx
interface TextSlamProps {
  phrases: string[];      // 1-3 words each, 4-8 phrases total
  cta: string;           // Call to action button text
  theme?: ThemeName;     // "default" | "emerald" | "sunset" | "midnight" | "coral"
  episodeTag?: string;   // Small tag at top (optional)
}
```

## Timing

- **Total duration:** 450 frames (15 seconds at 30fps)
- **Phrase section:** 390 frames (13 seconds) - divided equally among phrases
- **CTA section:** 60 frames (2 seconds)

Each phrase gets `Math.floor(390 / phrases.length)` frames.

## Animation Details

Each phrase:
- **Scale:** 3 → 1 (spring: damping 15, stiffness 200, mass 0.6)
- **Rotation:** Alternates ±2° → 0° based on index (even: -2°, odd: +2°)
- **Position:** Offset horizontally by `(index % 3 - 1) * 40px` to avoid monotony
- **Font size:** Dynamic based on phrase length - shorter phrases scale larger

## Examples

### Product announcement
```bash
npx remotion render src/index.ts TextSlam out/announcement.mp4 --props='{
  "phrases": ["NEW", "30 Print", "Sizes", "One Click", "Get Yours"],
  "cta": "snaptosize.com",
  "theme": "emerald"
}'
```

### Problem/Solution
```bash
npx remotion render src/index.ts TextSlam out/solution.mp4 --props='{
  "phrases": ["Tired of", "Manual", "Resizing?", "We Got", "You."],
  "cta": "Try Free →",
  "theme": "sunset",
  "episodeTag": "Etsy Hack #2"
}'
```

### Feature highlight
```bash
npx remotion render src/index.ts TextSlam out/feature.mp4 --props='{
  "phrases": ["Upload", "Click", "Download", "30 Sizes", "Ready"],
  "cta": "Start Now",
  "theme": "midnight"
}'
```

## Best Practices

1. **Keep phrases short:** 1-3 words max for impact
2. **Use 4-8 phrases:** Too few feels rushed, too many drags
3. **Build tension:** Start with problem, end with solution
4. **Punctuation matters:** Use periods for emphasis (e.g., "Manually.")
5. **Theme selection:** Match brand or emotion (default = orange energy, emerald = growth, sunset = urgency)
