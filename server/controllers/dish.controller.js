// const axios = require('axios');
const { Dish } = require('../db/models');

const getDish = async (req, res) => {
  try {
    const { dishid } = req.params;
    const dish = await Dish.findOne({
      where: {
        id: dishid,
      },
    });
    res.status(200).json({ dish });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

// newOrder();

module.exports = { getDish };
