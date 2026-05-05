### Documentation

## Project Overview

fs-test-task application consisting of a backend (Node.js + Express.js + MongoDB) and a frontend (React). The server is directly connected to the database, so it cannot start unless the database service is running in Docker. Database is created inside container with the seed data.

## Requirements

```
    - node version >= 20
    - yarn package manager
    - docker + docker compose
```

## Tech stack

```
Backend:
- Node.js
- Express
- MongoDB
- TypeScript

Frontend:
- React
- TypeScript

```

## Steps required to run this project

1. create .env file

```bash
cp .env.example .env
```

2. create & run be inside docker

```bash
yarn prod:be
```
3. install dependencies

```bash
yarn install
```

4. run fe locally

```bash
yarn dev:fe
```

5. run be locally(make sure that database is still working inside docker)

```bash
yarn dev:be
```

## Project structure

```

src/
│
├── config/             # Database configuration (connection, seed)
├── controllers/        # Request handlers (HTTP layer)
├── docs/               # Swagger endpoints setup
├── helpers/            # helper functions
├── interfaces/         # TypeScript interfaces / types
├── middleware/         # Express middleware (validator, error handler)
├── models/             # Database models / schemas
├── routes/             # API route definitions
├── services/           # Business logic layer
├── swagger/            # Swagger/OpenAPI configuration
│
└── main.ts             # Application entry point

```

## Endpoints

```
/healthcheck        # Check if server is working correctly
/products           # GET endpoint to fetch products from db
/docs               # Product endpoints swagger documentation

```

## .env.example

```
PORT=               # local Backend aplication port
DATABASE_PORT=      # Database port inside docker
LOCAL_DB_PORT=      # Local database port
APP_PORT=           # Backend aplication port inside docker
DATABASE_NAME=      # Database name inside docker
MONGO_URI=          # Connection string used by the backend to connect to MongoDB


```
