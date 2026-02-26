import { test, expect } from "@playwright/test";

test("verify login with valid credentials", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.locator(`//input[@name="password"]`).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await page
    .locator(
      '//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]',
    )
    .first()
    .waitFor();

  const menuitems = await page
    .locator(
      '//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]',
    )
    .allTextContents();

  console.log(menuitems.length);

  expect(menuitems.length).toBe(12);

  // const menuitems = await page
  //   .locator(
  //     `//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]`,
  //   )
  //   .allTextContents();

  // console.log(menuitems);
});

// test('verify login with wrong username and right password', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('abcdefg');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// });

// test('verify login with right username and wrong password', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('abcdefg123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// });

// test('verify login with wrong username and wrong password', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin123');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('abcdefg123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// });
