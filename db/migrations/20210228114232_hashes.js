export async function up(knex) {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('hashes', (table) => {
    table.uuid('id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('identity').notNullable();
    table.string('hash').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  });
}

export async function down(knex) {
  await knex.schema.dropTable('hashes');
}
