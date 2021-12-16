const router = require('express').Router();

const { newOrder } = require('../controllers/order.controller');

router.post('/', newOrder);

module.exports = router;
