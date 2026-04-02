---
name: marketing-visuals
description: Generate marketing visuals — social media images, campaign slides, launch graphics, promotional banners. Use when creating images for Instagram, Pinterest, Product Hunt, email headers, or any marketing campaign. Two methods available — React slides (pixel-perfect with real product images) or Gemini AI (fast, creative, standalone graphics).
---

# Marketing Visuals Generator

Create high-quality marketing images for social media, campaigns, and launches using two complementary methods.

## When to Use Which Method

| Method | Best For | Strengths | Limitations |
|--------|----------|-----------|-------------|
| **React Slides** | PH gallery, landing page screenshots, anything needing real product images | Pixel-perfect, uses design system, real Composition_Pictures | Requires dev server + Playwright |
| **Gemini AI** | Social posts, Pinterest pins, quick campaign graphics | Fast, creative, standalone | Can't use real product images, AI-generated look |

## Method 1: React Slide Screenshots

### How It Works
Build React components with fixed dimensions → serve via Next.js → screenshot with Playwright.

### Template

```tsx
// app-next/app/[campaign-name]/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Campaign] — SnapToSize",
  robots: { index: false, follow: false }, // Hidden from search
};

// Available artwork images:
// Koi: /assets/Composition_Pictures/Koi_{2x3,3x4,4x5,a2,common}_*.jpg
// Poppies: /assets/Composition_Pictures/poppies_orginal_2x3.jpg
//          /assets/Composition_Pictures/poppies_BAD_crop_*.png

function Slide({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="w-[1270px] h-[760px] relative overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0B0B12 0%, #110E1F 40%, #0F0D1A 100%)" }}
    >
      {children}
    </section>
  );
}

export default function CampaignPage() {
  return (
    <main className="bg-[#0B0B12]">
      <div className="flex flex-col items-center gap-16 py-16">
        <Slide id="slide-1">{/* Content */}</Slide>
      </div>
    </main>
  );
}
```

### Common Dimensions

| Format | Width | Height | Use Case |
|--------|-------|--------|----------|
| PH Gallery | 1270 | 760 | Product Hunt screenshots |
| OG Image | 1200 | 630 | Open Graph / social sharing |
| Instagram Post | 1080 | 1350 | IG feed (4:5) |
| Pinterest Pin | 1000 | 1500 | Pinterest (2:3) |
| Twitter/X | 1200 | 675 | Twitter card (16:9) |
| Email Header | 600 | 300 | Email banner |

### Screenshot Workflow

```bash
# 1. Start dev server (if not running)
cd app-next && npx next dev -p 3099 &
sleep 8

# 2. Screenshot all slides
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1270, height: 760 } });
  await page.goto('http://localhost:3099/[campaign-name]', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'nextjs-portal, [data-nextjs-dialog-root] { display: none !important; }' });
  await page.waitForTimeout(1000);

  const slides = ['slide-1', 'slide-2']; // match your slide IDs
  for (const id of slides) {
    const el = await page.locator('#' + id);
    await el.screenshot({ path: 'output/' + id + '.png' });
    console.log('Captured: ' + id);
  }
  await browser.close();
})();
"
```

### Design Rules (for thumbnail readability)

- **Headlines:** Minimum `text-4xl` (36px) — ideally `text-5xl` or `text-[4.5rem]`
- **Subtext:** Minimum `text-xl` (20px) — never smaller than `text-lg`
- **Badges/pills:** Minimum `text-lg` (18px)
- **Design for 300px width** — if text is invisible at thumbnail size, make it bigger
- **Remove elements that don't read at small sizes** — no tiny stat pills, no decorative fine lines
- **Background:** Always use dark gradient (`#0B0B12` → `#110E1F`) for brand consistency
- **Accents:** Purple `#7C3AED` / `#A78BFA` for primary, Teal `#2DD4BF` for conversion
- **No CTA buttons in screenshots** — nobody clicks inside an image

### Route Group Strategy

Place campaign pages **outside** `(marketing)` route group to avoid Header/Footer:
- `app-next/app/producthunt/page.tsx` — no nav/footer
- `app-next/app/(marketing)/about/page.tsx` — has nav/footer

### Thumbnail Verification

Always verify readability at target thumbnail size:

```python
from PIL import Image
img = Image.open('screenshot.png')
thumb = img.resize((300, 180), Image.LANCZOS)  # PH thumbnail size
thumb.save('thumbnail-check.png')
```

---

## Method 2: Gemini AI Image Generation

### How It Works
Use `gemini-generate-image` MCP tool with detailed prompts specifying layout, text, colors, and style.

### Prompt Template

```
[Format description]. Dark navy/purple background (#0B0B12 to #110E1F gradient).

[Top element]: [Badge, label, or logo placement]

[Headline]: Large bold white text: "[Main headline]" with [accent color] on key words.

[Subheadline]: "[Supporting text]" in lighter gray.

[Visual section]: [Describe the main visual — product mockup, comparison, grid, etc.]

[Stats/features]: "[Bullet points or stat row]"

[CTA section]: [Teal/green accent box with call-to-action]

[Footer]: "snaptosize.com" [+ logo if applicable]

Style: Premium SaaS, dark mode, purple and teal accents. Clean typography. No stock photo feel.
```

### Available Aspect Ratios
`1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`

### Platform-Specific Prompts

**Instagram Post (4:5):**
```
aspectRatio: "4:5"
imageSize: "2K"
style: "modern minimalist digital design"
```

**Pinterest Pin (2:3):**
```
aspectRatio: "2:3"
imageSize: "2K"
style: "modern minimalist digital design"
```

**Instagram/TikTok Story/Reel (9:16):**
```
aspectRatio: "9:16"
imageSize: "2K"
style: "modern minimalist digital design"
```

### Prompt Best Practices

1. **Be specific about layout** — describe top, middle, bottom sections
2. **Specify exact colors** — use hex codes (#0B0B12, #7C3AED, #2DD4BF)
3. **Describe text content** — Gemini renders text, so spell it out exactly
4. **Reference the product concept** — koi fish art prints at different ratios, fanned cards
5. **Include brand elements** — "snaptosize.com", dark mode, purple/teal accents
6. **Avoid:** Asking for real screenshots, complex UI mockups, or photo-realistic product shots

### Saving Generated Images

Gemini saves to `C:\Users\mathi\AppData\Roaming\gemini-mcp\output\*`. Copy to pipeline:

```bash
cp "C:/Users/mathi/AppData/Roaming/gemini-mcp/output/[session]/image-*.jpeg" \
   marketing/social/content/[platform]/[date]-[slug]/[post.jpg|pin.jpg]
```

---

## Pipeline Integration

After creating images, integrate with the social media pipeline:

### 1. Create content directory + metadata

```bash
mkdir -p marketing/social/content/[platform]/[date]-[slug]
# Copy image with descriptive name: [slug].jpg (e.g. 5-ratios-every-seller.jpg)
# Legacy names (pin.jpg, post.jpg) still work but descriptive names are preferred
# Create metadata.json (see templates below)
```

### 2. Metadata Templates

**Instagram:**
```json
{
  "platform": "instagram",
  "format": "image",
  "title": "[Post title]",
  "caption": "[Full caption with hashtags]",
  "link": "https://snaptosize.com/[page]?ref=[campaign]",
  "created": "YYYY-MM-DD",
  "r2_url": ""
}
```

**Pinterest:**
```json
{
  "platform": "pinterest",
  "format": "image",
  "title": "[Pin title — max 100 chars]",
  "description": "[Pin description — max 500 chars]",
  "link": "https://snaptosize.com/[page]?ref=[campaign]",
  "board": "[Board name]",
  "boardServiceId": "[Board ID]",
  "tags": ["tag1", "tag2"],
  "hashtags": [],
  "created": "YYYY-MM-DD",
  "r2_url": ""
}
```

### 3. Upload to R2 + Schedule via Buffer

```bash
# Upload
npx wrangler r2 object put snaptosize-social/content/[platform]/[date]-[slug]/[file] \
  --file marketing/social/content/[platform]/[date]-[slug]/[file] --remote

# Schedule (via pipeline)
python marketing/social/schedule-batch.py
```

---

## Pinterest Board Reference

| Board | ID | Best For |
|-------|----|----------|
| Print Size Guides | 1088463872381113663 | Educational, size guides |
| Seller Tools | 1088463872381113672 | Product announcements, tools |
| Digital Prints | 1088463872381113667 | Artwork showcase, ratio demos |
| Wall Art Business | 1088463872381113671 | Business tips, seller advice |

## SnapToSize Visual Assets

| Asset | Path | Use |
|-------|------|-----|
| Koi 2:3 | `/assets/Composition_Pictures/Koi_2x3_12x18.jpg` | Hero artwork, ratio demos |
| Koi 4:5 | `/assets/Composition_Pictures/Koi_4x5_15x20.jpg` | Featured size (8×10) |
| Koi 3:4 | `/assets/Composition_Pictures/Koi_3x4_18x24.jpg` | Secondary ratio |
| Koi ISO | `/assets/Composition_Pictures/Koi_a2.jpg` | ISO sizes demo |
| Koi Common | `/assets/Composition_Pictures/Koi_common_11x14.jpg` | Common sizes |
| Poppies original | `/assets/Composition_Pictures/poppies_orginal_2x3.jpg` | Before/after, variety |
| Poppies bad crop | `/assets/Composition_Pictures/poppies_BAD_crop_*.png` | Showing crop damage |
| Logo | `/assets/favicon/web-app-manifest-512x512.png` | Brand mark |
