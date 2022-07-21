const argon2 = require('argon2');
const { Cliente } = require('../database/models');
const { generateJWTToken } = require('../utilities/JWTToken');

const login = async (payload) => {
    const { email, password } = payload;

    const user = await Cliente.findOne({ 
        attributes: { exclude: ['password'] }, 
        where: { email },
    });

    if (!user) {
        const errorObject = { status: 401, message: 'Email is not valid' };
        throw errorObject;
    }

    const isPasswordValid = await argon2.verify(user.hash, password);

    if (!isPasswordValid) {
        const errorObject = { status: 401, message: 'Password is not valid' };
        throw errorObject;
    }

    const token = generateJWTToken(user);
    
    return token;
};

module.exports = { login };