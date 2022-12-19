import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/login.page';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigation();
  });

  test('Invalid email ', async ({ page }) => {
    await loginPage.emailInput.fill('invalidemail.com');
    await loginPage.passwordInput.fill('Validpassword123!');
    await loginPage.getSignInBtn.click();
    await expect(page.locator('[class=invalid_email"]')).toContain(
      'Please enter a valid email address'
    );
  });

  test('Invalid password ', async ({ page }) => {
    await loginPage.emailInput.fill(faker.internet.email());
    await loginPage.passwordInput.fill('invalidpassword');
    await loginPage.getSignInBtn.click();

    await expect(page.locator('[class=invalid_email"]')).toContain(
      'Please enter a valid password'
    );
  });

  test('Successful Login', async ({ page }) => {
    const plootoTab = page.getByRole('tab', { name: 'Plooto Inc.' });

    await loginPage.login(faker.internet.email(), 'Validpassword123!');
    await expect(page).toHaveURL(/.*company_select/);
    await expect(plootoTab).toBeVisible();
  });
});
