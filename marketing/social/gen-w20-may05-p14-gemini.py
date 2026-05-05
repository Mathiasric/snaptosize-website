"""W20 P14 Gemini gen — 2026-05-05
Pin: Room-by-room print sizes that actually sell on Etsy
Strong photoreal Scandinavian editorial — 4 rooms, real frames, labeled sizes
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
SLUG = "2026-05-05-room-by-room-etsy-sizes-pinterest"

PROMPT = """A premium Pinterest editorial photograph in tall 2:3 portrait orientation, divided into FOUR clean horizontal sections stacked vertically. Each section is a real photoreal Scandinavian interior vignette with a single framed art print on the wall, captured in soft natural daylight. Magazine-quality interior photography — Kinfolk / Architectural Digest aesthetic. Muted neutral palette (warm whites, oat, sage, soft black). Each section is separated by a thin hairline divider and has a small clean label chip in the bottom-left corner.

SECTION 1 (top): A minimalist bedroom — linen-covered bed, a single 16×20 inch black-framed botanical line drawing centered above the headboard. Label chip: "16×20" · 4:5 · Bedroom".

SECTION 2: A bright living room corner with a low oak credenza, ceramic vase with dried branches, and a large 24×36 inch oversize abstract earth-tone print in a thin oak frame. Label chip: "24×36" · 2:3 · Living room".

SECTION 3: A soft nursery scene — pale cream wall, woven basket, knitted blanket draped on a chair, and a small 8×10 inch nursery animal illustration in a thin white frame. Label chip in teal accent: "8×10" · 4:5 · #1 best-seller on Etsy".

SECTION 4 (bottom): A gallery wall — three small frames in a tight cluster: a 5×7 inch quote print, an 8×10 inch line portrait, and an 11×14 inch botanical. Mix of black and oak frames. Label chip: "5×7 + 8×10 + 11×14 · Gallery wall".

Below the four sections, a clean 1-inch white footer band with small centered text: "29 print sizes from 1 design — snaptosize.com" in a refined modern sans-serif. A subtle teal (#2DD4BF) underline beneath "snaptosize.com".

STRICT VISUAL RULES — must follow:
- Photoreal interior photography only, NOT illustration, NOT 3D render
- Sharp focus on the framed art in every section
- Soft natural window light, gentle shadows, no harsh studio lighting
- Frames must look real (no warped corners, no melted edges)
- All text on screen must be perfectly legible, real English, NO gibberish letters
- Label chips are flat clean rectangles with crisp typography, NOT stylized
- No people, no faces, no hands
- No fake brand logos other than "snaptosize.com" in footer
- Composition must read clearly at Pinterest thumbnail size — high contrast between rooms
"""

FALLBACK_PROMPT = """A tall 2:3 Pinterest editorial photograph showing four Scandinavian interior room vignettes stacked vertically, each with one labeled framed art print: bedroom with 16×20, living room with 24×36 oversize, nursery with 8×10 (marked best-seller), and a small gallery wall (5×7 + 8×10 + 11×14). Magazine-quality photography, soft daylight, neutral palette. Clean label chips. Bottom footer: "29 print sizes from 1 design — snaptosize.com" with a subtle teal underline. No people, no warped frames, no gibberish text — only real legible English."""

PIN = {
    "id": "W20-P14",
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
    print(f"  WARN: ingen bilde i respons")
    return False


if __name__ == "__main__":
    ok = generate(PROMPT)
    if not ok:
        print("Prøver fallback …")
        generate(FALLBACK_PROMPT)
    print("Done.")
