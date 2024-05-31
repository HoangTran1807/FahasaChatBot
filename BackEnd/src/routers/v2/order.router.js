const express = require('express');
const router = express.Router();

const OrderController = require('../../controllers/v2/order.controller');

router.get('/', OrderController.getAll);
router.get('/:id', OrderController.getById);
router.get('/user/:userId', OrderController.getByUserId);

module.exports = router;
