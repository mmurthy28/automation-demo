import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.emailInput = page.getByPlaceholder('Your email *');
    this.messageInput = page.getByLabel('Message', {exact: false });
    this.submitButton = page.getByRole('button', { name: 'Send' });
    this.errorMessages = page.locator('div[role="alert"]');
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async typeFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async typeLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async typeEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async typeMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async getErrorMessages() {
    await this.errorMessages.first().waitFor({ state: 'visible' });
    const errorMessages = await this.errorMessages.allTextContents();
    let errorMessagesTrimmed = errorMessages.map((message) => message.trim());
    return errorMessagesTrimmed;
  }
}
