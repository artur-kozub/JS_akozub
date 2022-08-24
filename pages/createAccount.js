const { I } = inject();



module.exports = {
  firstName: {css: '#customer_firstname'},
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
  registerButton: 'Register',

  registration() {
    I.waitForVisible(this.firstName);
    I.fillField(this.firstName, 'Arthur');
    I.waitForVisible(this.lastName);
    I.fillField(this.lastName, 'Kozub');
    I.fillField(this.password, '12345testing');
    I.fillField(this.months, 'January');
    I.fillField(this.days, '1');
    I.fillField(this.years, '2022');
    I.fillField(this.address, 'Kosmonavtiv, 12');
    I.fillField(this.city, 'Odesa');
    I.fillField(this.idState, 'Alabama');
    I.fillField(this.postcode, '65065');
    I.fillField(this.phoneMobile, '+1234567890');
    I.fillField(this.alias, 'Kosmonavat Komarova 2-a');
    I.click(this.registerButton);
  }
}
