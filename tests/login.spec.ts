import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Login tests", () => {
  test("Navigation", async ({ page }) => {
    const randomEmail = faker.internet.email();
    const plootoTab = page.getByRole("tab", { name: "Plooto Inc." });

    await page.goto("/login");
    await page.locator('[type="email"]').fill(randomEmail);
    await page.locator('[type="password"]').fill("password123!");
    await page.locator('.btn-success-green:has-text("Sign In")').click();

    await expect(page).toHaveURL(/.*company_select/);
    await expect(plootoTab).toBeVisible();
  });
});
