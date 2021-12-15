const { Dish } = require('../db/models');

const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.findAll({});
    console.log(dishes, 111111);
    res.status(200).json({ dishes });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { getDishes };
