'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Ordens', [
      {
        cod_ativo: 103,
        cod_cliente: 2,
        qtde_ativo: 100,
        tipo: 1,
        valor_ativo: 25.00,
      },
      {
        cod_ativo: 102,
        cod_cliente: 2,
        qtde_ativo: 500,
        tipo: 1,
        valor_ativo: 30.00,
      },
      {
        cod_ativo: 101,
        cod_cliente: 1,
        qtde_ativo: 200,
        tipo: 1,
        valor_ativo: 20.00,
      },
      {
        cod_ativo: 102,
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
