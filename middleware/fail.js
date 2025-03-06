const { error } = require('../functions');

/**
 * Middleware for testing error states
 */
const fail = (req, res, next) => {
  const { trigger } = req.query;
  if (trigger === 'fail') {
    throw error(400, 'Will always trigger an error');
  }

  next();
};

export default fail;
