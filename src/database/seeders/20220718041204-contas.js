'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Contas', [
      {
        cod_cliente: 1,
        saldo: 1000.00
      },
      {
        cod_cliente: 2,
        saldo: 0.00
      },
      {
        cod_cliente: 3,
        saldo: 500.00
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Contas', null, {});
  }
};
