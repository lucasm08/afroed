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

## Other useful scripts

`yarn test` for running tests with jest

`yarn lint` for running tslint
