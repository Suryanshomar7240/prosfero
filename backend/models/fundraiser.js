const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for the fundraiser model

/*-> Fundraisers -> Money targeted

                 -> Photos ( get them from a service or mongo (tbd) )

                 -> Money received

                 -> Organization name + Fundraiser name

                 -> Date opened

                 -> UPI payment number

                 -> Bio of the donation
*/

const fundraiserSchema = new Schema(
  {
    orgName: { type: String, required: true },
    bio: { type: String, required: true },
    photoUrl: { type: String, required: false },
    targetMoney: { type: Number, required: true },
    moneyCollected: { type: Number, required: true },
    upiMobile: { type: Number, required: true },
    active: { type: Boolean, required: true },
    createdby: { type: String, required: true },
    type: { type: String, required: true },
    // createdby: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);

module.exports = Fundraiser;
