// const axios = require('axios');
const { Op } = require('sequelize');
const {
  Order,
  Dish,
  Order_Dish,
  Order_Status,
  User,
} = require('../db/models');

const order = {
  user_id: 1,
  dishes: [{
    // order_id: 4,
    dish_id: 10,
    quantity: 2,
  }, {
    // order_id: 4,
    dish_id: 12,
    quantity: 1,
  }],
};

const newOrder = async (req, res) => {
  const {
    totalCart, totalSum, totalQuantity, user,
  } = req.body;

  try {
    const createOrder = await Order.create({
      user_id: user.id,
      totalSum,
      currentStatus: 'awaitOrder',
    });

    await Order_Status.create({
      order_id: createOrder.id,
      status: 'awaitOrder',
    });

    totalCart.forEach(async (dish) => {
      await Order_Dish.create({
        order_id: createOrder.id,
        dish_id: dish.id,
        quantity: dish.quantity,
      });
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

// Вынимаем из базы массив заказов для отрисовки у администратора и повара
// При этом нам ещё понадобятся имя, номер комнаты и телефон клиента, для
// этого используем цикл for в функции
const getOrders = async (req, res) => {
  try {
    const pureOrders = await Order.findAll({
      raw: true,
    });
    const users = [];
    for (let i = 0; i < pureOrders.length; i += 1) {
      const user = await User.findOne({
        where: {
          id: {
            [Op.eq]: pureOrders[i].user_id,
          }
        },
        raw: true,
      });
      users.push(user);
    }
    const orders = pureOrders.map((pureOrder, index) => {
      const order = {
        ...pureOrder,
        room: users[index].room,
        name: users[index].name,
        phone: users[index].phone,
      };
      return order;
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

// const submitOrder = async (req, res) => {
//   const { order_id, dishesList } = req.body;
//   const orderStatusList = await Order_Status.findAll({
//     where: {
//       order_id,
//     },
//   });
//   if (orderStatusList.length === 1) {
//     await Order_Status.create({
//       order_id,
//       status: 'submitOrder',
//     });
//   }
// };

// newOrder();

module.exports = { newOrder, getOrders };
