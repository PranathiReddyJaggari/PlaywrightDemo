import { test, expect } from "@playwright/test";
import { textPage } from "../../pages/textbox.po";
import data from "../../test-data/textbox.json";

test(`Verify textbox details`, async ({ page }) => {
  const textbox = new textPage(page);

  await textbox.URL();
  await textbox.fillDetails(
    data.fullname,
    data.email,
    data.currentAddress,
    data.permanentAddress,
  );
  await textbox.verifyDetails(
    data.fullname,
    data.email,
    data.currentAddress,
    data.permanentAddress,
  );
});
