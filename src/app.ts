import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import next from 'next';
import Knex from 'knex';
import i18next from 'i18next';
import i18nextMiddleware, { I18NextRequest } from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';
import { Model } from 'objection';
import { config } from './config';
import { configurePostgres } from './utils/pg-types';
import { registerRoutes, registerErrorHandler } from './routes';

const router: express.Router = require('express-promise-router')();

export const app = express();

export const frontApp = next({ dev: config.isDev });

i18next.use(i18nextMiddleware.LanguageDetector).use(Backend).init(config.i18n);

frontApp
  .prepare()
  .then(() => {
    app.use(morgan('dev')).use(cors()).use(bodyParser.json()).use(router).use(registerErrorHandler);
    app.use(i18nextMiddleware.handle(i18next));
    registerRoutes(router);
    app.get('/test', async (req, res) => {
      return res.json((<I18NextRequest>req).i18n.t('optMsg', { otpCode: 12345 }));
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });

configurePostgres();

export const knex = Knex(config.knex);
Model.knex(knex);
