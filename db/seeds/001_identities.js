/* eslint-disable no-console */
const identities = require('../resources/identities');

exports.seed = async (knex) => {
  try {
    console.log('Planting seeds for identities');

    const seeds = await identities();
    await knex('identities').insert(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    return console.error(err);
  }
};
