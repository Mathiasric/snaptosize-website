# SnapToSize Marketing Site — Deploy Checklist

## Pre-Deploy Checks

### 1. Build Verification
- [x] `npm run build` completes successfully
- [x] All routes generate as static pages (14 total)
- [x] No TypeScript errors
- [x] Tailwind CSS compiles correctly

### 2. Content Audit
- [ ] Replace placeholder Terms of Service with actual legal copy
- [ ] Replace placeholder Privacy Policy with actual legal copy
- [ ] Verify pricing matches current Stripe prices ($11.99/mo, $97/yr)
- [ ] Verify free plan limits match backend (3 Quick, 1 Pack/day)
- [ ] Check support email (currently: support@snaptosize.com)

### 3. Links & CTAs
- [ ] Verify all "Start Free" CTAs point to `https://app.snaptosize.com`
- [ ] Test all internal navigation links
- [ ] Confirm mailto: link works (support@snaptosize.com)
- [ ] Verify Nordic Crafters Etsy link (if keeping)

### 4. SEO & Metadata
- [ ] Review page titles in browser tabs
- [ ] Test OpenGraph previews (Twitter, LinkedIn, Slack)
- [ ] Verify sitemap.xml generates correctly
- [ ] Verify robots.txt allows indexing
- [ ] Add Google Search Console property (after deploy)

### 5. Performance
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Check mobile layout on real device
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify font loading (Geist Sans/Mono)

### 6. Accessibility
- [ ] Tab through entire site (keyboard navigation)
- [ ] Test with screen reader
- [ ] Verify focus states visible
- [ ] Check color contrast (all text readable)

---

## Deploy Options

### Option A: Cloudflare Pages (Recommended)

**Why:** Already using Cloudflare for Worker/R2, consistent stack

**Steps:**
1. Connect GitHub repo to Cloudflare Pages
2. Set build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Root directory:** `app-next`
3. Set custom domain: `snaptosize.com`
4. Enable automatic deployments on `main` branch
5. Deploy!

**Environment Variables:** None needed

---

### Option B: Vercel (Alternative)

**Why:** Next.js native platform, excellent DX

**Steps:**
1. Import project from GitHub
2. Select `app-next` as root directory
3. Framework auto-detected (Next.js 16)
4. Deploy
5. Add custom domain: `snaptosize.com`

**Environment Variables:** None needed

---

### Option C: Static Export (Netlify, GitHub Pages, etc.)

**Why:** Maximum portability, works anywhere

**Steps:**
1. Update `next.config.ts`:
   ```ts
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   export default nextConfig;
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy `out/` folder to any static host

**Trade-off:** Loses dynamic features (not needed for this site)

---

## Post-Deploy Checks

### Immediate (within 1 hour)
- [ ] Site loads at `https://snaptosize.com`
- [ ] All routes accessible (test each page)
- [ ] CTAs redirect to `https://app.snaptosize.com`
- [ ] Mobile layout looks correct
- [ ] No console errors in browser

### Within 24 hours
- [ ] Submit sitemap to Google Search Console
- [ ] Test on multiple devices (phone, tablet, desktop)
- [ ] Check analytics integration (if added)
- [ ] Monitor Cloudflare/Vercel logs for errors

### Within 1 week
- [ ] Monitor conversion rate (clicks to app)
- [ ] Check SEO indexing status
- [ ] Gather user feedback
- [ ] A/B test different CTA copy if needed

---

## Domain Configuration

### Current Setup
- **Marketing:** `snaptosize.com` → (deploy here)
- **App:** `app.snaptosize.com` → (existing app, do not touch)

### DNS Records Needed
If using Cloudflare Pages:
```
snaptosize.com    CNAME    <project-name>.pages.dev
www.snaptosize.com CNAME   <project-name>.pages.dev (optional)
```

If using Vercel:
```
snaptosize.com    A        76.76.21.21 (Vercel IP)
```

**Critical:** Do NOT change `app.snaptosize.com` DNS records

---

## Rollback Plan

If something breaks:

1. **Immediate:** Revert Cloudflare Pages deployment to previous version
2. **Quick fix needed:** Use old HTML site temporarily:
   - Point `snaptosize.com` to `/index.html` (root of repo)
   - Gives time to debug
3. **Nuclear option:** DNS back to old hosting (if exists)

---

## Optional Enhancements (Post-Launch)

### Week 1-2
- [ ] Add Google Analytics or Plausible
- [ ] Set up uptime monitoring (UptimeRobot, BetterStack)
- [ ] Add actual OG images (generate with Vercel OG or Satori)
- [ ] Test conversion funnel end-to-end

### Month 1
- [ ] Gather user feedback on messaging
- [ ] Add testimonials if available
- [ ] Consider adding blog (/blog route)
- [ ] Experiment with pricing page variants

### Ongoing
- [ ] Monitor SEO rankings for "Etsy print sizes"
- [ ] Update when new features launch in app
- [ ] Keep pricing in sync with Stripe
- [ ] Refresh content quarterly

---

## Emergency Contacts

- **Domain/DNS:** Cloudflare dashboard
- **Hosting:** Cloudflare Pages / Vercel dashboard
- **Code:** GitHub repo (app-next folder)
- **Support:** support@snaptosize.com

---

**Built:** 2026-02-25
**Framework:** Next.js 16 + Tailwind v3
**Deploy-ready:** ✅
