const { chromium } = require("playwright");
const path = require("path");

const SLIDES = [
  {
    file: "slide-01-hook.png",
    html: `
      <div style="width:920px;height:550px;background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;font-family:'Inter',system-ui,sans-serif;">
        <div style="font-size:72px;font-weight:800;color:#fff;text-align:center;line-height:1.15;margin-bottom:20px;">Top 5 Sizes<br>Buyers Search</div>
        <div style="font-size:32px;color:#94a3b8;text-align:center;">Are you offering all of them?</div>
      </div>`,
  },
  {
    file: "slide-02-8x10.png",
    html: `
      <div style="width:920px;height:550px;background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;display:flex;align-items:center;padding:48px;font-family:'Inter',system-ui,sans-serif;gap:40px;">
        <div style="width:180px;height:225px;border:3px solid #2dd4bf;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:48px;font-weight:800;color:#2dd4bf;">8×10</span>
        </div>
        <div>
          <div style="font-size:24px;font-weight:600;color:#2dd4bf;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">4:5 Ratio</div>
          <div style="font-size:44px;font-weight:700;color:#fff;margin-bottom:16px;">The Bestseller</div>
          <div style="font-size:26px;color:#94a3b8;line-height:1.4;">Most popular frame size on Etsy.<br>2400 × 3000 px at 300 DPI.</div>
        </div>
      </div>`,
  },
  {
    file: "slide-03-5x7.png",
    html: `
      <div style="width:920px;height:550px;background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;display:flex;align-items:center;padding:48px;font-family:'Inter',system-ui,sans-serif;gap:40px;">
        <div style="width:150px;height:210px;border:3px solid #a78bfa;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:48px;font-weight:800;color:#a78bfa;">5×7</span>
        </div>
        <div>
          <div style="font-size:24px;font-weight:600;color:#a78bfa;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Extras Pack</div>
          <div style="font-size:44px;font-weight:700;color:#fff;margin-bottom:16px;">Cards & Small Frames</div>
          <div style="font-size:26px;color:#94a3b8;line-height:1.4;">Perfect for greeting cards and gifts.<br>1500 × 2100 px at 300 DPI.</div>
        </div>
      </div>`,
  },
  {
    file: "slide-04-16x20.png",
    html: `
      <div style="width:920px;height:550px;background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;display:flex;align-items:center;padding:48px;font-family:'Inter',system-ui,sans-serif;gap:40px;">
        <div style="width:192px;height:240px;border:3px solid #f59e0b;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:44px;font-weight:800;color:#f59e0b;">16×20</span>
        </div>
        <div>
          <div style="font-size:24px;font-weight:600;color:#f59e0b;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">4:5 Ratio</div>
          <div style="font-size:44px;font-weight:700;color:#fff;margin-bottom:16px;">Gallery Wall Hero</div>
          <div style="font-size:26px;color:#94a3b8;line-height:1.4;">The centerpiece size buyers love.<br>4800 × 6000 px at 300 DPI.</div>
        </div>
      </div>`,
  },
  {
    file: "slide-05-18x24.png",
    html: `
      <div style="width:920px;height:550px;background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;display:flex;align-items:center;padding:48px;font-family:'Inter',system-ui,sans-serif;gap:40px;">
        <div style="width:180px;height:240px;border:3px solid #ec4899;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:44px;font-weight:800;color:#ec4899;">18×24</span>
        </div>
        <div>
          <div style="font-size:24px;font-weight:600;color:#ec4899;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">3:4 Ratio</div>
          <div style="font-size:44px;font-weight:700;color:#fff;margin-bottom:16px;">Statement Piece</div>
          <div style="font-size:26px;color:#94a3b8;line-height:1.4;">Large format for maximum impact.<br>5400 × 7200 px at 300 DPI.</div>
        </div>
      </div>`,
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 960, height: 590 } });
  const outDir = path.join(__dirname, "..", "public");

  for (const slide of SLIDES) {
    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
        <style>body{margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:transparent;}</style>
      </head>
      <body>${slide.html}</body>
      </html>
    `);
    await page.waitForTimeout(500);
    const el = await page.$("body > div");
    await el.screenshot({ path: path.join(outDir, slide.file) });
    console.log(`Generated ${slide.file}`);
  }

  await browser.close();
  console.log("Done — all slides in marketing/remotion/public/");
})();
