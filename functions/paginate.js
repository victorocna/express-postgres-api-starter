const Knex = require('knex');

function attachPaginate() {
  function paginate({
    per_page: perPage = 30,
    page: currentPage = 1,
    order = 'created_at',
    direction = 'desc',
  }) {
    if (isNaN(perPage)) {
      throw new Error('Paginate error: perPage must be a number');
    }
    if (isNaN(currentPage)) {
      throw new Error('Paginate error: currentPage must be a number');
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    const countQuery = new this.constructor(this.client)
      .count('* as total')
      .from(this.clone().offset(0).clearOrder().as('count__query__'))
      .first()
      .debug(this._debug);

    // This will paginate the data itself
    const offset = (currentPage - 1) * perPage;
    this.offset(offset).limit(perPage);

    return this.client.transaction(async (trx) => {
      const pages = await this.transacting(trx).orderBy(order, direction);
      const countResult = await countQuery.transacting(trx);
      const total = countResult.TOTAL || countResult.total;
      const hasNext = total > pages.length + offset;

      // Add pagination data to the page params
      const pageParams = {
        count: Number(total),
        hasNext: Boolean(hasNext),
        page: Number(currentPage),
        perPage: Number(perPage),
      };

      return { pageParams, pages };
    });
  }

  Knex.QueryBuilder.extend('paginate', paginate);
}

export default attachPaginate;
