/* eslint-disable no-console */

import todos from '../resources/todos.js';

export async function seed(knex) {
  try {
    console.log('Planting seeds for todos');

    const seeds = await todos();
    await knex('todos').insert(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    return console.error(err);
  }
}
