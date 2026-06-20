# ModesSection rebuild — Size Packs "pack spread" + Perfect Fit secondary

Branch: feat/homepage-good-to-amazing · preview /preview-modes · nothing live.

## Why (validated)
- Morph-carousel spotlighted ~20% horizontal reshape (2:3→4:5) on same art at fixed height = bunny "breathes". Measured: widths@700h 467/525/560/493/550.
- Fix = show 5 prints as a STATIC fanned pack (all visible at once, no in-place morph) → reshape invisible, breadth obvious, reads as "your deliverable pack".

## Design spec (high craft)
- 5 real bunny exports (sp-1..5.jpg, native ratios, already generated, whole image kept).
- Fanned spread: center print front+largest, 2 each side rotated outward (~ -10/-5/0/5/10deg), x-offset + slight y-lift, descending z-index + opacity so depth reads. Soft layered shadows.
- Subtle float: center card gentle translateY loop (ease-in-out, ~6s), reduced-motion → static. NO layout-prop animation (transform only).
- Each print = framed (border white/10, rounded-lg, shadow-2xl, faint top sheen).
- Click any card → existing lightbox enlarge (real quality = trust).
- Header: kicker "SIZE PACKS" + h2 "One upload becomes every Etsy size" + sub (whole image kept, named, 300 DPI, 45s).
- Breadth line: every standard Etsy ratio (2:3,3:4,4:5,ISO A,+extras), up to 70 files, ZIP <20MB.
- Perfect Fit secondary (honest pairing, no badmouth): "Need exact proportions? Perfect Fit lets you choose your focal point →" /distortion-free-crop.
- CTA: free, no signup → app.snaptosize.com.

## Tasks
- [ ] 1. Rewrite ModesSection.tsx → PackSpread (replace SizePacksShowcase). transform-only motion, reduced-motion guard, lightbox kept.
- [ ] 2. Playwright desktop 1440 — screenshot, assert fan reads premium, depth/shadows clean, no overlap-ugly.
- [ ] 3. Playwright mobile 390 — fan must degrade gracefully (tighter fan or stacked). Fix if broken.
- [ ] 4. Console check — only pre-existing PostHog/JSON-LD hydration error allowed.
- [ ] 5. Self-review (cavecrew-reviewer) on the diff — a11y (alt/aria), transform-only, no banned patterns (no side-stripe, no gradient-text).
- [ ] 6. Show user screenshots. Get nod BEFORE wiring into homepage.

## Guardrails
- Tone: never say our output stretches/distorts. Size Packs="keeps whole image", Perfect Fit="exact proportions, you choose frame". Both heroes.
- 70 files = approved number. Never imply each pack = portrait+landscape (LESSON-097).
- Nothing wired to homepage / nothing merged until user go.
