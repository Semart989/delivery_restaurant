'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Categories', [{
        name: 'Soups',
        picture: "/img/categories/soup-cat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drinks',
        picture: "/img/categories/drinks-cat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salats',
        picture: "/img/categories/salats-cat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Garnish',
        picture: "/img/categories/garnish-cat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza',
        picture: "/img/categories/pizza-cat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Deserts',
        picture: "/img/categories/deaerts-cat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Categories', null, {});
  }
};
