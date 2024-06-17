require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const User = require('./models/user')
const Employee = require('./models/employee')

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./docs/swagger')

const sequelize = require('./config/db');

const exceptionHandler = require('./middlewares/exceptionHandler');
const rateLimiter = require('./middlewares/rateLimiter');

const userRoutes = require('./routes/userRoute');
const employeeRoutes = require('./routes/employeeRoute');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(exceptionHandler);
app.use(rateLimiter);

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Connect to DB
sequelize.authenticate()
    .then(() => {
        console.log("Database connection successful...\n");
    }).catch(err => {
        console.log(`Database connection failed: ${err}`);
    });

// Create tables in the DB
sequelize.sync()
    .then(() => {
        console.log("Created tables in the database\n");
    }).catch(err => {
        console.log(`Failed to create tables in the database: ${err}`);
    });

// Routes
app.use('/', userRoutes);
app.use('/employees', employeeRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running at port: ${port}\n`);
});