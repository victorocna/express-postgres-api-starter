const cors = require('cors');
const setupOrigin = require('./setup-origin');

const setupCors = (whitelist, exposedHeaders = []) => {
  return cors({
    origin: (origin, callback) => setupOrigin({ origin, whitelist, callback }),
    credentials: true,
    exposedHeaders: ['Content-Disposition', ...exposedHeaders],
  });
};

module.exports = setupCors;
