const router = require('express').Router();

const { myOrders } = require('../controllers/myOrders.controller');

router.get('/', myOrders);

module.exports = router;
