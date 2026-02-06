import { test, expect } from '@playwright/test';

test.describe('DELL Laptop Shopping Flow', () => {
  test('should search for DELL laptops, select first product, and add to cart', async ({ page }) => {
    // Step 1: Navigate to Flipkart
    await test.step('Navigate to Flipkart', async () => {
      await page.goto('https://www.flipkart.com');
      await expect(page).toHaveTitle(/Flipkart/);
    });

    // Step 2: Search for DELL Laptops
    await test.step('Search for DELL Laptops', async () => {
      const searchBox = page.getByRole('textbox', { name: /Search for products, brands and more/i });
      await searchBox.fill('DELL Laptops');
      await searchBox.press('Enter');
      await page.waitForTimeout(3000);
      
      // Verify search results are displayed
      await expect(page).toHaveURL(/search/);
      const resultsText = page.locator('text=results for');
      await expect(resultsText).toBeVisible();
    });

    // Step 3: Select the first laptop product
    await test.step('Click on first DELL laptop product', async () => {
      const firstProduct = page.getByRole('link', { 
        name: /DELL 15 \(Core i3 14th Gen\)/i 
      }).first();
      await firstProduct.click();
      
      // Wait for product page to load
      await page.waitForTimeout(2000);
      await expect(page).toHaveURL(/dell-15-core-i3-14th-gen/i);
    });

    // Step 4: Verify product details are displayed
    await test.step('Verify product details', async () => {
      const productTitle = page.locator('h1');
      await expect(productTitle).toContainText(/DELL 15.*Core i3 14th Gen/);
      
      const price = page.locator('text=₹38,990');
      await expect(price).toBeVisible();
      
      const rating = page.locator('text=4.4');
      await expect(rating).toBeVisible();
    });

    // Step 5: Add product to cart
    await test.step('Add product to cart', async () => {
      const addToCartBtn = page.getByRole('button', { name: /Add to cart/i });
      await addToCartBtn.click();
      
      // Wait for cart page to load
      await page.waitForTimeout(2000);
      await expect(page).toHaveURL(/viewcart/);
    });

    // Step 6: Verify product is in cart
    await test.step('Verify product is added to cart', async () => {
      const cartProduct = page.getByRole('link', { 
        name: /DELL 15.*Core i3 14th Gen/i 
      });
      await expect(cartProduct).toBeVisible();
      
      const cartPrice = page.locator('text=₹38,990');
      await expect(cartPrice).toBeVisible();
      
      const totalAmount = page.locator('text=Total Amount');
      await expect(totalAmount).toBeVisible();
      
      const quantity = page.locator('input[value="1"]');
      await expect(quantity).toBeVisible();
    });

    // Step 7: Verify price details
    await test.step('Verify price details in cart', async () => {
      const priceDetails = page.locator('text=Price details');
      await expect(priceDetails).toBeVisible();
      
      const discount = page.locator('text=Discount');
      await expect(discount).toBeVisible();
      
      const discountAmount = page.locator('text=− ₹8,352');
      await expect(discountAmount).toBeVisible();
    });
  });

  test('should allow user to proceed with checkout', async ({ page }) => {
    // Navigate to cart directly
    await page.goto('https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART');
    
    // Verify cart has items
    const cartProduct = page.getByRole('link', { 
      name: /DELL 15.*Core i3 14th Gen/i 
    });
    
    if (await cartProduct.isVisible()) {
      // Step 1: Verify Place Order button is visible
      await test.step('Verify Place Order button', async () => {
        const placeOrderBtn = page.getByRole('button', { name: /Place Order/i });
        await expect(placeOrderBtn).toBeVisible();
      });

      // Step 2: Verify cart summary
      await test.step('Verify cart summary', async () => {
        const totalAmount = page.locator('text=Total Amount');
        await expect(totalAmount).toBeVisible();
        
        const placeOrderBtn = page.getByRole('button', { name: /Place Order/i });
        await expect(placeOrderBtn).toBeEnabled();
      });
    }
  });
});
