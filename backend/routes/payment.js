const router = require('express').Router();
const paymentController = require("../controllers/payment")

router.route('/pay').post(paymentController.createOrder);

router.route('/verify').post(paymentController.handlePaymentVerification);

router.route('/add').post(paymentController.handleNewPayment);

module.exports = router;