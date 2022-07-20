'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carteiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codCliente: {
        allowNull: false,
        field: 'cod_cliente',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Clientes',
          key: 'cod_cliente',
        },
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codAtivo: {
        allowNull: false,
        field: 'cod_ativo',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Ativos',
          key: 'cod_ativo',
        },
        primaryKey: true,
        type: Sequelize.STRING
      },
      qtdeAtivo: {
        allowNull: false,
        field: 'qtde_ativo',
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Carteiras');
  }
};