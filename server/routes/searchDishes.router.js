const router = require('express').Router();

//запрос всех блюд с базы

const { getDishes } = require('../controllers/findDishes.controller');

router.get('/', getDishes);

module.exports = router;
