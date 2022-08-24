const { emailField } = require("./pages/auth");

Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
    I.openStore();
    I.see('Women');
    homePage.clickSignIn();
    authPage.createEmail(Date.now() + '@testing.com');
    createAccountPage.registration();
    pause();
});
