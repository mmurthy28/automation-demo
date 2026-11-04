import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBar: Locator;
  readonly submitButton: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.getByPlaceholder('Search');
    this.submitButton = page.getByRole('button', { name: 'Search' });
    this.productNames = page.locator('h5[data-test="product-name"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async typeQuery(query: string) {
    await this.searchBar.fill(query);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async getProductNames() {
    await this.productNames.first().waitFor({ state: 'visible' });
    const productNames = await this.productNames.allTextContents();
    let productNamesTrimmed = productNames.map((name) => name.trim());
    return productNamesTrimmed;
  }
}
