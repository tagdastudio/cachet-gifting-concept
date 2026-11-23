import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://127.0.0.1:4302";
const OUT = path.join("preview", "mobile");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--hide-scrollbars"] });
let failed = 0;
const check = (name, ok) => {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
  if (!ok) failed += 1;
};

async function pageAt(route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await sleep(800);
  return page;
}

// Menu
{
  const page = await pageAt("/");
  await page.click("button[aria-haspopup='dialog']");
  await sleep(500);
  const open = await page.evaluate(() => Boolean(document.querySelector("dialog[open]")));
  check("mobile menu opens", open);
  await page.screenshot({ path: path.join(OUT, "menu.png") });
  await page.keyboard.press("Escape");
  await sleep(450);
  const closed = await page.evaluate(() => !document.querySelector("dialog[open]"));
  check("mobile menu closes with Escape", closed);
  await page.close();
}

// Filters
{
  const page = await pageAt("/parcels");
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button")];
    buttons.find((button) => button.textContent?.trim() === "Wedding")?.click();
  });
  await sleep(400);
  const facts = await page.evaluate(() => ({
    url: window.location.search,
    count: document.body.innerText.includes("of 6 parcels"),
    cards: document.querySelectorAll("a[href^='/parcels/the-']").length,
  }));
  check("occasion filter updates the URL", facts.url.includes("occasion=Wedding"));
  check("occasion filter updates the count", facts.count);
  check("occasion filter narrows the grid", facts.cards < 6);
  await page.screenshot({ path: path.join(OUT, "parcels-filtered.png"), fullPage: true });
  await page.close();
}

// Brief
{
  const page = await pageAt("/atelier");
  await page.type("input[name='name']", "Asha");
  await page.type("input[name='contact']", "asha@example.com");
  await page.evaluate(() => {
    const note = document.querySelector("textarea[name='note']");
    if (note) note.value = "A wedding in February, roses, no lavender.";
  });
  await page.click("button[type='submit']");
  await sleep(500);
  const facts = await page.evaluate(() => ({
    brief: document.body.textContent.includes("Your brief"),
    name: document.body.textContent.includes("Asha"),
    wa: Boolean(document.querySelector("a[href*='wa.me']")),
    edit: document.body.textContent.includes("Edit it"),
  }));
  check("brief panel composes", facts.brief && facts.name);
  check("brief offers WhatsApp", facts.wa);
  check("brief can be edited", facts.edit);
  await page.screenshot({ path: path.join(OUT, "atelier-brief.png"), fullPage: true });
  await page.close();
}

// FAQ
{
  const page = await pageAt("/faq");
  await page.evaluate(() => document.querySelector("details summary")?.click());
  await sleep(300);
  const open = await page.evaluate(() => Boolean(document.querySelector("details[open]")));
  check("FAQ opens", open);
  await page.screenshot({ path: path.join(OUT, "faq.png") });
  await page.close();
}

// Detail page actions
{
  const page = await pageAt("/parcels/the-keepsake");
  const facts = await page.evaluate(() => ({
    wa: Boolean(document.querySelector("a[href*='wa.me']")),
    price: document.body.innerText.includes("₹8,200"),
  }));
  check("parcel detail has a WhatsApp action", facts.wa);
  check("parcel detail shows the price", facts.price);
  await page.screenshot({ path: path.join(OUT, "detail.png") });
  await page.close();
}

await browser.close();
console.log(failed ? `\n${failed} failing checks` : "\nAll mobile interaction checks passed");
process.exitCode = failed ? 1 : 0;

