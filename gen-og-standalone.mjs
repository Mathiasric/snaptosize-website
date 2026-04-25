import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'app-next/public/assets/og');

const pages = [
  {
    filename: 'etsy-wedding-printable-sizes.png',
    title: 'Etsy Wedding Printable Sizes',
    subtitle: 'FULL SUITE GUIDE',
    tagline: 'Invitations - Signs - Menus - Programs',
  },
  {
    filename: 'print-size-for-frame-guide.png',
    title: 'What Size Print Fits What Frame',
    subtitle: 'COMPLETE GUIDE',
    tagline: 'Match prints to IKEA, Michaels & standard frames',
  },
  {
    filename: 'print-sizes-at-300-dpi.png',
    title: 'Print Sizes at 300 DPI',
    subtitle: 'COMPLETE PIXEL CHART',
    tagline: '28 sizes · 5 ratio packs · all at 300 DPI',
  },
  {
    filename: 'etsy-digital-download-file-size.png',
    title: 'Etsy Digital Download File Size',
    subtitle: 'COMPLETE GUIDE',
    tagline: '20MB limit · JPEG vs PNG · ZIP pack strategy',
  },
  {
    filename: 'etsy-bathroom-wall-art-sizes.png',
    title: 'Etsy Bathroom Wall Art Sizes',
    subtitle: 'PRINT SIZE GUIDE',
    tagline: '5×7 · 8×10 · 11×14 · A4 · portrait-first sizing',
  },
  {
    filename: 'etsy-kids-wall-art-sizes.png',
    title: 'Etsy Kids Wall Art Sizes',
    subtitle: 'NURSERY PRINT SIZE GUIDE',
    tagline: '8×10 · 11×14 · 16×20 · A4 · A3 · all ratio packs',
  },
  {
    filename: 'etsy-office-wall-art-sizes.png',
    title: 'Etsy Office Wall Art Sizes',
    subtitle: 'WFH PRINT SIZE GUIDE',
    tagline: 'Portrait · landscape · ISO — every ratio for office listings',
  },
  {
    filename: 'etsy-printable-bleed-and-crop-marks.png',
    title: 'Etsy Printable Bleed & Crop Marks',
    subtitle: 'PRINT SETUP GUIDE',
    tagline: 'Do Etsy printables need bleed? The definitive answer',
  },
];

const html = ({ title, subtitle, tagline }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; overflow:hidden; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0B0B12;
    color: #fff;
    position: relative;
    width:1200px; height:630px;
  }
  .orb-purple {
    position:absolute; width:600px; height:600px; border-radius:50%;
    background: radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%);
    top:-200px; right:-150px; filter: blur(40px);
  }
  .orb-teal {
    position:absolute; width:500px; height:500px; border-radius:50%;
    background: radial-gradient(circle, rgba(45,212,191,0.35), transparent 70%);
    bottom:-180px; left:-120px; filter: blur(40px);
  }
  .grid {
    position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .wrapper { position:relative; padding: 64px 72px; height:100%; display:flex; flex-direction:column; justify-content:space-between; z-index:2; }
  .brand { display:flex; align-items:center; gap:12px; }
  .brand-dot { width:14px; height:14px; border-radius:4px; background: linear-gradient(135deg, #2DD4BF, #A78BFA); }
  .brand-name { font-weight:800; font-size:22px; letter-spacing:-0.01em; }
  .brand-domain { color: rgba(255,255,255,0.5); font-size:16px; margin-left:6px; font-weight:500; }
  .accent-bar { width:80px; height:6px; background:#2DD4BF; border-radius:3px; margin-bottom:24px; }
  .subtitle { font-family:'JetBrains Mono', monospace; color:#2DD4BF; font-size:18px; letter-spacing:0.2em; margin-bottom:20px; }
  .title { font-size:72px; font-weight:800; line-height:1.05; letter-spacing:-0.025em; max-width:1000px; }
  .tagline { color: rgba(255,255,255,0.7); font-size:22px; margin-top:24px; font-weight:500; }
  .footer { display:flex; justify-content:space-between; align-items:flex-end; }
  .cta { color: rgba(255,255,255,0.8); font-size:18px; font-weight:600; }
  .cta span { color:#2DD4BF; }
</style></head>
<body>
  <div class="orb-purple"></div>
  <div class="orb-teal"></div>
  <div class="grid"></div>
  <div class="wrapper">
    <div class="brand">
      <div class="brand-dot"></div>
      <div class="brand-name">SnapToSize<span class="brand-domain">.com</span></div>
    </div>
    <div>
      <div class="accent-bar"></div>
      <div class="subtitle">${subtitle}</div>
      <div class="title">${title}</div>
      <div class="tagline">${tagline}</div>
    </div>
    <div class="footer">
      <div class="cta">Resize once <span>-</span> fit every Etsy size</div>
      <div class="cta"><span>-&gt;</span> snaptosize.com</div>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

for (const p of pages) {
  const page = await context.newPage();
  await page.setContent(html(p), { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: join(outDir, p.filename),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
    omitBackground: false,
  });
  console.log(`wrote ${p.filename}`);
  await page.close();
}

await browser.close();
