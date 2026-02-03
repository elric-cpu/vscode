import { test, expect } from "@playwright/test";
import { blockExternal, mockSupabase } from "./utils";

test("client uploads and deletes a document", async ({ page }) => {
  await blockExternal(page);
  await mockSupabase(page, { id: "user-1", email: "a@b.com", user_metadata: { role: "client", onboarded_client: true } });

  await page.goto("/client-portal");
  await page.getByRole("tab", { name: "Documents" }).click();

  const fileInput = page.getByLabel("Upload document");
  await fileInput.setInputFiles({ name: "test.pdf", mimeType: "application/pdf", buffer: Buffer.from("test") });
  await page.getByRole("button", { name: "Upload" }).click();

  await expect(page.getByText("test.pdf")).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
  await expect(page.getByText("test.pdf")).toHaveCount(0);
});
