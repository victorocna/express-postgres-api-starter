import knex from 'knex';
import knexfile from '../knexfile.js';

const environment = process.env.ENVIRONMENT || 'development';
const config = knexfile[environment];
const db = knex(config);

export default db;
