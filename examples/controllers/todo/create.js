import { knex } from '@db';
import { todoSchema } from '@examples/schemas';
import { error } from '@functions';

export default async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const { name, done } = req.body;
  const payload = { name, done, identity: me };
  await todoSchema.validate(payload).catch(() => {
    throw error(400, 'Invalid data');
  });

  const todo = await knex('todos').insert(payload);
  if (!todo) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json({ data: todo, message: 'Todo created' });
};
