const open = require('open');
const temp = require('temp');
const fs = require('fs');

module.exports = async (payload) => {
  // do NOT run on production environments
  if (process.env.NODE_ENV === 'production') {
    return false;
  }

  temp.track();
  const options = {
    suffix: '.html',
  };
  temp.open(options, function (err, info) {
    if (err) {
      return false;
    }
    fs.write(info.fd, payload.HtmlBody, () => {
      open(info.path);
    });
  });

  return true;
};
