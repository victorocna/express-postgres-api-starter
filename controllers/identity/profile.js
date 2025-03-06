import { knex } from '@db';
import { error } from '@functions';

export default async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const select = ['id', 'email', 'name'];
  const profile = await knex('identities')
    .first(...select)
    .where('id', '=', me);
  if (!profile) {
    throw error(404, 'Profile not found');
  }

  return res.status(200).json(profile);
};
