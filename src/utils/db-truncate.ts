require('dotenv').config({ path: '.env.test' });

import { databaseManagerFactory } from 'knex-db-manager';
import { parse } from 'pg-connection-string';
import { config } from '../config';
import { MySqlConnectionConfig } from 'knex';

export const dbManager = databaseManagerFactory({
  knex: {
    ...config.knex,
    connection: parse(config.knex.connection) as MySqlConnectionConfig,
  },
  dbManager: config.knexDbManager,
});

export const truncateDb = async () => {
  try {
    await dbManager.truncateDb(['session']);

    console.log('Database truncate complete!');
    process.exit(0);
  } catch (err) {
    console.log('Database truncate failed', err);
    process.exit(1);
  }
};

truncateDb();
