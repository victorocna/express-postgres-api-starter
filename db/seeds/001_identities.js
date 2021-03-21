const { identities } = require('../resources');

exports.seed = async (knex) => {
  try {
    const seeds = await identities();
    await knex('identities').insert(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    return console.error(err);
  }
};
