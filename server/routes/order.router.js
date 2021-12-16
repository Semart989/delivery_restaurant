const router = require('express').Router();

const { getOrders, newOrder } = require('../controllers/order.controller');

router.get('/', getOrders);
router.post('/', newOrder);

// router.put('/:id', statusOrder);


module.exports = router;
