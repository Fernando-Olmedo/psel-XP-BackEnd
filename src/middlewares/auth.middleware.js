const { authenticationToken } = require('../utilities/JWTToken');

const authenticationMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    const payload = await authenticationToken(token);

    res.locals.payload = payload;

    next();
};

module.exports = authenticationMiddleware;