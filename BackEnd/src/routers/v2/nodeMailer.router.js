const {sendMail} = require('../../controllers/v2/mailer.controller');

const express = require('express');
const router = express.Router();

router.post('/send', sendMail);

module.exports = router;
