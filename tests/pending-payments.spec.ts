import { test, expect } from '@playwright/test';
import { PendingPaymentsPage } from '../pages/pending-payments-page';
import { DashboardPage } from '../pages/dashboard-page';

test.describe('Pending Payments tests', () => {
  test('Pending Payments validation', async ({ page }) => {
    const pendingPayments = new PendingPaymentsPage(page);
    const dashboard = new DashboardPage(page);
    await pendingPayments.navigation();

    //Assert key elements on Pending Payments page are visible
    await expect(pendingPayments.paymentsInTransitHeader).toBeVisible();
    await expect(pendingPayments.pendingPayablesTab).toBeVisible();
    await expect(pendingPayments.pendingReceivablesTab).toBeVisible();

    //Payment to Cavages links to payment approval page
    await expect(pendingPayments.cavagesRow).toBeVisible();
    await pendingPayments.cavagesRow.click();

    //Assert page redirection and Payables tab is active
    await expect(page).toHaveURL(/.*payment_approval/);
    expect(await dashboard.activeClassLink.textContent()).toContain('Payables');
    expect(await dashboard.activeClassLink.textContent()).not.toContain('Dashboard');
  });
});
