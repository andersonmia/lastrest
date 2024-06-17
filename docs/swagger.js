const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Equipment Distribution API',
            version: '1.0.0',
            description: 'API for managing equipment distribution',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
                description: 'Development Server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                Employee: {
                    type: 'object',
                    properties: {
                        firstname: { type: 'string' },
                        lastname: { type: 'string' },
                        NID: { type: 'string' },
                        tel: { type: 'string' },
                        dpt: { type: 'string', enum: ['HR', 'Sales', 'Marketing', 'IT'] },
                        position: { type: 'string', enum: ['Manager', 'Trainer', 'Associate', 'Analyst', 'Researcher', 'Developer'] },
                        laptop_manufacturer: { type: 'string' },
                        laptop_model: { type: 'string' },
                        SN: { type: 'string' }
                    },
                    required: ['firstname', 'lastname', 'NID', 'tel', 'dpt', 'position', 'laptop_manufacturer', 'laptop_model', 'SN']
                },
                User: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        password: { type: 'string' }
                    },
                    required: ['username', 'password']
                }
            }
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'],  // Adjust the path to be relative to the current file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;