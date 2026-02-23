import { test, expect } from "@playwright/test";

test("Verify gallary visibility", async ({ page }) => {
  switch (process.env.ENVIRONMENT) {
    case "QA":
      await page.goto("www.QA.com");

      break;

    case "DEV":
      await page.goto("www.DEV.com");

      break;

    case "UAT":
      await page.goto("https://www.youtube.com/");

      break;

    case "PRODUCTION":
      await page.goto("www.PRODUCTION.com");

      break;

    default:
      console.log("Invalid Environment");
      break;
  }
});
