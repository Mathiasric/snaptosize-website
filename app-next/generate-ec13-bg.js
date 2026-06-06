/**
 * Generates EC13 slide 1 background via Gemini.
 * Theme: Pain/Hook — wrong frame size, 1-star review
 * Output: public/assets/ec13-slide01-bg.png
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const envPath = path.join(__dirname, "../.env.local");
let API_KEY = "";
try {
  const env = fs.readFileSync(envPath, "utf8");
  const match = env.match(/GOOGLE_API_KEY=([^\n\r]+)/);
  if (match) API_KEY = match[1].trim();
} catch (e) {}

if (!API_KEY) { console.error("GOOGLE_API_KEY not found in .env.local"); process.exit(1); }

const PROMPT = `Cinematic dark editorial photography for an Instagram carousel slide background.

Scene: A beautiful art print — an abstract botanical illustration — leans against a dark wall on a wooden surface. Next to it sits an empty picture frame. The print is clearly portrait-oriented (tall and narrow). The frame is clearly the wrong proportions — wider than the print, or smaller, so they visibly don't match. The mismatch is obvious at a glance.

The mood is quiet disappointment. Dramatic side lighting from the left casts deep shadows across the scene. The dominant palette is near-black with a single red/coral accent light source — a barely-visible warm red glow, like a notification light, emanating from off-frame right.

The art print itself is beautiful — high quality, premium feel. The frame sits unused beside it.

CRITICAL REQUIREMENTS:
- No text, no words, no labels, no numbers anywhere in the image
- No people, no hands, no faces
- No brand logos or identifying marks
- The frame and print must be visibly different proportions — this mismatch is the key visual
- 75% of the image is deep shadow
- Photorealistic, cinematic quality`;

const MODEL = "gemini-3-pro-image-preview";
const OUTPUT = path.join(__dirname, "public/assets/ec13-slide01-bg.png");

const body = JSON.stringify({
  contents: [{ parts: [{ text: PROMPT }] }],
  generationConfig: { responseModalities: ["IMAGE", "TEXT"] },
});

const options = {
  hostname: "generativelanguage.googleapis.com",
  path: `/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
  method: "POST",
  headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) },
};

console.log("Generating EC13 background via Gemini...");

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    try {
      const json = JSON.parse(data);
      const parts = json?.candidates?.[0]?.content?.parts ?? [];
      const imgPart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
      if (!imgPart) { console.error("No image in response:", JSON.stringify(json).slice(0, 400)); process.exit(1); }
      const buf = Buffer.from(imgPart.inlineData.data, "base64");
      fs.writeFileSync(OUTPUT, buf);
      console.log("✓ Saved:", OUTPUT);
    } catch (e) {
      console.error("Parse error:", e.message, data.slice(0, 300));
      process.exit(1);
    }
  });
});

req.on("error", (e) => { console.error("Request error:", e.message); process.exit(1); });
req.write(body);
req.end();
