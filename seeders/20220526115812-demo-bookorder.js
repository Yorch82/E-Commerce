'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BooksOrders', [
      {
        OrderId: 1,
        BookId: 4,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 2,
        BookId: 2,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 3,
        BookId: 1,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 3,
        BookId: 3,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 4,
        BookId: 2,      
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
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
