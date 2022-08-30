const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 30000,
      waitForTimeout: 20000,
      waitForNavigation: 'networkidle',
    },
    ChaiWrapper : {
      require: "codeceptjs-chai",
    },
    EmailCreator: {
      require: './emailcreator_helper.js',
    },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    productPage: './pages/product.js',
    cartPage: './pages/cart.js',
  },
  name: 'JS_akozub'
}