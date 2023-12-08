const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const fundraiserRouter = require('./routes/fundraiser');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const donateRouter =require('./routes/donation');
const feedbackRouter =require('./routes/feedback');
const paymentRouter = require('./routes/payment')

const app = express();
app.use(express.json());  
app.use(cors());
// routes for queries over fundraisers and users
app.use('/fundraiser', fundraiserRouter);
app.use('/user', userRouter);
app.use('/admin',adminRouter);
app.use('/donation',donateRouter);
app.use('/feedback',feedbackRouter);
app.use('/payment',paymentRouter);
app.use('/',(req,res)=>{ 
  res.send("welcome to prosfero api ");
});


const PORT =process.env.PORT || 5000;
const MONGO_PWD = process.env.MONGO_PWD;

// Connect to the mongodb atlas DB

mongoose.connect(
  `mongodb+srv://Yashraj:${MONGO_PWD}@cluster0.odtd1.mongodb.net/prosfero?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

// Check if the connection is established and once it is print a statement that will let us know the status

mongoose.connection
  .once('open', () => console.log('Connected'))
  .on('error', (error) => {
    console.log('Your error ', error);
  });

// Listen on the port for the requests

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
