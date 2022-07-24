const { Conta } = require('../database/models');

const { atualizaConta } = require('../utilities/helpers');

const createMov = async (transaction) => {
    const saldoObj = await atualizaConta(transaction);
    await Conta.update(saldoObj, { where: { codCliente: transaction.codCliente } });

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