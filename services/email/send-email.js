const postmark = require('postmark');
const createEmail = require('./create-email');
const callback = require('./email-callback');
const logger = require('../../lib/pino');

const send = async (props) => {
  const payload = await createEmail(props);

  if (process.env.NODE_ENV !== 'production') {
    if (process.env.EMAIL_PREVIEW === 'yes') {
      require('./preview-email')(payload);
    }
    throw new Error('Will not send email in development mode');
  }

  const client = new postmark.Client(process.env.POSTMARK_SECRET);
  return await client.sendEmail(payload, callback);
};

module.exports = async (data) => {
  try {
    await send(data);
  } catch (err) {
    logger.error(`Mailer error ${err}`);
  }
};
