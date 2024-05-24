const express = require('express');
const router = express.Router();

const PeopleController = require('../../controllers/v2/people.controller');

router.get('/getall', PeopleController.getAll);
// ?id=1
router.get('/getByID', PeopleController.getById);

router.get('/getByUserName', PeopleController.getByUserName);

module.exports = router;
