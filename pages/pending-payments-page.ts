// playwright-dev-page.ts
import { Locator, Page } from '@playwright/test';

export class PendingPaymentsPage {
  readonly page: Page;
  readonly pendingPayablesTab: Locator;
  readonly pendingPayablesCount: Locator;
  readonly pendingReceivablesTab: Locator;
  readonly pendingReceivablesCount: Locator;
  readonly cavagesRow: Locator;
  readonly paymentsInTransitHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pendingPayablesTab = page.getByRole('tab', { name: 'Pending Payables' });
    this.pendingPayablesCount = page
      .getByRole('tab', { name: 'Pending Payables' })
      .locator('span >> nth=0');
    this.pendingReceivablesTab = page.getByRole('tab', { name: 'Pending Receivables' });
    this.pendingReceivablesCount = page
      .getByRole('tab', { name: 'Pending Receivables' })
      .locator('span >> nth=0');
    this.cavagesRow = page.locator('.editRow:has-text("Cavages")');
    this.paymentsInTransitHeader = page.locator('h3:has-text("Payments currently in transit")');
  }

  async navigation() {
    await this.page.goto('/pending_payments');
  }
}
