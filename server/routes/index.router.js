const router = require('express').Router();

const cartRouter = require('./cart.router');
const isAuthRouter = require('./isAuth.router');
const categoryRouter = require('./category.router');
const dishRouter = require('./dish.router');
const orderRouter = require('./order.router');
const changeStatusRouter = require('./changeStatus.router');
const cookOrderRouter = require('./cookOrderRouter');
const cookChangeStatusRouter = require('./cookChangeStatus.router');
const testRouter = require('./test_ajax.router');

const myOrdersRouter = require('./myOrders.router');

const findDishesRouter = require('./searchDishes.router');
const adminDishesRouter = require('./adminDish.router');

const loginRouter = require('./login.router');
const logoutRouter = require('./logout.router');

router.use('/cart', cartRouter);
router.use('/isauth', isAuthRouter);
router.use('/categories', categoryRouter);
// router.use('/', categoryRouter);
router.use('/dishes', dishRouter);
router.use('/admin/order', orderRouter);
router.use('/admin/changeStatus', changeStatusRouter);
router.use('/cook/order', cookOrderRouter);
router.use('/cook/changeStatus', cookChangeStatusRouter);
router.use('/test', testRouter);
router.use('/orders', myOrdersRouter);
router.use('/search', findDishesRouter);
router.use('/admin/dish', adminDishesRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);

module.exports = router;
