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

## Features

Important features are listed below

### Authentication

JSON web tokens (JWT) and HTTP-only cookies are used to facilitate authentication.

Important note for `COOKIE_DOMAIN` environment variable:

> Multiple host/domain values are not allowed, but if a domain is specified, then subdomains are always included.

### Plugins and integrations

You can use the common integrations from the `plugins` folder: AWS, Netopia, Postmark and Smartbill.

Each common integration has an extensive documentation, code samples and step-by-step instructions.

### Loading and error states

You can append these query params to any route in this API:

You can append these query params to any route in this API:

- use `&test=loading&wait=5000` to delay any request with 5 seconds
- use `&test=error` to trigger a failed request

Customize the loading time with the `wait` query param which takes the number of miliseconds you want to wait.

This feature is available only for dev environments.

### Recaptcha

You can use the Recaptcha middleware on any public route.

By default Recaptcha will not be enabled when the request has no origin (it is sent through an API).

### Postman collection

You can use the Postman collection from the `postman` folder to explore the API and its routes.

## Further reading

- [https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [https://hasura.io/blog/best-practices-of-using-jwt-with-graphql](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql)
