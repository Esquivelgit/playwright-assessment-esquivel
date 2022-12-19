import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboard-page';
import { LoginPage } from '../../pages/login.page';
import { Navbar } from '../../pages/navbar';
import { CompanySelectionPage } from '../../pages/company-selection-page';
import { PendingPaymentsPage } from '../../pages/pending-payments-page';
import { PaymentApprovalPayables } from '../../pages/payment-approval-page';
import { faker } from '@faker-js/faker';

test.describe('End to End Scenario', () => {
  test('Assumed E2E workflow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const navbar = new Navbar(page);
    const companySelection = new CompanySelectionPage(page);
    const pendingPayments = new PendingPaymentsPage(page);
    const paymentApprovalPayables = new PaymentApprovalPayables(page);

    //Login page and generate random email and password
    await loginPage.navigation();
    await loginPage.login(faker.internet.email(), faker.internet.password());

    //Search and click Plooto Inc
    await expect(page).toHaveURL(/.*company_select/);
    await companySelection.searchInput.fill('Pluto Inc');
    await companySelection.getPlutoIncRow.click();

    //Dashboard click payment approvals link
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(dashboard.finishVerificationText).toBeVisible();
    await dashboard.paymentApprovalsLink.click();

    //dashboard click pending payments link
    await expect(page).toHaveURL(/.*payment_approvals/);
    await dashboard.pendingPaymentsLink.click();

    //pending payments click cavages
    await expect(page).toHaveURL(/.*pending_payments/);
    await expect(pendingPayments.cavagesRow).toBeVisible();
    await pendingPayments.cavagesRow.click();

    //Payment approval page assertions
    await expect(page).toHaveURL(/.*payment_approval/);
    await expect(paymentApprovalPayables.approvalHistoryRow).toContainText('Approval Mandatory');
    await paymentApprovalPayables.approveBtn.click();

    //From here we assume the approval button is functional and "Approval Mandatory" status changes to "Approved"
  });
});
