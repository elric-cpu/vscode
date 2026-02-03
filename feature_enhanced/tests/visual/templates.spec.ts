import { test, expect } from "@playwright/test";
import { routes } from "../utils/routes";
import { blockExternal } from "../../e2e/utils";

test.describe("Visual: Key Templates", () => {
  test.beforeEach(async ({ page }) => {
    await blockExternal(page);
  });

  test("home snapshot", async ({ page }) => {
    await page.goto(routes.home);
    await expect(page).toHaveScreenshot("home.png", { fullPage: true });
  });

  test("services snapshot", async ({ page }) => {
    await page.goto(routes.services);
    await expect(page).toHaveScreenshot("services.png", { fullPage: true });
  });
});
