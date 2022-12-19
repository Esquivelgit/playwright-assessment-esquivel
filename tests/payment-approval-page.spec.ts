import { test, expect } from '@playwright/test';

test.describe('Payment Approval tests', () => {
  test('Payment Approval page validation', async ({ page }) => {
    await page.goto('/payment_approval');

    await expect(await page.getByText('Sent Payment Details')).toBeVisible();
    await page.getByRole('button', { name: 'Approve' }).click();
  });
});
