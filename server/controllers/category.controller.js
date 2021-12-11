// const axios = require('axios');
const { Category, Dish } = require('../db/models');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({});
    res.status(200).json({ categories });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

const getCategoryDishes = async (req, res) => {
  try {
    const { catid } = req.params;
    console.log(catid);
    const dishes = await Dish.findAll({
      where: {
        category_id: catid, // добавить order по необходимости
      },
    });
    res.status(200).json({ dishes });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

// newOrder();

module.exports = { getCategories, getCategoryDishes };
