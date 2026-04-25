"""Generate office lifestyle image for etsy-office-wall-art-sizes page."""
import os
import io
import base64
from pathlib import Path
from PIL import Image
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / ".env.local")
from google import genai
from google.genai import types

API_KEY = os.environ.get("GOOGLE_API_KEY")
client = genai.Client(api_key=API_KEY)

PROMPT = (
    "Photorealistic lifestyle photo of a modern home office. "
    "The wall behind the desk has three beautifully framed art prints: "
    "a large portrait-format motivational quote print (approx 18x24 inches), "
    "a medium landscape print (approx 11x14), and a small accent piece (approx 5x7). "
    "Warm natural light streams in from a window on the side. "
    "The desk is clean and minimal — a simple wooden desk, a plant, a coffee mug. "
    "No laptop, no phone, no screens, no apps, no logos, no text overlays. "
    "Cozy professional aesthetic, warm neutral color palette (cream, warm white, natural wood). "
    "Photographic quality, shallow depth of field, shot from slightly above eye level. "
    "The framed prints are the clear visual focus of the image."
)

OUT = Path(__file__).resolve().parents[2] / "app-next/public/assets/visuals/etsy-office-wall-art-sizes-lifestyle.jpg"
OUT.parent.mkdir(parents=True, exist_ok=True)

response = client.models.generate_content(
    model="gemini-3-pro-image-preview",
    contents=PROMPT,
    config=types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"],
    ),
)

for part in response.candidates[0].content.parts:
    if hasattr(part, "inline_data") and part.inline_data and part.inline_data.mime_type.startswith("image/"):
        img = Image.open(io.BytesIO(part.inline_data.data))
        # Resize to 4:3 lifestyle format (~1600x1200)
        img = img.resize((1600, 1200), Image.LANCZOS)
        img.save(str(OUT), "JPEG", quality=90)
        print(f"Saved: {OUT}")
        break
else:
    print("ERROR: no image in response")
    print(response)
