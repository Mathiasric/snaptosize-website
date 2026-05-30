const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:3000/social-slides', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  const el = await page.$('#w23-listing-score-pin');
  if (!el) { console.error('Element #w23-listing-score-pin not found'); await browser.close(); return; }
  const out = 'C:/dev/snaptosize-website/marketing/social/content/pinterest/2026-05-21-listing-score-pinterest/pin.jpg';
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await el.screenshot({ path: out });
  console.log('Done:', out);
  await browser.close();
})();
