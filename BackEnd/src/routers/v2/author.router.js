const express = require('express');
const router = express.Router();

const AuthorController = require('../../controllers/v2/author.controller');

router.get('/getAll', AuthorController.getAll);
router.get('/getByID', AuthorController.getById);
router.get('/getByName', AuthorController.getByName);


module.exports = router;
