import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import next from 'next';
import Knex from 'knex';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';
import { Model } from 'objection';
import { config } from './config';
import { configurePostgres } from './utils/pg-types';
import { registerRoutes, registerErrorHandler } from './routes';

const router: express.Router = require('express-promise-router')();

export const app = express();

const frontApp = next({ dev: config.isDev });
const reqHandler = frontApp.getRequestHandler();

i18next.use(i18nextMiddleware.LanguageDetector).use(Backend).init(config.i18n);

frontApp
  .prepare()
  .then(() => {
    app.use(morgan('dev')).use(cors()).use(bodyParser.json()).use(router).use(registerErrorHandler);

    app.use(i18nextMiddleware.handle(i18next));

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

configurePostgres();

export const knex = Knex(config.knex);
Model.knex(knex);
