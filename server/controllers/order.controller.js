const axios = require('axios');
const { Order, Dish } = require('../db/models');

const newOrder = async (req, res) => {
  const { order } = req.body;

  try {
    await Order.create({

    });

    await Dish.create({

    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { newOrder };
