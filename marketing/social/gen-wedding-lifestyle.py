"""Generate wedding lifestyle image for etsy-wedding-printable-sizes page."""
import os
import base64
from pathlib import Path
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / ".env.local")
from google import genai
from google.genai import types

API_KEY = os.environ.get("GOOGLE_API_KEY")
client = genai.Client(api_key=API_KEY)

PROMPT = (
    "A beautifully styled wedding reception table photographed from a slight overhead angle, "
    "warm golden-hour light streaming across a linen tablecloth. On the table: an elegant 5x7 "
    "wedding invitation with delicate floral botanical design, a tall narrow menu card with "
    "minimalist typography, a place card with handwritten calligraphy name, small eucalyptus "
    "sprigs, a blush-pink taper candle, vintage brass candlestick, soft white roses in a "
    "ceramic bud vase. Romantic, aspirational, editorial wedding stationery photography. "
    "Muted neutral palette — cream, sage, blush, warm taupe. 4:3 landscape aspect ratio. "
    "Photorealistic, high-end wedding magazine styling. No text overlays, no watermarks."
)

out_path = (
    Path(__file__).resolve().parents[2]
    / "app-next" / "public" / "assets" / "visuals"
    / "etsy-wedding-printable-sizes-lifestyle.jpg"
)
out_path.parent.mkdir(parents=True, exist_ok=True)

print("Generating wedding lifestyle image...")
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
            with open(out_path, "wb") as f:
                f.write(data)
            print(f"Saved: {out_path}")
            saved = True
            break
    if not saved:
        print("No image returned")
        for part in response.candidates[0].content.parts:
            if getattr(part, "text", None):
                print("TEXT:", part.text[:500])
except Exception as e:
    print(f"FAILED: {e}")
