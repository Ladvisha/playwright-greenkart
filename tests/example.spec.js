import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages/HomePage');
const { CheckoutPage } = require('../pages/CheckoutPage');
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
  await page.locator('.chkAgree').check();1

  // 9. Proceed
  await page.locator('text=Proceed').click();

  // 10. Validate success
  await expect(page.locator('.wrapperTwo')).toContainText('Thank you');
});