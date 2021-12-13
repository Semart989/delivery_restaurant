module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      phone: 123456,
      pin: 1234,
      name: 'Armen',
      room: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      phone: 223456,
      pin: 2234,
      name: 'Arusyak',
      room: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      phone: 323456,
      pin: 3234,
      name: 'Narek',
      room: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      phone: 423456,
      pin: 4234,
      name: 'Achik',
      room: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      phone: 523456,
      pin: 5234,
      name: 'Anush',
      room: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      phone: 623456,
      pin: 6234,
      name: 'Mangush',
      room: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
