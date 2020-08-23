# AfroEd

This project uses the following tech and libraries:

- Node.js + Express
- Next.js (React) + SSR
- TypeScript

## Setting up for development

Install dependencies

```
yarn
```

The service tries to read env variables from a file named `.env`. Rename `.env.dev` to `.env` to run the service with a default configuration.

Start service

```
yarn start
```

Nodemon service is started and runs in `localhost:3001` by default. You can access the service by navigating to `http://localhost:3001` with a web browser.

## Building for production

```
yarn build
yarn serve
```

### Set env variables

The service tries to read env variables from a file named `.env`. Copy `.env.dev` to `.env` to run the service with a default configuration:

```sh
ln -s .env.dev .env
```

### Set up the database

```sh
TMPDIR=/private$TMPDIR docker-compose up -d # if not using MacOSX omit `TMPDIR=...` env var set
yarn migrate
yarn seed
```

## Other useful scripts

`yarn test` for running tests with jest

`yarn lint` for running tslint
