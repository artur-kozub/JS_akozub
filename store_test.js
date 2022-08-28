const { emailField } = require("./pages/auth");

Feature('store');

xScenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
    I.openStore();
    I.see('Women');
    homePage.clickSignIn();
    authPage.registerEmail(Date.now() + '@testing.com');
    createAccountPage.register();
    pause();
});

Scenario('buy product', async ({ I, homePage, authPage, productPage, cartPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.login('123456789@testing.com', '1234567890qwerty');
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    let productPrice = await productPage.getProductPrice();
    cartPage.proceedToCart();
    I.waitForVisible('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a');
    let totalPrice = await productPage.getTotal();
    I.click('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a');
    I.waitForText('I confirm my order');
    I.click('I confirm my order');
    console.log(productPage.getText());
    I.assertEqual(totalPrice, productPrice, 'Prices are not in match');
});
