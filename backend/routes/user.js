const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

// Route to handle login
router.route('/login').post(userController.handleUserLogin);

// Route to get all the user details
router.route('/dashboard/:id').get(userController.getUserDetails);

// Route to get all the fundraisers a user has donated to
router.route('/donations/:id').get(userController.getAllFundraisersUserDonatedTo);

module.exports = router;
