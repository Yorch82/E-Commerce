'use strict';
const bcrypt = require('bcryptjs')
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Users',[
      {
        name: 'Pedro',
        email: "pedro@gmail.com",
        phone: "111111111",
        password: bcrypt.hashSync("holabuenas", 10),        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juan',
        email: "juan@gmail.com",
        phone: "222222222",
        password: bcrypt.hashSync("holabuenas", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria',
        email: "maria@gmail.com",
        phone: "333333333",
        password: bcrypt.hashSync("holabuenas", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amparo',
        email: "amparo@gmail.com",
        phone: "444444444",
        password: bcrypt.hashSync("holabuenas", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]);},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
