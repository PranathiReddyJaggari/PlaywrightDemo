import { test, expect } from '@playwright/test';
import testData from '../test-data/saucedemo-credentials.json';

test('Login as standard user using XPath', async ({ page }) => {
  const { username, password } = testData.standardUser;

  // Navigate to Sauce Labs demo site
  await page.goto('https://www.saucedemo.com/');

  // Fill username using XPath
  await page.locator('//input[@id="user-name"]').fill(username);

  // Fill password using XPath
  await page.locator('//input[@id="password"]').fill(password);

  // Click login button using XPath
  await page.locator('//input[@id="login-button"]').click();

  // Wait for navigation and verify successful login
  await page.waitForURL('**/inventory.html');

  // Verify products page is loaded
  await expect(page).toHaveTitle('Swag Labs');
  
  // Verify products container is visible using XPath
  await expect(page.locator('//div[@class="inventory_container"]')).toBeVisible();
});
