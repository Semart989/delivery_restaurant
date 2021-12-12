const router = require('express').Router();

const orderRouter = require('./order.router');
const isAuthRouter = require('./isAuth.router');
const categoryRouter = require('./category.router');
const dishRouter = require('./dish.router');

router.use('/cart', orderRouter);
router.use('/isauth', isAuthRouter);
router.use('/categories', categoryRouter);
// router.use('/', categoryRouter);
router.use('/dishes', dishRouter);

module.exports = router;
