import { Router } from 'express';

import { startVerify, checkVerify } from './controller';

export const registerApi = (router: Router) => {
  router.post('/api/start-verify', startVerify);
  router.post('/api/check-verify', checkVerify);
};
