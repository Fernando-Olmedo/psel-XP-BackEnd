'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contas', {
      idConta: {
        allowNull: false,
        autoIncrement: true,
        field: 'id_conta',
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codCliente: {
        allowNull: false,
        field: 'cod_cliente',
        foreignKey: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saldo: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contas');
  }
};