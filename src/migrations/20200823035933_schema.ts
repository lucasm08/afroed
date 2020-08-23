import * as Knex from 'knex';

exports.up = (knex: Knex) => {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.string('createdDate');
    table.string('updatedDate');
  });
};

exports.down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('user');
};
