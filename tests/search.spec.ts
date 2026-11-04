import { test, expect } from '../pages/BaseTest';

test.describe('Search Page Tests @search', () => {

  test.beforeEach(async ({ homePage }) => {  
    await homePage.goto();
  });

  test('can perform a search',async ({ homePage }) => {
    await homePage.typeQuery('slip join pliers');
    await homePage.clickSubmit();
    const productNames = await homePage.getProductNames();
    expect(productNames).toContain('Slip Joint Pliers');
  });

  test('can perform a search for hammer', async ({ homePage }) => {
    await homePage.typeQuery('Thor Hammer');
    await homePage.clickSubmit();
    const productNames = await homePage.getProductNames();
    expect(productNames).toContain('Thor Hammer');
  });
});
