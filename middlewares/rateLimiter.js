const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 min
    max: 100, //limit each IP to 100 req per windowMs
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
    message: "Too many requests from this IP, please try again after 15 minutes"
});

module.exports = limiter;