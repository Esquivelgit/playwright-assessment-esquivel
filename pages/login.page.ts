// playwright-dev-page.ts
import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly getSignInBtn: Locator;
  readonly signIntuitBtn: Locator;
  readonly forgotPassword: Locator;
  readonly signInText: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[type="email"]');
    this.passwordInput = page.locator('[type="password"]');
    this.getSignInBtn = page.locator('.btn-success-green:has-text("Sign In")');
    this.signIntuitBtn = page.locator('[title="Sign in with Intuit"]');
    this.forgotPassword = page.locator("text=Forgot password?");
    this.signInText = page.locator('p:text("Sign into your account below")');
    this.signUpLink = page.getByRole("link", { name: "Sign Up" });
  }

  async navigation() {
    await this.page.goto("/login");
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.getSignInBtn.click();
  }
}
