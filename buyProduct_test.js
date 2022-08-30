let products = new DataTable(['productLink']);
products.add(['http://automationpractice.com/index.php?id_product=3&controller=product']);
products.add(['http://automationpractice.com/index.php?id_product=4&controller=product']);

const FileReader = require('C:/Users/Arthur/Desktop/automation/JS_akozub/filereader_helper.js');
let productLinks = FileReader.readFile('input/productLinks.txt');


Feature('buy product');

Before(({ I, homePage, authPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.login('123456789@testing.com', '1234567890qwerty');
  });

/*Data(products).*/xScenario('buy product', async ({ I, homePage, authPage, cartPage, /*current*/ }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.login('123456789@testing.com', '1234567890qwerty');
    //--I.amOnPage(current.productLink);
    //let productPrice = await productPage.getProductPrice();
    cartPage.proceedToCart();
    I.waitForVisible('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a');
    //let totalPrice = await productPage.getTotalPrice();
    //console.log(await productPage.getText());
    //I.assertEqual(totalPrice, productPrice, 'Prices are not in match');
    let productLinksArray = productLinks.split('\r\n')
    console.log(productLinksArray);
});