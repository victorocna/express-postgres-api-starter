import db from '../../../db/knex.js';

export default async () => {
  const michael = await db('identities').first('id').where('email', 'michael@email.com');
  const jim = await db('identities').first('id').where('email', 'jim@email.com');

  return [
    {
      identity: michael.id,
      name: 'Make a todo list',
      done: true,
    },
    {
      identity: michael.id,
      name: 'Add integration tests',
      done: false,
    },
    {
      identity: michael.id,
      name: 'Complete starter project',
      done: false,
    },
    {
      identity: jim.id,
      name: 'Make fun of Dwight',
      done: false,
    },
    {
      identity: jim.id,
      name: 'Go home at 5PM sharp',
      done: true,
    },
  ];
};
