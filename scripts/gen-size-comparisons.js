const { chromium } = require('playwright');

const images = [
  {
    output: 'app-next/public/assets/visuals/etsy-a2-size-comparison.png',
    title: 'How A2 Compares',
    subtitle: 'All sizes at 300 DPI \u00b7 ISO A-Series pack',
    frames: [
      { label: 'A4', mm: [210, 297], px: [2480, 3508], badge: 'ISO', highlighted: false },
      { label: '16\u00d720', mm: [406, 508], px: [4800, 6000], badge: '4:5', highlighted: false },
      { label: 'A3', mm: [297, 420], px: [3508, 4961], badge: 'ISO', highlighted: false },
      { label: 'A2', mm: [420, 594], px: [4961, 7016], badge: 'ISO', highlighted: true },
      { label: '18\u00d724', mm: [457, 610], px: [5400, 7200], badge: '3:4', highlighted: false },
    ],
  },
  {
    output: 'app-next/public/assets/visuals/etsy-a1-size-comparison.png',
    title: 'How A1 Compares',
    subtitle: 'All sizes at 300 DPI \u00b7 ISO A-Series pack',
    frames: [
      { label: 'A3', mm: [297, 420], px: [3508, 4961], badge: 'ISO', highlighted: false },
      { label: 'A2', mm: [420, 594], px: [4961, 7016], badge: 'ISO', highlighted: false },
      { label: '20\u00d730', mm: [508, 762], px: [6000, 9000], badge: '2:3', highlighted: false },
      { label: 'A1', mm: [594, 841], px: [7016, 9933], badge: 'ISO', highlighted: true },
      { label: '24\u00d736', mm: [610, 914], px: [7200, 10800], badge: '2:3', highlighted: false },
    ],
  },
  {
    output: 'app-next/public/assets/visuals/etsy-13x19-size-comparison.png',
    title: 'How 13\u00d719 Compares',
    subtitle: 'All sizes at 300 DPI \u00b7 Extra sizes pack',
    frames: [
      { label: '11\u00d717', mm: [279, 432], px: [3300, 5100], badge: 'Extras', highlighted: false },
      { label: 'A3', mm: [297, 420], px: [3508, 4961], badge: 'ISO', highlighted: false },
      { label: '12\u00d718', mm: [305, 457], px: [3600, 5400], badge: '2:3', highlighted: false },
      { label: '13\u00d719', mm: [330, 483], px: [3900, 5700], badge: 'Extras', highlighted: true },
      { label: '16\u00d720', mm: [406, 508], px: [4800, 6000], badge: '4:5', highlighted: false },
    ],
  },
];

function generateHTML(config) {
  const maxMmH = Math.max(...config.frames.map(f => f.mm[1]));
  const maxPxH = 350;

  const framesHTML = config.frames.map(f => {
    const h = Math.round((f.mm[1] / maxMmH) * maxPxH);
    const w = Math.round((f.mm[0] / maxMmH) * maxPxH);

    const borderColor = f.highlighted ? 'rgba(45,212,191,0.4)' : 'rgba(255,255,255,0.15)';
    const bgColor = f.highlighted ? 'rgba(45,212,191,0.04)' : 'rgba(255,255,255,0.02)';
    const labelColor = f.highlighted ? 'rgba(45,212,191,0.7)' : 'rgba(255,255,255,0.5)';
    const badgeBg = f.highlighted ? 'rgba(45,212,191,0.15)' : 'rgba(255,255,255,0.08)';
    const badgeColor = f.highlighted ? 'rgba(45,212,191,0.8)' : 'rgba(255,255,255,0.4)';

    return `
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;width:${w}px;height:${h}px;border:2px solid ${borderColor};background:${bgColor};border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;">
          <div style="position:absolute;top:6px;right:6px;background:${badgeBg};color:${badgeColor};font-size:9px;font-weight:600;padding:2px 6px;border-radius:8px;letter-spacing:0.5px;">${f.badge}</div>
          <div style="font-size:${f.highlighted ? 22 : 18}px;font-weight:${f.highlighted ? 700 : 600};color:${labelColor};letter-spacing:-0.5px;">${f.label}</div>
          <div style="font-size:10px;color:${f.highlighted ? 'rgba(45,212,191,0.5)' : 'rgba(255,255,255,0.3)'};letter-spacing:0.3px;">${f.px[0]}\u00d7${f.px[1]}px</div>
          <div style="font-size:9px;color:${f.highlighted ? 'rgba(45,212,191,0.35)' : 'rgba(255,255,255,0.2)'};letter-spacing:0.3px;">${f.mm[0]}\u00d7${f.mm[1]}mm</div>
        </div>
      </div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:500px; background:#030712; font-family:system-ui,-apple-system,sans-serif; display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden; }
</style></head><body>
  <div style="text-align:center;margin-bottom:20px;">
    <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.4);letter-spacing:3px;text-transform:uppercase;margin-bottom:6px;">Print Size Comparison</div>
    <div style="font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.5px;">${config.title}</div>
  </div>
  <div style="display:flex;align-items:flex-end;gap:24px;margin-bottom:20px;">
    ${framesHTML}
  </div>
  <div style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:0.5px;">${config.subtitle}</div>
</body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 500 } });

  for (const img of images) {
    const page = await context.newPage();
    const html = generateHTML(img);
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.screenshot({ path: img.output, fullPage: false });
    console.log('Created:', img.output);
    await page.close();
  }

  await browser.close();
  console.log('Done!');
})();
