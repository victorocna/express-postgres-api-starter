import { knex } from '@db';
import { error } from '@functions';

export default async (req, res) => {
  const { hash } = req.params;
  if (!hash) {
    throw error(400, 'Missing required params');
  }

  const confirm = await knex('hashes').first('*').where('hash', '=', hash);
  if (!confirm) {
    throw error(404, 'Invalid confirmation code');
  }

  const { identity: id } = confirm;
  const identity = await knex('identities').first('*').where('id', '=', id);
  if (!identity) {
    throw error(404, 'Account not found');
  }

  await knex('identities').update({ confirmed: true }).where('id', '=', id);
  await knex('hashes').del().where('hash', '=', hash);

  return res.status(200).json({ success: true });
};
