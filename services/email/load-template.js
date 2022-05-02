const views = require('../../views');

module.exports = (type) => {
  try {
    return views[type];
  } catch (err) {
    throw new Error('Cannot find required info to send the email');
  }
};
