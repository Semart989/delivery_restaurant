const router = require('express').Router();

const { getDish } = require('../controllers/dish.controller');

router.get('/:dishid', getDish);

module.exports = router;
