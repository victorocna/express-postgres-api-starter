const handlebars = require('handlebars');
const loadTemplate = require('./load-template');

module.exports = ({ type, data }) => {
  if (!type) {
    throw new Error('Missing required params to send the email');
  }

  const source = loadTemplate(type);
  const template = handlebars.compile(source);

  return template(data);
};
