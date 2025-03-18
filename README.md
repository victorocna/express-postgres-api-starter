# Express Postgres API starter

Starter for Node Express API projects with Postgres database packed with features like
pagination, authentication, powerful middlewares and many more.

## Quick start

Install dependencies

```bash
npm ci
```

Copy the example environment variables

```bash
cp .env.example .env
```

Optional: Run migrations and seeds

```bash
npx knex migrate:latest
npx knex seed:run
```

Start the local server

```bash
npm run dev
```

## Where to start

The goal is to write real code in less than 5 minutes.

Explore the projects examples. In the `examples` folder, with the local server started, follow these tasks:

- Create a new route in the routes folder
- Create a new controller in the controllers folder
- Link the new route with the new controller
- Test the new route from the browser
