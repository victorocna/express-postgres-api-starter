const { knex } = require('../../db');
const { error } = require('../../functions');

module.exports = async (req, res) => {
  const { id, secret } = req.user;
  if (!id || !secret) {
    throw error(404, 'Missing required params');
  }

  const onlyFilter = (knex) => {
    const { only } = req.query;
    if (only === 'completed') {
      knex.where('done', true);
    }
    if (only === 'pending') {
      knex.where('done', false);
    }
  };

  const select = [
    'todos.id as id',
    'identities.name as me',
    'todos.name as name',
    'todos.done',
    'todos.created_at as created_at',
  ];
  const todos = await knex('todos')
    .join('identities', 'identities.id', '=', 'todos.identity')
    .select(...select)
    .where('todos.identity', id)
    .modify(onlyFilter);

  return res.status(200).json(todos);
};
