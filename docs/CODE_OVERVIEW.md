# Code Overview

- [Code Overview](#code-overview)
  - [Interesting Dependencies](#interesting-dependencies)
  - [Application Structure](#application-structure)
  - [Error Handling](#error-handling)
  - [Authentication](#authentication)
  - [Databases](#databases)
  - [Basic Requests](#basic-requests)

## Interesting Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [node-postgres](https://github.com/brianc/node-postgres) - For connect to a postgres DB

## Application Structure

- `index.js` The entry point to our application. This file defines our express server and connects it to all the middlewares needed. It also requires the routes and models we'll be using in the application.
- `api/` This folder contains the route definitions for our API.
- `migrations/` Here we have some migrations (in SQL for easy portability) to run before start the server.
- `server/` This folder contains configuration for the app as well as a central location for configuration/environment variables.
- `service/` This folder contains the actions and queries for each Table.

## Error Handling

Notice that the code don't use `console.log()`, instead uses a custom logger built with `winston` and `morgan`. All the important events are saved to `logs/` folder and shows in the terminal. So if you run into any error and want to check the available info, visit the `logs/` folder!

If an error happens the server must restart as is using `nodemon` in dev and `pm2` in production. Also note I used extensively `try...catch` to avoid Unhandled Errors.

In `api/v1/index.js`, we define a error-handling middleware for handling inputs: `ValidationError`. This middleware will respond with a 422 status code and format the response to have error messages the clients can understand

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `service/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will *not* return a 401 status code if the request cannot be authenticated.

## Databases

I decided to use Postgres as my databases as it is a modern, opern sourced and powerful option. I also don't use an ORM as we usually don't need it if we know some SQL query build (or can use Google).

I defined some migrations to bootstrap a new server, you can use it by running `npm run set-db:dev` and have the migrations and seed run.

For databases I recommend using Heroku Free Tier. If you want to check the changes in DBs, I recommend [pgweb](https://pgweb-demo.herokuapp.com/).

## Basic Requests

- GET `/ping`

```sh
curl https://coolticket-server.herokuapp.com/ping
```

- POST `/api/v1/auth/signup`

```sh
curl --data-urlencode "name=Israel Antonio Rosales Laguan" \
  -d "email=user@mail.com&password=5236987410." \
  https://coolticket-server.herokuapp.com/api/v1/auth/signup
```

- POST `/api/v1/auth/login`

```sh
curl -d "email=user@mail.com&password=5236987410." \
  https://coolticket-server.herokuapp.com/api/v1/auth/login
```
