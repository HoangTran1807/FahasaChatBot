const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');


router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.get('/name/:name', ProductController.getByName);
router.get('/author/:author_id', ProductController.getByAuthorID);


module.exports = router;
