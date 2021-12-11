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
  // const { order } = req.body;
  console.log(order.user_id);

  try {
    await Order.create({
      user_id: order.user_id,
    });

    const lastOrder = await Order.findAll({
      // where: { user_id: order.user_id },
      raw: true,
      order: [['createdAt', 'DESC']],
      limit: 1,
    });

    console.log(lastOrder[0].id);

    order.dishes.forEach(async (dish) => {
      await Order_Dish.create({
        order_id: lastOrder[0].id,
        dish_id: dish.dish_id,
        quantity: dish.quantity,
      });
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

//newOrder();

module.exports = { newOrder };
