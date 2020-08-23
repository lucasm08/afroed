import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import next from 'next';

import { config } from './config';
import { registerRoutes, registerErrorHandler } from './routes';

const router: express.Router = require('express-promise-router')();

export const app = express();

const frontApp = next({ dev: config.isDev });
const reqHandler = frontApp.getRequestHandler();

frontApp
  .prepare()
  .then(() => {
    app
      .use(morgan('dev'))
      .use(cors())
      .use(bodyParser.json())
      .use(router)
      .use(registerErrorHandler);

    registerRoutes(router);

    app.get('/folder', async (req, res) => {
      // We can control a specific next.js route and add logic before rendering it
      frontApp.render(req, res, '/folder');
    });

    app.get('*', (req, res) => {
      // This renders the rest of the routes
      return reqHandler(req, res);
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });
