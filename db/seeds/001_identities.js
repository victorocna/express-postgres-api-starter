import identities from '../resources/identities';

export async function seed(knex) {
  try {
    console.log('Planting seeds for identities');

    const seeds = await identities();
    await knex('identities').insert(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    return console.error(err);
  }
}
