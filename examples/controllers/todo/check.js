const { error } = require('../../../functions');
const { knex } = require('../../db');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const todo = await knex('todo').first().where({ id, identity_id: me });
  if (!todo) {
    throw error(404, 'Resource not found');
  }
  await knex('todo').update({ done: true }).where({ id });

  return res.status(204).json({ data: todo, message: 'Todo marked as completed' });
};
