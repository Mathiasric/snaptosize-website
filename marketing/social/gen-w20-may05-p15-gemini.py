"""W20 P15 Gemini gen — 2026-05-05
Pin: The Aspect Ratio Trap — why the same art looks different at every Etsy size
Editorial 3-ratio comparison + stat callout
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
SLUG = "2026-05-05-aspect-ratio-trap-pinterest"

PROMPT = """A premium editorial Pinterest pin in tall 2:3 portrait orientation. Magazine-quality layout — Kinfolk meets a clean tech editorial. Generous whitespace, refined modern serif headline, clean sans-serif body. Off-white background (#FAFAF7) with charcoal text and a single teal (#2DD4BF) accent.

TOP HEADLINE BLOCK (top fifth of pin):
Small label in teal uppercase letter-spaced caps: "THE ASPECT RATIO TRAP"
Large editorial headline below in elegant modern serif: "Same art. Three ratios. Three completely different prints."
A thin charcoal hairline divider beneath.

MIDDLE COMPARISON BLOCK (center 50% of pin):
Three vertical art panels side-by-side, each showing the EXACT SAME botanical illustration of a single eucalyptus stem rendered in delicate charcoal line work on cream paper. The illustration must be visually identical across all three panels — only the crop and frame proportions differ.

Panel 1 (left, 2:3 portrait): The full eucalyptus illustration fits cleanly within a thin black 2:3 portrait frame. Below the panel a tiny chip: "2:3 — 4×6, 8×12, 24×36"

Panel 2 (middle, 4:5 portrait): The SAME illustration, but the frame is 4:5 — slightly less tall — and the top and bottom of the eucalyptus stem are visibly cropped off. A small red ✗ icon next to the chip. Chip text: "4:5 — 8×10, 11×14, 16×20  · 73% of buyers"

Panel 3 (right, 1:1 square): The SAME illustration in a 1:1 square frame, with TOP, BOTTOM, AND SIDES cropped — only the middle of the stem visible. Red ✗ icon. Chip text: "1:1 — 8×8, 12×12, 20×20"

A thin teal underline beneath panel 2 to highlight it as the most-bought ratio.

LARGE STAT CALLOUT BLOCK (next eighth):
Centered in giant editorial serif numerals: "73%"
Below in smaller charcoal sans-serif: "of Etsy print buyers purchase 4:5 sizes — but most digital art is created in 2:3."

BOTTOM SOLUTION BLOCK (last fifth):
Small teal pill button: "SnapToSize"
Below: "Smart-crop preserves your focal point in every ratio."
Tiny footer: "snaptosize.com" with a subtle teal underline.

STRICT VISUAL RULES — must follow:
- All text on screen must be perfectly legible, real English, NO gibberish characters
- The botanical illustration must look IDENTICAL across all three panels — only crop differs
- Frames must be clean rectangles, no warped corners, no melted edges
- Generous whitespace between blocks — feels like a magazine spread, not cluttered infographic
- Photoreal printed-paper texture inside each frame, very subtle
- No people, no faces, no hands, no extra brand logos
- Composition must read clearly at Pinterest thumbnail size — clear vertical hierarchy
"""

FALLBACK_PROMPT = """Tall 2:3 Pinterest editorial pin on off-white background. Headline at top: "THE ASPECT RATIO TRAP — Same art. Three ratios. Three different prints." Below: three side-by-side panels showing the SAME eucalyptus line illustration in three different aspect ratio frames (2:3, 4:5, 1:1) — the 4:5 and 1:1 visibly crop the art. Red ✗ on the cropped ones, teal underline on 4:5 with note "73% of buyers". Below: huge editorial "73%" stat with caption "of Etsy buyers purchase 4:5 — most digital art is 2:3." Bottom: teal SnapToSize pill + "Smart-crop preserves your focal point in every ratio." Footer "snaptosize.com" with teal underline. Magazine-quality typography, no gibberish text, no warped frames, only real legible English."""

PIN = {
    "id": "W20-P15",
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
