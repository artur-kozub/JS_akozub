const Helper = require('@codeceptjs/helper');

class EmailCreator extends Helper {

  async generateEmail() {
    return await Date.now() + '@testing.com';
  }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = EmailCreator;
