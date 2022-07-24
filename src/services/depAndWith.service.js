// const Sequelize = require('sequelize');
const { Conta } = require('../database/models');

// const config = require('../database/config/config');
const { atualizaConta } = require('../utilities/helpers');

// const sequelize = new Sequelize(config.development);

const createMov = async (transaction) => {
    const saldoObj = await atualizaConta(transaction);
    await Conta.update(saldoObj, { where: { codCliente: transaction.codCliente } });

    // const conta = await Conta.findOne({ 
    //     attributes: ['codCliente', 'saldo'], 
    //     where: { codCliente: transaction.codCliente },
    // });

    return transaction;
};

const getBalance = async (codCliente) => {
    const conta = await Conta.findOne({ 
        attributes: ['codCliente', 'saldo'], 
        where: { codCliente },
    });
    
    return conta;
};

module.exports = { createMov, getBalance };