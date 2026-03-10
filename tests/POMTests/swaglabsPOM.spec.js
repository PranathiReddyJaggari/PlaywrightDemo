import { test, expect } from "@playwright/test";
import { swaglabsLogin } from "../../pages/swaglabs.po";
import data from "../../test-data/swaglabs.json";

test(`Verify swaglabs login`, async ({ page }) => {
  const swaglab = new swaglabsLogin(page);
  await swaglab.LaunchURL();
  await swaglab.fillDetails(data.ID, data.PS);
  await swaglab.displayPage();
});
