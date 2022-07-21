const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '5d',
    algorithm: 'HS512',
  };

const generateJWTToken = (payload) => jwt.sign({ data: payload }, SECRET, jwtConfig);

const authenticationToken = async (token) => {
    if (!token) {
        const errorObject = { status: 401, message: 'Token not found' };
        throw errorObject;
    }
    try {
        const introspection = await jwt.verify(token, SECRET, jwtConfig);
        return introspection;
    } catch (e) {
        const errorObject = { status: 401, message: 'Expired or invalid token' };
        throw errorObject;
    }
};

module.exports = {
    generateJWTToken,
    authenticationToken,

};