require('dotenv').config();

import Knex from 'knex';

import { config } from '../config';

/** CLI script for running knex migrations.
 *
 * This should never be invoked directly from application code
 */

const VALID_COMMANDS = ['latest', 'up', 'rollback'];
const command = process.argv[2] && process.argv[2] !== 'test' ? process.argv[2] : 'latest';

if (VALID_COMMANDS.findIndex((value) => command === value) === -1) {
  console.error('Invalid or missing command parameter: must be one of', VALID_COMMANDS);
  process.exit(1);
}

if (command === 'latest') {
  console.log('Applying all migrations');
  Knex(config.knex)
    .migrate.latest()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Migrate failed', error);
      process.exit(1);
    });
} else if (command === 'up') {
  console.log('Applying latest migration');
  Knex(config.knex)
    .migrate.up()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Migrate failed', error);
      process.exit(1);
    });
} else if (command === 'rollback') {
  console.log('Rolling back migrations');
  Knex(config.knex)
    .migrate.rollback({}, true)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Rollback failed', error);
      process.exit(1);
    });
}
