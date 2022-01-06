const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Friend');
});

const PORT = 5000;
const MONGO_PWD = process.env.MONGO_PWD;
console.log(MONGO_PWD);

mongoose.connect(
  `mongodb+srv://Yashraj:${MONGO_PWD}@cluster0.odtd1.mongodb.net/prosfero?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

mongoose.connection.once("open",()=> console.log("Connected")).on('error', error => {
    console.log("Your error ",error)
})

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
