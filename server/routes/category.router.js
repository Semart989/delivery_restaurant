const router = require('express').Router();

const { getCategories, getCategoryDishes } = require('../controllers/category.controller');
// const { getCategories } = require('../controllers/category.controller');

router.get('/', getCategories);

router.get('/:catid', getCategoryDishes);

module.exports = router;
