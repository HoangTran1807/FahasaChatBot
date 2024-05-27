const CartController = require('../../controllers/v2/Cart.Controller');


const express = require('express');
const router = express.Router();


router.get('/getByID', CartController.getCardById);
router.post('/CreateCart', CartController.createCard);


module.exports = router;

