const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
-> User Data   -> name , email ( google api se)

                  -> open fundraisers ( make a relation between documents)

-> fundraisers donated to ( make a relation between documents)*/

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  pfp_url: { type: String, required: true },
  googleid: { type: String, required: true },
  id_token: { type: String, required: true },
  fundraisersDonatedTo: [{ fundId: String, donatedAmount: Number }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
