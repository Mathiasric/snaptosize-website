# Tax / VAT / MVA — decisions & orientation

Internal **strategy/decisions** reference so we don't re-litigate this. **Not the system of
record** (that's Stripe Tax dashboard) and **not tax advice** (that's a regnskapsfører).
Last updated: 2026-06-19.

> Rule: don't build a parallel tax-tracking system (file/MCP/API). Stripe Tax = live truth,
> accountant = compliance. This doc is strategy only.

---

## Current status (Jun 2026)
- Stripe Tax is **on and monitoring**. ~25 lifetime Pro users.
- Stripe flagged "threshold exceeded" in **UK, Italy, Germany, India, Moldova** (1–6 tx each).
  This is the **digital-services zero-threshold** rule (foreign sellers of digital services
  are technically meant to register from the *first* consumer sale).
- **Not registered for VAT/GST anywhere yet. Norwegian MVA: likely under threshold.**

## Decisions (locked)
- **Pass VAT, don't absorb it.** When we register, the customer pays the VAT on top; our net
  ($11.99) is preserved. Big companies do this; EU consumers expect VAT-inclusive prices, so
  it doesn't scare them. Absorbing = eating ~20% margin = needing far more customers for $1M.
- **Grandfather existing users** when we start collecting (apply VAT-passing to new signups;
  cancel-then-resubscribe counts as new). Blast radius today = a handful of people.
- **Don't register the long tail.** Registering for 1 tx in Moldova is absurd overhead. Only
  add a Stripe "registration" *after* legally registering with that country's authority.
- **Escape hatch if it ever becomes a burden:** a **Merchant of Record (Paddle / Lemon
  Squeezy)** becomes the legal seller and handles ALL global VAT/GST — we never register or
  remit anywhere. ~5%+ fee vs Stripe ~3%, zero tax headache.
- **Not urgent at current scale.** Today = monitor only. Revisit at real volume / ~$100k.

## Facts to remember
- **VAT is destination-based** — owed in the *customer's* country, regardless of us being in
  Norway. No exemption for being Norwegian.
- **Taxed once. No double VAT.** A German sale → German VAT only; a Norwegian sale → MVA only.
- **VAT is the customer's tax we pass through — it's never our margin** (when passed).
- **Norwegian MVA threshold:** NOK 50,000 taxable turnover / 12 months, **per ENK (all
  activity combined)**, not per product. When crossed → must register → 25% MVA.
- **Income tax is separate** from VAT (Norwegian tax on profit, not per-country).

## What to do on the Stripe "Needs attention" screen (now)
1. **Do NOT click "Add registration"** for the 5 flagged countries. That's for *after* legal
   registration, and it's premature at 1–6 transactions.
2. **Finish only the monitoring config** (the "X/5 steps" wizard): confirm origin/business
   address + product tax category = **digital service / SaaS**. This makes Stripe's tracking
   accurate. If a step pushes you to *register*, skip it.
3. **Leave it monitoring.** Revisit registrations with a regnskapsfører when volume justifies,
   or move to a Merchant of Record.

## When to actually act
- Norwegian MVA: when the ENK's 12-month turnover nears **NOK 50k** → see an accountant.
- Foreign VAT (EU/UK): when international volume is material → either register the big ones
  (EU **OSS non-Union scheme** = one registration for all EU; UK VAT separately) **and pass
  the VAT**, or switch to a **Merchant of Record**.
