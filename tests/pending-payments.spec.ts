import { test, expect } from '@playwright/test';
import { PendingPaymentsPage } from '../pages/pending-payments-page';

test.describe('Pending Payments tests', () => {
  let pendingPayments;
  test('Pending Payments validation', async ({ page }) => {
    const pendingPayments = new PendingPaymentsPage(page);
    await pendingPayments.navigation();

    await expect(pendingPayments.pendingPayablesTab).toBeVisible();
    await expect(pendingPayments.pendingReceivablesTab).toBeVisible();

    //payment to Cavages links to payment approval page
    await expect(pendingPayments.cavagesRow).toBeVisible();
    await expect(pendingPayments.paymentsInTransitHeader).toBeVisible();
    await pendingPayments.cavagesRow.click();
    // await rows.locator('text=Cavages').click();
    await expect(page).toHaveURL(/.*payment_approval/);
  });
});
