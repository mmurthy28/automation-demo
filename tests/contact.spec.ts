import { test, expect } from '../pages/BaseTest';

test('shows error messages for invalid form inputs @contact', async ({ page, contactPage }) => {
  await contactPage.goto();
  await contactPage.typeFirstName('John');
  await contactPage.typeLastName('Doe');
  await contactPage.typeEmail('john.doe@example.com');
  await contactPage.typeMessage('Hello, this is a test message.');
  await contactPage.clickSubmit();
  const errorMessages = await contactPage.getErrorMessages(); 
  expect(errorMessages).toContain('Message must be minimal 50 characters');
});
