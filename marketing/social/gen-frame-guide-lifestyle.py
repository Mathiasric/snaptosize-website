"""Generate living room gallery wall lifestyle image for print-size-for-frame-guide page."""
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
    "A tastefully curated living room gallery wall with multiple framed art prints in varied "
    "standard sizes — one large 16x20 abstract print in a thin black IKEA-style frame with a "
    "wide white mat, one 11x14 botanical print in a natural oak frame, two 8x10 minimalist "
    "prints in slim white frames, and one 5x7 quote print in a brass frame. Prints are hung "
    "with clean alignment against a warm off-white wall. Below the wall: a light oak mid-century "
    "sideboard with a small ceramic vase holding dried pampas grass and a stack of design books. "
    "Soft natural daylight from a nearby window, calm editorial home interior photography, "
    "Scandinavian-Japandi aesthetic, muted neutral palette — cream, sand, warm oak, soft black. "
    "4:3 landscape aspect ratio. Photorealistic, high-end interior magazine styling. "
    "No text overlays, no watermarks, no readable content in the art prints (abstract shapes only)."
)

out_path = (
    Path(__file__).resolve().parents[2]
    / "app-next" / "public" / "assets" / "visuals"
    / "print-size-for-frame-guide-lifestyle.jpg"
)
out_path.parent.mkdir(parents=True, exist_ok=True)

print("Generating frame-guide lifestyle image...")
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
