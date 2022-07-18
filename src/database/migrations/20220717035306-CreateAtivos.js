'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ativos', {
      codAtivo: {
        allowNull: false,
        autoIncrement: true,
        field: 'cod_ativo',
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cotacao: {
        type: Sequelize.DECIMAL(10,2),
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ativos');
  }
};