const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const sitePath = path.resolve(__dirname, "..", "outputs", "azamat-print-site", "index.html");
  const siteUrl = `file:///${sitePath.replace(/\\/g, "/")}`;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

  await page.goto(siteUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await page.getByRole("heading", { name: "Azamat Print" }).waitFor();
  await page.locator("#services").scrollIntoViewIfNeeded();
  await page.locator(".accordion-trigger").nth(1).click();
  const secondAccordionOpen = await page.locator(".accordion-item").nth(1).evaluate((node) => node.classList.contains("open"));
  if (!secondAccordionOpen) throw new Error("Accordion did not open.");

  await page.locator("#prices").scrollIntoViewIfNeeded();
  const initialCards = await page.locator(".price-card").count();
  if (initialCards < 8) throw new Error(`Expected multiple price cards, found ${initialCards}.`);
  await page.locator("#searchInput").fill("Фото");
  const filteredCards = await page.locator(".price-card").count();
  if (filteredCards < 1) throw new Error("Price search returned no cards.");
  await page.locator("#searchInput").fill("");

  await page.locator("#reviews").scrollIntoViewIfNeeded();
  await page.locator('[name="name"]').fill("QA Тексеру");
  await page.locator('[name="text"]').fill("Пікір формасы дұрыс жұмыс істейді.");
  await page.getByRole("button", { name: "Жіберу" }).click();
  await page.getByText("QA Тексеру").waitFor();

  await page.locator("#login").scrollIntoViewIfNeeded();
  await page.locator('[name="username"]').fill("admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.getByRole("button", { name: "Кіру" }).click();
  await page.getByText("Әкімші панелі").waitFor();
  await page.getByRole("button", { name: "Байланыс деректері" }).click();
  await page.getByText("Байланыс деректері").waitFor();

  await page.screenshot({ path: path.resolve(__dirname, "azamat-site-desktop.png"), fullPage: true });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 1100 }, isMobile: true });
  await mobile.goto(siteUrl);
  await mobile.evaluate(() => localStorage.clear());
  await mobile.reload();
  await mobile.getByRole("button", { name: "Мәзір" }).click();
  await mobile.getByRole("link", { name: "Қызметтер" }).click();
  await mobile.locator("#services").waitFor();
  await mobile.screenshot({ path: path.resolve(__dirname, "azamat-site-mobile.png"), fullPage: true });

  await browser.close();
  console.log(JSON.stringify({ initialCards, filteredCards, screenshots: ["work/azamat-site-desktop.png", "work/azamat-site-mobile.png"] }, null, 2));
})().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
