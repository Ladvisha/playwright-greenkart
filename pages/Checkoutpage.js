class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('text=PROCEED TO CHECKOUT');
    this.rows = page.locator('tbody tr');
    // this.promoInput = page.locator('.promoCode');
    // this.promoBtn = page.locator('.promoBtn');
    // this.promoInfo = page.locator('.promoInfo');
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }

  async validateItemCount(expectedCount) {
    await this.rows.first().waitFor();
    const count = await this.rows.count();
    return count === expectedCount;
  }

//   async applyPromo(code) {
//     await this.promoInput.fill(code);
//     await this.promoBtn.click();
//   }

//   async validatePromoApplied() {
//     await this.promoInfo.waitFor();
  }
// }

module.exports = { CheckoutPage };