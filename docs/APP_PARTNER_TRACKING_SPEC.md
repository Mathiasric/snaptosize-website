# App-Side Partner Referral Tracking — Implementation Spec

## Context
SnapToSize has a partner program on the marketing site (snaptosize.com/partners).
Partners share referral links: `snaptosize.com/ref/[name]` which redirect to:
`app.snaptosize.com?ref=[name]&source=partner_[name]`

The marketing site forwards `ref` and `source` params via UTMPersistence.
**The app must capture these params and attach them to PostHog events so we can track which partner drove which paying customer.**

## What Exists Today
- PostHog is integrated in the app (project ID: 131652, EU region)
- PostHog auto-captures `$referrer` and `$referring_domain` but does NOT extract custom query params like `ref` or `source`
- Events already tracked: `checkout_started`, `checkout_completed`, `upgrade_clicked`, `subscription_updated`
- No `ref` or `source` property exists on any events or persons yet

## What Needs to Be Built

### 1. Capture `ref` and `source` from URL on app load

Find where PostHog is initialized in the app (likely a PostHogProvider or layout component).
Add logic that runs once on page load:

```typescript
// On app load, check URL for ref params
if (typeof window !== 'undefined') {
  const url = new URL(window.location.href);
  const ref = url.searchParams.get('ref');
  const source = url.searchParams.get('source');

  if (ref) {
    // Store in localStorage so it persists across sessions
    localStorage.setItem('partner_ref', ref);
    if (source) localStorage.setItem('partner_source', source);

    // Register as super properties (attached to ALL future events for this user)
    posthog.register({ partner_ref: ref, partner_source: source || '' });

    // Set as permanent person properties (survives resets)
    posthog.setPersonProperties({
      partner_ref: ref,
      partner_source: source || '',
      partner_ref_date: new Date().toISOString().split('T')[0],
    });
  } else {
    // Check localStorage for previously stored ref (returning visitor)
    const storedRef = localStorage.getItem('partner_ref');
    const storedSource = localStorage.getItem('partner_source');
    if (storedRef) {
      posthog.register({ partner_ref: storedRef, partner_source: storedSource || '' });
    }
  }
}
```

### 2. Verify ref flows through to conversion events

After implementing step 1, the `partner_ref` property will automatically appear on:
- `checkout_started`
- `checkout_completed`
- `subscription_updated`

Because `posthog.register()` attaches super properties to ALL subsequent events.

### 3. Clean the URL after capture (optional but nice)

After extracting `ref` and `source`, remove them from the URL bar so it looks clean:

```typescript
if (ref) {
  url.searchParams.delete('ref');
  url.searchParams.delete('source');
  window.history.replaceState({}, '', url.toString());
}
```

## PostHog API Access (for querying data)

The marketing site repo has the personal API key stored. For the app repo, add to `.env.local`:

```
POSTHOG_PERSONAL_API_KEY=YOUR_POSTHOG_PERSONAL_API_KEY
POSTHOG_PROJECT_ID=131652
```

Query partner conversions:
```bash
# All persons with a partner_ref
curl -s "https://eu.posthog.com/api/projects/131652/persons/?properties=%5B%7B%22key%22%3A%22partner_ref%22%2C%22value%22%3A%22is_set%22%2C%22operator%22%3A%22is_set%22%2C%22type%22%3A%22person%22%7D%5D" \
  -H "Authorization: Bearer YOUR_POSTHOG_PERSONAL_API_KEY"

# Checkout events with partner_ref
curl -s "https://eu.posthog.com/api/projects/131652/events/?event=checkout_completed&properties=%5B%7B%22key%22%3A%22partner_ref%22%2C%22value%22%3A%22is_set%22%2C%22operator%22%3A%22is_set%22%7D%5D" \
  -H "Authorization: Bearer YOUR_POSTHOG_PERSONAL_API_KEY"
```

## How to Query from NotebookLM

This spec is synced to the SnapToSize NotebookLM notebook. When working in the app repo:

```bash
# Get this spec from NotebookLM for context
PYTHONIOENCODING=utf-8 nlm notebook query 4853724d-ed87-4546-963a-e84665b869f5 "What are the partner tracking implementation steps for the app?"
```

## Files to Modify (in app.snaptosize.com repo)

1. **Find PostHog provider/init** — likely `app/providers.tsx` or `components/PostHogProvider.tsx`
2. **Add ref capture component** — create `components/PartnerRefCapture.tsx` or add to existing provider
3. **Add to `.env.local`** — PostHog personal API key (above)

## Verification

After implementing, test by visiting:
`app.snaptosize.com?ref=test&source=partner_test`

Then check PostHog:
1. Go to Persons → search for your session → verify `partner_ref: test` appears as a person property
2. Trigger a checkout → verify the `checkout_started` event has `partner_ref: test` attached

## Commission Tracking (manual for now)

1. In PostHog, filter Persons where `partner_ref` is set
2. Cross-reference with Stripe dashboard by email
3. Pay partner 25% of that customer's subscription for 12 months
4. Automate with Stripe Connect when we have 3+ active partners

## NotebookLM Notebook
- **ID:** 4853724d-ed87-4546-963a-e84665b869f5
- **Source title:** "Partner Tracking App Spec"
- Query it for context when starting work in the app repo
