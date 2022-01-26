const identities = require('../resources/identities');

exports.seed = async (knex) => {
  try {
    // eslint-disable-next-line
    console.log('Planting seeds for identities');

    const seeds = await identities();
    await knex('identities').insert(seeds);

    // eslint-disable-next-line
    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    return console.error(err);
  }
};
