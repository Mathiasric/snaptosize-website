# Homepage Credibility Roadmap

**Created:** 2026-05-01
**Goal:** Build credibility and a strong user base while maintaining "fullblown professional firma" positioning. Compete on dimensions where Photoshop/Canva are weak — Etsy specificity, security, indie-niche trust signals — without inflating numbers we don't have.

**Constraint:** 9 Pro users today. NordicCrafters Etsy shop has 5.0★ (10 reviews, 71 sales). Solo founder, but external positioning = professional company.

---

## Research summary

### Competitor patterns we should adopt
- **Pixelied** — G2/Capterra review badges in hero (clickable, third-party verified), aggregated rating ("4.6 from 2000+ users"), Refund Policy in footer
- **Marmalead** — long named testimonials with credibility markers ("multiple seven figure seller"), profile-picture collage, specific outcome promise ("7x Revenue Growth"), community brand language ("Marmapreneurs"), founder voice in copy

### Patterns we should NOT copy
- Pixelied's "Trusted by world's best brands" + logo-soup of brands they don't actually serve (false authority)
- Inflated user counts
- "Join 10,000+ sellers" when number is small

### Actual SnapToSize policy (from /terms)
- **Cancel anytime** via Stripe Customer Portal ✅ (already in trust strip)
- **No partial refunds** for unused subscription time
- **Refunds case-by-case for technical issues within 7 days** of purchase
- **No 30-day money-back guarantee** — do NOT claim this

### Time-savings claim research
Source signals:
- Reddit r/EtsySellers thread: sellers manually resize each image for each platform in Photopea, "takes [forever]"
- bulkmockup.com: "What used to take days now takes minutes"
- Instagram reels: "Doing it manually in Photoshop can take forever"
- Realistic ranges: 30–60 min per pack for manual Photoshop work without batch scripts; 1–3 hours for sellers who do multiple listings per session

**Defensible honest claims:**
- "30+ minutes to 8 seconds per pack" ← conservative
- "From an hour of manual work to seconds" ← median
- "Save hours every week on manual resizing" ← high-end, vague enough

User to choose final phrasing. Recommend: **"From 30+ minutes per pack to 8 seconds"** — specific, conservative, hard to dispute.

---

## Decisions made (settled)

| # | Decision | Reasoning |
|---|---|---|
| D1 | Skip 30-day money-back guarantee copy | Not in actual terms. Lean on "Cancel anytime" + "Try free, no credit card" instead |
| D2 | Lead magnet (Etsy size cheat sheet) → SKIP | Free tier (no credit card) is the lead magnet. New cheat sheet wouldn't convert |
| D3 | About-page voice = company "we", not founder "I" | User wants professional firma framing; solo-founder confessional undercuts that |
| D4 | NordicCrafters Etsy shop link → About-page only, NOT hero | Use 5.0★ rating as quality signal. Hide 71-sales count (small). Keeps homepage scale-neutral |
| D5 | Reddit/Facebook organic posting → SKIP | Per memory: high spam-flag risk, low ROI without large existing audience |

---

## Decisions made (settled, 2nd round)

| # | Decision | Reasoning |
|---|---|---|
| D6 | Hero claim = **"30+ Etsy print sizes in under 60 seconds. Manually in Photoshop: 1+ hour."** | Actual SnapToSize time is 30–60 sec (not 8). User's manual experience: 1+ hour for half the output. Defensible both sides. |
| D7 | Refund policy: **expand to 14-day money-back guarantee** | At $11.99 Pro, 1 extra signup ($71 LTV) covers 5–6 abuse cases. Industry uplift 10–30% on landing-page conversion. Keep "case-by-case" internal language to reject obvious abuse. |
| D8 | Pricing reference: Pro = **$11.99/month**, NOT $19. Update any docs that reference $19 | User confirmed correct price |
| D9 | Referral program: **DROP for now**. Revisit at 50+ Pro users | Best case 27 signups/year. 1–2 days dev. Abuse model requires Pro-payment trigger (not free signup). Opportunity cost too high at current scale. |
| D10 | NordicCrafters reference: **YES on About-page** (rating only, hide sales count) | About-page serves credibility + SEO + investor/hires use cases. 3h cost. |
| D11 | Pro-user testimonials: **defer to Sprint 2/3**. Prepare email template now | User wants to wait. Template-readiness lets us trigger fast when ready. |

---

## Sprint plan

### Sprint 1 — Hero + footer hardening (1–2 days, low effort, high impact)

| Task | What | File(s) | Effort |
|---|---|---|---|
| S1.1 | Add outcome-claim to hero subhead or as a small spec line | `HeroSection.tsx` | 30min |
| S1.2 | Replace "Used by Etsy sellers worldwide" with concrete proof: "Cancel anytime · No credit card · 5.0★ on the founder's Etsy shop" (or similar) | `HeroSection.tsx` | 30min |
| S1.3 | Add Refund Policy page (`/refund`) summarizing the 7-day technical refund + free-tier-first policy | New page + Footer link | 1h |
| S1.4 | Add Cookie Policy page (`/cookies`) — minimal, references PostHog + Clerk session cookies | New page + Footer link | 1h |
| S1.5 | Add Contact link in footer (mailto:support@snaptosize.com or similar) | `Footer.tsx` | 15min |
| S1.6 | Verify trust-strip rendering live on production (Cloudflare deploy from morning commit) | Manual QA | 15min |

**Why:** Sprint 1 is pure copy + 2 simple legal pages. No risk, all upside. Legal-page completeness is institutional trust signal.

### Sprint 2 — About-page + 1 case study (3–5 days, medium effort, high impact)

| Task | What | Effort |
|---|---|---|
| S2.1 | Create `/about` page with: mission, brief story (company voice), commitment to Etsy sellers, security/privacy section, founder section that mentions NordicCrafters subtly ("built and tested in working Etsy shops") | 3h |
| S2.2 | Email 3 most-active Pro users asking for 1-paragraph testimonial about specific time/money saved. Template: "What did you struggle with before SnapToSize, and what's different now?" | 1h + wait |
| S2.3 | Add 1 detailed named testimonial (with role/shop link if granted) to FounderStorySection | 30min |
| S2.4 | Add NordicCrafters star-rating reference on About-page only — "Built and tested in working Etsy shops (5.0★ on NordicCrafters)" | 15min |

**Why:** About-page = professional firma signal. One detailed Marmalead-style testimonial > five vague reviews.

### Sprint 3 — Activation programs (1–2 weeks)

| Task | What | Effort |
|---|---|---|
| S3.1 | Activate refer-a-friend: both parties get 1 month Pro free (or $5 off). Uses existing UTM persistence + partner system | 1–2 days dev |
| S3.2 | Add referral CTA in app dashboard + email to existing Pro users announcing program | 1 day |
| S3.3 | Build creator outreach list — 20 Etsy YouTubers + 10 print-on-demand bloggers. Pitch: "free Pro account + affiliate commission for honest review" | 1 day list-building |
| S3.4 | Send first wave outreach (10 creators) | 2h |

**Why:** Self-replicating user growth. Low cost, scales without paid ads. Etsy-niche creators have engaged audiences that match ICP exactly.

### Sprint 4 — Reviews infrastructure (rolling, 2–4 weeks)

| Task | What | Effort |
|---|---|---|
| S4.1 | After 5 happy Pro users → ask each to leave G2 + Capterra reviews. Embed badges on homepage once 5+ collected | 2h ask + 4–6 wks wait |
| S4.2 | Add Trustpilot embed (low-friction reviews — easier to get than G2/Capterra) | 1h setup |

**Why:** Third-party review badges = highest-trust social proof. Costs only outreach time, but compounds for years.

---

## Things explicitly NOT in scope

- **30-day money-back guarantee** — not in our actual policy. Don't add unless terms change first.
- **"Trusted by 4000+ sellers"-style copy** — false at our current scale.
- **Generic email cheat-sheet lead magnet** — low conversion for this audience per user feedback.
- **Reddit/Facebook organic content** — high spam-flag risk, low ROI.
- **Founder-confessional About-page** — undercuts the "professional firma" positioning we want.
- **Pricing changes / discount tiers** — separate decision, not in this plan.

---

## Suggested next actions

1. **User to answer Q1–Q5** (5 minutes — picks the 5 open decisions)
2. **Claude executes Sprint 1** (1–2 days work, low risk, all on-page/footer changes)
3. **User drafts the Pro-user testimonial-request email** based on S2.2 template
4. **After Sprint 1 ships, decide on Sprint 2 timing** based on referral / about-page priorities

---

## Open questions for the user

1. **Time-savings claim** — what's the most realistic number for *your typical Etsy seller* (not Photoshop power user)? My guess: 30–60 min/pack. Confirm or correct.
2. **Refund policy** — should we expand the 7-day technical refund to a 14-day or 30-day general refund? Current policy is conservative; competitors typically offer 14–30 day money-back. This is a business decision, not just copy.
3. **Pro-user testimonials** — are you comfortable emailing your 9 Pro users now? Or would you rather wait? (Marmalead's playbook needs the testimonials before the rest of the plan compounds.)
4. **NordicCrafters** — comfortable linking publicly to your Etsy shop from the About-page? Tradeoff: gives proof but ties a personal brand to the company.
5. **Referral program** — what's the unit economics tolerance for offering both parties a reward? E.g., "Pay $5 to acquire a Pro user" vs "Give 1 month free" (no cash cost).
