const { I } = inject();


module.exports = {
  firstNameField: {css: '#customer_firstname'},
  lastName: {css: '#customer_lastname'},
  password: {css: '#passwd'},
  days: {css: '#days'},
  months: {css: '#months'},
  years: {css: '#years'},
  address: {css: '#address1'},
  city: {css: '#city'},
  idState: {css: '#id_state'},
  postcode: {css: '#postcode'},
  phoneMobile: {css: '#phone_mobile'},
  alias: {css: '#alias'},
  registerButton: {text: 'Register'},

  register(firstName, lastName, password, months, days, years, address, city, idState, postcode, phoneMobile, alias,) {

    I.waitForVisible(this.firstNameField);
    I.fillField(this.firstNameField, firstName);
    I.fillField(this.lastName, lastName);
    I.fillField(this.password, password);
    I.fillField(this.months, months);
    I.fillField(this.days, days);
    I.fillField(this.years, years);
    I.fillField(this.address, address);
    I.fillField(this.city, city);
    I.fillField(this.idState, idState);
    I.fillField(this.postcode, postcode);
    I.fillField(this.phoneMobile, phoneMobile);
    I.fillField(this.alias, alias);
    I.click(this.registerButton);
    I.see('My account');
  }
}
