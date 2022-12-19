// playwright-dev-page.ts
import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly setupPaymentsLink: Locator;
  readonly paymentApprovalsLink: Locator;
  readonly pendingPaymentsLink: Locator;
  readonly completedPaymentsLink: Locator;
  readonly foreignExchangeCalcLink: Locator;
  readonly getCurrencyAmt: Locator;
  readonly addFundsBtn: Locator;
  readonly feedbackSubmitBtn: Locator;
  readonly finishVerificationText: Locator;
  readonly onboardingPanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.setupPaymentsLink = page.getByRole('link', {
      name: 'Set Up Payments',
    });

    this.paymentApprovalsLink = page.getByRole('link', {
      name: 'Payment Approvals',
    });

    this.pendingPaymentsLink = page.getByRole('link', {
      name: 'Pending Payments',
    });

    this.completedPaymentsLink = page.getByRole('link', {
      name: 'Completed Payments',
    });

    this.foreignExchangeCalcLink = page.getByRole('link', {
      name: 'Foreign Exchange Calculator',
    });
    this.getCurrencyAmt = page.locator('.panel-body >> .currency-USD');
    this.addFundsBtn = page.getByRole('button', { name: 'Add Funds' });
    this.getCurrencyAmt = page.locator('.panel-body >> .currency-USD');
    this.feedbackSubmitBtn = page.getByRole('button', { name: 'Submit' });
    this.finishVerificationText = page.locator(
      'a:has-text("Click here to finish company verificatio steps and unlock the full power of Plooto.")'
    );
    this.onboardingPanel = page.locator(
      '#components-user-onboarding-verifications-outstandingVerificationItems'
    );
  }

  async navigation() {
    await this.page.goto('/dashboard');
  }
}
