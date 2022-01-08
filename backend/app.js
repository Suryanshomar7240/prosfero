const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();

const fundraiserRouter = require('./routes/fundraisers');
const app = express();
app.use(express.json());
app.use(cors());

// routes for queries over fundraisers
app.use('/fundraiser', fundraiserRouter);

const PORT = 5000;
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
