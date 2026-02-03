import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y, configureAxe } from "@axe-core/playwright";
import { routes } from "../utils/routes";
import { blockExternal } from "../../e2e/utils";

test.describe("A11y: Core Pages", () => {
  test("home", async ({ page }) => {
    await blockExternal(page);
    await page.goto(routes.home);
    await injectAxe(page);
    await configureAxe(page, { rules: { "color-contrast": { enabled: true } } });
    await checkA11y(page, undefined, { detailedReport: true });
  });

  test("services", async ({ page }) => {
    await blockExternal(page);
    await page.goto(routes.services);
    await injectAxe(page);
    await checkA11y(page, undefined, { detailedReport: true });
  });

  test("contact", async ({ page }) => {
    await blockExternal(page);
    await page.goto(routes.contact);
    await injectAxe(page);
    await checkA11y(page, undefined, { detailedReport: true });
  });

  test("keyboard smoke path", async ({ page }) => {
    await blockExternal(page);
    await page.goto(routes.contact);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const activeTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeTag).not.toBe("BODY");
  });
});
