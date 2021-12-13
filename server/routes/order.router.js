const router = require('express').Router();

const { getOrders } = require('../controllers/order.controller');

router.get('/', getOrders);

module.exports = router;
