# SnapToSize Partner Program

## Overview
Affiliate/referral program for Etsy educators (YouTubers, course creators, bloggers) who recommend SnapToSize to their audience.

## Offer
- **25% commission for 12 months** on every Pro signup referred (monthly or yearly)
- **Free Pro access** for the partner (no watermark, unlimited exports for demos)
- **Branded referral link:** `snaptosize.com/ref/[partner-name]`

## How It Works
1. Educator applies via email → support@snaptosize.com
2. We create their `/ref/[name]` redirect + grant free Pro
3. They share the link in videos, courses, blog posts
4. Link redirects to `app.snaptosize.com?ref=[name]&source=partner_[name]`
5. PostHog tracks the `ref` and `source` UTM params via existing UTMPersistence
6. We pay commission monthly (30-day delay, $25 minimum payout)

## Target Partners
- YouTube educators teaching Etsy print-on-demand / digital downloads
- Course creators covering digital product setup for Etsy
- Blog writers in the Etsy seller niche
- Community leaders in Etsy seller Facebook/Discord groups

## Adding a New Partner
1. Edit `app-next/app/(marketing)/ref/[name]/page.tsx`
2. Add partner name to the `PARTNERS` array
3. Redeploy (Cloudflare Pages auto-deploys on push)
4. Grant free Pro in Stripe (manual for now)

## Current Partners
| Name | Channel | Status | Added |
|------|---------|--------|-------|
| test | (test link) | test | 2026-03-19 |

## Pages
- **Landing page:** [snaptosize.com/partners](https://snaptosize.com/partners)
- **Ref redirect:** `snaptosize.com/ref/[name]` → `app.snaptosize.com?ref=[name]&source=partner_[name]`

## What's NOT Built Yet (do when 3+ active partners)
- Stripe coupon codes per partner
- Automated commission tracking / dashboard
- Self-serve signup form
- Partner portal in webapp

## Commission Structure
- 25% of referred user's Pro subscription (monthly $11.99 or yearly $97)
- Paid for the first 12 months per referral
- Paid monthly via PayPal or bank transfer
- 30-day delay for refund window
- $25 minimum payout threshold
- No clawbacks on previously paid commission
