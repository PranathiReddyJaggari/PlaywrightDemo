import { test, expect } from '@playwright/test';
import testData from '../test-data/saucedemo-credentials.json';

test('Login as standard user', async ({ page }) => {
  const { username, password } = testData.standardUser;

  // Navigate to Sauce Labs demo site
  await page.goto('https://www.saucedemo.com/');

  // Fill username using getByPlaceholder
  await page.getByPlaceholder('Username').fill(username);

  // Fill password using getByPlaceholder
  await page.getByPlaceholder('Password').fill(password);

  // Click login button using getByRole
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for navigation and verify successful login
  await page.waitForURL('**/inventory.html');

  // Verify products page is loaded
  await expect(page).toHaveTitle('Swag Labs');
  
  // Verify products container is visible
  await expect(page.locator('.inventory_container')).toBeVisible();
});
