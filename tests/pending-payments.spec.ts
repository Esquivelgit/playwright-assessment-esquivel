import { test, expect } from '@playwright/test';

test.describe('Pending Payments tests', () => {
  test('Pending Payments validation', async ({ page }) => {
    await page.goto('/pending_payments');
    const rows = await page.locator('tr');

    const pendingPayables = await page.getByRole('tab', {
      name: 'Pending Payables',
    });
    const pendingReceivables = await page.getByRole('tab', {
      name: 'Pending Receivables',
    });

    //Validate Pending Payables and Pending Receivables buttons

    await expect(pendingPayables).toBeVisible();
    await expect(pendingReceivables).toBeVisible();

    //payment to Cavages links to payment approval page
    await rows.locator('text=Cavages').click();
    await expect(page).toHaveURL(/.*payment_approval/);
  });
});
