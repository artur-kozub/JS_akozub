const { I } = inject();

module.exports = {
  productPrice: {css: '#our_price_display'},
  totalPrice: {css: '#total_price'},

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  async getTotalPrice() {
    return await I.grabTextFrom(this.totalPrice);
  },

  async getText() {
    let string = await I.grabTextFrom({css: "div.box"});
    let substr = string.substring(245, 253);
    console.log(`Your order has ID: ${substr}`);
  }
};
