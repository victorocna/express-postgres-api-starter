const { knex } = require('..');

const getIdentityByEmail = async (name) => {
  const identity = await knex('identities').select('id').where('name', name).first();
  return identity.id;
};

module.exports = getIdentityByEmail;
