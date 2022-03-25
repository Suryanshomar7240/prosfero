const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  userId: { type: String, required: true },
  payment_id: { type: String, required: true },
  order_id: { type: String, required: true },
  signature: { type: String, required: true },
  fundId: { type: String, required: true },
});

const Payment = mongoose.model('Payment Record', paymentSchema);

module.exports = Payment;
