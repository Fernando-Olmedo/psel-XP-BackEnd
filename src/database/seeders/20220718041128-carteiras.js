'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Carteiras', [
      {
        cod_ativo: 102,
        cod_cliente: 1,
        qtde_ativo: 100
      },
      {
        cod_ativo: 101,
        cod_cliente: 1,
        qtde_ativo: 200
      },
      {
        cod_ativo: 102,
        cod_cliente: 2,
        qtde_ativo: 500
      },
      {
        cod_ativo: 103,
        cod_cliente: 2,
        qtde_ativo: 50
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Carteiras', null, {});
  }
};
