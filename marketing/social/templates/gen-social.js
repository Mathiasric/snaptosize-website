/**
 * Social Media Template Generator
 *
 * Generates branded HTML files for Playwright screenshot → social media images.
 * Built on the gen-diagram.js pattern but for Pinterest 2:3, Instagram 4:5 / 1:1.
 *
 * Usage:
 *   node gen-social.js --platform pinterest --layout size-table --data '{"title":"...","rows":[...]}'
 *   node gen-social.js --platform instagram --layout tips-list --data '{"title":"...","items":[...]}'
 *   node gen-social.js --config slides.json   (batch mode — generates multiple slides)
 *
 * Then screenshot:
 *   npx playwright screenshot out/slide-1.html --viewport-size="1000,1500" slide-1.png
 */

const fs = require('fs');
const path = require('path');

// ── Platform dimensions ──────────────────────────────────────────────
const PLATFORMS = {
  pinterest:        { w: 1000, h: 1500, label: 'Pinterest 2:3' },
  instagram:        { w: 1080, h: 1350, label: 'Instagram 4:5' },
  'instagram-square': { w: 1080, h: 1080, label: 'Instagram 1:1' },
};

// ── Brand tokens ─────────────────────────────────────────────────────
const BRAND = {
  bg:        '#0a0f1e',
  surface:   'rgba(255,255,255,0.04)',
  border:    'rgba(255,255,255,0.12)',
  teal:      '#2DD4BF',
  tealDim:   'rgba(45,212,191,0.4)',
  tealBg:    'rgba(45,212,191,0.08)',
  text:      '#ffffff',
  textDim:   'rgba(255,255,255,0.5)',
  textMuted: 'rgba(255,255,255,0.25)',
  font:      "'Montserrat', 'Segoe UI', system-ui, sans-serif",
  mono:      "Consolas, 'Courier New', monospace",
};

// ── Base CSS (shared across all layouts) ─────────────────────────────
function baseCss(platform) {
  const { w, h } = PLATFORMS[platform];
  return `
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  width: ${w}px; height: ${h}px;
  background: ${BRAND.bg};
  font-family: ${BRAND.font};
  color: ${BRAND.text};
  display: flex; flex-direction: column;
  overflow: hidden;
}
.page { padding: 60px 56px; flex: 1; display: flex; flex-direction: column; }
.logo-bar {
  display: flex; align-items: center; gap: 8px;
  position: absolute; bottom: 40px; right: 48px;
  opacity: 0.35; font-size: 13px; font-weight: 600;
  letter-spacing: 0.04em;
}
.logo-bar .dot { width: 8px; height: 8px; border-radius: 50%; background: ${BRAND.teal}; }
h1 {
  font-size: 52px; font-weight: 800; line-height: 1.15;
  letter-spacing: -0.02em; margin-bottom: 12px;
}
h1 .hl { color: ${BRAND.teal}; }
.subtitle {
  font-size: 20px; color: ${BRAND.textDim}; font-weight: 400;
  margin-bottom: 40px; line-height: 1.4;
}
.divider {
  width: 48px; height: 3px; border-radius: 2px;
  background: ${BRAND.tealDim}; margin-bottom: 32px;
}
`;
}

// ── Layout: size-table ───────────────────────────────────────────────
// data: { title, subtitle?, rows: [{ size, px, ratio, pack, hl? }] }
function layoutSizeTable(data) {
  const rows = data.rows.map(r => {
    const cls = r.hl ? 'row hl' : 'row';
    return `<div class="${cls}">
      <span class="size">${r.size}</span>
      <span class="px">${r.px}</span>
      <span class="ratio">${r.ratio}</span>
      <span class="pack">${r.pack}</span>
    </div>`;
  }).join('\n');

  const css = `
.table { flex: 1; display: flex; flex-direction: column; gap: 0; }
.row {
  display: grid; grid-template-columns: 1.2fr 1.5fr 0.8fr 1fr;
  padding: 18px 20px; border-bottom: 1px solid ${BRAND.border};
  font-size: 18px; align-items: center;
}
.row.hl { background: ${BRAND.tealBg}; border-radius: 8px; border-color: transparent; }
.row .size { font-weight: 700; font-size: 22px; }
.row.hl .size { color: ${BRAND.teal}; }
.row .px { font-family: ${BRAND.mono}; color: ${BRAND.textDim}; font-size: 16px; }
.row .ratio { color: ${BRAND.textDim}; font-size: 16px; }
.row .pack {
  font-size: 13px; padding: 4px 10px; border-radius: 4px;
  background: ${BRAND.surface}; border: 1px solid ${BRAND.border};
  color: ${BRAND.textDim}; text-align: center; justify-self: end;
}
.row.hl .pack {
  background: ${BRAND.tealBg}; border-color: ${BRAND.tealDim};
  color: ${BRAND.teal};
}
.header {
  display: grid; grid-template-columns: 1.2fr 1.5fr 0.8fr 1fr;
  padding: 12px 20px; font-size: 12px; color: ${BRAND.textMuted};
  text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;
}
.header span:last-child { text-align: right; }
`;

  const html = `
<div class="page">
  <h1>${data.title}</h1>
  ${data.subtitle ? `<div class="subtitle">${data.subtitle}</div>` : ''}
  <div class="divider"></div>
  <div class="header"><span>Size</span><span>Pixels (300 DPI)</span><span>Ratio</span><span>Pack</span></div>
  <div class="table">${rows}</div>
  <div class="logo-bar"><div class="dot"></div> snaptosize.com</div>
</div>`;

  return { css, html };
}

// ── Layout: comparison ───────────────────────────────────────────────
// data: { title, subtitle?, left: { label, items[] }, right: { label, items[] } }
function layoutComparison(data) {
  const makeCol = (col, side) => {
    const items = col.items.map(i => `<div class="item"><span class="icon">${side === 'left' ? '✕' : '✓'}</span> ${i}</div>`).join('\n');
    return `<div class="col ${side}">
      <div class="col-label">${col.label}</div>
      ${items}
    </div>`;
  };

  const css = `
.vs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; flex: 1; }
.col {
  padding: 28px 24px; border-radius: 12px;
  display: flex; flex-direction: column; gap: 16px;
}
.col.left { background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.15); }
.col.right { background: ${BRAND.tealBg}; border: 1px solid ${BRAND.tealDim}; }
.col-label {
  font-size: 16px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.1em; margin-bottom: 8px;
}
.col.left .col-label { color: #ef4444; }
.col.right .col-label { color: ${BRAND.teal}; }
.item { font-size: 18px; line-height: 1.5; color: ${BRAND.textDim}; display: flex; align-items: flex-start; gap: 10px; }
.icon { font-weight: 700; flex-shrink: 0; }
.col.left .icon { color: #ef4444; }
.col.right .icon { color: ${BRAND.teal}; }
`;

  const html = `
<div class="page">
  <h1>${data.title}</h1>
  ${data.subtitle ? `<div class="subtitle">${data.subtitle}</div>` : ''}
  <div class="divider"></div>
  <div class="vs-grid">
    ${makeCol(data.left, 'left')}
    ${makeCol(data.right, 'right')}
  </div>
  <div class="logo-bar"><div class="dot"></div> snaptosize.com</div>
</div>`;

  return { css, html };
}

// ── Layout: tips-list ────────────────────────────────────────────────
// data: { title, subtitle?, items: [{ num, text, detail? }] }
function layoutTipsList(data) {
  const items = data.items.map(i => `
    <div class="tip">
      <div class="num">${String(i.num).padStart(2, '0')}</div>
      <div class="tip-body">
        <div class="tip-text">${i.text}</div>
        ${i.detail ? `<div class="tip-detail">${i.detail}</div>` : ''}
      </div>
    </div>`).join('\n');

  const css = `
.tips { display: flex; flex-direction: column; gap: 20px; flex: 1; }
.tip {
  display: flex; gap: 20px; padding: 20px 24px;
  background: ${BRAND.surface}; border: 1px solid ${BRAND.border};
  border-radius: 10px; align-items: flex-start;
}
.num {
  font-size: 28px; font-weight: 800; color: ${BRAND.teal};
  font-family: ${BRAND.mono}; flex-shrink: 0; line-height: 1;
  min-width: 40px;
}
.tip-text { font-size: 20px; font-weight: 600; line-height: 1.3; }
.tip-detail { font-size: 16px; color: ${BRAND.textDim}; margin-top: 6px; line-height: 1.4; }
`;

  const html = `
<div class="page">
  <h1>${data.title}</h1>
  ${data.subtitle ? `<div class="subtitle">${data.subtitle}</div>` : ''}
  <div class="divider"></div>
  <div class="tips">${items}</div>
  <div class="logo-bar"><div class="dot"></div> snaptosize.com</div>
</div>`;

  return { css, html };
}

// ── Layout: stats-card ───────────────────────────────────────────────
// data: { title, subtitle?, stats: [{ value, label, hl? }] }
function layoutStatsCard(data) {
  const stats = data.stats.map(s => {
    const cls = s.hl ? 'stat hl' : 'stat';
    return `<div class="${cls}">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
  }).join('\n');

  const css = `
.stats-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
  flex: 1; align-content: center;
}
.stat {
  padding: 32px 24px; border-radius: 12px; text-align: center;
  background: ${BRAND.surface}; border: 1px solid ${BRAND.border};
}
.stat.hl { background: ${BRAND.tealBg}; border-color: ${BRAND.tealDim}; }
.stat-value { font-size: 48px; font-weight: 800; line-height: 1; margin-bottom: 8px; }
.stat.hl .stat-value { color: ${BRAND.teal}; }
.stat-label { font-size: 16px; color: ${BRAND.textDim}; }
`;

  const html = `
<div class="page">
  <h1>${data.title}</h1>
  ${data.subtitle ? `<div class="subtitle">${data.subtitle}</div>` : ''}
  <div class="divider"></div>
  <div class="stats-grid">${stats}</div>
  <div class="logo-bar"><div class="dot"></div> snaptosize.com</div>
</div>`;

  return { css, html };
}

// ── Layout: cheat-sheet ──────────────────────────────────────────────
// data: { title, subtitle?, sections: [{ heading, items: [{ left, right }] }] }
function layoutCheatSheet(data) {
  const sections = data.sections.map(s => {
    const items = s.items.map(i =>
      `<div class="cs-row"><span class="cs-left">${i.left}</span><span class="cs-right">${i.right}</span></div>`
    ).join('\n');
    return `<div class="cs-section">
      <div class="cs-heading">${s.heading}</div>
      ${items}
    </div>`;
  }).join('\n');

  const css = `
.cheat { display: flex; flex-direction: column; gap: 24px; flex: 1; }
.cs-section { display: flex; flex-direction: column; gap: 0; }
.cs-heading {
  font-size: 14px; font-weight: 700; color: ${BRAND.teal};
  text-transform: uppercase; letter-spacing: 0.1em;
  padding-bottom: 8px; border-bottom: 1px solid ${BRAND.tealDim};
  margin-bottom: 4px;
}
.cs-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 0; border-bottom: 1px solid ${BRAND.border};
  font-size: 17px;
}
.cs-left { font-weight: 600; }
.cs-right { font-family: ${BRAND.mono}; color: ${BRAND.textDim}; font-size: 15px; }
`;

  const html = `
<div class="page">
  <h1>${data.title}</h1>
  ${data.subtitle ? `<div class="subtitle">${data.subtitle}</div>` : ''}
  <div class="divider"></div>
  <div class="cheat">${sections}</div>
  <div class="logo-bar"><div class="dot"></div> snaptosize.com</div>
</div>`;

  return { css, html };
}

// ── Layout registry ──────────────────────────────────────────────────
const LAYOUTS = {
  'size-table':  layoutSizeTable,
  'comparison':  layoutComparison,
  'tips-list':   layoutTipsList,
  'stats-card':  layoutStatsCard,
  'cheat-sheet': layoutCheatSheet,
};

// ── Assemble full HTML ───────────────────────────────────────────────
function buildHtml(platform, layout, data) {
  const layoutFn = LAYOUTS[layout];
  if (!layoutFn) throw new Error(`Unknown layout: ${layout}. Available: ${Object.keys(LAYOUTS).join(', ')}`);
  if (!PLATFORMS[platform]) throw new Error(`Unknown platform: ${platform}. Available: ${Object.keys(PLATFORMS).join(', ')}`);

  const { css: layoutCss, html: layoutHtml } = layoutFn(data);
  const css = baseCss(platform) + layoutCss;

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${css}</style></head>
<body>${layoutHtml}</body></html>`;
}

// ── CLI ──────────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const get = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : null; };

  const configFile = get('--config');
  const outDir = path.join(__dirname, 'out');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  if (configFile) {
    // Batch mode: JSON array of { platform, layout, data, filename }
    const slides = JSON.parse(fs.readFileSync(configFile, 'utf8'));
    for (const slide of slides) {
      const html = buildHtml(slide.platform, slide.layout, slide.data);
      const outPath = path.join(outDir, slide.filename || `slide-${slides.indexOf(slide) + 1}.html`);
      fs.writeFileSync(outPath, html);
      console.log(`Created: ${outPath}`);
    }
    return;
  }

  const platform = get('--platform') || 'pinterest';
  const layout = get('--layout');
  const dataStr = get('--data');

  if (!layout || !dataStr) {
    console.log('Usage:');
    console.log('  node gen-social.js --platform pinterest --layout size-table --data \'{"title":"...","rows":[...]}\'');
    console.log('  node gen-social.js --config slides.json');
    console.log('');
    console.log(`Platforms: ${Object.keys(PLATFORMS).join(', ')}`);
    console.log(`Layouts:   ${Object.keys(LAYOUTS).join(', ')}`);
    process.exit(1);
  }

  const data = JSON.parse(dataStr);
  const html = buildHtml(platform, layout, data);
  const outPath = path.join(outDir, 'slide.html');
  fs.writeFileSync(outPath, html);

  const { w, h } = PLATFORMS[platform];
  console.log(`Created: ${outPath}`);
  console.log(`Screenshot: npx playwright screenshot ${outPath} --viewport-size="${w},${h}" output.png`);
}

// Also export for programmatic use
module.exports = { buildHtml, PLATFORMS, LAYOUTS, BRAND };

main();
