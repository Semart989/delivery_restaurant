const router = require('express').Router();

const { getOrders } = require('../controllers/order.controller');

router.get('/', getOrders);

// router.put('/:id', statusOrder);

module.exports = router;
