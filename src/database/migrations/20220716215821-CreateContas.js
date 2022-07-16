'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contas', {
      idConta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codCliente: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      saldo: {
        type: Sequelize.DECIMAL
      },
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contas');
  }
};