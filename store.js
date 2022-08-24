const { emailField } = require("./pages/auth");

Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
    I.openStore();
    I.see('Women');
    homePage.clickSignIn();
    authPage.createEmail(Date.now() + '@testing.com');
    createAccountPage.registration();
    /*
    I.waitForVisible({css: '#customer_firstname'});
    I.wait(2);
    I.fillField({css: '#customer_firstname'}, 'Arthur');
    I.waitForVisible({css: '#customer_lastname'});
    I.wait(2);
    I.fillField({css: '#customer_lastname'}, 'Kozub');
    I.fillField({css: '#passwd'}, secret('testing123'));
    I.fillField({css: '#days'}, '1');
    I.fillField({css: '#months'}, 'January');
    I.fillField({css: '#years'}, '2022');
    I.fillField({css: '#address1'}, 'Kosmonavtiv, 12');
    I.fillField({css: '#city'}, 'Odesa');
    I.fillField({css: '#id_state'}, 'Alabama');
    I.fillField({css: '#postcode'}, '65065');
    I.fillField({css: '#phone_mobile'}, '0990017530');
    I.fillField({css: '#alias'}, 'Kosmonavta Komarova, 2-A');
    I.click('Register');
    */
    pause();
});
