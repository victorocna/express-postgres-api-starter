import { knex } from '@db';
import { error } from '@functions';

const userNotExist = async (req, res, next) => {
  const { email } = req.body;

  const identity = await knex('identities').first('*').where('email', '=', email);
  if (!identity) {
    throw error(404, 'Account does not exist');
  }

  next();
};

export default userNotExist;
