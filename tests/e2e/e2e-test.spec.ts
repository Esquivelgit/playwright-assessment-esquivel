import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboard-page';
import { LoginPage } from '../../pages/login.page';
import { Navbar } from '../../pages/navbar';
import { CompanySelectionPage } from '../../pages/company-selection-page';
import { PendingPaymentsPage } from '../../pages/pending-payments-page';
import { PaymentApprovalPayables } from '../../pages/payment-approval-page';
import { faker } from '@faker-js/faker';

test.describe('End to End Scenario', () => {
  test('E2E workflow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const navbar = new Navbar(page);
    const companySelection = new CompanySelectionPage(page);
    const pendingPayments = new PendingPaymentsPage(page);
    const paymentApprovalPayables = new PaymentApprovalPayables(page);

    //login
    await loginPage.navigation();
    //Generate random email and password
    await loginPage.login(faker.internet.email(), faker.internet.password());

    //Click Plooto Inc
    await companySelection.getPlutoIncRow.click();

    //dashboard click payment approvals link
    await dashboard.paymentApprovalsLink.click();

    //dashboard click pending payments link
    await dashboard.pendingPaymentsLink.click();

    //pending payments click cavages
    await pendingPayments.cavagesRow.click();

    //Payment approval page assertions
    await expect(await page).toHaveURL(/.*payment_approval/);
    await expect(await paymentApprovalPayables.approvalHistoryRow).toContainText(
      'Approval Mandatory'
    );
    await paymentApprovalPayables.approveBtn.click();
  });
});
