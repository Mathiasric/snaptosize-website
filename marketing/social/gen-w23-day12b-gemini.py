"""W23 Day 12b — Gemini gen — 2026-05-24
G20: complete-listing — Same artwork. 5 packs. 70 files. What a complete listing looks like.
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
        "id": "W23-G20",
        "slug": "2026-05-24-complete-listing-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Near-black background. One artwork shown in 5 ratio packs — this is what a complete Etsy print listing looks like vs a basic one. No human faces or brand logos.

BACKGROUND: Near-black (#080808). Premium gallery aesthetic. Tight, editorial, high contrast.

TOP HOOK (11%):
  Small teal pill badge top-center: monospace "COMPLETE LISTING"
  Large bold white headline (58pt, tight letter-spacing):
    "Same artwork."
  Teal bold continuation same line or next line (56pt): "5 packs. 70 files."
  Grey subtext (15pt, #888): "What buyers can actually find. And what they can't."
  Thin teal hairline divider below hook.

MAIN VISUAL (62%) — 5 ratio panels in an editorial grid showing ONE abstract minimalist artwork (soft botanical or geometric muted tones — sage green, warm cream, soft terracotta — no text on the artwork itself) cropped and displayed in each ratio:

  PANEL GRID — arrange as: 2 panels top row, 2 panels middle row, 1 panel bottom row centered.
  Each panel: dark rounded rectangle frame (#1A1A1A), subtle colored top border, artwork inside cropped to that ratio, label below the panel.

  TOP ROW — 2 panels side by side (each ~44% width with gap):
    LEFT PANEL — 2:3 ratio (tall and narrow portrait):
      Teal top border (2px).
      Artwork cropped tall 2:3 inside dark frame.
      Below frame: teal badge "2:3" + white bold small "US Portrait" + grey tiny "4×6 · 8×12 · 12×18 · 20×30"

    RIGHT PANEL — 3:4 ratio (slightly wider):
      Purple top border (2px).
      Artwork cropped 3:4 inside dark frame.
      Below frame: purple badge "3:4" + white bold small "Gallery Standard" + grey tiny "6×8 · 9×12 · 12×16 · 18×24"

  MIDDLE ROW — 2 panels side by side:
    LEFT PANEL — 4:5 ratio (near-square portrait, widest US print):
      Amber/gold top border (2px).
      Artwork cropped 4:5 inside dark frame.
      Below frame: amber badge "4:5" + white bold small "#1 Searched" + grey tiny "8×10 · 16×20 · 24×30"

    RIGHT PANEL — ISO A-series ratio (~1:√2, A4 proportions):
      Blue top border (2px).
      Artwork cropped ISO ratio inside dark frame.
      Below frame: blue badge "ISO" + white bold small "EU · UK · AU" + grey tiny "A4 · A3 · A5 · A2"

  BOTTOM ROW — 1 panel centered (wider, ~60% width):
    BOTTOM PANEL — Extras (square/mixed):
      Emerald/green top border (2px).
      Artwork cropped square inside dark frame (5:5 crop).
      Below frame: green badge "Extras" + white bold small "Square · Oddball" + grey tiny "5×5 · 5×7 · 11×14 · 18×24"

  All 5 panels are the SAME artwork image, just cropped differently — making it visually obvious that one design covers all buyers.

STATS STRIP (dark card #111, teal left border 3px, rounded, below the grid):
  Bold white: "One upload covers all 5 packs."
  Three teal stat pills side by side: "70 files" | "300 DPI" | "Under 20MB"
  Grey tiny: "SnapToSize generates every pack simultaneously — app.snaptosize.com"

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold on dark
  Grey caption left: "Upload once. Reach every buyer."

Style: Near-black premium editorial. Multi-ratio gallery grid. Teal, purple, amber, blue, green color-coded per pack. Each panel is the same artwork cropped differently — visually proves the point. Clean, minimal, no clutter. Gallery wall energy.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Near-black background #080808.

TOP: Teal pill "COMPLETE LISTING". White bold "Same artwork." + teal "5 packs. 70 files." Grey "What buyers can actually find. And what they can't." Teal hairline.

5 RATIO PANELS GRID (same botanical artwork, cropped differently each panel):
2 TOP: Left "2:3" teal border — artwork tall narrow — "US Portrait · 4×6 · 8×12 · 12×18". Right "3:4" purple border — artwork 3:4 — "Gallery Standard · 6×8 · 9×12 · 12×16".
2 MIDDLE: Left "4:5" amber border — artwork near-square — "#1 Searched · 8×10 · 16×20". Right "ISO" blue border — artwork A4 ratio — "EU·UK·AU · A4 · A3 · A5".
1 BOTTOM centered: "Extras" green border — artwork square crop — "Square · 5×7 · 11×14".

STATS: Dark card teal border. "One upload covers all 5 packs." Pills "70 files | 300 DPI | Under 20MB". "SnapToSize."

FOOTER: "snaptosize.com" dark pill. "Upload once. Reach every buyer."
Near-black editorial. Color-coded panels per pack. Same artwork, 5 crops.""",
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
