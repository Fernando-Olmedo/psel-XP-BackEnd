'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ativos', {
      codAtivo: {
        allowNull: false,
        autoIncrement: false,
        field: 'cod_ativo',
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sigla: {
        allowNull: false,
        type: Sequelize.STRING
      },
      qtdeAtivo: {
        allowNull: false,
        field: 'qtde_ativo',
        type: Sequelize.INTEGER
      },
      valorAtualAtivo: {
        allowNull: false,
        field: 'valor_atual_ativo',
        type: Sequelize.DECIMAL(10,2),
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Ativos');
  }
};