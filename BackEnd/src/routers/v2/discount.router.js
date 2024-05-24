const DiscountController = require("../../controllers/v2/discount.controller");
const express = require('express');
const router = express.Router();


router.get('/getAll', DiscountController.getAll);
router.get('/getByID', DiscountController.getById);
router.get('/getUseAbleDiscount', DiscountController.getUseAbleDiscount);

module.exports = router;
