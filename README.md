# Equipment Distribution API

This API manages the distribution of equipment within an organization. It allows for user authentication and management, as well as employee management, including adding, updating, retrieving, and deleting employee records.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication and Authorization (JWT)
- CRUD operations for employees
- Pagination for employee listings
- Validation of input data
- Swagger API documentation
- Security best practices (Helmet, CORS, Rate Limiting)

## Technology Stack

- Node.js
- Express.js
- Sequelize (PostgreSQL/MySQL)
- JWT (jsonwebtoken)
- Swagger (swagger-ui-express, swagger-jsdoc)
- Middleware (Helmet, CORS, Rate Limiting)
- Validation (express-validator)

## Installation

### Prerequisites

- Node.js (v14.x or later)
- PostgreSQL or MySQL
- npm (v6.x or later) or yarn

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/equipment-distribution-api.git
    cd equipment-distribution-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the database:

    Ensure your PostgreSQL or MySQL server is running. Create a database named `equipment_distribution`.

4. Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_NAME=equipment_distribution
    JWT_SECRET=your_jwt_secret
    ```

5. Run migrations and seed the database (if applicable):

    ```bash
    npm run migrate
    npm run seed
    ```

6. Start the server:

    ```bash
    npm start
    ```

## Usage

### Running the Server

To run the server in development mode:

```bash
npm run dev
```

### API Endpoints

The API provides the following endpoints:

#### User Routes

- `POST /users/signup`: Create a new user
- `POST /users/login`: Authenticate a user
- `PUT /users/update/:id`: Update a user
- `DELETE /users/delete/:id`: Delete a user

#### Employee Routes

- `GET /employees`: Get all employees (with pagination)
- `POST /employees/add`: Add a new employee
- `GET /employees/:id`: Get an employee by ID
- `PUT /employees/update/:id`: Update an employee by ID
- `DELETE /employees/delete/:id`: Delete an employee by ID

## API Documentation

Swagger documentation is available for this API. To access it, run the server and navigate to:

```
http://localhost:3000/api-docs
```

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

- `PORT`: The port on which the server will run
- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASS`: Database password
- `DB_NAME`: Database name
- `JWT_SECRET`: Secret key for JWT

## Error Handling

The API uses custom middleware for error handling. Standardized error responses are returned for various error conditions, such as validation errors, authentication errors, and database errors.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License.