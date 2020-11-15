import * as Knex from 'knex';

exports.up = (knex: Knex) => {
  return (
    knex.schema
      // Table used by express session
      .createTable('tips', (table) => {
        table.increments('id').primary();
        table.text('description').notNullable();
        table.string('webLink');
        table.string('lang');
        table.bigInteger('createdDate');
        table.bigInteger('updatedDate');
      })
      .createTable('countries', (table) => {
        table.increments('id').primary();
        table.string('frName').notNullable();
        table.string('engName').notNullable();
        table.string('code').notNullable();
        table.bigInteger('createdDate');
        table.bigInteger('updatedDate');
      })
      .createTable('languages', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.bigInteger('createdDate');
        table.bigInteger('updatedDate');
      })
      .createTable('fields', (table) => {
        table.increments('id').primary();
        table.string('frName').notNullable();
        table.string('engName').notNullable();
        table.bigInteger('createdDate');
        table.bigInteger('updatedDate');
      })
      .then(() =>
        knex.schema.createTable('partners', (table) => {
          table.increments('id').primary();
          table.string('partnerId').notNullable().index();
          table.string('name');
          table.string('type');
          table.string('city');
          table.string('address');
          table.string('phoneNumber1').notNullable();
          table.integer('phoneNumber1Code').notNullable();
          table.string('phoneNumber2');
          table.integer('phoneNumber2Code');
          table.string('email');
          table.string('webLink');
          table.string('logo');
          table.string('recruitementType');
          table.bigInteger('createdDate');
          table.bigInteger('updatedDate');
        })
      )
      .then(() =>
        knex.schema.createTable('opportunities', (table) => {
          table.increments('id').primary();
          table.string('opportunityId').notNullable().index();
          table.string('name').notNullable();
          table.string('type').notNullable();
          table.text('description');
          table.bigInteger('deadline').unsigned();
          table.string('phoneNumber1');
          table.integer('phoneNumber1Code');
          table.string('phoneNumber2');
          table.integer('phoneNumber2Code');
          table.string('gender');
          table.boolean('available');
          table.string('location');
          table.string('image');
          table.string('webLink');
          table.string('lang');
          table.bigInteger('createdDate');
          table.bigInteger('updatedDate');
        })
      )
      .then(() =>
        knex.schema.createTable('students', (table) => {
          table.increments('id').primary();
          table.string('studentId').notNullable().index();
          table.string('firstName').notNullable();
          table.string('lastName').notNullable();
          table.bigInteger('dateOfBirth').unsigned();
          table.string('gender');
          table.string('city');
          table.string('address');
          table.string('lang');
          table.string('phoneNumber').notNullable();
          table.integer('phoneNumberCode').notNullable();
          table.string('whatsappNumber').notNullable();
          table.integer('whatsappNumberCode').notNullable();
          table.integer('countryId').unsigned().references('id').inTable('countries');
          table.string('institutionName');
          table.string('level');
          table.integer('yearOfGraduation');
          table.boolean('getNotificationUpdates');
          table.boolean('status');
          table.string('preferredMessagingMethod');
          table.bigInteger('createdDate');
          table.bigInteger('updatedDate');
        })
      )
      .then(() =>
        knex.schema.createTable('studentsPartners', (table) => {
          table.increments('id').primary();
          table.integer('studentId').unsigned().references('id').inTable('students').notNullable();
          table.integer('partnerId').unsigned().references('id').inTable('partners').notNullable();
          table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        })
      )
      .then(() =>
        knex.schema.createTable('studentsOpportunities', (table) => {
          table.increments('id').primary();
          table.integer('studentId').unsigned().references('id').inTable('students').notNullable();
          table.integer('opportunityId').unsigned().references('id').inTable('opportunities').notNullable();
          table.boolean('followed');
          table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
          table.bigInteger('updatedDate');
        })
      )
      .then(() =>
        knex.schema.createTable('studentsFields', (table) => {
          table.increments('id').primary();
          table.integer('studentId').unsigned().references('id').inTable('students').notNullable();
          table.integer('fieldId').unsigned().references('id').inTable('fields').notNullable();
          table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        })
      )
      .then(() =>
        knex.schema.createTable('opportunitiesCountries', (table) => {
          table.increments('id').primary();
          table.integer('countryId').unsigned().references('id').inTable('countries').notNullable();
          table.integer('opportunityId').unsigned().references('id').inTable('opportunities').notNullable();
          table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        })
      )
      .then(() =>
        knex.schema.createTable('opportunitiesFields', (table) => {
          table.increments('id').primary();
          table.integer('fieldId').unsigned().references('id').inTable('fields').notNullable();
          table.integer('opportunityId').unsigned().references('id').inTable('opportunities').notNullable();
          table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        })
      )
      .then(() =>
        knex.schema.createTable('studentsTips', (table) => {
          table.increments('id').primary();
          table.integer('studentId').unsigned().references('id').inTable('students').notNullable();
          table.integer('tipId').unsigned().references('id').inTable('tips').notNullable();
          table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        })
      )
  );
};

exports.down = (knex: Knex) => {
  return knex.schema
    .dropTableIfExists('studentsTips')
    .then(() => knex.schema.dropTableIfExists('opportunitiesFields'))
    .then(() => knex.schema.dropTableIfExists('opportunitiesCountries'))
    .then(() => knex.schema.dropTableIfExists('studentsFields'))
    .then(() => knex.schema.dropTableIfExists('studentsOpportunities'))
    .then(() => knex.schema.dropTableIfExists('studentsPartners'))
    .then(() => knex.schema.dropTableIfExists('students'))
    .then(() => knex.schema.dropTableIfExists('opportunities'))
    .then(() => knex.schema.dropTableIfExists('partners'))
    .then(() => knex.schema.dropTableIfExists('fields'))
    .then(() => knex.schema.dropTableIfExists('languages'))
    .then(() => knex.schema.dropTableIfExists('countries'))
    .then(() => knex.schema.dropTableIfExists('tips'));
};
