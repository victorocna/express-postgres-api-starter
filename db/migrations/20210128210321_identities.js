exports.up = async function (knex) {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('identities', (table) => {
    table.uuid('id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.enum('role', ['admin', 'client']);
    table.string('password').notNullable();
    table.int('retries').defaultTo(0);
    table.bool('active').defaultTo(false);
    table.bool('confirmed').defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');

    table.index('email');
    table.unique('email');
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('identities');
};
