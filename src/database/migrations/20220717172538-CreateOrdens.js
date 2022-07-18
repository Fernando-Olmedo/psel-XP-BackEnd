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
      codCliente: {
        allowNull: false,
        field: 'cod_cliente',
        references: {
          model: 'Clientes',
          key: 'cod_cliente',
        },
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
        type: Sequelize.STRING
      },
      qtdeAtivo: {
        field: 'qtde_ativo',
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      valorAtivo: {
        field: 'valor_ativo',
        type: Sequelize.DECIMAL(10,2),
      },
      dataTransacao: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'data_transacao',
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Ordens');
  }
};