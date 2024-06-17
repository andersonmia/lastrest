const {body, validationResult} = require('express-validator')

const validateUser = [
    body('username').notEmpty().withMessage('Username is required').isString().withMessage('Invalid usernane'),
    body('password').notEmpty().withMessage('Password is required').isString().withMessage('Invalid password'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

module.exports = validateUser;