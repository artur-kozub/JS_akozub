const { I } = inject();

module.exports = {
  emailInput: { css: '#email' },
  passwordInput: { css: '#passwd' },
  submitLogin: { css: '#SubmitLogin' },
  agreement: { css: '#cgv' },
  productPrice: { css: '#our_price_display' },
  finalPrice: { css: '#total_price' },
  hookPayment: {xpath: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a'},


  async proceedToCart() {
    const result = await tryTo(() => I.see('Add to cart'));
    console.log(result);
    if (result == true){
      I.click('Add to cart');
    } else {
      console.log('The required button is not visisble');
    }
    I.click('Proceed to checkout');
    I.waitForVisible({ css: '#cart_title' });
    I.click('Proceed to checkout');
    I.waitForVisible({ css: '#ordermsg' });
    I.click('Proceed to checkout');
    I.waitForVisible(this.agreement);
    I.click(this.agreement);
    I.click('Proceed to checkout');
    I.waitForVisible(this.hookPayment);
    I.click(this.hookPayment);
    I.waitForText('I confirm my order');
    I.click('I confirm my order');
  }
}
