import { test, expect } from '@playwright/test';
import { PaymentApprovalPayables } from '../pages/payment-approval-page';

test.describe('Payment Approval tests', () => {
  let paymentApproval: PaymentApprovalPayables;

  test.beforeEach(async ({ page }) => {
    paymentApproval = new PaymentApprovalPayables(page);
    await paymentApproval.navigation();
  });

  test('Payment Approval page validation', async ({ page }) => {
    await expect(await page.getByText('Sent Payment Details')).toBeVisible();
    await page.getByRole('button', { name: 'Approve' }).click();
  });

  test('Test Delete button functionality', async ({ page }) => {
    //failing
    await expect(paymentApproval.sentPymtDetails).toBeVisible();
    await paymentApproval.deleteBtn.click();

    //Assert user is given a warning before deleting payment details
    await expect(page.locator('.alert')).toContain('Are you sure you want to delete?');
  });
});
