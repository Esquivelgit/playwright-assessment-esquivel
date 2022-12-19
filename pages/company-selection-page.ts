// playwright-dev-page.ts
import { Locator, Page } from '@playwright/test';

export class CompanySelectionPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly plootoIncTab: Locator;
  readonly acmeTiresTab: Locator;
  readonly acmeCorpTab: Locator;
  readonly geoffsBusinessTab: Locator;
  readonly otherCompaniesTab: Locator;
  readonly getPlutoIncRow: Locator;
  readonly addNewClientBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search for Company' });
    this.plootoIncTab = page.getByRole('tab', { name: 'Plooto Inc.' });
    this.acmeTiresTab = page.getByRole('tab', { name: 'Acme Tires Inc.' });
    this.acmeCorpTab = page.getByRole('tab', { name: 'Acme Corp Inc.' });
    this.geoffsBusinessTab = page.getByRole('tab', { name: "Geoff's Big Business" });
    this.otherCompaniesTab = page.getByRole('tab', { name: 'Other Companies' });
    this.getPlutoIncRow = page.locator('tr').locator(':scope', { hasText: 'Plooto Inc' }).first();
    this.addNewClientBtn = page.getByRole('button', { name: 'Add New Client' });
  }

  async navigation() {
    await this.page.goto('/company_select');
  }
}
