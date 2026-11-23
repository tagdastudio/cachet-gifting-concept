// Renders the share card. Usage: node scripts/og.mjs  (writes public/og.jpg)
import { writeFileSync } from "node:fs";
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;background:#150f14;color:#f3ebe6;font-family:"Segoe UI",system-ui,sans-serif;position:relative;overflow:hidden}
  .glow{position:absolute;inset:0;background:radial-gradient(90% 80% at 78% 18%, #3a1220 0%, #1b0f15 42%, #150f14 72%)}
  .frame{position:relative;height:100%;padding:54px 64px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid rgba(243,235,230,.12);margin:22px}
  .top{display:flex;justify-content:space-between;align-items:baseline;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:rgba(243,235,230,.5)}
  .word{font-family:"Bodoni MT",Didot,Georgia,serif;font-size:19px;letter-spacing:.34em;color:#f3ebe6}
  h1{font-family:"Bodoni MT",Didot,Georgia,serif;font-weight:400;font-size:104px;line-height:.93;letter-spacing:-.03em;max-width:14ch}
  h1 em{font-style:italic;color:#c7a489}
  .bottom{display:flex;justify-content:space-between;align-items:flex-end}
  .meta{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(243,235,230,.45);line-height:2}
  .seal{width:96px;height:96px;border-radius:47% 53% 52% 48%/51% 47% 53% 49%;background:radial-gradient(circle at 34% 26%, #a8405a 0%, #8e1b2b 48%, #4a0c18 100%);display:grid;place-items:center;box-shadow:0 18px 40px -18px rgba(0,0,0,.9);transform:rotate(-6deg)}
  .seal span{font-family:"Bodoni MT",Georgia,serif;font-size:44px;color:#f3ebe6}
  .rule{position:absolute;left:0;right:0;top:0;height:6px;background:#8e1b2b}
</style></head><body>
  <div class="glow"></div>
  <div class="rule"></div>
  <div class="frame">
    <div class="top"><span class="word">CACHET</span><span>A gifting house · Hyderabad</span></div>
    <h1>Gifts that<br>arrive <em>sealed.</em></h1>
    <div class="bottom">
      <div class="meta">Six parcels, packed by hand<br>Est. 2019 — by appointment</div>
      <div class="seal"><span>C</span></div>
    </div>
  </div>
</body></html>`;

await page.setContent(html, { waitUntil: "networkidle0" });
await new Promise((resolve) => setTimeout(resolve, 400));
const buffer = await page.screenshot({ type: "jpeg", quality: 90, clip: { x: 0, y: 0, width: 1200, height: 630 } });
writeFileSync("public/og.jpg", buffer);
console.log("public/og.jpg written");
await browser.close();
