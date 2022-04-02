const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback')

// Route to handle feedbacks and store them in the database
router.route('/post').post(feedbackController.handleFeedbackPost);

// Route to get all the reviews from the database
router.route('/get').get(feedbackController.handleGetFeedback)
module.exports = router;
