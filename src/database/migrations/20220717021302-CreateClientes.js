'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      codCliente: {
        allowNull: false,
        autoIncrement: true,
        field: 'cod_cliente',
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hash: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};