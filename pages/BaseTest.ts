import { test as base, Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { ContactPage } from './ContactPage';

type MyFixtures = {
  homePage: HomePage;
  contactPage: ContactPage;
};

export const test  = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  }   
});

export { expect } from '@playwright/test';