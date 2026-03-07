# SnapToSize Marketing Site — Complete Rebuild

**Dark premium conversion-focused marketing site built with Next.js 16 + Tailwind v3**

## ✅ What Was Built

### Routes Implemented
All routes are fully functional with SEO metadata, mobile-responsive, and accessible:

- **`/`** — Landing page (conversion-focused hero, pain/solution, how it works, pricing teaser, trust, FAQ preview, final CTA)
- **`/guide`** — User guide (quick start, Quick Export vs Packs, Etsy upload instructions, common mistakes, troubleshooting)
- **`/sizes`** — Print size reference (SEO magnet: ratio tables with pixel dimensions at 300 DPI)
- **`/pricing`** — Free vs Pro comparison (clear value props, pricing FAQs, who Pro is for)
- **`/faq`** — Comprehensive FAQ (product, pricing, technical, Etsy-specific questions)
- **`/privacy`** — Privacy Policy (placeholder with proper structure)
- **`/terms`** — Terms of Service (placeholder with proper structure)
- **`/sitemap.xml`** — Auto-generated sitemap
- **`/robots.txt`** — Auto-generated robots.txt

### Design System

**Dark premium theme matching app.snaptosize.com:**

```css
Colors:
--background: #0B0B12
--foreground: #E5E5E5
--accent: #7C3AED (purple)
--accent-light: #8B5CF6
--surface: #13111C
--border: #1E1B2E
--success: #22C55E
--error: #EF4444
```

**Typography:**
- Geist Sans (primary)
- Geist Mono (code blocks, tables)

**Components Built:**
- Container (max-width wrapper)
- Header (sticky nav with links + CTA)
- Footer (links, support, disclaimer)
- Button (primary gradient / secondary)
- Card (surface / accent variants)
- Badge (pills for labels)
- Accordion (expandable FAQ items)

### Tech Stack
- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v3** (stable, not v4 due to Turbopack compatibility)
- **Lucide React** (icons)
- **Geist fonts** (next/font)
- **TypeScript**

---

## 📂 File Tree Summary

```
app-next/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              ← Landing page (/)
│   │   ├── layout.tsx            ← Marketing wrapper (Header + Footer)
│   │   ├── guide/page.tsx        ← /guide
│   │   ├── sizes/page.tsx        ← /sizes
│   │   ├── pricing/page.tsx      ← /pricing
│   │   ├── faq/page.tsx          ← /faq
│   │   ├── privacy/page.tsx      ← /privacy
│   │   ├── terms/page.tsx        ← /terms
│   │   └── [old pages...]        ← Existing pages (etsy-image-resizer, etc.)
│   ├── layout.tsx                ← Root layout (fonts, metadata)
│   ├── globals.css               ← Tailwind + design tokens
│   ├── sitemap.ts                ← Auto-generated sitemap
│   └── robots.ts                 ← Auto-generated robots.txt
├── components/
│   ├── Container.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   └── Accordion.tsx
├── tailwind.config.js            ← Tailwind v3 config
├── postcss.config.mjs            ← PostCSS config
├── next.config.ts                ← Next.js config
├── tsconfig.json                 ← TypeScript config
└── package.json                  ← Dependencies
```

---

## 🔑 Key Files Changed/Added

### New Files
- `components/*.tsx` — 7 reusable components
- `app/(marketing)/page.tsx` — New dark-theme homepage
- `app/(marketing)/guide/page.tsx` — User guide
- `app/(marketing)/sizes/page.tsx` — Print size reference
- `app/(marketing)/pricing/page.tsx` — Pricing page
- `app/(marketing)/faq/page.tsx` — FAQ page
- `app/(marketing)/privacy/page.tsx` — Privacy policy
- `app/(marketing)/terms/page.tsx` — Terms of service
- `app/sitemap.ts` — Sitemap generator
- `app/robots.ts` — Robots.txt generator
- `tailwind.config.js` — Tailwind configuration

### Modified Files
- `app/layout.tsx` — Added Geist fonts
- `app/globals.css` — Complete rewrite with dark theme + Tailwind
- `app/(marketing)/layout.tsx` — Replaced with new Header/Footer
- `package.json` — Updated dependencies

### Backed Up
- `app/(marketing)/page.tsx.old` — Original light-theme homepage (backup)

---

## 🚀 Deploy Steps

### For Cloudflare Pages (Recommended)

1. **Build command:**
   ```bash
   npm run build
   ```

2. **Output directory:**
   ```
   .next
   ```

3. **Environment variables:**
   **None required** for the marketing site (static site, no backend calls)

4. **Domain setup:**
   - Point `snaptosize.com` to Cloudflare Pages deployment
   - Ensure `app.snaptosize.com` remains separate (existing app)

### For Vercel

1. **Import project** from GitHub
2. **Framework preset:** Next.js
3. **Root directory:** `app-next`
4. **Build command:** `npm run build`
5. **Output directory:** `.next`

### For Static Export (Alternative)

If you need pure static HTML:

1. **Update `next.config.ts`:**
   ```ts
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy `out/` folder** to any static host

---

## 🌐 Base URL Configuration

**Current base URLs:**
- Marketing: `https://snaptosize.com`
- App: `https://app.snaptosize.com`

All internal links use Next.js `<Link>` components.
All app CTAs use `<a href="https://app.snaptosize.com">` (external).

**To change base URLs:**
- Update `metadataBase` in `app/layout.tsx`
- Update `baseUrl` in `app/sitemap.ts`
- Update all `app.snaptosize.com` links in components/pages

---

## 🎨 Design Alignment Notes

**What matches the app:**
- Dark background (#0B0B12)
- Purple accent (#7C3AED)
- Card styling (rounded-xl, border-border, bg-surface)
- Gradient button (135deg purple gradient)
- Spacing rhythm (px-4, py-8, etc.)
- Typography hierarchy (Geist Sans/Mono)

**What's different:**
- No video component (per instructions)
- Marketing-focused layout (not app shell)
- More conversion-focused copy
- SEO-optimized structure

---

## 📝 Content Notes

### Pricing from PROJECT_STATE.md
- **Free:** 5 Quick Exports/day, 2 Packs/day, watermarked
- **Pro Monthly:** $11.99/month, unlimited, no watermark
- **Pro Yearly:** $97/year (save 33%)

### Technical Details Pulled from PROJECT_STATE.md
- 300 DPI JPEG output
- 20MB Etsy ZIP limit enforced
- Quality fallback chain: 80 → 76 → 72 → 68 → 64 → 60
- Stretch-only resize (no cropping)
- Auto-retry on failures (3 attempts)
- 5-minute stuck job detection
- Cloudflare R2 storage
- Stripe-backed billing

---

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Type check
npm run lint
```

---

## 📊 SEO Features

✅ **Metadata API:** Every page has title, description, OpenGraph
✅ **Sitemap:** Auto-generated at /sitemap.xml
✅ **Robots.txt:** Auto-generated at /robots.txt
✅ **Semantic HTML:** Proper heading hierarchy, ARIA labels
✅ **Mobile-first:** Responsive design with Tailwind breakpoints
✅ **Fast performance:** Static generation, minimal JS
✅ **Accessible:** Focus states, keyboard navigation, screen reader friendly

---

## 🎯 Conversion Architecture

**Funnel:**
1. **Landing (/)** → Educate + build trust
2. **Guide (/guide)** → Prove value + ease of use
3. **Sizes (/sizes)** → SEO authority + technical credibility
4. **Pricing (/pricing)** → Clear value prop + remove objections
5. **FAQ (/faq)** → Answer conversion blockers
6. **CTA → app.snaptosize.com** → Free trial start

**CTAs placed:**
- Header (persistent)
- Hero (above fold)
- Every major section
- End of every page
- Footer

---

## 🚨 Important Notes

### Do NOT Change
- Worker contract (no marketing site integration)
- App routes (app.snaptosize.com separate)
- Stripe integration (handled in app)
- PROJECT_STATE.md values (authoritative)

### Can Change
- Copy/content (test conversion messaging)
- Design tokens (as long as dark theme maintained)
- Component styling (keep accessibility)
- Add pages (blog, case studies, etc.)

---

## 🐛 Known Issues / Future Enhancements

1. **OG images:** Currently using placeholder metadata. Generate actual OG images with branding.
2. **Old pages:** `etsy-image-resizer` and `etsy-print-size-guide` still exist. Decide whether to:
   - Remove them
   - Redirect to `/guide` and `/sizes`
   - Keep as legacy SEO
3. **Analytics:** No analytics installed yet. Consider adding PostHog or Plausible.
4. **Terms/Privacy:** Placeholder content. Replace with actual legal copy.
5. **Testimonials:** Add social proof from real Etsy sellers if available.

---

## 📞 Support

For questions about this rebuild:
- **Technical:** Check this README
- **Design:** Reference components in `components/`
- **Content:** Based on PROJECT_STATE.md

Built with precision for conversion. Dark. Premium. Fast.
