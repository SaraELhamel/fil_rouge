const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/signupcustomer',customerController.signupCustomer);

router.post('/logincustomer',customerController.signIncustomer);

module.exports = router;