import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard-page';
import { PaymentApprovalsPage } from '../pages/payment-approvals-page';

test.describe('Payment Approval tests', () => {
  test('Number of Payment Approvals link matches Payments Awaiting tab', async ({ page }) => {
    const paymentApprovals = new PaymentApprovalsPage(page);
    const dashboardPage = new DashboardPage(page);

    await paymentApprovals.navigation();

    //Assert navigated to correct page / Validate payments tabs populate
    await expect(page).toHaveURL(/.*payment_approvals/);
    await expect(paymentApprovals.paymentApprovalsHeader).toBeVisible();
    await expect(paymentApprovals.paymentsAwaitingMyApproval).toBeVisible();

    //Assert both Payment Approvals tabs equal 1
    await expect(dashboardPage.paymentApprovalsCount).toHaveCount(1);
    await expect(paymentApprovals.paymentsAwaitingMyApprovalCounter).toHaveCount(1);
  });
});
