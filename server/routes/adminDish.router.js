const router = require('express').Router();

const { deleteDish } = require('../controllers/order.controller');

router.delete('/', deleteDish);

module.exports = router;
