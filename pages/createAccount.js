const { I } = inject();

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
    I.fillField(this.firstName, user.firstName);
    //I.waitForVisible(this.lastName);
    I.fillField(this.lastName, user.lastName);
    I.fillField(this.password, user.password);
    I.fillField(this.months, user.months);
    I.fillField(this.days, user.days);
    I.fillField(this.years, user.years);
    I.fillField(this.address, user.address);
    I.fillField(this.city, user.city);
    I.fillField(this.idState, user.idState);
    I.fillField(this.postcode, user.postcode);
    I.fillField(this.phoneMobile, user.phoneMobile);
    I.fillField(this.alias, user.alias);
    I.click(this.registerButton);
  }
}
