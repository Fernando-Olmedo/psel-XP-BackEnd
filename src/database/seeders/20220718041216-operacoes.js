'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Operacoes', [
      {
        tipo: 'COMPRA'
      },
      {
        tipo: 'VENDA'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Operacoes', null, {});
  }
};
