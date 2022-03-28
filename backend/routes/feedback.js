const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback')

// Route to handle feedbacks and store them in the database
router.route('/post').post(feedbackController.handleFeedbackPost);
module.exports = router;
