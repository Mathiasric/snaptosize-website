"""Generate lifestyle image for /most-popular-etsy-print-sizes-to-sell page — room section."""
import os, base64
from pathlib import Path
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / ".env.local")
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

PROMPT = """Photorealistic interior lifestyle photograph, horizontal landscape format (16:9, 1600x900 canvas).
Magazine-quality photography. Warm natural afternoon light from the left.

A styled living room wall showing a curated gallery wall arrangement with 5 framed art prints in different sizes:
  - One small 5x7 frame (top left, thin black frame, white mat, simple abstract botanical line art)
  - One medium 8x10 frame (top center, thin black frame, white mat, matching botanical print)
  - One larger 11x14 frame (center, slightly dominant, same botanical print style)
  - One tall 16x20 frame (bottom left, prominent, matching art style)
  - One large 18x24 frame (bottom right, the statement piece, matches the series)

All frames are thin matte black, all have white mats, all contain the same botanical line art series scaled appropriately.
The wall is warm white/cream. Soft shadow behind each frame. Warm afternoon light, slightly golden.
A small side table in the bottom left corner with a white ceramic vase and eucalyptus stems.
Clean, minimal, Scandinavian-influenced interior. High-end decor magazine aesthetic.
No text, no labels, no overlays. Pure photorealistic lifestyle photography."""

out = Path("C:/dev/snaptosize-website/app-next/public/assets/most-popular-sizes-room.jpg")
out.parent.mkdir(parents=True, exist_ok=True)

print("Generating lifestyle image for most-popular-etsy-print-sizes-to-sell...")
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
            out.write_bytes(data)
            print(f"Saved: {out}")
            saved = True
            break
    if not saved:
        print("No image returned")
        for part in response.candidates[0].content.parts:
            if getattr(part, "text", None):
                print("TEXT:", part.text[:500])
except Exception as e:
    print(f"FAILED: {e}")
