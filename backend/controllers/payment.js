const nanoid = require('nanoid');
const Razorpay = require('razorpay');
const path = require('path');
const crypto = require('crypto');
const Payment = require('../models/payments');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const RAZORPAY_TOKEN = process.env.RAZORPAYSICKRET;
const RAZORPAY_KEYID = process.env.RAZORPAY_KEYID;
const RAZORPAY_SICKRET = process.env.RAZORPAY_SICKRET;

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEYID,
  key_secret: RAZORPAY_SICKRET,
});

exports.createOrder = async (req, res) => {
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
    res.status(200).json({
      id: razorpay_res.id,
      currency: razorpay_res.currency,
      amount: razorpay_res.amount,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json('Error: ' + err);
  }
};

exports.handlePaymentVerification = (req, res) => {
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
};


exports.handleNewPayment = (req, res) => {
    const userId = req.body.created_by;
    const payment_id = req.body.r_payment_id;
    const order_id = req.body.r_order_id;
    const signature = req.body.r_signature;
    const fundId = req.body.fundraiser_id;
  
    const newPayment = new Payment({
      userId: userId,
      payment_id: payment_id,
      order_id: order_id,
      signature: signature,
      fundId: fundId,
    });
  
    newPayment
      .save()
      .then(() =>
        res.send({
          status: 200,
          message: 'New Payment added successfully',
        })
      )
      .catch((err) => res.status(400).json('Error: ' + err));
  }