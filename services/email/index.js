const sendEmail = require('./send-email');

const Email = {};
Email.send = sendEmail;

Email.changePassword = async (data) => {
  return await sendEmail({ ...data, type: 'changePassword' });
};

module.exports = Email;
