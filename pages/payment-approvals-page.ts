// playwright-dev-page.ts
import { Locator, Page } from '@playwright/test';

export class PaymentApprovalsPage {
  readonly page: Page;
  readonly paymentsAwaitingMyApproval: Locator;
  readonly allPaymentsAwaitingApproval: Locator;
  readonly paymentApprovalsHeader: Locator;
  readonly paymentAwaitingRow: Locator;
  readonly paymentAwaitingRowCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentsAwaitingMyApproval = page.getByRole('tab', {
      name: 'Payments Awaiting My Approval',
    });

    this.allPaymentsAwaitingApproval = page.getByRole('tab', {
      name: 'All Payments Awaiting Approval',
    });
    this.paymentApprovalsHeader = page.locator('h3:has-text("Payment approvals")');

    this.paymentAwaitingRow = page.locator('.editRow.payment-line-item-parent');
    this.paymentAwaitingRowCheckbox = this.paymentAwaitingRow.locator('.btn-checkbox');
  }

  async navigation() {
    await this.page.goto('/payment_approvals');
  }
}
