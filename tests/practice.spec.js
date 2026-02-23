import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';


// test('Verify the Admin User can add Employee', async ({ page }) => {
  
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await expect(page.locator(" img[alt='company-branding'] ")).toBeVisible();

//   await page.locator("input[name='username']").fill('Admin');
//   await page.locator("input[type='password']").fill('admin123');
//   await page.locator("button[type='submit']").click();
//   // await expect(page.locator(" h6.oxd-text.oxd-text--h6 ")).toBeVisible();

//   await page.locator(" (//span[contains(@class,'oxd-text oxd-text--span')])[2] ").click();
//   await page.locator("//a[normalize-space(text())='Add Employee']").click();

//   await page.locator(" input[name='firstName'] ").fill(faker.person.firstName());
//   await page.locator(" input[name='lastName'] ").fill(faker.person.lastName());
//   await page.locator(" (//input[@class='oxd-input oxd-input--active'])[2]").fill(faker.string.alpha(9));
//   await page.locator(" button[type='submit'] ").click();
  
     
// });



test('verify login with valid credentials_example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator("//span[text()='Admin']").click({ timeout: 60000 });
  await page.locator("//span[normalize-space(text())='Job']").click();
  await page.locator("(//a[@role='menuitem'])[1]").click();
  await page.locator("//button[contains(.,'Add')]").click({ timeout: 60000 });

  const randomchars = (Math.random() + 1).toString(36).substring(7);

  const jobTitle = "Software" + randomchars;

  await page.locator("(//span[normalize-space(text())='Configuration']/following::input)[1]").fill(jobTitle);
  await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill(faker.lorem.paragraph());
  await page.locator("//textarea[@placeholder='Add note']").fill(randomchars);

  await page.locator("button[type='submit']").click();



});