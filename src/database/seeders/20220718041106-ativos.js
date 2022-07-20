'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Ativos', [
      {
        cod_ativo: 101,
        valor_atual_ativo: 22.55,
        empresa: 'Itau Unibanco',
        sigla: 'ITUB4',
        qtde_ativo: 20
      },
      {
        cod_ativo: 102,
        valor_atual_ativo: 94.31,
        empresa: 'XP Inc',
        sigla: 'XPBR31',
        qtde_ativo: 500
      },
      {
        cod_ativo: 103,
        valor_atual_ativo: 27.96,
        empresa: 'Petrobras',
        sigla:'PETR4',
        qtde_ativo: 150
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Ativos', null, {});
  }
};
