/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type productPage = typeof import('./pages/product.js');
type cartPage = typeof import('./pages/cart.js');
type ChaiWrapper = import('codeceptjs-chai');
type EmailCreator = import('./emailcreator_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, productPage: productPage, cartPage: cartPage }
  interface Methods extends Playwright, ChaiWrapper, EmailCreator {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<EmailCreator> {}
  namespace Translation {
    interface Actions {}
  }
}
