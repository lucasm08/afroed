require('dotenv').config();

import Knex from 'knex';

import { config } from '../config';

/** CLI script for running knex migrations.
 *
 * This should never be invoked directly from application code
 */

const arg = process.argv[2] || 'latest';

if (arg === 'latest') {
  console.log('Applying latest migration');
  Knex(config.knex)
    .migrate.latest()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Migrate failed', error);
      process.exit(1);
    });
} else if (arg === 'rollback') {
  console.log('Rolling back migrations');
  Knex(config.knex)
    .migrate.rollback({}, true)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Rollback failed', error);
      process.exit(1);
    });
}
