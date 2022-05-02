const loadEmail = require('./load-email');
const loadSubject = require('./load-subject');
const logger = require('../../lib/pino');

module.exports = async ({ type, data, to }) => {
  logger.info(`creating an email template for ${type}`);
  const HtmlBody = loadEmail({
    type,
    data: {
      // append club specific info to template data
      ...data,
      app_base_url: process.env.APP_BASE_URL,
      email_support: process.env.EMAIL_SUPPORT,
    },
  });
  const Subject = loadSubject(HtmlBody);

  return {
    HtmlBody,
    Subject,
    From: process.env.EMAIL_SUPPORT,
    To: to || process.env.EMAIL_SUPPORT,
  };
};
