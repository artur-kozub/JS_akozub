const { I } = inject();

module.exports = {
  productPrice: {css: '#our_price_display'},
  total: {css: '#total_price'},
  string: {xpath: "//*[@id='center_column']/div/text()[6]"},

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  async getTotal() {
    return await I.grabTextFrom(this.total);
  },

  async getText() {
    return await I.grabTextFromAll({xpath: "/html/body/div/div[2]/div/div[3]/div/div/text()[6]"});
  }
};
