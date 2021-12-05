'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@example.com',
      password: '123456', // plain text '123456' -> hash password 'bsksjfbkjsbs'
      firstName: 'John',
      lastName: 'Doe',
      address: 'HCM',
      phonenumber: '0123456789',
      gender: 1,
      image: '',
      roleid: '',
      positionid: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
