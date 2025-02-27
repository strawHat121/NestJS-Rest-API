# Nest JS Employee/Users API

This is a NestJS application that uses Prisma and Neon PostgresDB for database management. The application provides APIs for managing employees.

## Features

- **Employee Management:**
  - Create, update, delete, and retrieve employees.
  - Filter employees by role (ADMIN, ENGINEER, INTERN).

## API Endpoints

### Employees

- **GET /employees**: Retrieve all employees or filter by role.
- **GET /employees/:id**: Retrieve an employee by ID.
- **POST /employees**: Create a new employee.
- **PATCH /employees/:id**: Update an employee by ID.
- **DELETE /employees/:id**: Delete an employee by ID.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```