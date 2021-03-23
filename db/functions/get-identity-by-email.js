const { knex } = require('..');

const getIdentityByEmail = async (email) => {
  const identity = await knex('identities').first('id').where('email', email);
  return identity.id;
};

module.exports = getIdentityByEmail;
