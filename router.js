import * as exampleRoutes from '@examples/routes';
import * as routes from '@routes';
import { Router } from 'express';
import { authenticate, errorHandler, notFound, status } from './middleware';

const router = Router();
export default router;

// Protect all non-public routes
router.all('/admin', authenticate);
router.all('/admin/*', authenticate);

// Useful middleware for testing
router.use(status.loading);
router.use(status.error);

// Use the router instances defined
router.use(routes.identity);
router.use(exampleRoutes.todo);

// Matches any other HTTP method and route not matched before
router.all('*', notFound);

// Finally, an error handler
router.use(errorHandler);
