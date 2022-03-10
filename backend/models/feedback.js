const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  userid: {type:String,required:true},
  rating: {type: Number,required:true},
  message:{type:String,required:true},
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
