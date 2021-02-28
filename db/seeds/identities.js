const { identities } = require('../resources');

exports.seed = async (knex) => {
  try {
    // first, delete ALL existing entries
    await knex('identities').truncate();

    await knex('identities').insert(identities);
  } catch (err) {
    return console.error(err);
  }
};
