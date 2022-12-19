import { test, expect } from '@playwright/test';
import { CompanySelectionPage } from '../pages/company-selection-page';

test.describe('Company Selection tests', () => {
  let companySelectionPage;

  test.beforeEach(async ({ page }) => {
    companySelectionPage = new CompanySelectionPage(page);
    await companySelectionPage.navigation();
  });

  test('Clicking Plooto Inc leads to dashboard', async ({ page }) => {
    companySelectionPage = new CompanySelectionPage(page);
    const plutoIncRowText = await companySelectionPage.getPlutoIncRow.textContent();

    expect.soft(plutoIncRowText).toContain('Plooto Inc');
    expect(plutoIncRowText).toContain('Subscription Active');
    expect(plutoIncRowText).not.toContain('Verification In Progress');

    //Click Ploot inc and validate redirection to dashboard
    await companySelectionPage.getPlutoIncRow.click();
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
