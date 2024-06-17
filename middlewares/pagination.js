const pagination = (req, res, next) => {
    const page = parseInt(req.query.page, 10) || 1; // Default to page 1 if not specified
    const size = parseInt(req.query.size, 10) || 10; // Default to size 10 if not specified
    const limit = size;
    const offset = (page - 1) * limit;

    req.pagination = { limit, offset, page, size };
    next();
};

module.exports = pagination;