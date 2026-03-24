import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(4000);

await page.screenshot({ path: 'tests/hero-desktop.png', fullPage: false });
await page.screenshot({ path: 'tests/fullpage-desktop.png', fullPage: true });

await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);
await page.screenshot({ path: 'tests/hero-mobile.png', fullPage: false });
await page.screenshot({ path: 'tests/fullpage-mobile.png', fullPage: true });

await browser.close();
console.log('Screenshots saved');
