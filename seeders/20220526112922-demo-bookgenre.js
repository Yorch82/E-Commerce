'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BooksGenres', [
      {
        GenreId: [1],
        Bookid: [4],        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GenreId: [2],
        Bookid: [2],       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GenreId: [3],
        Bookid: [1],       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GenreId: [3],
        Bookid: [3],       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GenreId: [4],
        Bookid: [2],      
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
