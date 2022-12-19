// playwright-dev-page.ts
import { Locator, Page } from '@playwright/test';

export class Navbar {
  readonly page: Page;
  readonly dashboardLink: Locator;
  readonly payablesLink: Locator;
  readonly receivablesLink: Locator;
  readonly contactsLink: Locator;
  readonly bankLink: Locator;
  readonly approvalsLink: Locator;
  readonly helpCenterLink: Locator;
  readonly companyName: Locator;
  readonly brandLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    this.payablesLink = page.getByRole('link', { name: 'Payables' });
    this.receivablesLink = page.getByRole('link', { name: 'Receivables' });
    this.contactsLink = page.getByRole('link', { name: 'Contacts' });
    this.bankLink = page.getByRole('link', { name: 'Bank' });
    this.approvalsLink = page.getByRole('link', { name: 'Approvals' });
    this.helpCenterLink = page.getByRole('link', { name: 'Help Center' });
    this.companyName = page.locator('#nav-company-name');
    this.brandLogo = page.locator('.navbar-brand');
  }
}
