module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addColumn('Orders', 'totalSum', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    }, { transaction: t }),
    queryInterface.addColumn('Orders', 'currentStatus', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }, { transaction: t }),
    // queryInterface.addColumn('Orders', 'totalQuantity', {
    //   type: Sequelize.DataTypes.INTEGER,
    //   allowNull: false,
    // }, { transaction: t }),
  ])),

  down: async (queryInterface) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.removeColumn('Orders', 'totalSum', { transaction: t }),
    queryInterface.removeColumn('Orders', 'currentStatus', { transaction: t }),
    // queryInterface.removeColumn('Orders', 'totalQuantity', { transaction: t }),
  ])),
};
