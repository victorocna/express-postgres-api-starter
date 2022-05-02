const logger = require('../../lib/pino');

/**
 * @see https://github.com/wildbit/postmark.js/wiki/Getting-Started
 */
module.exports = (err = {}, res = {}) => {
  if (err) {
    logger.error(`Postmark error ${err}`);
  }
  if ('To' in res) {
    logger.info(`sending an email with postmark to ${res.To}`);
  }
};
