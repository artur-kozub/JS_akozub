
Feature('store');

let user = {
    firstName:'Arthur',
    lastName: 'Kozub',
    password: '12345testing',
    months: 'January',
    days: '1',
    years: '2022',
    address: 'Kosmonavtiv, 12',
    city: 'Odesa',
    idState: 'Alabama',
    postcode: '65065',
    phoneMobile: '+1234567890',
    alias:'Kosmonavta Komarova 2-a',
  }

xScenario('create account', async ({ I, homePage, authPage, createAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.registerEmail(await I.generateEmail());
    createAccountPage.register(user.firstName, user.lastName, user.password, user.months, user.days, user.years, user.address, user.city, user.idState, user.postcode, user.phoneMobile, user.alias);
});

Scenario('buy product', async ({ I, homePage, authPage, productPage, cartPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.login('123456789@testing.com', '1234567890qwerty');
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    //let productPrice = await productPage.getProductPrice();
    cartPage.proceedToCart();
    //I.waitForVisible('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a');
    //let totalPrice = await productPage.getTotalPrice();
    //console.log(await productPage.getText());
    //I.assertEqual(totalPrice, productPrice, 'Prices are not in match');
});
