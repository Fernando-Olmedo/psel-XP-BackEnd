'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Clientes', [
      {
        email: 'jhonDoe@xpi.com',
        nome: 'Jhon Doe',
        password: '123456',
        hash: '$argon2i$v=19$m=16,t=2,p=1$SElSYUlWa2RyRWhaUUNOYw$yV1j712OJHH/dm+L6jJ0qw'
      },
      {
        email: 'janeDoe@xpi.com',
        nome: 'Jane Doe',
        password: '246810',
        hash: '$argon2i$v=19$m=16,t=2,p=1$SElSYUlWa2RyRWhaUUNOYw$uBffjLVl6gcX0HDIavLCZg'
      },
      {
        email: 'jackDoe@xpi.com',
        nome: 'Jack Doe',
        password: '112358',
        hash: '$argon2i$v=19$m=16,t=2,p=1$SElSYUlWa2RyRWhaUUNOYw$8msHJrlmTNGN6xd/pDXbZw'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Clientes', null, {});
  }
};
