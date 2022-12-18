import { test, expect } from "@playwright/test";

test.describe("Payment Approval tests", () => {
  test("Payment approvals validation", async ({ page }) => {
    await page.goto("/payment_approvals");

    const paymentsAwaitingApproval = await page.getByRole("tab", {
      name: "Payments Awaiting My Approval",
    });
    const pendingPayables = await page.getByRole("tab", {
      name: "All Payments Awaiting Approval",
    });

    await expect(paymentsAwaitingApproval).toBeVisible();
    await expect(pendingPayables).toBeVisible();
  });
});
