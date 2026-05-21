"""W23 Day 10 — Gemini gen — 2026-05-21
G14: a4-blind-spot     — The A4 blind spot. Every EU/UK/AU buyer searches it. Most US sellers skip it.
G15: batch-workflow    — From 0 to 70 files. One upload. Here's how the batch works.
"""
import os, pathlib, io
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

PROJECT_ROOT = pathlib.Path(__file__).resolve().parents[2]
load_dotenv(PROJECT_ROOT / ".env.local")
API_KEY = os.environ.get("GOOGLE_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_API_KEY ikke satt i .env.local")

client = genai.Client(api_key=API_KEY)
MODEL = "gemini-3-pro-image-preview"
BASE = pathlib.Path(__file__).parent

PINS = [
    {
        "id": "W23-G14",
        "slug": "2026-05-21-a4-blind-spot-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal-navy background. The A4 blind spot — why US sellers lose international buyers every day. No human faces or brand logos.

BACKGROUND: Deep dark navy (#0D1117). Editorial, data-driven.

TOP HOOK (14%):
  Centered. Small amber monospace badge: "THE A4 BLIND SPOT"
  White ultra-bold headline (58pt, tight leading):
    "100 million buyers"
  Teal bold continuation (52pt): "search A4. You don't list it."
  Grey subtext (16pt): "UK. EU. Australia. All use ISO paper sizes — not US inches."
  Thin teal hairline divider.

WORLD MAP VISUAL (30%):
  Dark background. A simplified flat-world-map style illustration — continents as dark silhouettes.
  Highlighted in teal/glowing: Europe, United Kingdom, Australia, parts of Asia.
  Highlighted in amber/muted: North America (US/Canada).
  Floating labels on glowing regions:
    Europe: teal label "A4 — 297×210mm ✓"
    UK: teal label "A4 — 297×210mm ✓"
    Australia: teal label "A4 — 297×210mm ✓"
  On US region: amber label "8×10 inches"
  Teal caption below map: "Teal = ISO paper standard. Amber = US inch standard."

SIZE COMPARISON TABLE (30%):
  3 rows, dark card style, rounded:
  Row 1: Country flag emoji area "UK + EU" | "A4 (297×210mm)" | teal pill "ISO" | "Most-used home printer size"
  Row 2: Country flag emoji area "Australia + NZ" | "A4 (297×210mm)" | teal pill "ISO" | "Postal standard. Frame shops stock A4"
  Row 3: Country flag emoji area "Japan + Korea" | "A4 + B5" | teal pill "ISO" | "100M+ Etsy-active shoppers"
  Footer row: amber X "US sellers typically list:" | amber "8×12 · 16×24 · 24×36" | amber pill "2:3 only"

INSIGHT CARD (18%):
  Dark teal card (#081A18), 3px teal left border, rounded:
  Small teal label: "THE FIX"
  White bold (20pt): "SnapToSize includes A4, A3, A5 and A2 automatically — every upload."
  Grey (15pt): "ISO A-series is one of 5 packs. 300 DPI. Portrait and landscape. No extra steps."
  Teal pill: "Try free — app.snaptosize.com"

FOOTER: "snaptosize.com — free to start"

CRITICAL FACTS:
- ISO A-series: A5, A4, A3, A2, A1 — all included in every export
- 5 packs total: 2:3, 3:4, 4:5, ISO A-series, Extras
- URL: app.snaptosize.com

Style: Dark editorial. World map visualization. Amber for the gap, teal for the solution. Educational and eye-opening.""",
        "fallback": """Dark editorial Pinterest pin, 2:3, 1000x1500px. Dark navy #0D1117.

TOP: Amber badge "THE A4 BLIND SPOT". White bold "100 million buyers" + teal "search A4. You don't list it." + grey "UK. EU. Australia. All use ISO paper sizes — not US inches."

WORLD MAP: Dark continents, teal-highlighted: Europe, UK, Australia. Amber-highlighted: US.
Labels: Europe/UK/Australia = "A4 297x210mm ✓" (teal). US = "8x10 inches" (amber).

SIZE TABLE (3 rows):
UK + EU | A4 (297x210mm) | ISO | Most-used home printer size
Australia + NZ | A4 (297x210mm) | ISO | Postal standard. Frame shops stock A4
Japan + Korea | A4 + B5 | ISO | 100M+ Etsy-active shoppers
Footer: amber X "US sellers list: 8x12 / 16x24 / 24x36 — 2:3 only"

INSIGHT CARD: "SnapToSize includes A4, A3, A5 automatically — every upload." + "ISO A-series is one of 5 packs. 300 DPI." + teal CTA

Dark editorial, amber = gap, teal = fix.""",
    },
    {
        "id": "W23-G15",
        "slug": "2026-05-21-batch-workflow-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Clean cream editorial background. The SnapToSize batch workflow — from one file to 70 print-ready files. No human faces or brand logos.

BACKGROUND: Warm cream (#FAFAF7). Clean, editorial, professional.

TOP HOOK (12%):
  Dark pill badge: small teal monospace text "THE BATCH WORKFLOW"
  Large bold dark headline (58pt, #1A1A1A):
    "0 → 70 files."
  Teal italic bold continuation (52pt): "One upload. Here's how."
  Grey subtext (16pt): "The exact workflow SnapToSize runs every time."
  Teal hairline divider.

WORKFLOW TIMELINE (52%) — 5 steps as a vertical flow:

  Each step: large step number (grey, 72pt) + dark bold step title + grey description + teal accent.
  Connected by a teal vertical dotted line running through all steps.

  Step 1: "1" | Bold "Upload your artwork" | Grey "Drag in your PNG or JPG. Any resolution, any ratio." | teal badge "< 10 seconds"

  Step 2: "2" | Bold "SnapToSize reads your file" | Grey "Resolution check. Aspect ratio detected. DPI verified before export starts." | teal badge "Automatic"

  Step 3: "3" | Bold "5 packs generate simultaneously" | Grey "2:3 · 3:4 · 4:5 · ISO A-series · Extras — portrait and landscape." | teal badge "All ratios"

  Step 4: "4" | Bold "Smart ZIP compression" | Grey "Every file optimized to stay under Etsy's 20MB cap. 300 DPI preserved." | teal badge "Under 20MB"

  Step 5: "5" | Bold "Download your ZIP" | Grey "70 print-ready files. Named, sorted, organized. Ready to upload to Etsy." | teal badge "Done"

RESULT STRIP (20%):
  Dark card (#0F0F0F), rounded:
  Left side: teal "70 files" + grey "across 5 packs" | teal "300 DPI" + grey "always" | teal "< 5 min" + grey "total"
  Right: teal pill button "Try free — app.snaptosize.com"

FOOTER (8%): "snaptosize.com — free to start"

CRITICAL FACTS:
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- Up to 70 files per upload
- Under 20MB ZIP
- 300 DPI always
- URL: app.snaptosize.com

Style: Cream editorial. Clean 5-step vertical workflow. Teal accents. Feels like a product walkthrough infographic.""",
        "fallback": """Clean editorial Pinterest pin, 2:3, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill "THE BATCH WORKFLOW". Bold "0 to 70 files." + teal "One upload. Here's how." + grey "The exact workflow SnapToSize runs every time."

5-STEP VERTICAL WORKFLOW (teal dotted connector line):
Step 1: "Upload your artwork" — Drag in PNG/JPG. < 10 seconds
Step 2: "SnapToSize reads your file" — Resolution check, DPI verified. Automatic
Step 3: "5 packs generate simultaneously" — 2:3 / 3:4 / 4:5 / ISO / Extras — portrait + landscape. All ratios
Step 4: "Smart ZIP compression" — Under 20MB, 300 DPI preserved. Under 20MB
Step 5: "Download your ZIP" — 70 files, named, sorted. Done

RESULT STRIP (dark card): "70 files across 5 packs | 300 DPI always | < 5 min total" + teal "Try free — app.snaptosize.com"

Cream editorial, teal accents, clean workflow infographic.""",
    },
]


def generate(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"\nGenerating {pin['id']} -- {slug} ...")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=pin["prompt"],
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
                image_config=types.ImageConfig(aspect_ratio="2:3"),
            ),
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                out_path.parent.mkdir(parents=True, exist_ok=True)
                img = Image.open(io.BytesIO(part.inline_data.data))
                img = img.resize((1000, 1500), Image.LANCZOS)
                img.save(str(out_path), "PNG")
                print(f"  Saved: {out_path}")
                return True
        print("  WARN: ingen bilde i respons -- proever fallback")
        return False
    except Exception as e:
        print(f"  ERROR: {e} -- proever fallback")
        return False


def generate_fallback(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"  Fallback for {pin['id']} ...")
    response = client.models.generate_content(
        model=MODEL,
        contents=pin["fallback"],
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
            image_config=types.ImageConfig(aspect_ratio="2:3"),
        ),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data is not None:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            img = Image.open(io.BytesIO(part.inline_data.data))
            img = img.resize((1000, 1500), Image.LANCZOS)
            img.save(str(out_path), "PNG")
            print(f"  Saved (fallback): {out_path}")
            return True
    print(f"  WARN: fallback tom for {pin['id']}")
    return False


if __name__ == "__main__":
    for pin in PINS:
        ok = generate(pin)
        if not ok:
            generate_fallback(pin)
    print("\nDone.")
