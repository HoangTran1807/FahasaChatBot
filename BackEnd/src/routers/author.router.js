const express = require('express');
const router = express.Router();

const AuthorController = require('../controllers/author.controller');

router.get('/', AuthorController.getAll);
router.get('/:id', AuthorController.getById);
router.get('/name/:name', AuthorController.getByName);


module.exports = router;
