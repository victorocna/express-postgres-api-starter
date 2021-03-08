# Express Postgres API starter

Starter for Node Express API projects with Postgres database

## Quick start

Install dependencies

```bash
npm install
```

Copy the example environment variables

```bash
cp .env.example .env
```

Run migrations and seeds

```bash
npx knex migrate:latest
npx knex seed:run
```

Start the local server

```bash
npm run dev
```
