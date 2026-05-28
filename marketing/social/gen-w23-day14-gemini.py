"""W23 Day 14 — Gemini gen — 2026-05-28
G23: eu-blind-spot     — EU buyers skip your listing. ISO sizes fix it.
G24: frame-fit-review  — 1-star: Print didn't fit my frame. Here's why.
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
        "id": "W23-G23",
        "slug": "2026-05-28-eu-blind-spot-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Deep navy-black background. The EU/UK/AU blind spot every US Etsy print seller has — they publish only inch-based sizes (4×6, 8×10) and lose all European buyers who need A4, A3, A5. No human faces or brand logos.

BACKGROUND: Very dark navy-black (#060910). Clean, editorial, high contrast. Subtle dark vignette at edges.

TOP HOOK (14%):
  Deep orange-amber pill badge top-center: monospace bold "MISSING 40% OF YOUR BUYERS"
  Large bold white headline (54pt, tight tracking):
    "EU buyers can't"
  Amber continuation same size: "buy your prints."
  Grey italic subtext (15pt, centered): "You're listing in inches. They shop in millimetres."
  Amber-to-teal hairline divider below.

MAIN SECTION (58%) — two stacked dark panels, each with a strong left border:

  TOP PANEL — THE PROBLEM (amber/orange left border 3px, bg #0E1018):
    Small amber badge top-right corner: "THE PROBLEM"
    VISUAL CENTER: Three stacked print size labels in bold white — "4×6"  "8×10"  "8×12" — each with a faint red 'not available' strikethrough line, arranged left side. Right side: three EU flag-colored size labels — "A4 (210×297mm)"  "A3 (297×420mm)"  "A5 (148×210mm)" — each with a grey question mark icon. A thin vertical separator line between the two columns.
    Bold white title below (20pt): "Your sizes. Not their sizes."
    Grey body (13pt): "UK, EU, and Australian buyers print to ISO standards — A4, A3, A5. When your listing has no ISO files, they can't use your art. They leave. Your listing never knew they were there."
    Three amber pills (small): "UK market" | "EU market" | "AU market"

  BOTTOM PANEL — THE FIX (teal left border 3px, bg #0E1018):
    Small teal badge top-right corner: "THE FIX"
    VISUAL CENTER: A clean grid of 5 ISO paper sizes stacked largest to smallest — A1, A2, A3, A4, A5 — each as a thin white rectangle outline proportional to actual paper ratio, with the size label inside in teal. Arranged in a neat descending staircase from left to right.
    Bold white title below (20pt): "ISO pack. One upload covers all of Europe."
    Grey body (13pt): "SnapToSize generates A5, A4, A3, A2, and A1 at 300 DPI — all pixel-perfect to ISO standards. EU buyers get exactly what their printers and frames expect. No conversions. No guessing."
    Three teal pills (small): "A5 · A4 · A3 · A2 · A1" | "300 DPI always" | "One upload"

INSIGHT ROW (very dark card #090C14, teal top border 1px):
  Bold white (16pt): "40%+ of Etsy's print market is outside the US."
  Teal (14pt): "One ISO pack. Zero missed buyers."

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold small
  Grey caption left: "One upload. Every market. Every frame."

Style: Dark navy editorial. Amber/orange = the missed opportunity. Teal = the fix. Clean staircase ISO grid visual in fix panel. High contrast, no clutter, every element purposeful.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Dark navy-black #060910.

TOP: Amber pill "MISSING 40% OF YOUR BUYERS". White bold "EU buyers can't" + amber "buy your prints." Grey italic "You're listing in inches. They shop in millimetres." Amber-to-teal divider.

TWO STACKED PANELS:
TOP PANEL "THE PROBLEM" (amber border): Left column: "4×6", "8×10", "8×12" with red strikethrough. Right column: "A4", "A3", "A5" with question marks. "Your sizes. Not their sizes." Body: UK, EU, AU buyers use ISO sizes. Amber pills: "UK market | EU market | AU market"
BOTTOM PANEL "THE FIX" (teal border): Staircase of 5 ISO rectangles A1→A5, each labeled in teal. "ISO pack. One upload covers all of Europe." Body: A5, A4, A3, A2, A1 at 300 DPI. Teal pills: "A5·A4·A3·A2·A1 | 300 DPI always | One upload"

INSIGHT ROW: Dark card. "40%+ of Etsy's print market is outside the US." Teal "One ISO pack. Zero missed buyers."
FOOTER: "snaptosize.com" pill. "One upload. Every market. Every frame."
Dark navy. Amber=problem, teal=fix.""",
    },
    {
        "id": "W23-G24",
        "slug": "2026-05-28-frame-fit-review-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Near-black background, high tension editorial. The 1-star Etsy review problem — sellers who manually resize artwork deliver wrong pixel proportions, buyer prints it, it doesn't fit their frame, they leave a 1-star review. No human faces or brand logos.

BACKGROUND: Near-black (#080808). Cinematic, editorial, tight contrast.

TOP HOOK (15%):
  Red pill badge top-center: monospace "1★ REVIEW INCOMING"
  REVIEW CARD (centered, rounded dark rectangle #141414, thin red border 1px):
    Gold star rating row: ★☆☆☆☆ (one gold star, four empty/grey stars)
    White italic review quote (16pt): "The print didn't fit my frame."
    Grey small: "— Verified Etsy buyer"
  Red hairline divider fading out.

MAIN SECTION (58%) — two dark panels stacked vertically:

  TOP PANEL — WHY THIS HAPPENS (red left border 3px, bg #111111):
    Small red badge top-right: "THE CAUSE"
    VISUAL CENTER: Two side-by-side frame mockups — simple thin-line rectangle outlines representing a standard picture frame. LEFT frame: inside it, an artwork rectangle that is SLIGHTLY TOO TALL (visibly taller than the frame opening, with small red overflow lines top and bottom showing it doesn't fit). Label below: red small "Manual resize: wrong ratio". RIGHT frame: inside it, same artwork rectangle that fits PERFECTLY flush inside the frame opening. Label below: grey small "Expected: exact fit". Thin separator between.
    Bold white title (20pt): "Manual resizing breaks the ratio."
    Grey body (13pt): "When you resize manually in Photoshop or Canva, rounding errors and crop guesses add up. Your 8×10 might deliver at 8×9.6. That's enough to misalign in a standard mat or frame — and enough for a buyer to notice and complain."
    Three red pills (small): "Wrong pixel ratio" | "Frame misalign" | "1-star risk"

  BOTTOM PANEL — THE FIX (teal left border 3px, bg #111111):
    Small teal badge top-right: "THE FIX"
    VISUAL CENTER: A clean precision crosshair or targeting reticle icon in teal, centered, with four small teal arrows pointing inward to a perfect rectangle in the center. Below the icon, two rows of text in white: "8×10 → 2400×3000px" and "A4 → 2480×3508px" — pixel-exact specs in monospace font, both with a teal checkmark to the left.
    Bold white title (20pt): "SnapToSize delivers pixel-perfect dimensions."
    Grey body (13pt): "Every size is calculated to the exact pixel — no rounding, no guessing. 300 DPI, correct aspect ratio, guaranteed to fit its frame. Your buyer prints it. It fits. No review needed."
    Three teal pills (small): "Exact pixels every time" | "300 DPI tested" | "Frame-guaranteed"

INSIGHT ROW (very dark card #0C0C0C, teal top border 1px):
  Bold white (15pt): "SnapToSize has zero crop-ratio errors. Every size is mathematically exact."
  Teal (13pt): "Your buyers notice. Make sure they're impressed."

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "Upload once. Perfect fit. Every time."

Style: Near-black cinematic editorial. Red = the review pain. Teal = the precision fix. Review card at top creates immediate emotional hook — seller recognition. Frame mockup comparison is the insight moment. Clean, high-contrast, no decoration for its own sake.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Near-black #080808.

TOP: Red pill "1★ REVIEW INCOMING". Dark review card with ★☆☆☆☆ stars, white italic "'The print didn't fit my frame.' — Verified Etsy buyer". Red divider.

TWO STACKED PANELS:
TOP PANEL "THE CAUSE" (red border): Two frame mockups side by side — LEFT: artwork overflowing frame (red overflow lines), label "Manual resize: wrong ratio". RIGHT: artwork fitting perfectly, label "Expected: exact fit". "Manual resizing breaks the ratio." Body: rounding errors in Photoshop/Canva cause 8×10 to deliver at 8×9.6 — enough to misalign. Pills: "Wrong pixel ratio | Frame misalign | 1-star risk"
BOTTOM PANEL "THE FIX" (teal border): Teal precision crosshair icon. Below: "8×10 → 2400×3000px" and "A4 → 2480×3508px" with teal checkmarks. "SnapToSize delivers pixel-perfect dimensions." Body: exact pixels, 300 DPI, correct ratio, guaranteed. Pills: "Exact pixels every time | 300 DPI tested | Frame-guaranteed"

INSIGHT ROW: Dark card. "SnapToSize has zero crop-ratio errors. Every size is mathematically exact." Teal "Your buyers notice."
FOOTER: "snaptosize.com" pill. "Upload once. Perfect fit. Every time."
Near-black. Red=review pain, teal=precision fix.""",
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
