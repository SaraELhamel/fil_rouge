const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');

router.post('/signupcustomer',buyerController.signupBuyer);

router.post('/logincustomer',buyerController.signInbuyer);

module.exports = router;