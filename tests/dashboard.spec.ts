import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard-page';

test.describe('Dashboard tests', () => {
  test('Dashboard - verify payment approvals', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.navigation();
    await expect(dashboardPage.finishVerificationText).toBeVisible();

    //Assert that Dashboard link is selected at the top navbar (only element to have "active" class)
    await expect(dashboardPage.activeClassLink).toContainText('Dashboard');

    //Validate click Payment Approvals Link opens page
    await dashboardPage.paymentApprovalsLink.click();
    await expect(page).toHaveURL(/.*payment_approvals/);

    //Validate click Pending Payments Link opens page
    await dashboardPage.pendingPaymentsLink.click();
    await expect(page).toHaveURL(/.*pending_payments/);
  });
});
