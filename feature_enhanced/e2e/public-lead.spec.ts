import { test, expect } from "@playwright/test";
import { blockExternal } from "./utils";

test("public lead funnel submits", async ({ page }) => {
  await blockExternal(page);
  await page.route("**/lead", (route) =>
    route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) })
  );

  await page.goto("/services/commercial/service-agreements");
  await page.fill("#companyName", "Acme Property Mgmt");
  await page.fill("#contactName", "Jamie Lee");
  await page.fill("#contactEmail", "jamie@example.com");
  await page.getByRole("button", { name: "Continue" }).click();

  await page.fill("#propertyAddress", "123 Main St, OR");
  await page.fill("#propertyType", "Medical office");
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByRole("button", { name: /submit request/i }).click();
  await expect(page.getByText(/request received/i)).toBeVisible();
});
