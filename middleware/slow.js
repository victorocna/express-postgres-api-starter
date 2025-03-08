import { coffee } from '@functions';

/**
 * Middleware for testing loading states
 */
const slow = async (req, res, next) => {
  const { trigger } = req.query;
  if (trigger === 'slow') {
    await coffee();
  }

  next();
};

export default slow;
