const router = require('express').Router();
const nanoid = require('nanoid');
const Razorpay = require('razorpay');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const RAZORPAY_TOKEN = process.env.RAZORPAYSICKRET;

const razorpay = new Razorpay({
  key_id: 'rzp_test_xfRpOzB2d3bt4z',
  key_secret: 'm4281HTHQavB2UYxrOa9nlaz',
});

router.route('/pay').post(async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.amount; //  Amount entered by the user in Rs
  const user = req.body.user;
  // const currency = req.body.currency;
  const currency = 'INR';

  const payment_options = {
    amount: amount * 100, // Razorpay takes in amount in Paise
    currency,
    receipt: nanoid.nanoid(),
    notes: {
      created_by: user,
    },
    payment_capture,
  };

  try {
    const razorpay_res = await razorpay.orders.create(payment_options);
    console.log(razorpay_res);
    res.status(200).json({
      id: razorpay_res.id,
      currency: razorpay_res.currency,
      amount: razorpay_res.amount,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json('Error: ' + err);
  }
});

router.route('/verify').post((req, res) => {
  const sickret = RAZORPAY_TOKEN;

  const shasum = crypto.createHmac('sha256', sickret);
  shasum.update(JSON.stringify(req.body));

  const digest = shasum.digest('hex');

  if (digest === req.headers['x-razorpay-signature']) {
    console.log(JSON.stringify(req.body));
  } else {
    console.log('Invalid request');
  }
  req.json({ status: 'ok' });
});

module.exports = router;
