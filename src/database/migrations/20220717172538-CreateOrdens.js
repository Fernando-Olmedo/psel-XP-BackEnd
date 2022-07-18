'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ordens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codAtivo: {
        allowNull: false,
        field: 'cod_Ativo',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Ativos',
          key: 'cod_ativo',
        },
        type: Sequelize.INTEGER
      },
      codCliente: {
        allowNull: false,
        field: 'cod_cliente',
        references: {
          model: 'Clientes',
          key: 'cod_cliente',
        },
        type: Sequelize.INTEGER
      },
      dataTransacao: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      valorAcao: {
        type: Sequelize.DECIMAL(10,2),
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Ordens');
  }
};