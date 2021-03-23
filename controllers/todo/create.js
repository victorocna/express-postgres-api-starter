const { knex } = require('../../db');
const { error } = require('../../functions');
const { todoSchema } = require('../../schemas');

module.exports = async (req, res) => {
  const { identity } = req.user;
  if (!identity) {
    throw error(404, 'Missing required params');
  }

  const { name, done } = req.body;
  const payload = { name, done, identity };
  await todoSchema.validate(payload).catch(() => {
    throw error(400, 'Invalid data');
  });

  const todo = await knex('todos').insert(payload);
  if (!todo) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(todo);
};
