const router = require('express').Router();

const orderRouter = require('./order.router');

router.use('/cart', orderRouter);

module.exports = router;
