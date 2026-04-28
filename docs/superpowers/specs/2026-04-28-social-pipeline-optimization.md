# Social Pipeline Optimization Spec
**Date:** 2026-04-28  
**Status:** Approved for implementation

---

## Problem

Current Pinterest pin performance is highly uneven. Analytics reveal a 5-10x impression gap between content types:

- **Top performer:** "5 Ratio Packs Every Etsy Seller Needs" — explicit size listings, "Complete Guide" framing → 500–800 impressions
- **Underperformers:** Lifestyle/aspirational content, before-after without data → 50–150 impressions
- **Root cause:** Pinterest is a search engine. Pins with explicit size keywords (24×36, 8×10, A4 etc.) get indexed and discovered. Generic lifestyle content does not.

---

## Key Finding: Description Formula

Reverse-engineered from the #1 performing pin:

```
Line 1: [Value statement — what specific sizes/data this pin covers]
Line 2: [Explicit sizes listed — 24×36, 20×30, 18×24, 16×20, 12×16, 11×14, 8×12, 8×10 ...]
Line 3: [Etsy relevance — why these sizes matter for digital download sellers]
Line 4: [SnapToSize connection — 1 sentence max]
Line 5: [CTA — "Save this guide →" or "Try free → app.snaptosize.com"]
```

**Why it works:** Each explicit size is a search keyword. A description listing 8 specific print sizes gets indexed 8 times. Lifestyle descriptions get indexed once ("Etsy seller", "digital art").

---

## Changes to Make

### 1. Pinterest Title Formula
**Current:** Varied, no pattern  
**New rule:** Lead with "Complete Guide" OR "All [N] Sizes" framing when the pin contains size/ratio data.

Examples:
- "Complete Guide: Etsy Print Sizes for Wall Art Sellers"
- "All 28 Print Sizes for Your Etsy Digital Downloads"
- "Every Print Ratio Etsy Buyers Request (Full Size List)"

Non-data pins (lifestyle): Keep punchy benefit title. "One Upload → 70 Print-Ready Files"

### 2. Pinterest Description Formula (Universal)
Apply to ALL new pins, regardless of template type:

```
[Value statement with specifics]
[Explicit size list, comma-separated: 24×36, 20×30, 18×24, 16×20, 12×16, 11×14, 8×12, 8×10, 5×7, A4, A3, A2...]
[Etsy relevance sentence]
[SnapToSize = 1 sentence]
[CTA]
```

Target length: 150–300 characters (Pinterest shows ~150 before "more").

### 3. Instagram vs Pinterest Caption Distinction
These are different fields and should be treated differently:

**Pinterest (`description` field):**
- Keyword-dense, size-explicit, no hashtags
- Search-optimized: treat as SEO metadata
- Formula above applies

**Instagram (`caption` field):**
- First line = hook (visible in feed preview)
- Line breaks for readability
- Max 5 hashtags at end: #etsyseller #digitaldownloads #printsizes #wallart #etsydigital
- CTA: "Link in bio → snaptosize.com"
- Pain-aware framing acceptable here (Instagram is discovery, not search)

### 4. Content Mix Update
**Current:** 2 Gemini lifestyle + 2 React slides/day  
**New:** 1 Gemini lifestyle + 1 size-reference OR Gemini + 2 React slides/day

Rationale: The top-performing pin is a React template (NeonPackShowcase with explicit packs). Reduce lifestyle-only content; increase size-reference content. Do NOT add a new Gemini "size-reference" prompt category yet — no image evidence it outperforms lifestyle Gemini.

Pain/before-after content: Keep but reduce to max 1 per 3-day window. Not banned.

### 5. Board Assignment Rules
| Content type | Board |
|---|---|
| Size charts, ratio guides, pack overviews | "Print Size Guides" |
| Workflow / seller tips / tool demos | "Etsy Seller Tools" |
| Lifestyle / aspirational seller content | "Seller Tools" |

### 6. Expanded Tags Guidance
Always include at least 2 size-specific tags when the pin contains size data:
- `etsy print sizes`, `print size guide`, `digital download sizes`
- `wall art sizes`, `etsy wall art`, `printable sizes`
- Specific sizes: `8x10 print`, `A4 print`, `24x36 poster`

---

## What Changes (Files)

| File | Change |
|---|---|
| `.claude/skills/pipeline-orchestrator_SKILL.md` | Add title formula, description formula, board rules, Instagram/Pinterest distinction, content mix update |
| `marketing/social/GEMINI_PROMPT_LIBRARY.md` | Add METADATA-BESKRIVELSE section at top with formula + title pattern |

**No new files, no new systems, no code changes.**

---

## Out of Scope

- Do NOT switch image generation tools (Gemini stays)
- Do NOT add new Gemini prompt categories without image performance data
- Do NOT upgrade Pinterest API to Standard (weeks-long review, not worth it)
- Do NOT ban pain/before-after content — reduce frequency only

---

## Success Criteria

- All new pins have description following the 5-line formula
- Pinterest vs Instagram fields are clearly separated in metadata.json files
- Size-explicit pins are default for at least 2 of 3 daily Pinterest pins
- Pain/before-after content drops to max 1 per 3-day window
