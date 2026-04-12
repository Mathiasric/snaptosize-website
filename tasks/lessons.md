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

### LESSON-009: Buffer API Unicode fix — use ensure_ascii=False (2026-03-14)
**Trigger:** Instagram posts showed garbled characters for arrows (→), emojis, and bullet points.
**Root cause:** `requests.post(json=...)` uses `json.dumps(ensure_ascii=True)` internally, which sends `\u2192` instead of `→`. Buffer's API doesn't properly decode these escape sequences.
**Fix applied:** Changed `schedule-batch.py` to use `json.dumps(payload, ensure_ascii=False).encode('utf-8')` with `data=body` instead of `json=payload`. Also added `charset=utf-8` to Content-Type header.
**Rule:** Always use `ensure_ascii=False` when sending text with emojis/Unicode to Buffer. Emojis and arrows ARE supported — just need proper encoding.

### LESSON-012: Buffer duplicate detection is image-URL-based (2026-03-16)
**Trigger:** Scheduling 3 Pinterest pins in rapid succession — first succeeded, 2nd and 3rd failed with "posted that one recently".
**Root cause:** Buffer's duplicate detection uses the image URL, not the text. Once a URL is flagged (even from a failed attempt), it stays flagged for a cooldown period.
**Fix:** Re-upload to R2 with a different key (e.g., `pin-v2.jpg`) to get a fresh URL.
**Rule:** When batch-scheduling, stagger uploads with unique R2 keys if Buffer rejects. Also space scheduling calls by at least a few seconds.

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

### LESSON-007: Button component doesn't accept href/size props (2026-03-11)
**Rule:** The Button component only accepts `children`, `variant`, `className`, `onClick`. For link CTAs, wrap in `<a href={url} target="_blank" rel="noopener noreferrer"><Button>Text</Button></a>`. EmailCapture takes `placeholder` and `buttonText` props.

### LESSON-024: Don't market competitors' tools in SEO content (2026-03-16)
**Trigger:** First draft had detailed step-by-step guides for Photoshop, Canva, and GIMP — essentially teaching users how to use competitors.
**Rule:** SEO pages should NOT include detailed how-to instructions for competitor tools. Instead:
1. Acknowledge the manual approach exists (briefly — 2-3 sentences max)
2. Frame the **problem** (volume, time, repetition) not the **competing solution**
3. Position SnapToSize as the answer
4. Never give step-by-step menus/instructions for Photoshop, Canva, GIMP, etc.

### LESSON-026: Avoid jargon — keep it accessible for Etsy sellers (2026-03-16)
**Trigger:** Source file requirements section used "MP" (megapixels) which isn't familiar to non-photographer Etsy sellers.
**Rule:** Avoid technical photography jargon (MP, megapixels, Lanczos, bicubic, resampling) unless directly explaining it. Our audience is Etsy sellers who make digital art — they understand pixels and DPI but not camera specs. Use pixel dimensions directly instead of MP counts.

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

### LESSON-038: Pinterest descriptions max 500 characters (2026-03-20)
**Trigger:** Multiple Pinterest pins failed Buffer scheduling because description exceeded 500 characters. Had to trim and retry each time.
**Rule:** Pinterest descriptions must be under 500 characters. When writing Pinterest captions:
1. Keep descriptions under 450 characters (buffer for safety)
2. Front-load keywords in the first 1-2 sentences (most visible in search)
3. Cut filler words — Pinterest is a search engine, not a social feed
4. CTA + link can be ~60 characters, so content gets ~390 characters max
5. Count characters BEFORE sending to Buffer — never assume it fits

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

### LESSON-055: Quote/typography art is a validated high-value sub-niche (2026-03-26)
**Trigger:** Real paying customer uploading "quote2 - Artboard 8.png" (31.3 MB), all 5 packs selected. Professional designer with multi-artboard workflow.
**Insight:** Quote/typography wall art sellers are power users — dozens of designs, every size needed per design, professional source files from Illustrator/Photoshop. Ideal Pro candidates.
**Action:** Added to GROWTH_STATE.md as validated sub-niche. Prioritized in SEO niche vertical queue (ahead of botanical/minimalist). SEO page opportunity: `/etsy-quote-wall-art-sizes`.

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

### LESSON-082: Use descriptive file names for social content images (2026-04-01)
**Trigger:** User couldn't tell images apart when resizing with SnapToSize — all named `pin.jpg` or `post.jpg`.
**Rule:** Name content files descriptively using the slug from metadata:
1. Strip the date prefix from the folder slug → use as filename (e.g. `5-ratios-every-seller.jpg`)
2. Legacy names (`pin.jpg`, `post.jpg`) still work — pipeline falls back to glob by extension
3. Both `qa_validate.py` and `schedule-batch.py` support descriptive names via extension-based fallback
4. Convention: `marketing/social/content/{platform}/{date}-{slug}/{slug}.jpg`

### LESSON-081: Size comparison diagrams use CSS/HTML → Playwright screenshot (2026-04-01)
**Trigger:** Playwright-generated diagrams are pixel-perfect, free, and templatable vs Gemini which hallucinates text.
**Rule:** For size comparison visuals:
1. Use `tests/diagrams/gen-diagram.js` to generate HTML files
2. Screenshot with `npx playwright screenshot --viewport-size="1200,500"`
3. Save to `app-next/public/assets/visuals/etsy-[slug]-size-comparison.png`
4. Proportions must be mathematically correct (1 inch = scale factor in px)
5. Hero size highlighted in teal, others in white/gray

### LESSON-083: Cross-platform resized images live in ready/ folders — use those, not Downloads (2026-04-06)
**Trigger:** Scheduler used wrong files (from Downloads) and scheduled duplicate posts 4 times. Also scheduled old items from previous days repeatedly.
**Rule:** When scheduling cross-platform xposts:
1. **Resized images are in `marketing/social/ready/instagram_ready/` and `marketing/social/ready/pinterest_ready/`** — NOT in Downloads
2. **Files are named with date suffix** like `landscape-print-sizes_(06.04).jpg` — only use files matching today's date
3. **2:3 → 4:5 resizes go to `instagram_ready/`**, 4:5 → 2:3 resizes go to `pinterest_ready/`
4. **The scheduler picks up ALL items in `publishing` stage** — including old ones from previous days. Before running `schedule-batch.py`, verify that only today's NEW items are in `created`/`publishing` stage. Items already `published` should stay `published`.
5. **Never schedule from Downloads** — user puts resized files in the ready folders for a reason
6. **Count the files first** — user says "3 files: 2 IG + 1 Pinterest", verify that's what you see before proceeding


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W14-I20 "Before & After — Manual Resizing vs SnapToSize" (score: 0, impressions: 0, clicks: 0, saves: 0, type: None)
2. [instagram] W14-I19-xpost "Manual vs SnapToSize (xpost from Pinterest)" (score: 0, impressions: 0, clicks: 0, saves: 0, type: None)
3. [instagram] W14-I18-xpost "Landscape Print Sizes (xpost from Pinterest)" (score: 0, impressions: 0, clicks: 0, saves: 0, type: None)

### Low Performers
1. [pinterest] None "Most Etsy sellers offer just 1-2 print sizes. Smart sellers " (score: 0, impressions: 0)
2. [pinterest] None "Upload one image, get 70 print-ready files. 5 ratio packs: 2" (score: 0, impressions: 0)
3. [pinterest] None "72 DPI = blurry, pixelated prints. 150 DPI = noticeable grai" (score: 0, impressions: 0)


## Performance Insights -2026-W15

### Top Performers
1. [pinterest] W14-P04 "Selling Globally ISO Sizes" (score: 0, impressions: 2, clicks: 0, saves: 0, type: None)
2. [instagram] W14-I20 "Before & After — Manual Resizing vs SnapToSize" (score: 0, impressions: 0, clicks: 0, saves: 0, type: None)
3. [instagram] W14-I19-xpost "Manual vs SnapToSize (xpost from Pinterest)" (score: 0, impressions: 0, clicks: 0, saves: 0, type: None)

### Low Performers
1. [pinterest] None "Most Etsy sellers offer just 1-2 print sizes. Smart sellers " (score: 0, impressions: 0)
2. [pinterest] None "Upload one image, get 70 print-ready files. 5 ratio packs: 2" (score: 0, impressions: 0)
3. [pinterest] None "72 DPI = blurry, pixelated prints. 150 DPI = noticeable grai" (score: 0, impressions: 0)


## Performance Insights -2026-W15

### Top Performers
1. [pinterest] None "Upload one image, get 70+ print-ready files for your Etsy sh" (score: 14, impressions: 2, clicks: 2, saves: 0, type: ?)
2. [pinterest] None "The 3:4 ratio is the classic photo frame standard. SnapToSiz" (score: 1, impressions: 8, clicks: 0, saves: 0, type: ?)
3. [pinterest] None "72 DPI prints look pixelated and blurry. 300 DPI prints are " (score: 0, impressions: 4, clicks: 0, saves: 0, type: ?)

### Low Performers
1. [pinterest] None "Most Etsy sellers offer just 1-2 print sizes. Smart sellers " (score: 0, impressions: 0)
2. [pinterest] None "Upload one image, get 70 print-ready files. 5 ratio packs: 2" (score: 0, impressions: 0)
3. [pinterest] None "72 DPI = blurry, pixelated prints. 150 DPI = noticeable grai" (score: 0, impressions: 0)


### LESSON-084: Dark social slides are too weak for standalone pins/posts (2026-04-09)
**Trigger:** User rejected all 4 dark social slide screenshots (NumberHighlight, SizeComparison, Checklist, WorkflowSteps) as not strong enough for Pinterest/Instagram. They work as video slides but not standalone.
**Rule:** For standalone social media posts:
1. **Gemini lifestyle mockups** are the strongest performers (room scenes with frame sizes labeled)
2. **Bright infographics** (light background, colorful elements) outperform dark slides
3. **Dark social slide templates** should only be used as Remotion video slides, not standalone posts
4. **Best performers from March:** bedroom wall art, frame size guide, most-searched-sizes -- all bright/lifestyle

### LESSON-085: Portrait images cannot be used in landscape Remotion templates (2026-04-09)
**Trigger:** Rendered TikTok video with 2:3 Pinterest pins in SlideshowVertical's 920x550 landscape display area. Result: images cropped to near-invisibility.
**Rule:** When creating TikTok/Reels videos from social media images:
1. **SlideshowVertical** (920x550 landscape slot) is ONLY for landscape source images (app screenshots, diagrams)
2. **PortraitSlideshow** (1080x1500 portrait slot) is for portrait source images (Gemini mockups, Instagram posts, Pinterest pins)
3. **Never put 2:3 or 4:5 images into landscape templates** -- they lose 60%+ of content
4. Match template to source image orientation before rendering

### LESSON-086: TikTok videos should reuse existing Pinterest/Instagram images (2026-04-09)
**Trigger:** User confirmed that composing TikTok videos from existing strong images (Gemini lifestyle, bright infographics) works better than generating separate video content.
**Rule:** When creating TikTok/Reels videos:
1. **Scan existing content:** Search `marketing/social/content/pinterest/` and `instagram/` for strong portrait images
2. **Group thematically:** Room types (bedroom, office, gallery wall), size guides, ratio packs, niches (quote art, nursery)
3. **Minimum 3-4 slides per video** -- fewer feels too short
4. **Use PortraitSlideshow** for portrait images (2:3 Pinterest pins, 4:5 Instagram posts)
5. **Use SlideshowVertical** for landscape images (app screenshots, diagrams) -- secondary
6. **Match template to source orientation** -- never force portrait into landscape
7. **Write cohesive narrative:** Hook + per-slide text + CTA that ties the images into a story
8. **Best source images:** Gemini lifestyle mockups and bright infographics. Dark social slides are too weak.

### LESSON-087: Subagents updating existing pages must audit H2 structure first (2026-04-10)
**Trigger:** Agent added "A4 at 300 DPI: Exact Pixel Dimensions" section to etsy-a4-print-size, not noticing the page already had "A4 Pixel Dimensions at 300 DPI" — near-identical duplicate content.
**Rule:** When updating an existing page:
1. **Always list all existing H2s first** — `document.querySelectorAll('h2')` or grep for `<h2`
2. **Check for semantic overlap** before adding — if a section already covers the topic, enrich it, don't add a new one
3. **DPI/pixel/resolution sections are especially prone to duplication** — many size pages already have these
4. **Fix:** Move unique content (e.g. DPI comparison table) into the existing section; remove the duplicate outer wrapper

### LESSON-087: Social content uten SnapToSize-vinkel er sløst og svakt (2026-04-10)
**Trigger:** Genererte 2 lifestyle-mockups (kids room, kitchen wall art) som bare viste rammer med størrelsesetiketter — ingen SnapToSize-referanse, ingen grunn til å klikke, bortkastede Gemini-kreditter.
**Rule:** For hvert sosiale mediebilde, still spørsmålet: "Gjør dette noen som helst til å ville prøve SnapToSize?"
1. **Alltid én av disse vinklene:** Pain→Solution ("Resizer du manuelt?"), Kontrast ("3 størrelser vs 30"), Benefit-first ("1 upload = 70 filer"), Data ("mest-søkte størrelser")
2. **Lifestyle-mockups krever produktkobling:** Enten app på skjerm, SnapToSize CTA-tekst i bildet, eller "generated with SnapToSize"-framing — ellers er de bare hjemmedekorkontent
3. **Sterke content-types:** `workflow-hack`, `before-after`, `product-showcase` — ikke bare `size-guide` uten hook
4. **Tvilstilfelle: gjenbruk gammelt sterkt innhold** (11+ dager gammelt) i stedet for å generere nytt svakt innhold — det er gratis og bevist
5. **QA må sjekke innholdsvinkel**, ikke bare filstruktur. Bestått filstruktur-QA ≠ innholdskvalitet


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [instagram] W16-I01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)
2. [pinterest] W16-P01 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: workflow-hack)
3. [pinterest] W16-P02 "" (score: 0, impressions: 0, clicks: 0, saves: 0, type: cheat-sheet)

### Low Performers
1. [pinterest] None "Quote and typography wall art sellers — your buyers want EVE" (score: 0, impressions: 0)
2. [pinterest] None "Most Etsy sellers only list common sizes. Serious sellers in" (score: 0, impressions: 0)
3. [pinterest] None "Most Etsy sellers offer 2–3 print sizes. Smart sellers offer" (score: 0, impressions: 0)

### Do More
- Koble til Pinterest API: legg til PINTEREST_TOKEN i .env.buffer for engasjements-data

### Notes
- ⚠️ Ingen platform-data tilgjengelig (Buffer API returnerer 0 stats). Koble til Pinterest Business API eller Instagram Graph API for reell engasjements-data.


## Performance Insights -2026-W15

### Top Performers
1. [pinterest] None "Upload one image, get 70+ print-ready files for your Etsy sh" (score: 14, impressions: 2, clicks: 2, saves: 0, type: ?)
2. [pinterest] None "72 DPI prints look pixelated and blurry. 300 DPI prints are " (score: 0, impressions: 4, clicks: 0, saves: 0, type: ?)
3. [pinterest] None "The top 7 sizes Etsy buyers search for: 8x10, 5x7, 11x14, 16" (score: 0, impressions: 3, clicks: 0, saves: 0, type: ?)

### Low Performers
1. [pinterest] None "Most sellers offer the basic ratios, but customers often loo" (score: 0, impressions: 0)
2. [pinterest] None "Etsy sellers spend 1-3 hours resizing artwork into every pri" (score: 0, impressions: 0)
3. [pinterest] None "The 4:5 ratio is the most popular frame ratio on Etsy. The p" (score: 0, impressions: 0)

### Do More
- Content type 'cheat-sheet' -avg score 0, avg saves 0.0

---

### LESSON-088: Pinterest-visuals må være overbevisende og scroll-stoppende — ikke sloppy (2026-04-11)
**Trigger:** Genererte React/Playwright-pins som var korrekte men kjedelige — mørk bakgrunn + tekstrader stopper ingen i Pinterest-feeden.
**Rule:** Pinterest-pins må bestå "scroll-stopp-testen" — ville en Etsy-selger stoppe og lagre dette? Bruk dette som filter på alt innhold.

#### Hva som faktisk stopper folk på Pinterest:
1. **Før/Etter kontrast** — kaos vs orden, manuelt vs automatisk, 1 fil vs 28 filer
2. **Store tall med kontekst** — "1 upload → 70 filer" i stor font slår "28 størrelser" som tabell
3. **Visuell sammenligning** — vis faktiske størrelsesforskjeller som rektangler i proporsjon
4. **Pain-punkt i overskriften** — "Sender du kunder til konkurrenten fordi du mangler 8×12?" stopper bedre enn "Ratio Guide"
5. **Ekte produktbevis** — app-skjermbilde, ZIP-mappe, faktiske filnavn — ikke abstrakt

#### Gemini-prompts for Pinterest: obligatorisk struktur
Aldri: `"bedroom wall art with frames"` — for generisk, ingen SnapToSize-vinkel.

**Alltid bruk dette mønsteret:**
```
SCENE: [Spesifikk situasjon en Etsy-selger kjenner seg igjen i]
PROBLEM SYNLIG: [Hva er det smertefulle — feil filstørrelse, for få varianter, manuell jobb]
LØSNING: [SnapToSize-appskjerm, organisert filstruktur, eller "1 upload"-moment]
TEKST I BILDET: [Kort, stor, kontrastrikt — maks 8 ord som hook]
STIL: [Ren, lys studio-belysning ELLER dramatisk mørk med teal/lilla glød — aldri grå midtone]
FORMAT: Vertikal 1000×1500px, tekst i øvre 40% og nedre 20%
IKKE: Generiske rammer på vegger uten selger-kontekst. Ikke stockfoto-estetikk.
```

#### De 5 sterkeste Pinterest-konseptene for SnapToSize:

**1. Mapper-kontrasten (Before/After)**
- Venstre: rotete skrivebord, Photoshop åpen, 47 filer med navn som "final_FINAL_v3_8x10.jpg"
- Høyre: ryddig filmappe "SnapToSize_Pack/" med pent navngitte ZIP-filer
- Tekst: "Stop the chaos. 1 upload → 5 organized packs."

**2. Kjøper som ikke finner størrelsen**
- Etsy-side med "Size" dropdown åpen — tomme felt
- Overlay-tekst: "Your buyer wanted 12×18\". You don't offer it. They left."
- CTA: "Never lose a sale to a missing size."

**3. Størrelsesunivers (visual ratio grid)**
- Rektangler i faktisk proporsjon: 2:3, 3:4, 4:5, ISO A, Extras — i ulike farger
- Hvert rektangel labelled med størrelsene (8×10, A4 osv.)
- Tekst øverst: "Which sizes do YOUR buyers want?"
- CTA: "SnapToSize gives you all of them. 1 upload."

**4. App-skjermshot + resultat**
- Telefon/laptop med SnapToSize upload-screen
- Under: 5 ZIP-ikoner med pakkenavn (2:3 Pack, 3:4 Pack osv.)
- Tekst: "60 seconds. 28 sizes. Done."

**5. DPI-angsten**
- Close-up av et pixelert utskrift vs skarpt utskrift side om side
- Tekst: "This is what 72 DPI looks like when printed."
- CTA: "SnapToSize always outputs 300 DPI. Every size."

#### Playwright-pins: når de fungerer vs ikke fungerer
✅ Fungerer: Cheat sheets og reference-tabeller med høy informasjonstetthet (folk lagrer for å slå opp)
✅ Fungerer: Before/After med skarp rød/grønn kontrast og konkrete tall
❌ Fungerer ikke: Mørke bakgrunner med liten tekst som er "korrekt men kjedelig"
❌ Fungerer ikke: Generiske size-lister uten visuell hook eller selger-smertepunkt

#### QA-sjekkliste for alle Pinterest-visuals (obligatorisk)
Før en pin godkjennes, svar JA på minst 3 av 5:
- [ ] Ville en Etsy-selger stoppe scrollingen for dette?
- [ ] Er det ett klart smertepunkt eller løsning synlig innen 2 sekunder?
- [ ] Er den primære teksten lesbar på mobil i thumbnail-størrelse?
- [ ] Er SnapToSize-vinkelen tydelig uten å lese beskrivelsen?
- [ ] Er det visuell kontrast (mørk/lys, rød/grønn, stor/liten)?
- Layout 'gemini-infographic' -avg score 0

---

### LESSON-089: Pinterest-pipeline er 50/50 React + Gemini — 2 av hver per dag (2026-04-11)
**Trigger:** Tidligere pipeline brukte React for tekst-tunge slides og Gemini for lifestyle. Resulterte i for mange generiske slides uten visuell hook. Ny modell: ekte Etsy-kunstverk i React-templates + strukturerte Gemini-prompts for pain-point-visuals.

**Rule:** Pinterest-produksjon er alltid 2 React/Playwright + 2 Gemini per dag.

#### React/Playwright (2 pins/dag):
- **Primærtemplate:** `NeonPackShowcase` i `app-next/app/social-slides/_components/NeonPackShowcase.tsx`
- **Bytt `artwork` prop** for hver pin — 10 mapper tilgjengelig i `app-next/public/assets/listings/`
- Hvert artwork har 5 ratio-varianter produsert av SnapToSize (2:3, 3:4, 4:5, ISO, Extras)
- Dette er selve produktbeviset: samme kunst i alle 5 rammer = "1 upload → every size"
- **Sterkeste artworks for engagement:** `bunny` (fargerik), `misty_lake` (dramatisk kontrast), `deer` (rik palett)
- Screenshot-kommando: `cd app-next && node screenshot-neon.js`

#### Gemini (2 pins/dag):
- Bruk KUN de 5 strukturerte prompt-templatene fra `marketing/social/PINTEREST_VISUAL_GUIDE.md`
- Aldri skriv generiske prompts — alltid SCENE → PROBLEM → LØSNING → TEKST → STIL → FORMAT
- Sterkeste Gemini-konsepter: Mappekaos-kontrasten (#1) og Kjøper som forsvant (#2)

#### Hva som IKKE fungerer (unngå):
- Tekst-tunge mørke slides uten artwork
- Generiske size-oversikter uten visuell hook
- React-slides som bare viser data i rader og kolonner
- Gemini-prompts uten Etsy-selger-kontekst og pain-point
