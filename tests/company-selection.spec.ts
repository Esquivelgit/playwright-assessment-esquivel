import { test, expect } from '@playwright/test';
import { CompanySelectionPage } from '../pages/company-selection-page';

test.describe('Company Selection page tests', () => {
  let companySelectionPage: CompanySelectionPage;

  test.beforeEach(async ({ page }) => {
    companySelectionPage = new CompanySelectionPage(page);
    await companySelectionPage.navigation();
  });

  test('Clicking Plooto Inc leads to dashboard', async ({ page }) => {
    companySelectionPage = new CompanySelectionPage(page);
    const plutoIncRowText = await companySelectionPage.getPlutoIncRow.textContent();

    //Assertions for Plooto Inc and text info
    expect.soft(plutoIncRowText).toContain('Plooto Inc');
    expect(plutoIncRowText).toContain('Subscription Active');
    expect(plutoIncRowText).not.toContain('Verification In Progress');

    //Click Plooto Inc and validate redirection to dashboard
    await companySelectionPage.getPlutoIncRow.click();
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('Validate Search functionality', async ({ page }) => {
    //Search for Plooto Inc
    await companySelectionPage.searchInput.fill('Plooto Inc');

    //Search should populate 2 rows -> "Plooto Inc" and "Plooto Inc 2"
    await expect(page.locator('tbody > tr')).toHaveCount(2); //Fails
  });
});
