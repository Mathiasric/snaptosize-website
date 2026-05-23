"""W23 Day 11 — Gemini gen — 2026-05-23
G16: my-packs       — Build your size set once. Apply it forever. (My Packs feature)
G17: 8x10-buyer     — The 8x10 blind spot. Most sellers don't stock it.
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
        "id": "W23-G16",
        "slug": "2026-05-23-my-packs-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Clean warm cream background. "My Packs" — the SnapToSize feature that lets Etsy sellers save their winning size set and reuse it on every new design in one click. No human faces or brand logos.

BACKGROUND: Warm cream (#FAFAF7). Clean, editorial, product-forward.

TOP HOOK (14%):
  Dark pill badge top-center: small teal monospace text "MY PACKS — NEW FEATURE"
  Large bold dark headline (60pt, #1A1A1A, tight tracking):
    "Build your size set once."
  Teal italic bold continuation (52pt, #2DD4BF): "Apply it forever."
  Grey subtext (16pt, #6B6B6B): "SnapToSize saves your winning size lineup — reuse on every upload."
  Teal hairline divider.

MAIN SECTION (58%) — 3 clear steps as a vertical product walkthrough:
  Connected by a teal vertical dotted line. Each step: large step number (grey, 56pt Playfair serif), bold step title (#1A1A1A, 26pt), grey description, teal badge.

  Step 1: "1" | Bold "Build your pack once" | Grey "Choose the sizes you always sell: 2:3, 4:5, ISO A-series. Name it 'Nordic Gallery Pack' or 'US Standard Set'." | Teal badge "One time only"

  Step 2: "2" | Bold "Upload any new design" | Grey "Drag in your PNG. SnapToSize reads the artwork — resolution check, DPI verified, aspect ratio detected." | Teal badge "< 10 seconds"

  Step 3: "3" | Bold "Click your pack. Download." | Grey "All saved sizes generate simultaneously — 300 DPI, correctly named, ZIP under Etsy's 20MB cap." | Teal badge "One click"

RESULTS STRIP (dark card #1A1A1A, teal left border, rounded corners):
  Bold white title: "Your saved pack, every time."
  3 teal stat pills side by side: "70 files" | "5 ratio packs" | "300 DPI always"
  Small grey subtext: "No rebuilding the same lineup. Ever."

FOOTER (cream, top border hairline):
  Dark rounded pill CTA right-aligned: "snaptosize.com" white bold on dark
  Grey caption left: "Pro: unlimited packs. Free: 1 saved pack."

Style: Cream editorial product walkthrough. Teal dotted connector line. Premium product feature announcement pin. Clean, minimal, no clutter.""",
        "fallback": """Clean editorial Pinterest pin, 2:3, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill badge "MY PACKS — NEW FEATURE". Bold dark "Build your size set once." + teal italic "Apply it forever." + grey "SnapToSize saves your winning size lineup."
Teal hairline divider.

3-STEP WORKFLOW (teal dotted vertical connector):
Step 1: grey "1" + bold "Build your pack once" + grey "Choose 2:3, 4:5, ISO A-series. Name it." + teal badge "One time only"
Step 2: grey "2" + bold "Upload any new design" + grey "PNG in. Resolution checked. DPI verified." + teal badge "< 10 seconds"
Step 3: grey "3" + bold "Click your pack. Download." + grey "300 DPI, named, ZIP ready." + teal badge "One click"

RESULTS: Dark card. White "Your saved pack, every time." Teal pills: "70 files | 5 ratio packs | 300 DPI always". Grey "No rebuilding the same lineup. Ever."

FOOTER: Dark pill "snaptosize.com". Grey "Pro: unlimited packs. Free: 1 saved pack."
Cream editorial. Teal accents. Product feature pin.""",
    },
    {
        "id": "W23-G17",
        "slug": "2026-05-23-8x10-buyer-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal background. "The 8x10 blind spot" — Etsy sellers who list only 2:3 ratios are invisible to the biggest frame-size buyers. No human faces or brand logos.

BACKGROUND: Deep dark charcoal (#0F0F0F). Editorial, data-driven, high contrast.

TOP HOOK (14%):
  Amber pill badge top-center: small monospace text "THE 8×10 BLIND SPOT"
  Large bold white headline (58pt, tight tracking):
    "8×10 is the #1 searched"
  White continuation (58pt): "frame size on Etsy."
  Amber italic subtext (18pt, #F59E0B): "Most sellers don't list it."
  Teal hairline divider.

MAIN SECTION (56%) — two-column split comparison:
  Thin grey vertical center divider.

  LEFT COLUMN header: amber uppercase text "MISSING IT"
  Dark grey listing card with amber accent:
    - Sizes shown: 4×6, 6×9, 8×12 only
    - Row for "8×10" crossed out in amber / greyed out
    - Small amber badge: "2:3 sellers only"
    - Caption amber bold: "Buyer searches 8×10 and leaves."

  RIGHT COLUMN header: teal uppercase text "COMPLETE"
  Bright dark listing card with teal accent:
    - 4:5 pack: 8×10 ✓  16×20 ✓  24×30 ✓  (teal checkmarks)
    - ISO pack: A4 ✓  A3 ✓  A2 ✓  (teal checkmarks)
    - Small teal badge: "5 packs included"
    - Caption teal bold: "Every buyer covered."

INSIGHT CARD (dark panel, teal left border, 2px):
  Bold white: "8×10 = 4:5 ratio."
  Grey body: "SnapToSize generates all 4:5 sizes automatically."
  Teal detail row: "2400×3000px · 300 DPI · named for Etsy"
  Teal pill badge right: "Included in every upload"

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "Upload once. Cover every buyer."

Style: Dark editorial data visual. Amber = problem/gap. Teal = solution/fix. Two-column comparison. High contrast, clean, no clutter.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Dark background #0F0F0F.

TOP: Amber pill "THE 8×10 BLIND SPOT". White bold "8×10 is the #1 searched frame size on Etsy." Amber italic "Most sellers don't list it." Teal divider.

TWO-COLUMN COMPARISON (thin grey divider):
LEFT "MISSING IT" (amber): Sizes 4×6, 6×9, 8×12. "8×10" crossed out amber. Badge "2:3 sellers only". "Buyer searches 8×10 and leaves."
RIGHT "COMPLETE" (teal): 8×10 ✓ 16×20 ✓ A4 ✓ A3 ✓. Badge "5 packs included". "Every buyer covered."

INSIGHT: Dark card, teal left border. White "8×10 = 4:5 ratio." Grey "SnapToSize generates all 4:5 sizes automatically." Teal "2400×3000px · 300 DPI · named for Etsy." Pill "Included in every upload."

FOOTER: Dark pill "snaptosize.com". Grey "Upload once. Cover every buyer."
Dark editorial. Amber = problem, teal = fix.""",
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
