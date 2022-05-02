const { hashSync } = require('bcryptjs');
const { knex } = require('../../db');
const { error } = require('../../functions');
const { Email } = require('../../services');

module.exports = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { me } = req.user;
  if (!password || !confirmPassword) {
    throw error(400, 'Missing required params to change your password');
  }

  if (password !== confirmPassword) {
    throw error(400, "Passwords don't match");
  }

  const identity = await knex('identities').first('*').where({ id: me });
  if (!identity) {
    throw error(404, 'Account not found');
  }

  await knex('identities')
    .update({ password: hashSync(password) })
    .where('id', '=', me);

  await Email.changePassword({ to: identity.email });

  return res.status(200).json({ success: true });
};
