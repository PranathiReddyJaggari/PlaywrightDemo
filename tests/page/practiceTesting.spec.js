import { test, expect } from "@playwright/test";

let arr = ["Option 1", "Option 2"];

let arr1 = ["10", "20", "50", "100"];

test("Dropdown List page for Automation Testing Practice", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/dropdown");
  await page.locator(`//select[@id="dropdown"]`).selectOption(arr[0]);

  await page
    .locator(`//select[@id="elementsPerPageSelect"]`)
    .selectOption(arr1[2]);

  const count = await options.count();

  for (let i = 0; i < count; i++) {
    const text = await dropdown.locator("option").nth(i).textContent();

    if (text.trim() === "India") {
      await page
        .locator('//select[@id="country"]')
        .selectOption({ label: "India" });
      break; // stop loop once found
    }
  }
});
