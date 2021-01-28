exports.up = async function (knex) {
  await knex.schema.createTable('identities', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.index('email');

    table.unique('email');
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('identities');
};
