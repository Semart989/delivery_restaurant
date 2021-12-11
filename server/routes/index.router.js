const router = require('express').Router();

const orderRouter = require('./order.router');

router.use('/card', orderRouter);

module.exports = router;
