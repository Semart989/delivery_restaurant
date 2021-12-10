'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Dish', [{
        name: 'Борщ',
        picture: "",
        price: 210,
        time: 20,
        category_id: 1,
      },
      {
        name: 'Солянка',
        picture: "",
        price: 210,
        time: 20,
        category_id: 1,
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Dish', null, {});
  }
};
