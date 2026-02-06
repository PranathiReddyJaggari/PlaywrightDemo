import { test, expect } from '@playwright/test';

import data from '../test-data/demoqa.json';
import { da } from '@faker-js/faker';

test('Verify TextBox Info', async ({ page }) => {
  
await page.goto("https://demoqa.com/text-box")
await page.locator("input[placeholder='Full Name']").fill(data.UserName);
await page.locator("input[placeholder='name@example.com']").fill(data.USerEmail);
await page.locator("textarea[placeholder='Current Address']").fill(data.CurrentAddress);
await page.locator("textarea#permanentAddress").fill(data.PermenentAddress);

  
}); 
