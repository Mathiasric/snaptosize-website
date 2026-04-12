# Lessons Archive (001-059 historical)

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

### LESSON-008: Gemini image gen invents fake sizes/text — always list EXACT sizes in prompt (2026-03-13)
**Trigger:** Instagram post showed fake sizes like "Phone", "Phme", "Find", "5x10", "6x12", "7x14", "8x14" etc. None are real SnapToSize sizes.
**Rule:** When generating images that show size labels, the prompt MUST list every exact size to display. Never say "multiple sizes" or let the model invent labels. Use only:
- 2:3: 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30
- 3:4: 6×8, 9×12, 12×16, 15×20, 18×24
- 4:5: 8×10, 12×15, 16×20, 20×25, 24×30
- ISO: A5, A4, A3, A2, A1
- Extras: 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24
If showing a subset, pick real ones only. Gemini will hallucinate text if not constrained.

### LESSON-011: Correct size inventory — 28 in packs, 70 files total (2026-03-24, updated)
**Trigger:** A0, 24×36, 24×32 removed from packs. Total = 70 files (31 portrait + 31 landscape + 8 square).
**Rule:** SnapToSize produces up to 70 print-ready files from one upload:
- **2:3** (7): 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30
- **3:4** (5): 6×8, 9×12, 12×16, 15×20, 18×24
- **4:5** (5): 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO** (5): A5, A4, A3, A2, A1
- **Extras** (6): 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24
- **Single export only — Large** (3): 24×36, 24×32, A0
- **Single export only — Square** (8): 5×5, 8×8, 10×10, 12×12, 16×16, 18×18, 20×20, 24×24
**28 unique sizes in 5 ZIP packs × 2 orientations (portrait + landscape) + 8 square + 3 large singles = 70 files.**
Marketing language: lead with "70 files" or "30+ sizes", not "28". See LESSON-047.
Always reference this list, never invent sizes.

### LESSON-013: Always use today's date for content folder names (2026-03-16)
**Trigger:** Content created on March 15 used `2026-03-15-` prefix, but should have been `2026-03-16-` (the actual publishing date).
**Rule:** Content folder date = today's date when the content is being produced for publishing, not the date of a previous session.

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
- **2:3** (7): 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30
- **3:4** (5): 6×8, 9×12, 12×16, 15×20, 18×24
- **4:5** (5): 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO** (5): A5, A4, A3, A2, A1
- **Extras** (6): 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24

### LESSON-025: Don't show file sizes (MB) in tables — they're not accurate (2026-03-16)
**Trigger:** Size table showed approximate MB values that don't match actual SnapToSize output (our compression is different).
**Rule:** Never show estimated file sizes (MB) in SEO content tables. SnapToSize optimizes files differently than generic JPEG export. Showing "~9 MB" for 16×20 could be wrong. Just show: Print Size, Pixels @ 300 DPI, and Ratio Pack.

### LESSON-027: Extras pack does NOT contain Square — only 5 specific sizes (2026-03-17)
**Trigger:** Gemini-generated images showed "Square (1:1)", "Panoramic", "Custom Sizes", and "Social Media Sizes" under Extras pack. None of these exist.
**Rule:** The Extras pack contains EXACTLY these 5 sizes and nothing else:
- 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24
Square sizes (5×5 through 24×24) are only available in Single Export mode, NOT in any ZIP pack. Never mention Square, Panoramic, Custom Sizes, or Social Media Sizes as pack contents. When prompting Gemini for images showing pack contents, explicitly list the real Extras sizes.

### LESSON-028: Gemini drops sizes and invents fake ones even when showing individual packs (2026-03-17)
**Trigger:** P01 image showed 4:5 pack with "4×5" (not a real size), missing 12×15, 20×25, 24×30. Also missing 6×9 from 2:3, missing 24×32 from 3:4, missing A0 from ISO.
**Rule:** When Gemini generates images showing size lists per pack, it will:
1. **Invent fake sizes** like "4×5" (confusing the ratio name with a size)
2. **Drop sizes** — especially the less common ones in each pack
3. **Show incomplete lists** even when all sizes are in the prompt
**Mitigation:** If showing individual pack sizes in an image, either show ALL sizes or use "popular sizes" with "+ more". Pre-check: the ratio name (e.g., "4:5") is NOT a print size. For images that need accurate size text, consider Remotion or CSS-based graphics instead of Gemini.

### LESSON-030: Always mention JPG/JPEG — they're the same format (2026-03-18)
**Trigger:** SEO page only said "JPG" throughout. Users also search "JPEG" and may not know they're identical.
**Rule:** On SEO pages about file formats, mention "JPG (also called JPEG)" or "JPG / JPEG" early in the content (H1, intro, or first mention). This captures both search terms and educates readers. In headings and cards, use "JPG / JPEG". In body text after the first mention, "JPG" alone is fine.

### LESSON-031: Don't show specific MB file sizes — use relative comparisons (2026-03-18)
**Trigger:** File format page showed "24×36: 12-18 MB" for JPG, "60-80 MB" for PNG. These are generic estimates that don't match SnapToSize output (our compression/optimization differs). Showing wrong numbers hurts credibility.
**Rule:** Never commit to specific MB numbers for file sizes in SEO content. Instead use relative comparisons:
- "PNG files are typically 3-5× larger than JPG at the same dimensions"
- "JPG stays under Etsy's 20MB limit" / "PNG often exceeds 20MB at larger sizes"
- "PDF adds ~1.5× overhead vs JPG"
- Add disclaimer: "Actual file sizes vary by image content and dimensions"
This is truthful, useful, and doesn't create inaccurate expectations. See also LESSON-025 (same principle for size tables).

### LESSON-032: Always add new SEO pages to nav bar and footer (2026-03-18)
**Trigger:** Two new pages were committed and pushed without being added to Header.tsx or Footer.tsx navigation.
**Rule:** After creating any new SEO page, ALWAYS:
1. Add to `Header.tsx` — both desktop dropdown AND mobile menu, in the correct category (Size Guides for size pages, Seller Guides for guides, Troubleshooting for problem pages)
2. Add to `Footer.tsx` — in the matching column. Size pages go as indented sub-items under "Size Guides", guides under "Seller Guides"
3. Verify nav links work before committing
This is part of the deploy checklist alongside page-registry, CONTENT_PLAYBOOK, and MILESTONES updates.

### LESSON-035: SEO takes 3-6 months for new sites (2026-03-18)
**Trigger:** Zero organic traffic after 2-3 weeks with 15 pages live. This is completely normal.
**Rule:** For new domains, expect:
- Weeks 1-4: Zero meaningful organic traffic (Google discovering pages)
- Months 1-3: Trickle traffic, pages being indexed
- Months 3-6: First real ranking signals, compounding begins
- Months 6-12: Meaningful traffic if content volume and quality sustained
Do NOT panic about zero traffic in the first month. Focus on building content volume (100+ pages) to reach critical mass for ranking momentum.

### LESSON-036: Hero must fill the viewport — use asymmetric padding (2026-03-19, updated 2026-03-25)
**Trigger:** Every new page had the hero too short or text too low, requiring manual correction every time. Gallery wall page needed hero fix because trust pills fell below viewport.
**Rule:** When creating SEO page heroes:
1. Use **asymmetric padding** — less top, more bottom: `pt-10 pb-16 md:pt-14 md:pb-24` (compact/niche pages) or `pt-14 pb-20 md:pt-20 md:pb-28` (size pages)
2. Trust pills / checkmark badges MUST be visible within the initial viewport (1440×900 desktop) — they are conversion elements
3. **Never use symmetric `py-` padding** for heroes — it pushes the title too far down
4. After creating any hero, take a Playwright screenshot at 1440×900 and verify: title in upper third, trust pills visible, visual element renders
5. Reference existing pages: `etsy-8x10-print-size` (size hero), `etsy-gallery-wall-print-sizes` (niche hero with compact padding)
6. **See also LESSON-052** for full hero + OG verification checklist (mandatory pipeline step)

### LESSON-041: NotebookLM studio — what works and what doesn't (2026-03-21)
**Trigger:** Created slides (14 pages) and video (1:50) via NotebookLM. Video had good educational content but missed key product details (not all ratios, minimal SnapToSize promotion). Slides "detailed_deck" produced 14 pages — far too long for social media.
**Rule:** When using NotebookLM studio for social content:
1. **Video** (`nlm video create`): Produces educational explainers, NOT sales content. Good for YouTube/educational use, too long for TikTok/Reels (1:50). Will omit specific product details even when in sources. Use `--format brief --style whiteboard` for shortest output. Always add music manually before posting.
2. **Slides** (`nlm slides create`): Use `--format presenter_slides --length short` for minimal output. Even "short" can produce 7+ slides. For carousel/social, explicitly state "5 slides only" in `--focus` and describe each slide's content.
3. **Content accuracy**: NotebookLM pulls from its sources — if sources are outdated or incomplete, output will be wrong. Always sync `CONTENT_REFERENCE.md`, `lessons.md`, and `CONTENT_PLAYBOOK.md` before generating.
4. **NotebookLM is educational, not promotional**: It won't hard-sell your product. For sales-focused content, use Gemini image gen or Remotion instead.
5. **Best use case**: Carousel slides (5-6 pages) or educational B-roll video clips. Not standalone TikTok/Reels content.

### LESSON-042: NotebookLM sources must stay synced for accurate output (2026-03-21)
**Trigger:** NotebookLM video omitted ratios and product details because sources were outdated.
**Rule:** Before creating any NotebookLM studio artifact, sync these sources:
1. `marketing/CONTENT_REFERENCE.md` — product data (sizes, ratios, pricing, CTAs)
2. `tasks/lessons.md` — content rules and corrections
3. `docs/CONTENT_PLAYBOOK.md` — channel specs and templates
4. `docs/GROWTH_STATE.md` — business context
5. `docs/PIPELINE_OPERATIONS.md` — pipeline operations
Use: `PYTHONIOENCODING=utf-8 nlm source add <notebook_id> --type text --title "<Name> (<date>)" --text "$(cat <file>)" 2>&1 | cat`
Source deletion often fails — just add new versions with dates in the title to track freshness. Old sources don't override new ones.

### LESSON-043: QA dimension tolerances must accept SnapToSize-resized images (2026-03-21)
**Trigger:** Cross-platform images resized with SnapToSize (2400x3000 for 4:5) failed QA because max height was 1450px. Had to widen tolerances twice in one session.
**Rule:** QA tolerances in `qa_validate.py` should accept any image with correct aspect ratio, regardless of pixel size. Social platforms compress/resize automatically. Current tolerances:
- Pinterest: 800-3000px width, 1200-4000px height
- Instagram: 800-3000px width, 1000-4000px height
- What matters is correct ratio (2:3 for Pinterest, 4:5 for Instagram), not exact pixel dimensions.

### LESSON-044: TikTokVertical template — cards must be bigger and CTA below cards (2026-03-21)
**Trigger:** Video had cards overlapping each other and CTA ("Try Free → snaptosize.com") stacking on top of cards in the center of the screen.
**Fixes applied:**
1. **Dynamic spacing** — cards now divide available space (340-1700px) evenly instead of fixed 120px gap
2. **CTA at bottom** — changed from `justifyContent: "center"` to `justifyContent: "flex-end"` with `paddingBottom: 120px`
3. **Compact mode** for 5+ points — smaller padding, badges, font
**Still needs improvement for next time:**
- Cards are still too small visually — increase card padding, font size, and badge size even in compact mode
- Consider showing fewer points per screen (e.g., 3 at a time with scroll) instead of cramming all 5
- Or split into 2 scenes: first 3 points, then last 2 points
- Target: each card should take up ~20% of screen height minimum for readability on mobile

### LESSON-040: Gemini image prompts that produce accurate text — the recipe (2026-03-21)
**Trigger:** 4 out of 4 images generated with correct sizes, pack names, and product data — zero hallucinated text.
**Rule:** For Gemini image prompts that need accurate text rendered in the image:
1. **List every single text element explicitly** — never say "show the sizes", write out "4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30, 24×36"
2. **Use structured layout descriptions** — "Section 1 header: '2:3 Ratio', items below: 4×6, 6×9..." gives Gemini a clear visual hierarchy to follow
3. **Keep text volume reasonable** — 5 sections with 5-8 items each is the sweet spot. More than ~40 text items and Gemini starts dropping/inventing
4. **Use 1K resolution** — sufficient for social media, faster generation, correct aspect ratio
5. **Add explicit exclusions** — "No phone mockups, no app screenshots, no social media UI elements, no platform branding" prevents Gemini from adding fake chrome
6. **Specify colors per section** — "(coral accent)", "(gold accent)" etc. helps Gemini organize visually distinct sections
7. **Always end with the URL** — "snaptosize.com" in the prompt = it appears in the image
This recipe consistently produces clean infographic-style images with accurate product data.

### LESSON-046: Remotion CTA scene too long + duration mismatch (2026-03-23)
**Trigger:** Videos had ~2-3s of blank screen at the end. Two causes:
1. CTA_SCENE was 90 frames (3s) but animation finishes in ~1s
2. Root.tsx used `calculateDuration(DEFAULT_PROPS.points.length)` (5 points = 474 frames) — but actual videos had 4 points (409 frames needed). The 65 extra frames = 2.17s blank.
**Fixes applied:**
1. Reduced CTA_SCENE from 90 to 50 frames in TikTokVertical.tsx
2. Changed Root.tsx to use `calculateMetadata` — duration now scales dynamically with actual points count
**Rule:** Never hardcode duration based on DEFAULT_PROPS. Always use `calculateMetadata` so duration matches the actual props passed at render time.

### LESSON-045: Writer agents must verify internal links match the correct page (2026-03-23)
**Trigger:** Botanical page had 5x7 table row linking to `/etsy-8x10-print-size` instead of `/etsy-5x7-print-size`. Caught during Playwright validation.
**Rule:** When a writer agent creates internal links to size pages:
1. The link href must match the SIZE being discussed, not a different size
2. Before submitting: verify every `<Link href="/etsy-[X]-print-size">` matches the text it wraps
3. Common mistake: copy-pasting a link from a nearby row and forgetting to update the href
4. The seo-writer agent prompt should include: "Verify every internal link href matches the anchor text size"
This is a mechanical error that automated validation could catch — consider adding a post-write link audit step to the pipeline.

### LESSON-047: Market "70 files" or "30+ sizes" — never lead with "28" (2026-03-24, updated)
**Trigger:** Pack total dropped from 31 to 28 after removing A0, 24×36, 24×32. But actual output is 70 files (31 portrait + 31 landscape + 8 square).
**Rule:** In all marketing content, SEO pages, captions, and image prompts:
1. **Headlines/CTAs:** "Up to 70 print-ready files from one upload" — strongest true number
2. **Casual/social:** "30+ sizes" — 31 unique sizes rounds naturally
3. **Pack detail (when relevant):** "28 sizes in 5 organized packs"
4. **Always mention:** "portrait & landscape" — each size comes in both orientations, doubling the value
5. **Never lead with "28"** — it sounds like a downgrade from 31. Lead with 70 or 30+.
6. **Single export value add:** "plus 8 square sizes and 3 oversized formats via single export"
7. Exception: internal docs (CONTENT_REFERENCE.md) track exact pack count of 28 for accuracy

### LESSON-053: "18,000+ packs" is a marketing stat, not real usage data (2026-03-25)
**Trigger:** NotebookLM analysis concluded "18k packs / 3 paying = broken conversion funnel" — but the 18k number is a social proof stat on the website, not real production data. This led to a completely wrong diagnosis (conversion problem vs. distribution problem).
**Rule:** Never use marketing/social proof numbers for strategic analysis. When evaluating business health:
1. Only use real data from PostHog, Stripe, or Cloudflare analytics
2. The "18,000+" stat on the site is for visitor trust, not internal decision-making
3. If a metric seems too clean or round, verify its source before building strategy on it
4. Current reality: near-zero organic traffic, 3 paying users = pure awareness/distribution problem
5. Don't optimize conversion (free tier limits, pricing, trials) before you have enough traffic to measure conversion

### LESSON-050: A0, 24×36, 24×32 removed from packs — single export only (2026-03-24)
**Trigger:** Large sizes removed from ZIP packs due to file size constraints. They are still available via Quick Export (single file download).
**Rule:** When listing pack contents in content, do NOT include:
- 24×36 in the 2:3 pack (pack is now 7 sizes: 4×6 through 20×30)
- 24×32 in the 3:4 pack (pack is now 5 sizes: 6×8 through 18×24)
- A0 in the ISO pack (pack is now 5 sizes: A5 through A1)
General mentions of these as popular print sizes (e.g., "24×36 is the top poster size") are fine — just don't claim they're in the ZIP packs.
Total pack sizes: 28 (was 31). Lead with "70 files" or "30+ sizes" in marketing. Use "28 in packs" only when detailing ZIP structure.

### LESSON-054: Present packs + Quick Export as ONE product, not two (2026-03-26)
**Trigger:** Pack spotlight posts only showed pack sizes without mentioning Quick Export. Missed value.
**Rule:** Packs and Quick Export are one product — one upload, all sizes. Never present them separately.
1. **Pack spotlight images:** Show the pack sizes in the visual + add "+ more sizes in Quick Export" in the image footer
2. **Captions:** Include one line like "Plus A0, 24×36, square sizes and more in Quick Export"
3. **Headlines:** "One upload → up to 70 print-ready files" or "30+ sizes from one upload"
4. **Supporting detail:** "5 organized ZIP packs + bonus sizes in Quick Export"
5. **Full value:** "Up to 70 files — 5 ZIP packs in portrait & landscape, plus square and oversized formats in Quick Export"
6. **Never** frame Quick Export as a separate tool or secondary feature. It's all part of one upload flow.

### LESSON-056: Hero must fill viewport WITHOUT centering content (2026-03-27)
**Trigger:** Quote wall art hero used `min-h-screen flex justify-center` which dead-centered content, looking off vs other pages.
**Rule:** Use `min-h-screen` with top padding (matching page type pattern) to fill viewport. Content sits near the top with generous spacing between elements. Never use `flex justify-center` on heroes — it looks unnatural.
- Niche pages: `pt-[8vh] md:pt-[12vh] pb-16 md:pb-24`
- Size pages: `pt-14 pb-20 md:pt-20 md:pb-28`
- Increase internal spacing (mb-5, mb-8, mb-10) to distribute content into the vertical space.

### LESSON-057: Trust pills must not show contradicting numbers (2026-03-27)
**Trigger:** Trust pills showed "30+ sizes" AND "Up to 70 files per upload" side by side, creating confusion (is it 30 or 70?).
**Rule:** Lead with the biggest number. Use three pills that tell a coherent story:
1. **Up to 70 print-ready files** (the output — biggest impact number)
2. **All 5 ratio packs** (the coverage)
3. **Portrait, landscape & square** (explains WHY 70 files, not a second number)
Never put "30+ sizes" and "70 files" in the same pill row.

