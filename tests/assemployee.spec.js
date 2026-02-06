import { test, expect } from '@playwright/test';


test('Verify the Admin User can add Employee', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator(" img[alt='company-branding'] ")).toBeVisible();

  await page.locator("input[name='username']").fill('Admin');
  await page.locator("input[type='password']").fill('admin123');
  await page.locator("button[type='submit']").click();
  await expect(page.locator(" h6.oxd-text.oxd-text--h6 ")).toBeVisible();

  await page.locator(" (//span[contains(@class,'oxd-text oxd-text--span')])[2] ").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();

  await page.locator(" input[name='firstName'] ").fill('Pranathi');
  await page.locator(" input[name='lastName'] ").fill('Jaggari');
  await page.locator(" (//input[@class='oxd-input oxd-input--active'])[2]").fill('9853');
  await page.locator(" button[type='submit'] ").click();
  await expect(page.locator(" //h6[text()='Personal Details']")).toBeVisible()

});

test('Verify the validation message for Mandatory fields in Add Employee', async ({ page }) => {

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator(" img[alt='company-branding'] ")).toBeVisible();

  await page.locator("input[name='username']").fill('Admin');
  await page.locator("input[type='password']").fill('admin123');
  await page.locator("button[type='submit']").click();
  await expect(page.locator(" h6.oxd-text.oxd-text--h6 ")).toBeVisible();

  await page.locator(" (//span[contains(@class,'oxd-text oxd-text--span')])[2] ").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();

  await page.locator(" button[type='submit'] ").click();


});