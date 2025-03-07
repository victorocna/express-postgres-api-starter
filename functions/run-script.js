import { knex } from '@db';
import { slice } from 'lodash';

/**
 * Run scripts that interact with the database
 * @param {Function} fn The function to be executed
 *
 * Example usage (in scripts folder): runScript(myScript)
 */
const runScript = (fn) => {
  (async () => {
    try {
      // Ignore the first two params (node and the script path)
      const params = slice(process.argv, 2);

      if (!process.env.DATABASE_URL) {
        throw new Error('You must set your environment variables before running this script');
      }

      // Run the script
      await fn(knex, ...params);
      process.exit();
    } catch (err) {
      console.error(err);
      process.exit(1);
    } finally {
      await knex.destroy();
    }
  })();
};

export default runScript;
