const { knex } = require('..');

const getIdentityByName = async (name) => {
  const identity = await knex('identities').select('id').where('name', name).first();
  return identity.id;
};

module.exports = getIdentityByName;
