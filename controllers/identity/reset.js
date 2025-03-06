import { knex } from '@db';
import { error } from '@functions';
import { hashSync } from 'bcryptjs';

module.exports = async (req, res) => {
  const { hash } = req.params;
  const { password } = req.body;
  if (!password || !hash) {
    throw error(400, 'Missing required params to reset your password');
  }

  const reset = await knex('hashes').first('*').where('hash', '=', hash);
  if (!reset) {
    throw error(404, 'Your reset token is invalid');
  }

  const { identity: id } = reset;
  const identity = await knex('identities').first('*').where('id', '=', id);
  if (!identity) {
    throw error(404, 'Account not found');
  }

  await knex('identities')
    .update({ password: hashSync(password) })
    .where('id', '=', id);
  await knex('hashes').del().where('hash', '=', hash);

  return res.status(200).json({ success: true });
};
