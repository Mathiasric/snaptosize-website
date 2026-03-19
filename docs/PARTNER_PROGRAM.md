# SnapToSize Partner Program

## Overview
Affiliate/referral program for Etsy educators (YouTubers, course creators, bloggers) who recommend SnapToSize to their audience.

## Offer
- **25% commission for 12 months** on every Pro signup referred (monthly or yearly)
- **Free Pro access** for the partner (no watermark, unlimited exports for demos)
- **Branded referral link:** `snaptosize.com/ref/[partner-name]`

## How It Works (Technical Flow)
1. Partner shares `snaptosize.com/ref/[name]`
2. Marketing site redirects to `app.snaptosize.com?ref=[name]&source=partner_[name]`
3. App's `PartnerRefCapture` component captures `ref` and `source` from URL
4. Stores in `localStorage` (persists across sessions for returning visitors)
5. Registers as PostHog super properties (`partner_ref`, `partner_source`) on all future events
6. Sets permanent PostHog person properties so the user is forever attributed to the partner
7. When user triggers `checkout_completed`, `partner_ref` is attached to the event

## Onboarding a New Partner (Step-by-Step)
1. Add their name to `PARTNERS` array in `app-next/app/(marketing)/ref/[name]/page.tsx`
2. `git push` to deploy (Cloudflare Pages auto-deploys)
3. Grant free Pro in Stripe manually (find/create customer, apply Pro subscription at $0)
4. Send them their link: `snaptosize.com/ref/their-name`
5. Track conversions: query PostHog for persons where `partner_ref = their-name`

### Tracking Conversions (Manual Process)
```bash
# Query PostHog for all users referred by a partner
curl -s "https://eu.posthog.com/api/projects/131652/persons/?properties=%5B%7B%22key%22%3A%22partner_ref%22%2C%22value%22%3A%22PARTNER_NAME%22%2C%22type%22%3A%22person%22%7D%5D" \
  -H "Authorization: Bearer $POSTHOG_PERSONAL_API_KEY"

# Query checkout events with partner attribution
curl -s "https://eu.posthog.com/api/projects/131652/events/?event=checkout_completed&properties=%5B%7B%22key%22%3A%22partner_ref%22%2C%22value%22%3A%22PARTNER_NAME%22%7D%5D" \
  -H "Authorization: Bearer $POSTHOG_PERSONAL_API_KEY"
```
Replace `PARTNER_NAME` with the partner's ref name. API key is in `app-next/.env.local`.

## Target Partners
- YouTube educators teaching Etsy print-on-demand / digital downloads
- Course creators covering digital product setup for Etsy
- Blog writers in the Etsy seller niche
- Community leaders in Etsy seller Facebook/Discord groups

## Current Partners
| Name | Channel | Status | Added |
|------|---------|--------|-------|
| (none yet) | — | — | — |

## Pages
- **Landing page:** [snaptosize.com/partners](https://snaptosize.com/partners)
- **Ref redirect:** `snaptosize.com/ref/[name]` → `app.snaptosize.com?ref=[name]&source=partner_[name]`

## Architecture
- **Marketing site:** `/partners` page + `/ref/[name]` redirect + UTMPersistence forwards `ref`/`source` to app links
- **App:** `PartnerRefCapture.tsx` captures params → localStorage + PostHog person/super properties
- **PostHog:** Project 131652 (EU), person properties `partner_ref` and `partner_source`
- **Tracking:** Manual — match PostHog person to Stripe customer by email
- **Commission payment:** Manual — PayPal or bank transfer monthly

## Commission Structure
- 25% of referred user's Pro subscription (monthly $11.99 or yearly $97)
- Paid for the first 12 months per referral
- Paid monthly via PayPal or bank transfer
- 30-day delay for refund window
- $25 minimum payout threshold
- No clawbacks on previously paid commission

## What's NOT Built Yet (do when 3+ active partners)
- Stripe coupon codes per partner
- Automated commission tracking / dashboard
- Self-serve signup form
- Partner portal in webapp
