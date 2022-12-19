import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard-page';

test.describe('Dashboard tests', () => {
  let dashboardPage;
  test('Dashboard - verify payment approvals', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.navigation();
    await page.pause();
    await expect(dashboardPage.finishVerificationText).toBeVisible();

    //click payment approvals
    await dashboardPage.paymentApprovalsLink.click();
    await expect(page).toHaveURL(/.*payment_approvals/);

    //click pending payments
    await dashboardPage.pendingPaymentsLink.click();
    await expect(page).toHaveURL(/.*pending_payments/);
  });
});
