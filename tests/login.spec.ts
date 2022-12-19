import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/login.page';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigation();
  });

  test('Invalid email credentials ', async ({ page }) => {
    await loginPage.emailInput.fill('invalidemail.com');
    await loginPage.passwordInput.fill('Validpassword123!');
    await loginPage.getSignInBtn.click();

    //Assert with assumption that alert surfaces to enter a valid email address
    expect(page.locator('[class=invalid_email"]')).toContain('Please enter a valid email address');
  });

  test('Invalid password credentials ', async ({ page }) => {
    await loginPage.emailInput.fill(faker.internet.email());
    await loginPage.passwordInput.fill('invalidpassword');
    await loginPage.getSignInBtn.click();

    //Assert with assumption that alert surfaces to enter a valid password format
    expect(page.locator('[class=invalid_email"]')).toContain('Please enter a valid password');
  });

  test('Cannot login with empty email and password fields', async ({ page }) => {
    await loginPage.getSignInBtn.click(); //skip entering email and password

    //Assert with assumption that alert surfaces telling user both fields cannot be blank
    expect(page.locator('[class=invalid_email"]')).toContain(
      'Email and Password can not be blank!'
    );
  });

  test('Successful Login/Valid credentials', async ({ page }) => {
    const plootoTab = page.getByRole('tab', { name: 'Plooto Inc.' });

    //Generate email and password. Assume both are valid
    await loginPage.login(faker.internet.email(), faker.internet.password());
    await expect(page).toHaveURL(/.*company_select/);
    await expect(plootoTab).toBeVisible();
  });
});
