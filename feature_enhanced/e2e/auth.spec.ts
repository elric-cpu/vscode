import { test, expect } from "@playwright/test";
import { blockExternal, mockSupabase } from "./utils";

test("signup and login route to client portal", async ({ page }) => {
  await blockExternal(page);
  await mockSupabase(page, { id: "user-1", email: "a@b.com", user_metadata: { role: "client", onboarded_client: true } });

  await page.goto("/client-portal-register");
  await page.fill("#name", "Jamie Client");
  await page.fill("#email", "jamie@example.com");
  await page.fill("#password", "Password123!");
  await page.fill("#confirmPassword", "Password123!");
  await page.getByRole("button", { name: /create account/i }).click();
  await expect(page.getByText(/client portal login/i)).toBeVisible();

  await page.fill("input[type=email]", "jamie@example.com");
  await page.fill("input[type=password]", "Password123!");
  await page.getByRole("button", { name: /sign in/i }).click();
  await expect(page.getByText(/my projects/i)).toBeVisible();
});

test("session restore keeps user in portal", async ({ page }) => {
  await blockExternal(page);
  await mockSupabase(page, { id: "user-1", email: "a@b.com", user_metadata: { role: "client", onboarded_client: true } });
  await page.goto("/client-portal");
  await expect(page.getByText(/my projects/i)).toBeVisible();
});

test("forgot password flow sends reset email", async ({ page }) => {
  await blockExternal(page);
  await mockSupabase(page, { id: "user-1", email: "a@b.com", user_metadata: { role: "client" } });
  await page.goto("/client-portal-forgot-password");
  await page.fill("input[type=email]", "jamie@example.com");
  await page.getByRole("button", { name: /one time password/i }).click();
  await expect(page.getByText(/check your email/i)).toBeVisible();
});
