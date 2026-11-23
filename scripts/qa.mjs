// Layout + console audit, plus full-page review shots.
// Usage: node scripts/qa.mjs  (dev server on http://127.0.0.1:4302)
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://127.0.0.1:4302";
const OUT = path.join("preview", "pages");
const routes = [
  "/",
  "/parcels",
  "/parcels/the-wedding-parcel",
  "/parcels/the-keepsake",
  "/atelier",
  "/corporate",
  "/weddings",
  "/visit",
  "/journal",
  "/journal/the-case-for-the-seal",
  "/faq",
  "/delivery",
  "/legal/privacy",
  "/legal/terms",
  "/this-page-does-not-exist",
];
const widths = [320, 390, 768, 1440];
const shoot = new Set(["/", "/parcels", "/parcels/the-wedding-parcel", "/atelier", "/corporate", "/weddings", "/visit", "/journal", "/faq"]);

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--hide-scrollbars"] });
let failures = 0;

for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage();
    const errors = [];
    page.on("console", (message) => message.type() === "error" && errors.push(message.text().slice(0, 180)));
    page.on("pageerror", (error) => errors.push(String(error).slice(0, 180)));
    await page.setViewport({ width, height: width < 600 ? 844 : 1000, deviceScaleFactor: 1 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    const response = await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });

    // Load lazy images before a full-page capture.
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += 800) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await new Promise((resolve) => setTimeout(resolve, 70));
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((resolve) => setTimeout(resolve, 500));

    const facts = await page.evaluate(() => {
      const doc = document.documentElement;
      return {
        overflow: doc.scrollWidth - window.innerWidth,
        offenders: [...document.querySelectorAll("body *")]
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width > 1 && (rect.right > window.innerWidth + 2 || rect.left < -2);
          })
          .slice(0, 4)
          .map((element) => `${element.tagName.toLowerCase()}.${String(element.className).split(" ").slice(0, 2).join(".")} right=${Math.round(element.getBoundingClientRect().right)}`),
        h1: document.querySelectorAll("h1").length,
        title: document.title,
        main: Boolean(document.querySelector("main#main")),
      };
    });

    const routeName = route === "/" ? "home" : route.replace(/^\//, "").replaceAll("/", "-");
    if (width === 1440 || width === 390) {
      if (shoot.has(route)) {
        await page.screenshot({ path: path.join(OUT, `${routeName}-${width}.png`), fullPage: true });
      }
    }

    // Next emits RSC prefetch payloads that a plain static host answers with 404; navigation still works.
    const unexpectedErrors = errors.filter((error) => !error.includes("404"));
    const bad = facts.overflow > 2 || facts.h1 !== 1 || !facts.main || unexpectedErrors.length > 0;
    if (bad) failures += 1;
    console.log(
      `${bad ? "FAIL" : "PASS"} ${route} @${width} status=${response?.status()} h1=${facts.h1} overflow=${facts.overflow}${
        facts.offenders.length ? ` offenders=${facts.offenders.join(" | ")}` : ""
      }${unexpectedErrors.length ? ` console=${unexpectedErrors.join(" | ")}` : ""}`,
    );
    await page.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} failing checks` : "\nAll layout checks passed");
process.exitCode = failures ? 1 : 0;

