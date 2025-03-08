import cors from 'cors';
import setupOrigin from './setup-origin';

const setupCors = (whitelist, exposedHeaders = []) => {
  return cors({
    origin: (origin, callback) => setupOrigin({ origin, whitelist, callback }),
    credentials: true,
    exposedHeaders: ['Content-Disposition', ...exposedHeaders],
  });
};

export default setupCors;
