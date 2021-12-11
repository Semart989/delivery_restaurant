// const axios = require('axios');
const { Category } = require('../db/models');

const getCategories = async (req, res) => {
  try {
    console.log(111111111);
    const categories = await Category.findAll({});

    console.log(categories);

    res.status(200).json({ categories });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

// newOrder();

module.exports = { getCategories };
