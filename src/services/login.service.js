const { Cliente } = require('../database/models');
const { generateJWTToken } = require('../utilities/JWTToken');

const login = async (payload) => {
    const { username, password } = payload;

    const user = await Cliente.findOne({ 
        attributes: { exclude: ['password'] }, 
        where: { username, password },
    });

    if (user.lenght === 0) {
        const errorObject = { status: 401, message: 'Username or password invalid' };
        throw errorObject;
    }

    const token = generateJWTToken(payload);
    
    return conta;
};