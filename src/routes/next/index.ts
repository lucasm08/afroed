import { Express } from 'express';
import { frontApp } from '../../app';

export const registerNextRoutes = (app: Express) => {
  const reqHandler = frontApp.getRequestHandler();

  app.get('*', (req, res) => {
    // This renders next routes
    return reqHandler(req, res);
  });
};
