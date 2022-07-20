const Sequelize = require('sequelize');
const { Ordem, Ativo, Carteira, Conta } = require('../database/models');
const { 
  qtdeAtivo, 
  qtdeAtivoCart, 
  procuraAtivoCart, 
  atualizaSaldo,
} = require('../utilities/helpers');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const errorObject = { status: 500, message: 'Something went bad...' };

const createOrdem = async (ordem) => {
    const t = await sequelize.transaction();
    try {  
    // Atualiza o ativo na tabela ativos com a nova quantidade
     const qtdeObjtAtivo = await qtdeAtivo(ordem);
     await Ativo.update(qtdeObjtAtivo, { where: { codAtivo: ordem.codAtivo }, transaction: t });
     
     // Atualiza o ativo na tabela carteiras com a nova quantidade ou cria um novo ativo
     const isAtivoExistente = await procuraAtivoCart(ordem);
     if (isAtivoExistente) {
       const qtdeObjtCart = await qtdeAtivoCart(ordem);
       await Carteira.update(qtdeObjtCart, { 
            where: { codCliente: ordem.codCliente, codAtivo: ordem.codAtivo }, transaction: t });
     } else await Carteira.create(ordem, { transaction: t });

     // Atualiza a tabela saldo
     const saldo = await atualizaSaldo(ordem);
     await Conta.update(saldo, { where: { codCliente: ordem.codCliente }, transaction: t });

     // Atualiza a tabela ordem
     const createdOrder = await Ordem.create(ordem, { transaction: t });

     await t.commit();
     return createdOrder;
    } catch (e) { await t.rollback(); throw errorObject; }
};

const findOrder = async () => {
    const allOrders = await Ordem.findAll();
    return allOrders;
};

module.exports = { createOrdem, findOrder };