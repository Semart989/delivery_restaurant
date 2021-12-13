module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Супы',

      picture: '/img/categories/soup-cat.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Напитки',

      picture: '/img/categories/drinks-cat.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Салаты',

      picture: '/img/categories/salats-cat.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Вторые блюда',

      picture: '/img/categories/garnish-cat.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца',

      picture: '/img/categories/pizza-cat.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Десерты',

      picture: '/img/categories/deaerts-cat.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
