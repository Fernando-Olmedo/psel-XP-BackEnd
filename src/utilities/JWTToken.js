const jwt = require('jsonwebtoken');
const { Cliente } = require('../database/models');

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
        const decoded = jwt.verify(token, SECRET, jwtConfig);

        const user = await Cliente.findOne({ attributes: { exclude: ['password'] }, 
            where: { email: decoded.data.email },
        });

        if (!user) {
            const errorObject = { status: 401, message: 'User not found' };
            throw errorObject;
        }
        
        return user.dataValues;
    } catch (e) {
        const errorObject = { status: 401, message: 'Expired or invalid token' };
        throw errorObject;
    }
};

module.exports = {
    generateJWTToken,
    authenticationToken,

};