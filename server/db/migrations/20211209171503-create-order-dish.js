module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order_Dishes', {
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      dish_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dishes',
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Order_Dishes');
  },
};
