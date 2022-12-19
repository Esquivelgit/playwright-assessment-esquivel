import { test, expect } from '@playwright/test';
import { PaymentApprovalPayables } from '../pages/payment-approval-page';

test.describe('Payment Approval tests', () => {
  let paymentApproval;
  test('Payment Approval page validation', async ({ page }) => {
    const paymentApproval = new PaymentApprovalPayables(page);
    await paymentApproval.navigation();

    await expect(await page.getByText('Sent Payment Details')).toBeVisible();
    await page.getByRole('button', { name: 'Approve' }).click();
  });
});
