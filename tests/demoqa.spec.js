import { test, expect } from '@playwright/test';

import qadata from '../test-data/demoqa.json';

import Proddata from '../test-data/Proddemoqa copy.json';

test('Verify TextBox Info', async ({ page }) => {

  let data;

  if(process.env.ENVIRONMENT === "QA"){
    data = qadata

  }else if(process.env.ENVIRONMENT === "PROD") { 
    data = Proddata
  }
  
await page.goto("https://demoqa.com/text-box")
await page.locator("input[placeholder='Full Name']").fill(data.UserName);
await page.locator("input[placeholder='name@example.com']").fill(data.USerEmail);
await page.locator("textarea[placeholder='Current Address']").fill(data.CurrentAddress);
await page.locator("textarea#permanentAddress").fill(data.PermenentAddress);

  
}); 

