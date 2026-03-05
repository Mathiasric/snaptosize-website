# Lead Capture Implementation

Implemented: 2026-03-05

## What Was Built

Lead capture system for marketing site (snaptosize.com) as specified in GROWTH_STATE.md §10.

### Files Created

1. **`app-next/app/api/subscribe/route.ts`** — Edge runtime API endpoint
   - Validates email address
   - Adds contact to Resend Audience
   - Sends welcome email with PDF link
   - Returns `{ success: true }` or error response

2. **`app-next/components/EmailCapture.tsx`** — Client component
   - Email input field
   - Submit button
   - Loading state (spinner)
   - Success state ("Check your inbox! PDF is on the way.")
   - Error state with error message
   - No `<form>` tag — uses onClick handler
   - Two variants: `default` and `compact`

### Files Modified

3. **`app-next/components/sections/HeroSection.tsx`**
   - Added EmailCapture component below primary CTAs
   - Variant: `compact`
   - Placement: Secondary CTA in hero section

4. **`app-next/app/(marketing)/etsy-print-sizes/page.tsx`**
   - Added EmailCapture component at bottom of page
   - Wrapped in accent Card with heading and description
   - Placement: After internal links, before closing Container

### Dependencies Added

- `resend` — npm package for Resend API integration

## Environment Variables Required

Add these to Cloudflare Pages (Production):

```
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=aud_...
```

## How It Works

1. User enters email → clicks button
2. POST to `/api/subscribe` with `{ email: "..." }`
3. API validates email format
4. API adds contact to Resend Audience (idempotent — existing contacts treated as success)
5. API sends welcome email with PDF download link
6. UI shows success message: "Check your inbox! PDF is on the way."

## Email Content

**From:** `SnapToSize <hello@snaptosize.com>`
**Subject:** "Your Free Etsy Print Size Cheat Sheet"
**Content:** HTML email with:
- Thanks message
- CTA button linking to PDF: `https://snaptosize.com/assets/etsy-print-size-cheat-sheet.pdf`
- Secondary CTA to app.snaptosize.com
- Footer with unsubscribe context

## What Is NOT Built (Per Instructions)

- Exit-intent popup (deferred to separate implementation)
- 3-email welcome sequence (configured in Resend UI separately)
- PDF file itself (must be uploaded to `/app-next/public/assets/etsy-print-size-cheat-sheet.pdf`)

## Next Steps

1. **Create PDF cheat sheet** — place at `/app-next/public/assets/etsy-print-size-cheat-sheet.pdf`
2. **Configure Resend environment variables** in Cloudflare Pages
3. **Set up email sequence** (Day 3 + Day 7 emails) in Resend dashboard
4. **Verify domain** `hello@snaptosize.com` in Resend (if not already done)
5. **Test in production** after deploy

## Testing Locally

```bash
cd app-next
export RESEND_API_KEY="re_..."
export RESEND_AUDIENCE_ID="aud_..."
npm run dev
```

Navigate to:
- `http://localhost:3000/` (hero section)
- `http://localhost:3000/etsy-print-sizes` (bottom CTA)

## Production Deploy

Build tested successfully ✓

Deploy to Cloudflare Pages as normal. Ensure environment variables are set.
