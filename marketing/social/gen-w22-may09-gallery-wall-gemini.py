"""W22-P04 Gemini gen — 2026-05-09
Pin: Gallery Wall Size Guide — saveable reference card.
Every frame size sellers need. High save-rate, reaches buyers too.

CRITICAL FACTS (never deviate):
- SnapToSize: $11.99/mo or $97/year ($8.08/mo)
- 1 upload → up to 70 files, 5 ratio packs, 28 sizes, 300 DPI
- Sizes shown all real: 24×36, 20×30, 18×24, 16×20, 12×18, 11×14, 8×12, 8×10, 5×7
"""
import os, pathlib
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv(pathlib.Path(__file__).resolve().parents[2] / ".env.local")

API_KEY = os.environ.get("GOOGLE_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_API_KEY ikke satt i .env.local")

client = genai.Client(api_key=API_KEY)
MODEL = "gemini-3-pro-image-preview"
BASE = pathlib.Path(__file__).parent
SLUG = "2026-05-09-gallery-wall-sizes-pinterest"

PROMPT = """A premium saveable reference Pinterest pin in tall 2:3 portrait orientation, 1000×1500 canvas. Dark editorial background (#0B0B12). Magazine-quality infographic poster that people bookmark. NO photos of real walls — this is a FLAT GRAPHIC DESIGN with clean geometric shapes.

TOP 13%:
  Small teal uppercase letter-spaced label (13pt): "ETSY WALL ART — SIZE REFERENCE"
  Bold white headline (76pt condensed): "Gallery Wall"
  Bold teal headline (#2DD4BF, 76pt condensed italic): "Size Guide"
  Thin teal hairline divider 65% width below.

CENTER 62% — FLAT FRAME GRID ILLUSTRATION:
  9 clean rectangular outlines arranged in a 3×3 gallery wall grid.
  Each frame: 2px stroke, slightly rounded corners (4px), dark fill (#111118).
  Teal frames for the 3 most important sizes, white/grey stroke for the rest.
  Between frames: 12px gap.

  Frame contents — each shows:
    SIZE in white bold text (center of frame, 22–28pt depending on frame size)
    Category label below size in grey (10pt)

  Grid arrangement (left to right, top to bottom):

  FRAME 1 (large, top-left): "24×36 in" — grey label: "large statement"
  FRAME 2 (large, top-center): "20×30 in" — grey label: "living room hero"
  FRAME 3 (medium, top-right): "18×24 in" — grey label: "feature piece"

  FRAME 4 (medium, mid-left): "16×20 in" — grey label: "mid gallery" — TEAL STROKE
  FRAME 5 (medium, center): "11×14 in" — grey label: "#1 bestseller" — TEAL STROKE — add small teal star badge top-right corner of this frame
  FRAME 6 (medium, mid-right): "12×18 in" — grey label: "portrait accent"

  FRAME 7 (small, bottom-left): "8×10 in" — grey label: "classic frame" — TEAL STROKE
  FRAME 8 (small, bottom-center): "5×7 in" — grey label: "small accent"
  FRAME 9 (small, bottom-right): "8×12 in" — grey label: "photo ratio"

  Below the grid, centered teal badge (small pill, 13pt):
    "All 9 sizes · 300 DPI · Etsy-ready ZIP"

STATS ROW 8% (between grid and solution block):
  Three stat pills in a row, horizontally centered, dark fill, teal border:
  Label text only — no square brackets:
  "Most-searched sizes"   |   "300 DPI each"   |   "portrait & landscape"

SOLUTION BLOCK 11%:
  Dark rounded card (#1A1A2E), teal 4px left-border, 16px padding:
  White text (20pt bold): "Generate all 9 sizes from 1 artwork upload."
  Teal text (16pt): "5 ratio packs · 70 files · no Photoshop"
  Grey caption (12pt): "SnapToSize — Etsy-ready in 60 seconds"

FOOTER 6%:
  Centered: teal checkmark + white semi-bold "snaptosize.com" (16pt)
  Tiny grey: "app.snaptosize.com · free to start"

STRICT VISUAL RULES:
- This is a FLAT GRAPHIC DESIGN — no photos of walls, no room photography
- All 9 frame rectangles must be clearly visible with their size labels readable
- Frame text ("24×36 in", "11×14 in" etc) must be perfectly legible English, no warped glyphs
- Teal (#2DD4BF) highlight on frames 4, 5, 7 only — rest use grey/white stroke
- Background strictly #0B0B12
- No human figures, no decorative art inside frames (blank frames only)
- High contrast, reads well at Pinterest thumbnail (small preview)
- Clean geometric aesthetic — Swiss-style infographic design
"""

FALLBACK_PROMPT = """Tall 2:3 Pinterest pin, dark #0B0B12 background. Header: "Gallery Wall" (white bold) + "Size Guide" (teal #2DD4BF italic). Center: flat graphic design showing 9 blank rectangular frames arranged in a 3×3 grid. Each frame shows its size in white bold text: top row "24×36 in", "20×30 in", "18×24 in"; middle row "16×20 in", "11×14 in", "12×18 in" (middle row frames have teal stroke); bottom row "8×10 in", "5×7 in", "8×12 in". Below grid: teal badge "300 DPI · Etsy-ready ZIP". Stats row: "9 standard sizes", "300 DPI each", "portrait & landscape". Bottom card: "Generate all 9 sizes from 1 artwork upload. 5 ratio packs · 70 files · no Photoshop" and "SnapToSize". Footer: snaptosize.com. Clean flat graphic design, no photos, no people."""

PIN = {
    "id": "W22-P04",
    "out": BASE / f"content/pinterest/{SLUG}/{SLUG}.png",
}


def generate(prompt):
    print(f"Generating {PIN['id']} …")
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
            image_config=types.ImageConfig(aspect_ratio="2:3"),
        ),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data is not None:
            PIN["out"].parent.mkdir(parents=True, exist_ok=True)
            PIN["out"].write_bytes(part.inline_data.data)
            print(f"  Saved: {PIN['out']}")
            return True
    print("  WARN: ingen bilde i respons")
    return False


if __name__ == "__main__":
    ok = generate(PROMPT)
    if not ok:
        print("Prøver fallback …")
        generate(FALLBACK_PROMPT)
    print("Done.")
