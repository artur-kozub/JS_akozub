const { I } = inject();

module.exports = {
  emailField: {css: '#email_create'},
  createButton: {css: '#SubmitCreate'},

  createEmail(email) {
    I.waitForVisible(this.emailField);
    I.fillField(this.emailField, email);
    I.click(this.createButton);
  }
}
