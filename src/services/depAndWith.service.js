// const Sequelize = require('sequelize');
const { Conta } = require('../database/models');

// const config = require('../database/config/config');
const { atualizaConta } = require('../utilities/helpers');

// const sequelize = new Sequelize(config.development);

const createMov = async (deposit) => {
    const saldoObj = await atualizaConta(deposit);
    await Conta.update(saldoObj, { where: { codCliente: deposit.codCliente } });

    const conta = await Conta.findOne({ 
        attributes: ['codCliente', 'saldo'], 
        where: { codCliente: deposit.codCliente },
    });

    return conta;
};

const getBalance = async (codCliente) => {
    const conta = await Conta.findOne({ 
        attributes: ['codCliente', 'saldo'], 
        where: { codCliente },
    });
    
    return conta;
};

module.exports = { createMov, getBalance };