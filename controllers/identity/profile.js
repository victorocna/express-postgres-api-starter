const { error } = require('../../functions');
const { knex } = require('../../db');

module.exports = async (req, res) => {
  const { id } = req.user;
  if (!id) {
    throw error(404, 'Missing required params');
  }

  const select = ['id', 'email', 'name'];
  const profile = await knex('identities')
    .first(...select)
    .where('id', '=', id);
  if (!profile) {
    throw error(404, 'Profile not found');
  }

  // set a temporary test cookie
  res.cookie('current_timestamp', +Date.now());

  return res.status(200).json(profile);
};
