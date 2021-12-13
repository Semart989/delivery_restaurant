const router = require('express').Router();

const cartRouter = require('./cart.router');
const isAuthRouter = require('./isAuth.router');
const categoryRouter = require('./category.router');
const dishRouter = require('./dish.router');
const orderRouter = require('./order.router');

router.use('/cart', cartRouter);
router.use('/isauth', isAuthRouter);
router.use('/categories', categoryRouter);
// router.use('/', categoryRouter);
router.use('/dishes', dishRouter);
router.use('/order', orderRouter);

module.exports = router;
