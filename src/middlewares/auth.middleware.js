const { authenticationToken } = require('../utilities/JWTToken');

const authenticationMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    console.log('authmiddleware', token);

    const payload = await authenticationToken(token);

    console.log('authmiddleware', payload);

    res.locals.payload = payload;

    next();
};

module.exports = authenticationMiddleware;