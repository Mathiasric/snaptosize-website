# Lessons Learned

## Content Pipeline

### LESSON-001: Use real SnapToSize sizes/ratios in all content (2026-03-11)
**Trigger:** User deleted posts that mentioned generic sizes instead of actual product offerings.
**Rule:** When creating content about print sizes or ratios, ALWAYS reference the exact SnapToSize packs:

- **2:3 Ratio** — 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30
- **3:4 Ratio** — 6×8, 9×12, 12×16, 15×20, 18×24
- **4:5 Ratio** — 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO A-Series** — A5, A4, A3, A2, A1
- **Extras** (6) — 5×7, 8.5×11 (US Letter), 11×14, 11×17 (Tabloid), 13×19 (Fine art poster), 20×24

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
- **2:3** (7): 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30
- **3:4** (5): 6×8, 9×12, 12×16, 15×20, 18×24
- **4:5** (5): 8×10, 12×15, 16×20, 20×25, 24×30
- **ISO** (5): A5, A4, A3, A2, A1
- **Extras** (6): 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24

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

### LESSON-029: ISO A-series prints are all portrait orientation (2026-03-17)
**Trigger:** Gallery wall image showed A2, A1, A0 as landscape (horizontal) and A5, A4, A3 as portrait (vertical). Mixed orientation looks wrong.
**Rule:** ISO A-series paper sizes are defined as portrait orientation (width < height):
- A5: 148×210mm, A4: 210×297mm, A3: 297×420mm, A2: 420×594mm, A1: 594×841mm, A0: 841×1189mm
When showing A-series prints in mockups or gallery walls, they should all be displayed in portrait orientation for consistency. If Gemini generates mixed orientations, note this as an error and regenerate or use alternative tools.

## Growth & Marketing

### LESSON-033: Reddit/Facebook/Etsy DM outreach does not work (2026-03-18)
**Trigger:** All three outreach channels failed — Reddit and Facebook posts flagged as ads (low-quality leads, bad ROI), Etsy DM outreach got seller account flagged/suspended.
**Rule:** Do NOT pursue direct outreach on Reddit, Facebook groups, or Etsy DMs. These platforms aggressively flag promotional content. Instead focus on:
1. SEO content at scale (zero competition, compounds over time)
2. YouTube educator partnerships (free Pro + affiliate model, $0 cash cost)
3. Discord communities (value-first engagement for 2+ weeks before mentioning tool)
Never recommend outreach channels that require posting promotional content in someone else's community.

### LESSON-034: Paid ads don't work at $12/mo price point (2026-03-18)
**Trigger:** Research confirmed average SaaS CAC is $802 in 2025-2026. SnapToSize annual LTV is $144 ($12/mo x 12 months). LTV:CAC ratio of 0.18 is catastrophic.
**Rule:** Do NOT recommend paid ads (Google Ads, Pinterest Ads, Facebook Ads) until:
- $5K+ MRR (budget for $1K+/mo ad spend)
- Proven 7%+ free→pro conversion rate
- LTV increased to $300+ (either higher pricing or 24+ month retention)
Gate: Minimum 50 paying users before testing any paid channel.

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

### LESSON-034: Never put API keys or secrets in committed files (2026-03-19)
- **Trigger:** PostHog personal API key was included in `docs/APP_PARTNER_TRACKING_SPEC.md`, committed and pushed. GitHub detected it and PostHog auto-revoked the key.
- **Rule:** API keys, tokens, and secrets go ONLY in `.env.local` (gitignored) or Cloudflare env vars. Never in docs, spec files, or any file that gets committed. Use placeholders like `YOUR_API_KEY_HERE` in docs.

### LESSON-037: All print sizes must display in portrait orientation (2026-03-20)
**Trigger:** Frame size guide pin showed 16×20 and 20×30 as landscape (horizontal) frames. All SnapToSize sizes are portrait (width < height).
**Rule:** When generating images showing print sizes or frames:
1. ALL frames must be displayed in portrait/vertical orientation (taller than wide)
2. Width×Height notation (e.g., 16×20) means 16 inches wide, 20 inches tall — always portrait
3. This applies to every size across all packs, not just ISO A-series (see also LESSON-029)
4. If Gemini renders any frame as landscape, reject the image and regenerate
5. In prompts, explicitly state: "All frames in portrait/vertical orientation (taller than wide)"

### LESSON-039: Etsy 20MB is a hard upload limit, not a quality issue (2026-03-20)
**Trigger:** Video said "Your ZIP is over 20MB" as a reason buyers leave — but files over 20MB can't even be uploaded to Etsy in the first place. It's not a quality/buyer issue, it's a seller upload blocker.
**Rule:** When framing the 20MB limit in content:
1. It's a **seller-side problem** (can't upload), NOT a buyer-side problem (buyers leaving)
2. Correct framing: "Your ZIP won't upload" / "Etsy rejects files over 20MB" / "You can't even list it"
3. Wrong framing: "Buyers leave because your ZIP is over 20MB" — buyers never see this
4. In countdown/listicle content about why buyers leave or sales are lost, don't include 20MB — use it only in content about seller workflow problems

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

### LESSON-038: Pinterest descriptions max 500 characters (2026-03-20)
**Trigger:** Multiple Pinterest pins failed Buffer scheduling because description exceeded 500 characters. Had to trim and retry each time.
**Rule:** Pinterest descriptions must be under 500 characters. When writing Pinterest captions:
1. Keep descriptions under 450 characters (buffer for safety)
2. Front-load keywords in the first 1-2 sentences (most visible in search)
3. Cut filler words — Pinterest is a search engine, not a social feed
4. CTA + link can be ~60 characters, so content gets ~390 characters max
5. Count characters BEFORE sending to Buffer — never assume it fits

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

### LESSON-048: Partner commission is 25% lifetime, not 12 months (2026-03-24)
**Trigger:** User decided 25% lifetime recurring commission is better than 12-month cap at current stage (3 paying users). Lifetime alignment keeps partners promoting forever.
**Rule:** In all outreach emails, partner page copy, and partner-related content:
1. Say **"25% lifetime recurring commission"** — not "for 12 months"
2. Rationale: at $12/mo Pro, 25% = $3/mo per referral — extremely cheap CAC. Awareness > margin optimization.
3. If terms ever change, grandfather existing partners.

### LESSON-049: Use founder signature for outreach, not "Support" (2026-03-24)
**Trigger:** User's email signature said "SnapToSize Support" — reads as helpdesk, not founder outreach.
**Rule:** For partner/cold outreach emails, use:
```
Mathias
Founder, SnapToSize
snaptosize.com
```
Never use "SnapToSize Support" for partnership or business development emails. "Support" is for customer service only.

### LESSON-051: Never fabricate testimonials or fake social proof (2026-03-24)
**Trigger:** Homepage had a TestimonialsSection with 3 fabricated reviews (Sarah M., Jessica R., Amanda K.) — none were real users. Removed immediately.
**Rule:** NEVER create fake testimonials, reviews, or user quotes. This includes:
1. Invented names with initials ("Sarah M.") presented as real people
2. Fabricated quotes presented as real feedback
3. Made-up sales numbers or shop descriptions ("1,200+ sales")
4. Star ratings on reviews that don't exist
**What's allowed:**
- Real metrics from production data ("18,000+ packs generated")
- Testimonials from real users who explicitly approved their quote
- Generic trust signals (feature lists, guarantees, "Built for Etsy sellers")
**Testimonials are a future feature** — re-add the section only when real users provide approved quotes.
Fake reviews violate FTC guidelines and destroy trust. This is a hard rule.

### LESSON-052: Verify hero and OG visuals with Playwright after every new page (2026-03-25)
**Trigger:** Gallery wall page hero pushed trust pills below the viewport. Only caught during manual user review, not by the pipeline.
**Rule:** After creating any new SEO page, the pipeline verify stage MUST:
1. **Hero viewport check** — Take a Playwright screenshot at 1440×900. Verify:
   - H1 title is in the upper half of the viewport (not pushed down)
   - Trust pills / checkmarks are fully visible within the initial viewport
   - The CSS visual element (blueprint, frames, etc.) renders correctly and doesn't overlap text
   - Hero doesn't leave excessive white/empty space at the bottom
2. **Hero mobile check** — Take a screenshot at 390×844 (iPhone). Verify H1 and CTA button are visible without scrolling.
3. **OG image check** — Generate OG screenshot at 1200×630 and verify:
   - Page title text is legible (not cut off)
   - Visual element renders at OG resolution
   - No broken layout or overflow
4. **Fix before deploying** — If hero is too tall/low, adjust padding (see LESSON-036). If OG is broken, fix layout before push.
**Pipeline integration:** This is part of the `verify` stage in `/seo-run-week`. The verify agent must use `npx playwright screenshot` and visually inspect results. Do NOT skip this step or mark verify as complete without screenshots.

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

### LESSON-055: Quote/typography art is a validated high-value sub-niche (2026-03-26)
**Trigger:** Real paying customer uploading "quote2 - Artboard 8.png" (31.3 MB), all 5 packs selected. Professional designer with multi-artboard workflow.
**Insight:** Quote/typography wall art sellers are power users — dozens of designs, every size needed per design, professional source files from Illustrator/Photoshop. Ideal Pro candidates.
**Action:** Added to GROWTH_STATE.md as validated sub-niche. Prioritized in SEO niche vertical queue (ahead of botanical/minimalist). SEO page opportunity: `/etsy-quote-wall-art-sizes`.

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

### LESSON-058: Keep product jargon out of educational content (2026-03-27)
**Trigger:** 20×30 hero subtitle said "plus 24×36 via Quick Export" — product-specific jargon a first-time visitor won't understand.
**Rule:** SEO guides are informational first, conversion second. Product-specific terms ("Quick Export", "ZIP pack", "ratio pack") belong ONLY in CTA sections and comparison tables where they're explained in context. Educational H1/subtitle/body should read naturally for someone who's never heard of SnapToSize.
- Hero subtitle: describe the topic ("the largest standard 2:3 poster size"), not the product feature
- CTA sections: product language is fine ("Upload once, get all 5 ratio packs")
- Comparison tables: explain product terms in context

### LESSON-059: OG images must be generated during pipeline deploy stage (2026-03-27)
**Trigger:** Both new pages shipped without OG images — caught during manual review.
**Rule:** The deploy stage must generate OG images (1200×630) for every new page using Playwright. Add to deploy checklist:
1. Header/Footer links
2. Page registry
3. OG image generation (Playwright HTML → screenshot)
4. MILESTONES update

### LESSON-060: Backlinks from existing pages must be added during deploy stage (2026-03-27)
**Trigger:** Briefs identified backlink targets (existing pages mentioning "20×30", "typography") but the pipeline never implemented them. Both new pages had zero inbound links from existing pages.
**Rule:** The deploy stage must search existing pages for unlinked mentions of the new page's topic and add `<Link>` tags. Minimum 2-3 inbound links per new page from existing content. Check:
- Size pages: search for the size number (e.g., "20×30", "20x30") across all pages
- Niche pages: search for the niche term (e.g., "quote", "typography") across all pages
- Use `grep` to find mentions, then add links in the most natural positions.

### LESSON-061: NEVER remove or modify MCP server configurations (2026-03-27)
**Trigger:** A chat session "cleaned up" `.claude/settings.json` by removing the `mcpServers` block (Gemini + Playwright) and creating an empty `.mcp.json`. This broke the entire social media pipeline — Gemini MCP disappeared, forcing fallback to Imagen 4.0 Python scripts which produce garbage infographics (CSS code in images, garbled text, wrong sizes).
**Rule:**
1. **NEVER remove MCP server configs** without explicit user instruction. MCP servers are critical infrastructure.
2. **NEVER "clean up" settings files** by removing blocks you don't understand.
3. **MCP servers belong in `.mcp.json`** at project root (not in `.claude/settings.json` which no longer supports `mcpServers`)
4. **If migrating settings:** ALWAYS copy servers to the new location BEFORE removing from the old one
5. **Gemini MCP is the ONLY image generation tool** for the social pipeline. Imagen 4.0 API cannot render text in infographics. Never substitute it.
6. **Current MCP servers (DO NOT REMOVE):** gemini (image gen + text), playwright (screenshots + visual QA)

### LESSON-062: Imagen 4.0 cannot do infographics — only use Gemini MCP for social images (2026-03-27)
**Trigger:** After Gemini MCP was accidentally removed, pipeline used `imagen-4.0-generate-001` via Python script. Results: CSS code rendered as image content ("display: flex. directcion: row"), markdown syntax leaking ("#", "##"), garbled text ("CEAX PXX", "covery" instead of "every"), wrong sizes ("5x14", "18x14"), degree symbols instead of multiplication signs.
**Rule:** For social media infographics:
1. **Always use Gemini MCP** (`gemini-generate-image`) — understands layout, renders text accurately
2. **Never use Imagen 4.0** for text-heavy images — it dumps prompt/CSS as visual content
3. **If Gemini MCP is unavailable**, STOP and fix the MCP configuration first. Do NOT fall back to Imagen API.
4. **Imagen 4.0 is only acceptable** for photorealistic images WITHOUT text overlays (lifestyle photos, product mockups where text is added separately via HTML/Playwright)

### LESSON-063: Never generate social content ad-hoc — always use the pipeline (2026-03-30)
**Trigger:** Assistant wrote ad-hoc Python scripts to generate 4 images instead of running `/pipeline-run-week`. Results: hex codes rendered as text in images, Instagram post had white borders (looked like 2:3 with padding instead of true 4:5 fill), hallucinated size numbers in tag-cloud, no metadata.json files, no QA validation, no captions. All 4 images rejected.
**Rule:**
1. **Always use `/pipeline-run-week`** for social content — it handles research, creation, QA, and scheduling in proper stages
2. **Never write one-off generation scripts** — the pipeline exists to prevent exactly these quality issues
3. **Every content item needs metadata.json** with captions, hashtags, board assignment, and link URL
4. **QA stage is mandatory** — dimensions, file format, metadata, and captions must be validated before scheduling
5. **If the pipeline is broken**, fix the pipeline. Do not bypass it with ad-hoc scripts.

### LESSON-064: Never create content that contradicts the product's own behavior (2026-03-30)
**Trigger:** Generated Instagram post "3 Resizing Mistakes That Ruin Your Prints" listed "Stretching to fit" as mistake #1. But SnapToSize itself uses stretch-only resizing (Lanczos, no cropping). This directly contradicts and downplays the product.
**Rule:**
1. **Know the product mechanics** — SnapToSize uses stretch-only resize (no crop, no padding). Never frame stretching as a mistake or negative.
2. **Never create "mistakes to avoid" content that criticizes what the product does** — always check if the "mistake" is actually the product's approach
3. **When in doubt, re-read LESSON-001** — it states "stretch-only (no cropping)" as a core feature
4. **Safe pain-points to use:** wrong DPI, manual resizing tedium, missing sizes, wrong file format, not offering enough ratios — NOT stretching

### LESSON-065: Instagram metadata MUST have "caption" field — not just "description" (2026-03-30)
**Trigger:** Two Instagram posts (ISO sizes, PH launch) were scheduled via Buffer with completely empty text. The metadata.json files had "description" but not "caption". The schedule script uses `meta.get("caption", "")` for Instagram posts.
**Rule:**
1. **Every Instagram metadata.json MUST include a "caption" field** — this is what Buffer sends as the post text
2. **Pinterest uses "description", Instagram uses "caption"** — different field names per platform
3. **Before scheduling, verify metadata has the right fields** for the target platform:
   - Pinterest: `title`, `description`, `link`, `board`
   - Instagram: `caption`, `hashtags`
4. **Dry-run doesn't catch this** — it only checks if items exist, not if metadata fields are populated correctly

### LESSON-066: CTA density and variety — no repeating the same message (2026-03-30)
**Trigger:** User called out 12×18 page and POD vs DD page for having 3 CTA sections each that all said "upload once, get everything, no manual work" in slightly different wording. Felt repetitive and salesy.
**Rule:**
1. **1 CTA per 3-4 content sections, max 3 total.** Short pages (size, ~5 sections) get 2. Long pages (guides, pillar, 7+ sections) can have up to 3. Last CTA is always FinalCTA before FAQ.
2. **Each CTA must have a distinct angle** — don't rephrase the same value prop. If CTA 1 says "get all sizes from one upload", CTA 2 should NOT say "skip manual resizing" (same message)
3. **EmailCaptureSection is NOT a CTA** — it's lead capture. Place it after FAQ, separated from product CTAs
4. **Never stack 2+ CTAs back-to-back** — minimum 3 content sections between each CTA
5. **If you can't write a distinct CTA, you don't need another one** — fewer is better than repetitive

### LESSON-067: Research financial claims before publishing — never estimate fees (2026-03-30)
**Trigger:** POD vs DD page had "Etsy fees (~13%)" which was wrong. Actual Etsy fees are $0.20 listing + 6.5% transaction + 3% + $0.25 payment processing = ~10-18% effective depending on price. Margin ranges ("85-95%") were also inaccurate.
**Rule:**
1. **Always WebSearch actual fee structures** before writing financial comparisons
2. **Show fee breakdowns line-by-line** (listing fee, transaction fee, processing fee) — not a single approximation
3. **Margins depend on price point** — the fixed $0.45/transaction fee means low-priced items ($4.99) have much lower margins than higher-priced items ($14.99). Always acknowledge this variance
4. **Include offsite ads warning** — Etsy charges 15% extra on offsite-ad-attributed sales (12% and mandatory above $10K/yr revenue)
5. **Use conservative, defensible ranges** — better to slightly understate margins than overstate them. Readers who discover inflated numbers lose trust in the entire article

### LESSON-068: Most Remotion templates have text overlap issues — QA before batch (2026-03-30)
**Trigger:** Rendered 7 TikTok videos across 6 templates. User found most had sloppy text overlapping. Only CountdownReveal passed QA.
**Rule:**
1. **Render ONE video first and get user approval** before batch rendering
2. **CountdownReveal is the most reliable template** — other templates (BeforeAfter, StatHighlight, TextSlam, QuickList, TikTokVertical) have text overlap issues with certain prop lengths
3. **Keep text SHORT** — long points cause overflow. Test with actual content before committing to a batch
4. **Never auto-generate 7 videos** when user asks for 1

### LESSON-078: Do NOT use min-h-screen on hero sections (2026-04-01)
**Trigger:** Hero sections had massive empty space on 27" monitors (2560×1440). Gallery wall page (no min-h-screen) looked correct while new pages with min-h-screen had 60% empty hero.
**Rule:** Hero sections use content-driven height with asymmetric padding: `pt-10 pb-16 md:pt-14 md:pb-24`. Never `min-h-screen`. Reference: `etsy-gallery-wall-print-sizes` hero pattern.

### LESSON-079: EmailCaptureSection / cheat sheet PDF is deprecated (2026-04-01)
**Trigger:** User confirmed print sheet/PDF is no longer offered.
**Rule:** Do NOT include EmailCaptureSection on any page. No "Free Cheat Sheet" or "printable PDF" offers. Pages end with FinalCTA → FAQ → RelatedPages. Remove EmailCaptureSection from any page that still has it.

### LESSON-080: Gemini mockups — no text, detailed scene description (2026-04-01)
**Trigger:** Testing Gemini MCP for room mockup images. Works great when prompt is detailed and explicitly excludes text.
**Rule:** For Gemini room mockups:
1. Describe the EXACT room, furniture, frame style, art style, and lighting
2. Always include "No text, no words, no labels, no watermarks, no phone mockups, no app screenshots, no social media UI elements"
3. Use `aspectRatio: "3:2"`, `imageSize: "2K"`, `style: "photorealistic"`
4. Save to `app-next/public/assets/visuals/etsy-[slug]-mockup.jpg`

### LESSON-081: Size comparison diagrams use CSS/HTML → Playwright screenshot (2026-04-01)
**Trigger:** Playwright-generated diagrams are pixel-perfect, free, and templatable vs Gemini which hallucinates text.
**Rule:** For size comparison visuals:
1. Use `tests/diagrams/gen-diagram.js` to generate HTML files
2. Screenshot with `npx playwright screenshot --viewport-size="1200,500"`
3. Save to `app-next/public/assets/visuals/etsy-[slug]-size-comparison.png`
4. Proportions must be mathematically correct (1 inch = scale factor in px)
5. Hero size highlighted in teal, others in white/gray
