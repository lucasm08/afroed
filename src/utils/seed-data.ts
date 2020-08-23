require('dotenv').config();

import Knex from 'knex';
import { config } from '../config';

const SEED_DATA = [
  { username: 'bob', password: 'secret', name: 'Bob Smith' },
  { username: 'joe', password: 'password', name: 'Joe Davis' },
];

/** CLI script for inserting seed data.
 *
 * This should never be invoked directly from application code
 */
export const seed = async () => {
  const knex = Knex(config.knex);
  knex('user')
    .insert(SEED_DATA)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Seed failed', error);
      process.exit(1);
    });
};
