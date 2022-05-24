'use strict';
const bcrypt = require('bcryptjs')
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Users', [{
      name: 'Generic User',
      email: "generic@gmail.com",
      phone: "876586",
      password: "holabuenas",
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
