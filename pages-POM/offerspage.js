class OffersPage {
  constructor(page) {
    this.page = page;

    this.searchBox = page.locator('#search-field');
    this.tableRows = page.locator('tbody tr');
    this.productNames = page.locator('tbody tr td:nth-child(1)');
    this.priceColumn = page.locator('tbody tr td:nth-child(2)');
    this.columnHeader = page.locator('th[role="columnheader"]');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  }

  async searchProduct(product) {
    await this.searchBox.fill(product);
  }

  async getProductNames() {
    return await this.productNames.allTextContents();
  }

  async clickColumnHeader() {
    await this.columnHeader.first().click();
  }

  async getPrice(productName) {
    const row = this.page.locator(`tr:has-text("${productName}")`);
    return await row.locator('td').nth(1).textContent();
  }
}

module.exports = { OffersPage };