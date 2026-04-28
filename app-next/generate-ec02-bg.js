/**
 * Generates slide 1 background for EC02 — frame size mismatch carousel.
 * Output: marketing/social/content/instagram/2026-04-28-frame-sizes/slide-01-bg.png
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const envPath = path.join(__dirname, '../.env.local');
let API_KEY = '';
try {
  const env = fs.readFileSync(envPath, 'utf8');
  const match = env.match(/GOOGLE_API_KEY=([^\n\r]+)/);
  if (match) API_KEY = match[1].trim();
} catch(e) {}

if (!API_KEY) {
  console.error('GOOGLE_API_KEY not found in .env.local');
  process.exit(1);
}

const PROMPT = `Dark cinematic editorial photography for Instagram carousel background.

Multiple picture frames of dramatically different sizes — tiny 4×6 frames, medium 8×10, large A3, extra-large A2 — arranged floating in deep darkness at different angles. Some frames are slightly open, hinting at a print that doesn't quite fit. Frames are dark metal and matte black wood. Strong teal/cyan backlighting (#2DD4BF) creating dramatic edge glow on 2-3 frames. 80% of the scene is deep shadow and darkness.

CRITICAL: No text anywhere. No people. No hands. No logos. No measurements or numbers.
Aspect ratio: 4:5 portrait (taller than wide).
Background: near-black (#07070E).
Mood: premium dark editorial photography, dramatic, mysterious, slightly unsettling.
Quality: hyper-detailed, photorealistic, professional commercial photography.`;

const MODEL = 'gemini-3-pro-image-preview';
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const body = JSON.stringify({
  contents: [{ parts: [{ text: PROMPT }] }],
  generationConfig: {
    responseModalities: ['TEXT', 'IMAGE'],
    candidateCount: 1,
  },
});

const outDir = path.join(__dirname, '../marketing/social/content/instagram/2026-04-28-frame-sizes');
fs.mkdirSync(outDir, { recursive: true });

console.log(`Calling Gemini model: ${MODEL}`);
console.log('Generating EC02 slide 1 background...\n');

const req = https.request(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);

      if (json.error) {
        console.error('API error:', json.error.message);
        process.exit(2);
      }

      const parts = json.candidates?.[0]?.content?.parts || [];
      let saved = false;

      for (const part of parts) {
        if (part.inlineData?.mimeType?.startsWith('image/')) {
          const imgBuf = Buffer.from(part.inlineData.data, 'base64');

          // Save to content folder
          const outPath = path.join(outDir, 'slide-01-bg.png');
          fs.writeFileSync(outPath, imgBuf);
          console.log(`Saved to: ${outPath}`);

          // Also copy to public/assets for React component
          const assetPath = path.join(__dirname, 'public/assets/ec02-slide01-bg.png');
          fs.writeFileSync(assetPath, imgBuf);
          console.log(`Copied to: ${assetPath}`);
          console.log(`Size: ${Math.round(imgBuf.length / 1024)}KB`);
          saved = true;
        } else if (part.text) {
          console.log('Model text:', part.text.slice(0, 100));
        }
      }

      if (!saved) {
        console.error('No image in response. Full response:');
        console.log(JSON.stringify(json, null, 2).slice(0, 500));
      }
    } catch(e) {
      console.error('Parse error:', e.message);
      console.log(data.slice(0, 300));
    }
  });
});

req.on('error', e => console.error('Request error:', e.message));
req.write(body);
req.end();
