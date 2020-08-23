import { Router } from 'express';

import { listItems } from './controller';

export const registerApi = (router: Router) => {
  router.get('/api/test', listItems);
};
