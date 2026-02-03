import { test, expect } from "@playwright/test";
import { expectH1, routes } from "../utils/routes";
import { blockExternal } from "../../e2e/utils";

test.describe("Smoke: Home", () => {
  test("home page renders hero", async ({ page }) => {
    await blockExternal(page);
    await page.goto(routes.home);
    await expectH1(
      page,
      "Professional Home Restoration & Remodeling Services in Oregon",
    );
    await expect(page.getByRole("main")).toBeVisible();
  });
});
