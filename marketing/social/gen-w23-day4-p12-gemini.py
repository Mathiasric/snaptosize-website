"""W23 Day 4 — Gemini gen — 2026-05-15
P12: ratio-flat-lay — 5 ratio packs as printed artworks arranged on a clean desk
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
        "id": "W23-P12",
        "slug": "2026-05-15-ratio-flat-lay-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000×1500px. Clean Scandinavian flat-lay product photography aesthetic. No human faces.

BACKGROUND: Warm off-white linen surface (#F7F4EF), subtle natural texture. Soft directional light from upper left, casting gentle shadows. Studio quality.

TOP LABEL STRIP (10%):
  Off-white background with a centered small teal pill badge:
    Teal background (#2DD4BF), dark text: "1 UPLOAD → 5 RATIO PACKS"
  Directly below, large editorial headline in bold dark serif or heavy sans:
    Line 1 (dark #1A1A1A, 56pt): "Every ratio."
    Line 2 (teal #2DD4BF, 56pt italic): "One upload."

HERO FLAT-LAY (58%) — Five printed artworks arranged artfully on the linen surface:
  The SAME piece of botanical/floral wall art (detailed wildflower illustration, muted earthy tones — greens, ochres, dusty roses) printed at FIVE DIFFERENT ASPECT RATIOS. Each print is slightly overlapping the next, arranged in a gentle cascade or fan layout.

  Print 1 — 2:3 Portrait (tallest, on the left, slightly behind):
    Dimensions visible on print: crisp, professional quality.
    Small teal label card leaning against it: "2:3 · 7 sizes · Portrait Wall Art"

  Print 2 — 3:4 Standard (center-left, overlapping print 1):
    Slightly shorter and wider than print 1.
    Small teal label card: "3:4 · 5 sizes · Standard Frame"

  Print 3 — 4:5 Instagram (center, front):
    Noticeably squarish portrait shape.
    Small teal label card: "4:5 · 5 sizes · Instagram Print"

  Print 4 — A4/ISO (center-right, overlapping print 3):
    Tall European format, slightly taller than 2:3.
    Small label card in a softer teal: "A4/A3 · 5 sizes · International"

  Print 5 — 1:1 Square (rightmost, partially behind):
    Perfect square format, the smallest in the layout.
    Small teal label card: "1:1 · 5 sizes · Square Frame"

  All prints share the SAME botanical artwork — the difference in shape is the ONLY visual variable.
  Each print has a thin white border (like a real print), sharp edges, crisp ink quality.
  300 DPI notation stamped subtly on each print corner in tiny teal monospace text.

STAT ROW (10%):
  Three info pills on the linen surface, horizontal row:
    Pill 1 — dark background, teal text: "28 sizes"
    Pill 2 — dark background, white text: "5 ratio packs"
    Pill 3 — dark background, teal text: "300 DPI"

SOLUTION STRIP (14%):
  Dark card (#0F0F0F), rounded corners, full width.
  White headline (26pt bold): "One file. ZIP delivered. Etsy-ready."
  Grey subtext (16pt): "2:3 · 3:4 · 4:5 · A4/A3 · 1:1 · every size your buyers need"
  Teal rounded pill right side: "Try free →"

FOOTER (8%):
  Linen background. Centered teal monospace small text:
  Teal checkmark icon + "snaptosize.com" in dark bold.
  Grey right-side text: "app.snaptosize.com · free to start"

CRITICAL FACTS (render exactly — never alter):
- Total unique sizes in packs: 28
- Pack count: 5 (2:3, 3:4, 4:5, ISO A-series, 1:1/Extras)
- DPI: 300 DPI on every output
- URL: app.snaptosize.com
- All prints are THE SAME artwork at different ratios — not different artworks
- NEVER depict SnapToSize outputting 72 DPI or pixelated prints

Style: Scandinavian editorial flat-lay. Light, airy, product photography. Think Kinfolk magazine meets SaaS product launch. Warm natural tones. Every print is crisp and gallery-quality.""",
        "fallback": """Editorial Pinterest pin, 2:3 portrait, 1000×1500px. Clean flat-lay product photo on warm linen surface.

TOP: Teal badge "1 UPLOAD → 5 RATIO PACKS". Bold headline: "Every ratio." + teal italic "One upload."

HERO: Five printed versions of the SAME botanical artwork arranged as a fan/cascade on the linen:
- Tall 2:3 portrait print with label "2:3 · 7 sizes"
- 3:4 standard with label "3:4 · 5 sizes"
- 4:5 squarish with label "4:5 · 5 sizes"
- A4 tall European with label "A4/A3 · 5 sizes"
- 1:1 square with label "1:1 · 5 sizes"
All prints are crisp, 300 DPI quality, same artwork different shapes.

STAT PILLS: "28 sizes" · "5 ratio packs" · "300 DPI"

DARK CARD: "One file. ZIP delivered. Etsy-ready." + "2:3 · 3:4 · 4:5 · A4/A3 · 1:1" + teal "Try free →"

FOOTER: snaptosize.com · app.snaptosize.com · free to start

Clean, light, Scandinavian editorial aesthetic. Warm linen tones.""",
    },
]


def generate(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"\nGenerating {pin['id']} — {slug} ...")
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
        print("  WARN: ingen bilde i respons — prøver fallback")
        return False
    except Exception as e:
        print(f"  ERROR: {e} — prøver fallback")
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
