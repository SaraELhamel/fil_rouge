const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/signupadmin',adminController.signupAdmin);
router.post('/loginadmin',adminController.signInadmin);


module.exports = router;