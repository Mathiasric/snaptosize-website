"""W23 Day 12 — Gemini gen — 2026-05-24
G18: 300dpi-test      — Why your print looks blurry on arrival. 72 vs 300 DPI explained.
G19: quick-export-dm  — Buyer DM'd asking for 5x7. Here's how to fix it in 8 seconds.
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
        "id": "W23-G18",
        "slug": "2026-05-24-300dpi-test-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal background. "Why your print looks blurry" — the 300 DPI problem every Etsy print seller faces. No human faces or brand logos.

BACKGROUND: Deep dark charcoal (#0F0F0F). Editorial, data-driven, high contrast.

TOP HOOK (13%):
  Red/crimson pill badge top-center: small monospace text "WHY YOUR PRINT LOOKS BLURRY"
  Large bold white headline (56pt, tight tracking):
    "Your file is fine."
  White continuation (52pt): "Your DPI isn't."
  Grey italic subtext (17pt): "The #1 reason Etsy print buyers leave 1-star reviews."
  Teal hairline divider.

MAIN SECTION (60%) — split visual comparison, two print panels side by side:

  LEFT PANEL — "72 DPI" (red accent, problem):
    Dark panel with red top border.
    Header: red uppercase "72 DPI · WEB QUALITY"
    Large visual: a pixelated, blurry rectangle (simulated low-res print) — visible chunky pixels, soft edges, clearly degraded.
    Below: red bold "576 × 720 px at 8×10″"
    Grey caption: "Looks fine on screen. Arrives blurry. 1-star review."
    Red badge bottom: "REJECTED AT PRINT"

  RIGHT PANEL — "300 DPI" (teal accent, solution):
    Dark panel with teal top border.
    Header: teal uppercase "300 DPI · PRINT QUALITY"
    Large visual: a sharp, crisp rectangle — clean edges, high-detail, clearly sharp.
    Below: teal bold "2400 × 3000 px at 8×10″"
    Grey caption: "Sharp at any print size. Buyer gets exactly what they see."
    Teal badge bottom: "PRINT READY ✓"

  Thin grey center divider between panels.

INSIGHT CARD (dark panel, teal left border 2px, rounded):
  Bold white: "300 DPI = pixels per inch at print size."
  Grey body: "8×10 at 300 DPI = 2400×3000px. That's the minimum for a sharp print."
  Teal row: "SnapToSize always exports at 300 DPI — every size, every ratio."
  Teal pill badge: "Automatic · No guesswork"

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "Upload once. 300 DPI guaranteed."

Style: Dark editorial data visual. Red = problem/blurry. Teal = solution/sharp. Two-panel comparison. High contrast, clean.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Dark background #0F0F0F.

TOP: Red pill "WHY YOUR PRINT LOOKS BLURRY". White bold "Your file is fine. Your DPI isn't." Grey italic "#1 reason for 1-star Etsy print reviews." Teal divider.

TWO-PANEL COMPARISON:
LEFT "72 DPI · WEB QUALITY" (red border): Pixelated blurry rectangle. Red "576×720px at 8×10". "Looks fine on screen. Arrives blurry." Badge "REJECTED AT PRINT".
RIGHT "300 DPI · PRINT QUALITY" (teal border): Sharp crisp rectangle. Teal "2400×3000px at 8×10". "Sharp at any print size." Badge "PRINT READY ✓".

INSIGHT: Dark card, teal border. "300 DPI = pixels per inch at print size." "8×10 at 300 DPI = 2400×3000px." Teal "SnapToSize always exports at 300 DPI." Pill "Automatic · No guesswork."

FOOTER: "snaptosize.com" dark pill. "Upload once. 300 DPI guaranteed."
Dark editorial. Red = problem, teal = fix.""",
    },
    {
        "id": "W23-G19",
        "slug": "2026-05-24-quick-export-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Deep navy blue background. "A buyer just DM'd asking for 5x7" — the Quick Export use case: patch a missing size before the buyer leaves. No human faces or brand logos.

BACKGROUND: Deep navy (#0D1117). Editorial, urgent-but-solved, teal and amber accents.

TOP HOOK (14%):
  Amber pill badge top-center: small monospace text "QUICK EXPORT"
  Large bold white headline (56pt, tight tracking):
    "A buyer just asked"
  White continuation (52pt): "for 5×7."
  Teal italic subtext (18pt): "Here's how to fix it in 8 seconds."
  Teal hairline divider.

MAIN SECTION (56%) — a tight 4-step vertical flow showing the Quick Export workflow:

  Each step: step number (amber, 52pt Playfair serif) + dark bold step title (white, 24pt) + grey description + teal badge.
  Connected by a teal vertical dotted line.

  Step 1: "1" | White bold "Open SnapToSize" | Grey "Go to Quick Export. No full pack needed." | Amber badge "< 2 seconds"

  Step 2: "2" | White bold "Upload your artwork" | Grey "Drag in the same PNG you used for your listing." | Teal badge "Any resolution"

  Step 3: "3" | White bold "Select 5×7 (5:7 ratio)" | Grey "SnapToSize detects your ratio. One click to export." | Teal badge "One click"

  Step 4: "4" | White bold "Download. Update listing." | Grey "300 DPI, correctly named, Etsy-ready. Add it before the buyer refreshes." | Teal badge "8 seconds total"

RESULT STRIP (dark panel, teal left border, rounded):
  Bold white: "One missing size. Fixed before they leave."
  Grey body: "Quick Export = single size on demand. No full pack needed."
  Three teal stat pills: "300 DPI" | "Correctly named" | "Etsy-ready"
  Small grey: "SnapToSize Quick Export — app.snaptosize.com"

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "Patch any missing size in seconds."

Style: Deep navy editorial. Amber = urgency. Teal = solution/speed. Tight 4-step vertical workflow. Feels urgent but controlled — the seller wins every time.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Deep navy background #0D1117.

TOP: Amber pill "QUICK EXPORT". White bold "A buyer just asked for 5×7." Teal italic "Fix it in 8 seconds." Teal divider.

4-STEP VERTICAL WORKFLOW (teal dotted line, amber step numbers):
Step 1: amber "1" + white "Open SnapToSize" + grey "Go to Quick Export." + amber badge "< 2 seconds"
Step 2: amber "2" + white "Upload your artwork" + grey "Same PNG as your listing." + teal badge "Any resolution"
Step 3: amber "3" + white "Select 5×7 (5:7 ratio)" + grey "One click to export." + teal badge "One click"
Step 4: amber "4" + white "Download. Update listing." + grey "300 DPI, named, Etsy-ready." + teal badge "8 seconds total"

RESULT: Dark card, teal border. "One missing size. Fixed before they leave." Pills: "300 DPI | Correctly named | Etsy-ready". "SnapToSize Quick Export."

FOOTER: "snaptosize.com" dark pill. "Patch any missing size in seconds."
Deep navy. Amber = urgency, teal = solution.""",
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
