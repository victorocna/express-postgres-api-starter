import 'dotenv/config';

export default {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: ['./db/migrations', './examples/db/migrations'],
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: ['./db/seeds', './examples/db/seeds'],
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    // IMPORTANT: running seeds on production environments are disabled
    // add them only if you really know what you are doing
  },
};
