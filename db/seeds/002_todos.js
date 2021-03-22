const { todos } = require('../resources');

exports.seed = async (knex) => {
  try {
    const seeds = await todos();
    await knex('todos').insert(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    return console.error(err);
  }
};
