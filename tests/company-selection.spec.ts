import { test, expect } from "@playwright/test";

test.describe("Company Selection tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/company_select");
  });

  test("Clicking Plooto Inc leads to dashboard", async ({ page }) => {
    const rows = await page.locator("tr");
    const plootoRow = await rows
      .locator(":scope", { hasText: "Plooto Inc" })
      .first();

    await expect(await plootoRow.textContent()).toContain("Plooto Inc");
    await expect(await plootoRow.textContent()).toContain(
      "Subscription Active"
    );

    //click Plooto
    await plootoRow.click();

    //Validate redirection to dashbaord
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
