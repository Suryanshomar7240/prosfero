const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
->Reviewer  Data  -> name , email 

-> rating -> How many stars out of 5

-> bio -> Some description about why he give that rating

*/

const Reviews = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating:{ type: Float,required=true},
  bio:{type:String,required=true}
});

// const Review= mongoose.model('reviews',Reviews);

module.exports = mongoose.model('reviews',Reviews);
