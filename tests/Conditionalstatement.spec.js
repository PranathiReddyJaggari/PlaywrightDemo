import { test, expect } from "@playwright/test";

for (let i = 1; i < 3; i++) {
  test(`Verify gallary visibility -${i}`, async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    const visibility = await page
      .locator(' //a[@href="/gallery/"] ')
      .isVisible();

    console.log(visibility);

    if (await page.locator(' //a[@href="/gallery/"] ').isVisible()) {
      console.log("Gallery is Visible");

      await page.locator(' //a[@href="/gallery/"] ').click();
    } else {
      await page.locator(`//a[@href="/portfolio/"]`).click();
    }
  });
}
