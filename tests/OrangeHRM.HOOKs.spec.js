import { test, expect } from "@playwright/test";

import { faker } from "@faker-js/faker";
import { beforeEach } from "node:test";

let arr = ["Admin", "admin123"];

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator(`//input[@name="username"]`).fill(arr[0]);
  await page.locator(`//input[@name="password"]`).fill(arr[1]);
  await page.locator(`//button[@type="submit"]`).click();

  await page
    .locator(
      `(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]`,
    )
    .click();
  await page.locator(`(//a[@class="oxd-topbar-body-nav-tab-item"])[2]`).click();
});

test.afterEach(async ({ page }) => {
  await page
    .locator(
      `//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]`,
    )
    .click();
});

test("Verify login without Picture", { tag: "@RUN" }, async ({ page }) => {
  await page.locator(`//input[@name="firstName"]`).fill("Jacob");
  await page.locator(`//input[@name="lastName"]`).fill("Elrodi");
  await page
    .locator(`(//input[@class="oxd-input oxd-input--active"])[2]`)
    .fill(faker.string.alpha(9));
});

test("Verify login with JPG format", async ({ page }) => {
  await page.locator(`//input[@name="firstName"]`).fill("Ian");
  await page.locator(`//input[@name="lastName"]`).fill("Somarhelder");
  await page
    .locator(`(//input[@class="oxd-input oxd-input--active"])[2]`)
    .fill(faker.string.alpha(9));
  await page
    .locator(`//input[@type="file"]`)
    .setInputFiles(`test-data/IAN.jpg`);
});

test("Verify login with PNG Format", { tag: "@RUN" }, async ({ page }) => {
  await page.locator(`//input[@name="firstName"]`).fill("Jacob");
  await page.locator(`//input[@name="lastName"]`).fill("Elrodi");
  await page
    .locator(`(//input[@class="oxd-input oxd-input--active"])[2]`)
    .fill(faker.string.alpha(9));
  await page
    .locator(`//input[@type="file"]`)
    .setInputFiles(`test-data/JACOB ELRODI.png`);
});

test("Verify login with GIF Format", async ({ page }) => {
  await page.locator(`//input[@name="firstName"]`).fill("Christopher");
  await page.locator(`//input[@name="lastName"]`).fill("Briney");
  await page
    .locator(`(//input[@class="oxd-input oxd-input--active"])[2]`)
    .fill(faker.string.alpha(9));
  await page
    .locator(`//input[@type="file"]`)
    .setInputFiles(`test-data/BRINEY.gif`);
});
