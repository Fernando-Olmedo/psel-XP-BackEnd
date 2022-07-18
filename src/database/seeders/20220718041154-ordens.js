'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Ordens', [
      {
        cod_ativo: 'PETR4',
        cod_cliente: 2,
        qtde_ativo: 100,
        tipo: 1,
        valor_ativo: 25.00,
      },
      {
        cod_ativo: 'XPBR31',
        cod_cliente: 2,
        qtde_ativo: 500,
        tipo: 1,
        valor_ativo: 30.00,
      },
      {
        cod_ativo: 'ITUB4',
        cod_cliente: 1,
        qtde_ativo: 200,
        tipo: 1,
        valor_ativo: 20.00,
      },
      {
        cod_ativo: 'XPBR31',
        cod_cliente: 1,
        qtde_ativo: 100,
        tipo: 1,
        valor_ativo: 29.00,
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Ordens', null, {});
  }
};
