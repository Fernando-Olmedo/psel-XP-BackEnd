'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Ativos', [
      {
        cod_ativo: 'ITUB4',
        valor_atual_ativo: 22.55,
        nome: 'Itau Unibanco',
        qtde_ativo: 20
      },
      {
        cod_ativo: 'XPBR31',
        valor_atual_ativo: 94.31,
        nome: 'XP Inc',
        qtde_ativo: 500
      },
      {
        cod_ativo: 'PETR4',
        valor_atual_ativo: 27.96,
        nome: 'Petrobras',
        qtde_ativo: 150
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Ativos', null, {});
  }
};
