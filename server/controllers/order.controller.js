// const axios = require('axios');
const { Order, Dish, Order_Dish } = require('../db/models');

const order = {
  user_id: 5,
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
  // const { order } = req.body;

  try {
    await Order.create({
      user_id: order.user_id,
    });

    const orderId = await Order.findAll({ where: { user_id: order.user_id } });

    
    await Order_Dish.create({
      order_id: 123,
      dish_id: 456,
      quantity: 2,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { newOrder };
