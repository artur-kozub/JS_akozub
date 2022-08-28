const { I } = inject();

module.exports = {
  emailInput: { css: '#email' },
  passwordInput: { css: '#passwd' },
  submitLogin: { css: '#SubmitLogin' },
  agreement: { css: '#cgv' },
  productPrice: { css: '#our_price_display' },
  finalPrice: { css: '#total_price' },


  proceedToCart() {
    I.click('Add to cart');
    I.click('Proceed to checkout');
    I.waitForVisible({ css: '#cart_title' });
    I.click('Proceed to checkout');
    I.waitForVisible({ css: '#ordermsg' });
    I.click('Proceed to checkout');
    I.waitForVisible(this.agreement);
    I.click(this.agreement);
    I.click('Proceed to checkout');
  }
}
