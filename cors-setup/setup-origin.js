import inWhitelist from './in-whitelist';

const setupOrigin = ({ origin, callback, whitelist }) => {
  // Allow requests with no origin or from dev environment
  const isDev = process.env.NODE_ENV !== 'production';
  if (!origin || isDev) {
    return callback(null, true);
  }

  // Allow requests from app URL
  if (origin === process.env.APP_BASE_URL) {
    return callback(null, true);
  }

  // Allow request from whitelist
  if (inWhitelist(origin, whitelist)) {
    return callback(null, true);
  }

  // Deny any other request
  callback(new Error('Not allowed by CORS'));
};

export default setupOrigin;
