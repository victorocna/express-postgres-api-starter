const Yup = require('yup');

const schema = Yup.object({
  key: Yup.string().required(),
  identity: Yup.string().uuid().required(),
  name: Yup.string().min(2).max(200).required(),
  done: Yup.bool(),
});

module.exports = schema;
