import { Router, Request, Response, NextFunction } from 'express';

import * as configurationApi from './test';
import * as verifyApi from './verify';

export const registerRoutes = (router: Router) => {
  configurationApi.registerApi(router);
  verifyApi.registerApi(router);
};

export const registerErrorHandler = (error: Error | any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(error.statusCode || error.status || 500).send(error.data || error.message || {});
  }

  return next(error);
};
