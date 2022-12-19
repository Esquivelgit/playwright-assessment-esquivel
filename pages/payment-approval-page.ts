// playwright-dev-page.ts
import { Locator, Page } from '@playwright/test';

export class PaymentApprovalPayables {
  readonly page: Page;
  readonly sentPymtDetails: Locator;
  readonly exportPdfBtn: Locator;
  readonly editBtn: Locator;
  readonly deleteBtn: Locator;
  readonly approveBtn: Locator;
  readonly rejectBtn: Locator;
  readonly pymntApprovalHistory: Locator;
  readonly approvalHistoryRow: Locator;
  readonly auditTrail: Locator;
  readonly paymentLineItems: Locator;
  readonly additionalDetails: Locator;
  readonly recentTransactionsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sentPymtDetails = page.getByText('Sent Payment Details');
    this.exportPdfBtn = page.getByRole('link', { name: 'Export PDF' });
    this.editBtn = page.getByRole('link', { name: 'Edit' });
    this.deleteBtn = page.getByRole('link', { name: 'Delete' });
    this.approveBtn = page.getByRole('button', { name: 'Approve' });
    this.rejectBtn = page.getByRole('button', { name: 'Reject' });
    this.pymntApprovalHistory = page.locator('#components-user-payments-paymentApprovalHistory');
    this.approvalHistoryRow = page.locator(
      '#components-user-payments-paymentApprovalHistory >> td'
    );
    this.auditTrail = page.locator('#components-user-auditLogs-auditLogsList');
    this.paymentLineItems = page.locator('#components-user-payments-paymentLineItems');
    this.additionalDetails = page.locator('.details-container:has-text("Created Date")');
    this.recentTransactionsTable = page.locator(
      '#components-user-payments-tables-transactionsTable'
    );
  }

  async navigation() {
    await this.page.goto('/payment_approval');
  }
}
