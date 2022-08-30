const fs = require('fs');

module.exports = {

  readFile(path) {
    try {
      return fs.readFileSync(path, 'utf8');
    } catch (err) {
      console.error(err);
    }
  }

}
