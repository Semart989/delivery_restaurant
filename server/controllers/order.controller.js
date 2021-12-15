// const axios = require('axios');
const { Order, Dish, Order_Dish } = require('../db/models');

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
  console.log(req.body);

  const {
    totalCart, totalSum, user,
  } = req.body;
  // console.log(order.user_id);
  console.log('body', req.body);
  try {
    await Order.create({
      user_id: user.id,
      totalSum,
      currentStatus: 'true',
    });

    const lastOrder = await Order.findAll({
      // where: { user_id: order.user_id },
      raw: true,
      order: [['createdAt', 'DESC']],
      limit: 1,
    });

    totalCart.forEach(async (dish) => {
      await Order_Dish.create({
        order_id: lastOrder[0].id,
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

// newOrder();

module.exports = { newOrder };
