const router = require('express').Router();
require('dotenv').config();
process.env.CLIENT_ID;

const donationController = require("../controllers/donation")

// Route to update the status of donation in the database under the fundraiser and user collections

router.route('/updatedonation').post(donationController.handleDonationUpdate);

module.exports = router;
