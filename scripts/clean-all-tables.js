import { knex } from '@db';
import { runScript } from '@functions';
import knexCleaner from 'knex-cleaner';

/**
 * Usage:
 * node scripts/clean-all-tables.js
 */
runScript(script);

// async function script() {
const script = async () => {
  await knexCleaner.clean(knex, {
    mode: 'truncate',
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  });

  console.log('All tables have been cleaned');
};
