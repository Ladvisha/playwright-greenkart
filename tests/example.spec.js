// @ts-check
import { test, expect } from '@playwright/test';

test('add product to cart and verify cart count', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // Search for Tomato
  await page.locator('.search-keyword').fill('tom');

  // Select visible product
  const product = page.locator('.product:visible');
  await expect(product).toHaveCount(1);

  // Increase quantity to 3
  await product.locator('.increment').click();
  await product.locator('.increment').click();

  // Add to cart (missing step)
await product.locator('text=ADD TO CART').click();

  // Open cart
await page.locator('.cart-icon').click();

// Proceed to checkout
await page.locator('text=PROCEED TO CHECKOUT').click();

// Verify quantity in checkout table
const row = page.locator('tr:has-text("Tomato")');
//await expect(page.locator('.quantity')).toHaveText('3');
await expect(row.locator('td').nth(2)).toHaveText('3');

  await page.waitForTimeout(3000); // Wait for 2 seconds to observe the result
});