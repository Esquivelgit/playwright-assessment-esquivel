import { test, expect } from '@playwright/test';
import { PaymentApprovalsPage } from '../pages/payment-approvals-page';

test.describe('Payment Approval tests', () => {
  let paymentApprovals;
  test('Payment approvals validation', async ({ page }) => {
    const paymentApprovals = new PaymentApprovalsPage(page);
    await paymentApprovals.navigation();

    await expect(paymentApprovals.paymentApprovalsHeader).toBeVisible();
    await expect(paymentApprovals.allPaymentsAwaitingApproval).toBeVisible();
    await expect(paymentApprovals.paymentsAwaitingMyApproval).toBeVisible();
  });
});
