/**
 * Generates EC09 slide 1 background via Gemini.
 * Theme: 73% want 4:5, you only list 2:3 — amber raking light, ratio frames
 * Output: public/assets/ec09-slide01-bg.png
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

const PROMPT = `Cinematic dark editorial product photography for an Instagram carousel slide background.

A heavy oak desk in deep shadow. Three art prints leaning against a dark charcoal wall, arranged left to right at dramatically different proportions. The leftmost print is tall and narrow (2:3 portrait, like a slim botanical sketch). The middle print is wider, more square (4:5 portrait, the proportions of a standard 8×10 frame). The rightmost is even wider (close to square 1:1). All three prints show subtle, abstract botanical line art — no text, no words, no numbers anywhere. The frames are simple slim black metal.

A single warm amber/orange raking light (#F59E0B) cuts across the desk from the upper left at a sharp angle, catching only the top edges and left sides of the middle 4:5 print — making it glow with cinematic tension. The other two prints fall into deeper shadow. A single brass tack glints in the wood. A coffee cup sits in soft focus background.

CRITICAL REQUIREMENTS:
- No text, no words, no numbers, no labels, no measurements visible anywhere
- No people, no hands, no faces
- No brand logos or identifying marks
- Wall behind prints is near-black (#07070E to #14141C)
- 80% of the scene is deep shadow and darkness
- Dominant tone: warm amber/orange raking light catching only the middle print
- 4:5 portrait aspect ratio (1080×1350, taller than wide)
- Mood: cinematic tension, the moment before realizing something is wrong — Gregory Crewdson meets Apple product photography
- Depth of field: shallow, with the middle 4:5 print in sharpest focus
- Quality: hyper-detailed, photorealistic, 8K, professional commercial photography
- Reference: editorial print magazine product shoot at night`;

const MODEL = "gemini-3-pro-image-preview";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const body = JSON.stringify({
  contents: [{ parts: [{ text: PROMPT }] }],
  generationConfig: { responseModalities: ["TEXT", "IMAGE"], candidateCount: 1 },
});

const OUT_PATH = path.join(__dirname, "public/assets/ec09-slide01-bg.png");

console.log(`Model: ${MODEL}`);
console.log("Generating EC09 slide 1 background...\n");

const req = https.request(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) },
}, (res) => {
  let data = "";
  res.on("data", (c) => (data += c));
  res.on("end", () => {
    try {
      const json = JSON.parse(data);
      if (json.error) { console.error("API error:", json.error.message); process.exit(1); }
      const parts = json.candidates?.[0]?.content?.parts || [];
      let saved = false;
      for (const part of parts) {
        if (part.inlineData?.mimeType?.startsWith("image/")) {
          const buf = Buffer.from(part.inlineData.data, "base64");
          fs.writeFileSync(OUT_PATH, buf);
          console.log(`Saved: ${OUT_PATH} (${Math.round(buf.length / 1024)}KB)`);
          saved = true;
        } else if (part.text) {
          console.log("Model:", part.text.slice(0, 80));
        }
      }
      if (!saved) {
        console.error("No image returned.");
        console.log(JSON.stringify(json).slice(0, 300));
      }
    } catch (e) { console.error("Parse error:", e.message); }
  });
});

req.on("error", (e) => console.error("Request error:", e.message));
req.write(body);
req.end();
