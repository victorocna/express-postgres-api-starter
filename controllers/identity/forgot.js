const { has } = require('lodash');
const { knex } = require('../../db');
const { error, randomHash } = require('../../functions');

module.exports = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw error(400, 'Missing required params');
  }

  const identity = await knex('identities').first('id').where('email', '=', email);
  if (!has(identity, 'id')) {
    throw error(404, 'Account does not exist');
  }

  const hash = randomHash();
  await knex('hashes').insert({ hash, identity: identity.id });

  return res.status(200).json({ success: true });
};
