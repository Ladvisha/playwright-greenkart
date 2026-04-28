class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('.search-keyword');
    this.products = page.locator('.product:visible');
    this.cartIcon = page.locator('.cart-icon');
  }

  async goto(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async searchProduct(item) {
    await this.searchBox.fill('');
    await this.searchBox.fill(item);
  }

  async addProductToCart() {
    const product = this.products.first();
    await product.locator('text=ADD TO CART').click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}

module.exports = { HomePage };