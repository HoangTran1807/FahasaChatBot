const express = require('express');
const router = express.Router();

const ProductController = require('../../controllers/v2/product.controller');


router.get('/getAll', ProductController.getAll);
router.get('/getByID', ProductController.getById);
router.get('/getByName', ProductController.getByName);
router.get('/getByAuthor', ProductController.getByAuthorID);


module.exports = router;
