const { todos } = require('../resources');

exports.seed = async (knex) => {
  try {
    // first, delete ALL existing entries
    await knex('todos').truncate();

    const identities = await knex('identities').pluck('id');
    for (const todo of todos) {
      // assign every todo to the first identity
      todo.identity = identities[0];
    }

    await knex('todos').insert(todos);
  } catch (err) {
    return console.error(err);
  }
};
