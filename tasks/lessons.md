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

### LESSON-010: Etsy tags are max 20 characters and must be realistic (2026-03-13)
**Trigger:** SEO page showed fake/unrealistic Etsy tag examples like "8x10 wall print" that sellers don't use.
**Rule:** When showing Etsy tag examples in content:
- Each tag must be max 20 characters (Etsy's limit)
- Tags should be multi-word phrases buyers actually search
- Verify character count before publishing
- Good examples: "boho nursery print" (18), "printable wall art" (18), "gallery wall set" (16), "digital art download" (20), "minimalist art print" (20)
- Bad examples: single words ("art", "printable"), or made-up combos nobody searches

### LESSON-009: Buffer API Unicode fix — use ensure_ascii=False (2026-03-14)
**Trigger:** Instagram posts showed garbled characters for arrows (→), emojis, and bullet points.
**Root cause:** `requests.post(json=...)` uses `json.dumps(ensure_ascii=True)` internally, which sends `\u2192` instead of `→`. Buffer's API doesn't properly decode these escape sequences.
**Fix applied:** Changed `schedule-batch.py` to use `json.dumps(payload, ensure_ascii=False).encode('utf-8')` with `data=body` instead of `json=payload`. Also added `charset=utf-8` to Content-Type header.
**Rule:** Always use `ensure_ascii=False` when sending text with emojis/Unicode to Buffer. Emojis and arrows ARE supported — just need proper encoding.

### LESSON-008: Gemini image gen invents fake sizes/text — always list EXACT sizes in prompt (2026-03-13)
**Trigger:** Instagram post showed fake sizes like "Phone", "Phme", "Find", "5x10", "6x12", "7x14", "8x14" etc. None are real SnapToSize sizes.
**Rule:** When generating images that show size labels, the prompt MUST list every exact size to display. Never say "multiple sizes" or let the model invent labels. Use only:
- 2:3: 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36
- 3:4: 6×8, 9×12, 12×16, 15×20, 18×24, 24×32
- 4:5: 8×10, 12×15, 16×20, 20×25, 24×30
- ISO: A5, A4, A3, A2, A1
- Extras: 5×7, 8.5×11, 11×14, 16×20, 20×24
If showing a subset, pick real ones only. Gemini will hallucinate text if not constrained.

### LESSON-011: Correct size inventory — 35 sizes across 6 packs (2026-03-13)
**Trigger:** Content reference had 16×20 duplicated in Extras (already in 4:5) and was missing Square pack entirely.
**Rule:** SnapToSize offers 30 sizes across 5 ZIP packs + 7 square sizes in single export:
- **2:3** (8): 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36
- **3:4** (6): 6×8, 9×12, 12×16, 15×20, 18×24, 24×32
- **4:5** (5): 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO** (6): A5, A4, A3, A2, A1, A0
- **Extras** (5): 5×7, 8.5×11, 11×14, 11×17, 20×24
- **Square (single export only)** (7): 8×8, 10×10, 12×12, 16×16, 18×18, 20×20, 24×24
**Potential future additions (Worker-side):**
- 11×17 (Tabloid) — single export only, too small for ZIP pack
- 13×19 (Super B) — same concern, small vertical
- A0 — investigate if feasible for ZIP
Always reference this list, never invent sizes.

### LESSON-012: Buffer duplicate detection is image-URL-based (2026-03-16)
**Trigger:** Scheduling 3 Pinterest pins in rapid succession — first succeeded, 2nd and 3rd failed with "posted that one recently".
**Root cause:** Buffer's duplicate detection uses the image URL, not the text. Once a URL is flagged (even from a failed attempt), it stays flagged for a cooldown period.
**Fix:** Re-upload to R2 with a different key (e.g., `pin-v2.jpg`) to get a fresh URL.
**Rule:** When batch-scheduling, stagger uploads with unique R2 keys if Buffer rejects. Also space scheduling calls by at least a few seconds.

### LESSON-013: Always use today's date for content folder names (2026-03-16)
**Trigger:** Content created on March 15 used `2026-03-15-` prefix, but should have been `2026-03-16-` (the actual publishing date).
**Rule:** Content folder date = today's date when the content is being produced for publishing, not the date of a previous session.

### LESSON-012: Gemini image prompts must use ONLY verified product data (2026-03-14)
**Trigger:** Generated "structure-etsy-zip-files" pin showed fake content inside folders (license.txt, instructions.pdf) and wrong ratio names. Also "1 artwork → 30 files" pin showed incorrect category names (Square, Poster) that don't match SnapToSize packs.
**Rule:** When writing Gemini image generation prompts:
1. **Every data point in the prompt must come from CONTENT_REFERENCE.md** — never improvise folder names, file names, or pack contents
2. **ZIP structure is exactly:** 5 ratio folders (2:3, 3:4, 4:5, ISO A-Series, Extras) containing JPEG files named like `artwork_8x10_300dpi.jpg`. NO license.txt, NO instructions.pdf, NO other files
3. **Pack names are exactly:** "2:3 Ratio", "3:4 Ratio", "4:5 Ratio", "ISO A-Series", "Extras" — never "US Standard", "Square", "Poster", "Small & Others"
4. **If showing example files inside packs**, list only real sizes from that pack (e.g. 2:3 folder → 4x6, 6x9, 8x12 etc.)
5. **Pre-check:** Before sending any Gemini prompt that includes product data, verify every size/ratio/file name against CONTENT_REFERENCE.md

### LESSON-016: Never create content about stretch vs crop (2026-03-14)
**Trigger:** User explicitly said no content should mention stretch vs crop.
**Rule:** Do NOT create pins, posts, or any social content about "stretch vs crop". This is an internal technical detail, not a marketing message. Focus content on outcomes (30 sizes, 5 packs, saves time) not on how the resizing algorithm works.

### LESSON-017: Always indicate partial size lists with "+ more" (2026-03-14)
**Trigger:** Images showing subset of sizes looked like that was the complete offering.
**Rule:** When showing sizes/ratios in content (images or captions), either:
1. List ALL sizes in that ratio pack, OR
2. Show a few popular ones and add "+ more" or "and more" to indicate there are additional sizes
Example: "2:3 Ratio: 4×6, 8×12, 16×24, 24×36 + more" instead of just listing 4 and implying that's all.
This applies to both image prompts (text rendered in images) and caption text.

### LESSON-013: Don't resize images — user uses SnapToSize for that (2026-03-14)
**Trigger:** Pipeline automatically resized Gemini output images with PIL. User does this manually with SnapToSize (dogfooding).
**Rule:** Do NOT resize images in the pipeline. Generate at the closest aspect ratio (2:3 for Pinterest, 4:5 for Instagram) and let the user handle final sizing with SnapToSize. QA dimension tolerances should be widened or the resize step should be a manual user action, not automated.

### LESSON-014: Don't use # followed by numbers in Instagram captions (2026-03-14)
**Trigger:** Caption text "#1 best seller" was counted as a hashtag by QA regex, causing false "too many hashtags" error.
**Rule:** Avoid `#` followed by word characters in caption body text. Use "the best seller" or "number 1" instead of "#1". QA counts all `#\w+` patterns as hashtags.

### LESSON-015: Updated weekly targets — 28 Pinterest, 28 Instagram, 7 TikTok (2026-03-14)
**Trigger:** User updated posting goals.
**Rule:** Weekly content targets are now:
- Pinterest: 28 image pins/week (4/day)
- Instagram: 28 image posts/week (4/day)
- TikTok/Reels: 7 videos/week (1/day)
Total: 63 items/week

### LESSON-018: Remotion videos must vary visually between episodes (2026-03-14)
**Trigger:** Two videos looked identical — same dark blue background, same orange accent, same card layout. Just different text.
**Rule:** Each video must feel visually distinct. When rendering Remotion videos:
1. **Vary the color theme** — use a `theme` prop to select from multiple palettes (not just dark blue + orange)
2. **Vary the layout** — different point presentation styles (cards, full-screen text, split-screen, etc.)
3. **Vary the background** — different AnimatedBackground variants or colors
4. **Never render two consecutive videos with the same visual style**

Current TikTokVertical template needs these improvements:
- Add `theme` prop that selects color palette (warm, cool, earth, neon, minimal, etc.)
- Add `layout` prop for point presentation style (cards, stacked, centered, minimal)
- Add `bgVariant` prop for background style
- At minimum: rotate through 4-5 distinct visual themes across a week's 7 videos

### LESSON-022: No "Day X" or episode numbering in video content (2026-03-15)
**Trigger:** Videos showed "Print Tips · Day 9", "Day 11" etc. which looks forced and doesn't add value.
**Rule:** Do NOT include episode numbers, day counts, or series numbering in video props (episodeTag). Either omit episodeTag entirely or use a simple category label like "Print Tips" or "Seller Hack" without numbering.

### LESSON-021: Do NOT schedule videos via Buffer — manual posting only (2026-03-15)
**Trigger:** Videos were scheduled to Buffer but need music added manually. No TikTok channel ID in Buffer either.
**Rule:** Never attempt to schedule video content (TikTok or Instagram Reels) via Buffer. Videos require:
1. Manual music/audio overlay before posting
2. TikTok has no Buffer channel ID
3. Only render the video and save to content directory — user handles posting manually
4. Only schedule **image** content (Pinterest pins, Instagram static posts) via Buffer

### LESSON-007: Button component doesn't accept href/size props (2026-03-11)
**Rule:** The Button component only accepts `children`, `variant`, `className`, `onClick`. For link CTAs, wrap in `<a href={url} target="_blank" rel="noopener noreferrer"><Button>Text</Button></a>`. EmailCapture takes `placeholder` and `buttonText` props.

### LESSON-020: Generate social images at 1K not 2K — correct ratio matters, not pixel size (2026-03-15)
**Trigger:** Gemini 2K images were too large for QA tolerances (1696x2528 for Pinterest, 1856x2304 for Instagram). User had to manually resize every time.
**Rule:** When generating images for social media:
1. Use `imageSize: "1K"` instead of `"2K"` — social platforms compress everything anyway
2. What matters is the **correct aspect ratio** (2:3 for Pinterest, 4:5 for Instagram), not raw pixel count
3. 1K output is ~1024px wide which fits within QA tolerances for both Pinterest (900-1200px) and Instagram (980-1180px)
4. This eliminates the manual SnapToSize resize step for social content (SnapToSize is for the cross-platform conversion step instead)

### LESSON-019: Never mention platform names in Gemini image prompts (2026-03-15)
**Trigger:** Prompt said "Instagram post" and Gemini rendered a fake Instagram UI navbar with "instagrampost" text and camera icon at the top of the image.
**Rule:** When writing Gemini image generation prompts:
1. **Never use platform names** like "Instagram post", "Pinterest pin", "TikTok video" in the prompt — Gemini interprets these literally and adds fake UI chrome
2. Instead describe the **content type**: "social media graphic", "vertical infographic", "bold visual graphic"
3. **Explicitly exclude UI elements**: add "No phone mockups, no app screenshots, no social media UI elements, no platform branding" to every prompt
4. The aspect ratio parameter already handles the format — the prompt should only describe the visual content itself

## SEO Page Building

### LESSON-023: Use exact SnapToSize sizes — never approximate (2026-03-16)
**Trigger:** First draft of resize page used incomplete ratio lists (e.g. "8×10, 16×20, 24×30" for 4:5 instead of all 5 sizes).
**Rule:** When listing sizes/ratios on SEO pages, always use the COMPLETE lists from CONTENT_REFERENCE.md:
- **2:3** (8): 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36
- **3:4** (6): 6×8, 9×12, 12×16, 15×20, 18×24, 24×32
- **4:5** (5): 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO** (6): A5, A4, A3, A2, A1, A0
- **Extras** (5): 5×7, 8.5×11, 11×14, 11×17, 20×24

### LESSON-024: Don't market competitors' tools in SEO content (2026-03-16)
**Trigger:** First draft had detailed step-by-step guides for Photoshop, Canva, and GIMP — essentially teaching users how to use competitors.
**Rule:** SEO pages should NOT include detailed how-to instructions for competitor tools. Instead:
1. Acknowledge the manual approach exists (briefly — 2-3 sentences max)
2. Frame the **problem** (volume, time, repetition) not the **competing solution**
3. Position SnapToSize as the answer
4. Never give step-by-step menus/instructions for Photoshop, Canva, GIMP, etc.

### LESSON-025: Don't show file sizes (MB) in tables — they're not accurate (2026-03-16)
**Trigger:** Size table showed approximate MB values that don't match actual SnapToSize output (our compression is different).
**Rule:** Never show estimated file sizes (MB) in SEO content tables. SnapToSize optimizes files differently than generic JPEG export. Showing "~9 MB" for 16×20 could be wrong. Just show: Print Size, Pixels @ 300 DPI, and Ratio Pack.

### LESSON-026: Avoid jargon — keep it accessible for Etsy sellers (2026-03-16)
**Trigger:** Source file requirements section used "MP" (megapixels) which isn't familiar to non-photographer Etsy sellers.
**Rule:** Avoid technical photography jargon (MP, megapixels, Lanczos, bicubic, resampling) unless directly explaining it. Our audience is Etsy sellers who make digital art — they understand pixels and DPI but not camera specs. Use pixel dimensions directly instead of MP counts.
