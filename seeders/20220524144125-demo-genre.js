'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [
      {
        name: 'Comedia',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Terror',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Novela',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ciencia Ficción',        
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
