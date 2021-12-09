module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dishes_Categories', {
      dish_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dishes',
          key: 'id',
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Dishes_Categories');
  }
};
