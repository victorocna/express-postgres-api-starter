const Yup = require('yup');

const schema = Yup.object({
  id: Yup.string().uuid().required(),
  email: Yup.string().required(),
  name: Yup.string().required(),
  role: Yup.string().oneOf(['admin', 'client']).required(),
  active: Yup.bool(),
  confirmed: Yup.bool(),
});

module.exports = schema;
