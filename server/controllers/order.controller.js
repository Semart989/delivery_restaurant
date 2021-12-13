// const axios = require('axios');
const {
  Order,
  Dish,
  Order_Dish,
  Order_Status,
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
const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      raw: true,
    });
    console.log(orders);
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
