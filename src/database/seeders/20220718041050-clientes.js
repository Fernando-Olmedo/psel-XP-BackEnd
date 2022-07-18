'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Clientes', [
      {
        email: 'jhonDoe@xpi.com',
        nome: 'Jhon Doe',
        password: '123456'
      },
      {
        email: 'janeDoe@xpi.com',
        nome: 'Jane Doe',
        password: '246810'
      },
      {
        email: 'jackDoe@xpi.com',
        nome: 'Jack Doe',
        password: '112358'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Clientes', null, {});
  }
};
