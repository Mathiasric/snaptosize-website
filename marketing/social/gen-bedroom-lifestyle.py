"""Generate bedroom wall art lifestyle image for etsy-bedroom-wall-art-sizes page."""
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
    "A serene bedroom with a large framed botanical print above a white linen headboard, "
    "two small matching prints on wooden nightstands, soft morning light, "
    "neutral tones with sage green accents, minimalist Scandinavian style. "
    "No text, no words, no labels, no watermarks, no people. "
    "Photorealistic, magazine-quality interior photography. "
    "4:3 landscape aspect ratio."
)

out_path = (
    Path(__file__).resolve().parents[2]
    / "app-next" / "public" / "assets" / "visuals"
    / "etsy-bedroom-wall-art-sizes-lifestyle.jpg"
)
out_path.parent.mkdir(parents=True, exist_ok=True)

print("Generating bedroom wall art lifestyle image...")
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
            out_path.write_bytes(data)
            saved = True
            print(f"Saved to: {out_path}")
            break
    if not saved:
        print("ERROR: No image data in response")
        for part in response.candidates[0].content.parts:
            if hasattr(part, "text") and part.text:
                print(f"Text response: {part.text}")
except Exception as e:
    print(f"ERROR: {e}")
    raise
