import { test, expect } from "@playwright/test";

test.describe("Dashboard tests", () => {
  test("Dashboard - verify payment approvals", async ({ page }) => {
    await page.goto("/dashboard");
    const dashboardText = await page.locator(
      'a:has-text("Click here to finish company verification steps and unlock the full power of Plooto.")'
    );
    const paymentsAwaitingApproval = await page.getByRole("tab", {
      name: "Payments Awaiting My Approval",
    });
    const pendingPayables = await page.getByRole("tab", {
      name: "Pending Payables",
    });

    await expect(dashboardText).toBeVisible();

    //click payment approvals
    await page.locator('a:has-text("Payment Approvals")').click();
    await expect(paymentsAwaitingApproval).toBeVisible();

    //click pending payments
    await page.locator('a:has-text("Pending Payments")').click();
    await expect(pendingPayables).toBeVisible();
  });
});
