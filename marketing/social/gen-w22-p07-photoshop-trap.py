"""Generate W22-P07: Photoshop-fella — split-screen Photoshop vs SnapToSize."""
import os, base64
from pathlib import Path
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / ".env.local")
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

PROMPT = """Clean split-screen marketing graphic, vertical portrait format, 2:3 ratio (1000×1500 canvas).
Dark premium background (#0B0B12) with subtle teal glow orbs in top-left and bottom-right corners.

TOP 10%: Bold editorial headline across full width, centered:
  Line 1 (white, large sans-serif, 96pt): "Never opened Photoshop?"
  Line 2 (teal #2DD4BF, italic, 96pt): "Never have to."

LEFT HALF (45% width, starts 12% from top):
  Panel tilted 2° clockwise, slightly desaturated, cold blue grading.
  Top red bar (#DC2626), white text: "$60/month · steep learning curve"
  Center: Realistic Photoshop desktop UI fragment — dark grey interface with
    Tools panel on left (lasso, magic wand, etc.), Layers panel on right showing
    8 stacked layers, Image Size dialog box OPEN with fields:
      "Resolution: 72 pixels/inch" (highlighted red)
      "Resample: Bicubic Automatic" (highlighted red)
      "Constrain Proportions" checkbox (uncertain hover state)
    3 yellow sticky notes stuck to screen edge:
      "what's bicubic??"
      "300 vs 72 DPI?"
      "aspect ratio — LOCKED or not??"
    Cursor hovering nervously over OK button.
  Bottom: Grey clock icon + text "1–3 hours per artwork"

RIGHT HALF (55% width, starts 12% from top):
  Panel upright, crisp, with teal glow border (2px #2DD4BF at 40% opacity).
  Top teal bar (#2DD4BF), white text: "$11.99/month · drag and drop"
  Small grey caption under bar: "or $97/year · save 33%"
  Center: SnapToSize app mockup — clean minimal UI, dark card background:
    Large drop-zone with dashed teal border, centered upload arrow icon:
      "Drop your artwork here" (white, 28pt)
    Below drop-zone, vertical pack list with teal checkmarks:
      ✓ 2:3 Ratio Pack
      ✓ 3:4 Ratio Pack
      ✓ 4:5 Ratio Pack
      ✓ ISO Pack (A-series)
      ✓ Extras Pack
    Thin divider, then small teal caption centered:
      "28 sizes in packs · up to 70 files with Quick Export"
    Solid teal button at bottom: "Resize All · 30 seconds"
  Bottom: Teal checkmark + "70 print-ready files · Etsy-ready · No Photoshop needed"

BOTTOM 7%: Centered teal rounded pill (border-radius 999px), white text:
  "app.snaptosize.com · Free to start"
  Subtle teal glow behind pill.

CRITICAL FACTS — render exactly, no changes:
- Left panel price: $60/month
- Right panel price: $11.99/month OR $97/year (save 33%)
- Pack count in list: exactly 5 packs (2:3, 3:4, 4:5, ISO, Extras)
- Caption: "28 sizes in packs · up to 70 files with Quick Export"
- Bottom CTA: "app.snaptosize.com · Free to start"

Style: Premium editorial SaaS ad. Graphic design aesthetic.
NO stock photo people. NO generic icons — real UI elements only.
NO invented size counts per pack beyond what is specified.
NO Etsy logos or orange colors.
Typography: Inter or similar modern sans-serif, bold for headlines, monospace for technical terms.
High contrast, sharp edges, teal accents only on right panel."""

OUT_DIR = Path("C:/dev/snaptosize-website/marketing/social/content/pinterest/2026-05-10-photoshop-trap-pinterest")
OUT_PNG = OUT_DIR / "2026-05-10-photoshop-trap-pinterest.png"
OUT_DIR.mkdir(parents=True, exist_ok=True)

print("Generating W22-P07 photoshop-trap...")
try:
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=PROMPT,
        config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"]),
    )
    saved = False
    for part in response.candidates[0].content.parts:
        if getattr(part, "inline_data", None) is not None:
            data = part.inline_data.data
            if isinstance(data, str):
                data = base64.b64decode(data)
            OUT_PNG.write_bytes(data)
            print(f"Saved: {OUT_PNG}")
            saved = True
            break
    if not saved:
        print("No image returned — text response:")
        for part in response.candidates[0].content.parts:
            if getattr(part, "text", None):
                print("TEXT:", part.text[:500])
except Exception as e:
    print(f"FAILED: {e}")
