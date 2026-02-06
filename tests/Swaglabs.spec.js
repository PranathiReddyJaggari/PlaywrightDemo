import { test, expect } from '@playwright/test';

test('Verify the user can go to the Products page', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator(" input[placeholder='Username']").fill('standard_user')
  await page.locator(" input[placeholder='Password'] ").fill('secret_sauce')
  await page.locator(" input[type='submit'] ").click();
  await expect(page.locator("span.title")).toBeVisible();

});

  test('Verify if the error message is visible ', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[placeholder='Username']").fill('locked_out_user')
    await page.locator(" input[placeholder='Password'] ").fill('secret_sauce')
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("h3[data-test='error']")).toBeVisible();

  });

  test('Verify entering only Username', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[placeholder='Username']").fill('standard_user')
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("h3[data-test='error']")).toBeVisible();

  });

  test('Verify entering only the password', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[placeholder='Password'] ").fill('secret_sauce')
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("h3[data-test='error']")).toBeVisible();

  });

  test('Verify without entering anything', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("h3[data-test='error']")).toBeVisible();

  });

  test('Verify the user can add a product to the cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[placeholder='Username']").fill('standard_user')
    await page.locator(" input[placeholder='Password'] ").fill('secret_sauce')
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("span.title")).toBeVisible();

    await page.locator(" button[data-test='add-to-cart-sauce-labs-backpack'] ").click();
    await page.locator(" a.shopping_cart_link ").click();
    await expect(page.locator("div.cart_desc_label")).toBeVisible();

  });

  test('Check out page', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[placeholder='Username']").fill('standard_user')
    await page.locator(" input[placeholder='Password'] ").fill('secret_sauce')
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("span.title")).toBeVisible();

    await page.locator(" button[data-test='add-to-cart-sauce-labs-backpack'] ").click();
    await page.locator(" a.shopping_cart_link ").click();
    await expect(page.locator("div.cart_desc_label")).toBeVisible();

    await page.locator(" button.btn.btn_action ").click();

  });

  test(' Check out overview page ', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator(" input[placeholder='Username']").fill('standard_user')
    await page.locator(" input[placeholder='Password'] ").fill('secret_sauce')
    await page.locator(" input[type='submit'] ").click();
    await expect(page.locator("span.title")).toBeVisible();

    await page.locator(" button[data-test='add-to-cart-sauce-labs-backpack'] ").click();
    await page.locator(" a.shopping_cart_link ").click();
    await expect(page.locator("div.cart_desc_label")).toBeVisible();

    await page.locator(" button.btn.btn_action ").click();
    await page.locator(" input[placeholder='First Name'] ").fill(' will');
    await page.locator(" input[placeholder='Last Name']").fill(' byers');
    await page.locator(" input[placeholder='Zip/Postal Code'] ").fill(' 333333 ');
    await page.locator(" input[type='submit']").click();

    await expect(page.locator("//span[@data-test='title']")).toBeVisible();

  });



