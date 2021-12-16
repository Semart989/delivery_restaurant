const router = require('express').Router();

const { changeStatusOrder } = require('../controllers/order.controller');

router.put('/', changeStatusOrder);

module.exports = router;
