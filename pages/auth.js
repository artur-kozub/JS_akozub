const { I } = inject();

module.exports = {
  emailRegisterField: { css: '#email_create' },
  createButton: { css: '#SubmitCreate' },
  emailInput: { css: '#email' },
  passwordInput: { css: '#passwd' },
  loginButton: {css: '#SubmitLogin'},

  _waitForPageLoad() {
    I.waitForVisible(this.emailRegisterField);
  },

  registerEmail(email) {
    this._waitForPageLoad();
    I.fillField(this.emailField, email);
    I.click(this.createButton);
  },

  _insertEmail(email) {
    I.fillField(this.emailInput, email);
  },

  _insertPassword(password) {
    I.fillField(this.passwordInput, password);
  },
  
  _clickLoginButton() {
    I.click(this.loginButton);
  },

  _checkLogin() {
    I.waitForText('My account');
  },

  login(email, password) {
    this._waitForPageLoad();
    this._insertEmail(email);
    this._insertPassword(password);
    this._clickLoginButton();
    this._checkLogin();
  },
}
