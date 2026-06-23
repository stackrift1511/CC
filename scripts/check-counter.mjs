import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://localhost:5174/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2500);

const data = await page.evaluate(() => {
  const digits = [...document.querySelectorAll(".counter-digit")];
  const numbers = [...document.querySelectorAll(".counter-number")];
  return {
    digitCount: digits.length,
    numberCount: numbers.length,
    digitStyles: digits.slice(0, 4).map((d) => ({
      h: d.offsetHeight,
      w: d.offsetWidth,
      overflow: getComputedStyle(d).overflow,
      color: getComputedStyle(d).color,
    })),
    numberStyles: numbers.slice(0, 8).map((n) => ({
      text: n.textContent,
      h: n.offsetHeight,
      w: n.offsetWidth,
      color: getComputedStyle(n).color,
      transform: getComputedStyle(n).transform,
      visibility: getComputedStyle(n).visibility,
    })),
    statCards: [...document.querySelectorAll("article")].slice(0, 4).map((a) => a.textContent?.replace(/\s+/g, " ").trim()),
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
