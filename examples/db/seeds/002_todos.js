/* eslint-disable no-console */
const todos = require('../../db/resources/todos');

exports.seed = async (knex) => {
  try {
    console.log('Planting seeds for todos');

    const seeds = await todos();
    await knex('todos').insert(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    return console.error(err);
  }
};
