import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages-POM/HomePage');
const { CheckoutPage } = require('../pages-POM/CheckoutPage');
import data from '../Test-data/data.json';

test('End to end ', async ({ page }) => {

  const home = new HomePage(page);
  const checkout = new CheckoutPage(page);

  // 1. Open site
  await home.goto(data.url);

  // 2. Add multiple items
  for (const item of data.items) {
    await home.searchProduct(item);
    await expect(home.products.first()).toBeVisible();
    await home.addProductToCart();
  }

  // 3. Cart & checkout
  await home.openCart();
  await checkout.proceedToCheckout();

  // 4. Validate items count
  await expect(checkout.rows).toHaveCount(data.items.length);

  // 5. Apply promo code
  // await checkout.applyPromo(data.promoCode);
  // await checkout.validatePromoApplied();

  // 6. Place Order
  await page.locator('text=Place Order').click();

  // 7. Select country
  await page.locator('select').selectOption('India');

  // 8. Agree to terms
  await page.locator('.chkAgree').check();
  
  // 9. Proceed
  await page.locator('text=Proceed').click();

  // 10. Validate success
  await expect(page.locator('.wrapperTwo')).toContainText('Thank you');
  
  //offerspage directly from homepage
  const { OffersPage } = require('../pages-POM/OffersPage');

 //  Navigate to Offers Page
  const offers = new OffersPage(page);
  await offers.goto();

  //  Sorting validation
  const beforeSort = await offers.getProductNames();

  await offers.clickColumnHeader();

  const afterSort = await offers.getProductNames();

  const sorted = [...afterSort].sort((a, b) => a.localeCompare(b)); 
  expect(afterSort).toEqual(sorted);

  await page.locator('#page-menu').selectOption('10');

  //  Search & price validation
    await offers.searchProduct('Tomato');

    const price = await offers.getPrice('Tomato');
    console.log('Tomato Price:', price);

    expect(price).not.toBeNull();

    const calendar = page.locator('//*[@id="root"]/div/div[2]/div/div/button[2]');
    await expect(calendar).toBeVisible();

    await calendar.click();

  // Fill date fields directly (Day / Month / Year)
    const dateFields = page.getByRole('spinbutton');

    await dateFields.nth(0).fill('01');   // Day
    await dateFields.nth(1).fill('05');   // Month
   await dateFields.nth(2).fill('2025'); // Year
});
