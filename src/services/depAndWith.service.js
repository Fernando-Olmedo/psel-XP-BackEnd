// const Sequelize = require('sequelize');
const { Conta } = require('../database/models');

// const config = require('../database/config/config');
const { atualizaConta } = require('../utilities/helpers');

// const sequelize = new Sequelize(config.development);

const createMov = async (deposit) => {
    console.log(deposit);
    const saldoObj = await atualizaConta(deposit);
    console.log(saldoObj);
    await Conta.update(saldoObj, { where: { codCliente: deposit.codCliente } });
    const conta = await Conta.findOne({ 
        attributes: ['codCliente', 'saldo'], 
        where: { codCliente: deposit.codCliente },
    });
    console.log(conta);
    return conta;
};

module.exports = { createMov };