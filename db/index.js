const knex = require('knex');
const config = require('../knexfile');

const db = knex(config);

module.exports = db;
module.exports.knex = db;
