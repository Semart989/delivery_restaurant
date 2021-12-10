'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Categories', [{
        name: 'Soups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salats',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Garnish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Categories', null, {});
  }
};
