import { test, expect } from "@playwright/test";

import { faker, Faker } from "@faker-js/faker";

const candidatedetails = {
  candidate1: { firstname: "Damon", lastname: "Salvatore" },
  candidate2: { firstname: "Jacob", lastname: "Elordi" },
  candidate3: { firstname: "ian", lastname: "somerhalder" },
};

for (let info in candidatedetails) {
  test(`Verify the Admin User can add Employee -${info}`, async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await expect(page.locator(" img[alt='company-branding'] ")).toBeVisible();

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page.locator(" h6. oxd-text.oxd-text--h6 ")).toBeVisible();

    await page
      .locator(" (//span[contains(@class,'oxd-text oxd-text--span')])[2] ")
      .click();
    await page.locator("//a[normalize-space(text())='Add Employee']").click();

    await page
      .locator(" input[name='firstName'] ")
      .fill(candidatedetails[info].firstname);
    await page
      .locator(" input[name='lastName'] ")
      .fill(candidatedetails[info].lastname);
    await page
      .locator(" (//input[@class='oxd-input oxd-input--active'])[2]")
      .fill(faker.string.numeric(4));
    await page.locator(" button[type='submit'] ").click();
    await expect(
      page.locator(" //h6[text()='Personal Details']"),
    ).toBeVisible();
  });
}
