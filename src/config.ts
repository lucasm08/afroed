import path from 'path';
import { knexSnakeCaseMappers } from 'objection';
require('dotenv').config();

export const config = {
  isDev: process.env.NODE_ENV !== 'production',
  port: parseInt(process.env.PORT || '3001', 10),
  knex: {
    client: 'pg',
    version: '10.5',
    connection: process.env.DB_CONNECTION!,
    migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, 'migrations'),
    },
    pool: {
      min: 0,
      max: 10,
      afterCreate: (conn: any, cb: any) => {
        conn.query('SET timezone="UTC";', (err: any) => cb(err, conn));
      },
    },

    ...knexSnakeCaseMappers(),
  },

  i18n: {
    backend: {
      loadPath: `${__dirname}/i18n/{{lng}}/{{ns}}.json`,
    },
    debug: process.env.NODE_ENV !== 'production',
    detection: {
      order: ['header', 'querystring', 'cookie'],
      caches: ['cookie'],
    },
    preload: ['fr', 'en'],
    saveMissing: true,
    fallbackLng: ['fr'],
  },
  // for managing setup and teardown of DB's during tests
  knexDbManager: {
    superUser: process.env.DB_SUPERUSER_USER || 'postgres',
    superPassword: process.env.DB_SUPERUSER_PASSWORD || 'afroed',
  },
};
