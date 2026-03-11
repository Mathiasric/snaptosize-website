# Lessons Learned

## Content Pipeline

### LESSON-001: Use real SnapToSize sizes/ratios in all content (2026-03-11)
**Trigger:** User deleted posts that mentioned generic sizes instead of actual product offerings.
**Rule:** When creating content about print sizes or ratios, ALWAYS reference the exact SnapToSize packs:

- **2:3 Ratio** — 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36
- **3:4 Ratio** — 6×8, 9×12, 12×16, 15×20, 18×24, 24×32
- **4:5 Ratio** — 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO A-Series** — A5, A4, A3, A2, A1
- **Extras** — 5×7, 8.5×11 (US Letter), 11×14, 11×17 (Tabloid), 16×20, 20×24

All at 300 DPI, JPEG, Lanczos resize, stretch-only (no cropping), under 20MB.

### LESSON-002: Instagram max 5 hashtags (2026-03-11)
**Rule:** Instagram posts should use max 5 hashtags, not 20-30. Pick the 5 most relevant.

### LESSON-003: Always include proper links in social posts (2026-03-11)
**Rule:** Social post CTAs should link to:
- `https://app.snaptosize.com/app/quick-export` (direct to tool)
- `https://snaptosize.com/` (marketing site)
Choose based on context. Direct tool link for action-oriented posts, marketing site for educational.

### LESSON-004: Content quality feedback loop (2026-03-11)
**Rule:** After each batch, user reviews and may delete posts that don't meet quality bar. Track what gets deleted and why to improve future generations. Posts about sizes/ratios MUST use actual product data, not generic info.

### LESSON-005: Never mention JPEG quality percentages in SEO content (2026-03-11)
**Rule:** Don't mention "quality 90%", "reduce quality", or compression settings. Users interpret "reduced quality" as degraded output even when it's visually identical. SnapToSize handles optimization automatically — frame it as "auto-optimized" not "compressed". State file sizes as facts ("3-4 MB") without explaining how.

### LESSON-006: Every SEO page needs a unique CSS-only hero design (2026-03-11)
**Rule:** Plain gradient + text heroes are not good enough for OG images or visual quality. Activate `frontend-design` skill and design a CSS-only hero with visual elements that communicate the page topic (blueprint frames for size pages, ratio visualizations for ratio pages, etc.). No background images needed — pure CSS can match or exceed image-based heroes. Reference: `etsy-8x10-print-size/page.tsx` hero.

### LESSON-007: Button component doesn't accept href/size props (2026-03-11)
**Rule:** The Button component only accepts `children`, `variant`, `className`, `onClick`. For link CTAs, wrap in `<a href={url} target="_blank" rel="noopener noreferrer"><Button>Text</Button></a>`. EmailCapture takes `placeholder` and `buttonText` props.
