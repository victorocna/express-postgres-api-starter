import { Identity } from '@controllers';
import { recaptcha } from '@middleware';
import { Router } from 'express';

const router = Router();
export default router;

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', recaptcha, Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.get('/admin/profile', Identity.profile);
