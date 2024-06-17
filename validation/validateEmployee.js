const { body, validationResult } = require('express-validator');

const createEmployeeValidation = [
    body('firstname').notEmpty().withMessage('First name is required').isString().withMessage('Invalid first name'),
    body('lastname').notEmpty().withMessage('Last name is required').isString().withMessage('Invalid last name'),
    body('NID').notEmpty().withMessage('NID is required').isString().withMessage('Invalid NID'),
    body('tel').notEmpty().withMessage('Telephone number is required').isString().withMessage('Invalid telephone'),
    body('dpt').notEmpty().withMessage('Department is required').isIn(['HR', 'Sales', 'Marketing', 'IT']).withMessage('Invalid department'),
    body('position').notEmpty().withMessage('Position is required').isIn(['Manager', 'Trainer', 'Associate', 'Analyst', 'Researcher', 'Developer']).withMessage('Invalid position'),
    body('laptop_manufacturer').notEmpty().withMessage('Laptop manufacturer is required').isString().withMessage('Invalid Manufacturer'),
    body('laptop_model').notEmpty().withMessage('Laptop model is required').isString().withMessage('Invalid model'),
    body('SN').notEmpty().withMessage('Serial Number is required').isString().withMessage('Invalid serial number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const updateEmployeeValidation = [
    body('firstname').optional().notEmpty().withMessage('First name is required').isString().withMessage('Invalid first name'),
    body('lastname').optional().notEmpty().withMessage('Last name is required').isString().withMessage('Invalid last name'),
    body('NID').optional().notEmpty().withMessage('NID is required').isString().withMessage('Invalid NID'),
    body('tel').optional().notEmpty().withMessage('Telephone number is required').isString().withMessage('Invalid telephone'),
    body('dpt').optional().notEmpty().withMessage('Department is required').isIn(['HR', 'Sales', 'Marketing', 'IT']).withMessage('Invalid department'),
    body('position').optional().notEmpty().withMessage('Position is required').isIn(['Manager', 'Trainer', 'Associate', 'Analyst', 'Researcher', 'Developer']).withMessage('Invalid position'),
    body('laptop_manufacturer').optional().notEmpty().withMessage('Laptop manufacturer is required').isString().withMessage('Invalid Manufacturer'),
    body('laptop_model').optional().notEmpty().withMessage('Laptop model is required').isString().withMessage('Invalid model'),
    body('SN').optional().notEmpty().withMessage('Serial Number is required').isString().withMessage('Invalid serial number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    createEmployeeValidation,
    updateEmployeeValidation
};