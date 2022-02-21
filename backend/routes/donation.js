const router = require("express").Router();
const Fundraiser = require("../models/fundraiser");
const User = require("../models/user");
require("dotenv").config();
process.env.CLIENT_ID;

// route to to add fund money in database
router.route("/").post(async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  const fundId = req.body.fundId;
  const money = req.body.money;
  Fundraiser.findOne({ _id: fundId })
    .then((fund) => {
      User.findOne({ googleid: userId }).then((user) => {
        data = {
          fundId: fundId,
          donatedAmount: money,
        };
        flag = false;
        for (let i = 0; i < user.__v; i++) {
          if (user.fundraisersDonatedTo[i].fundId == fundId) {
            flag = true;
            user.fundraisersDonatedTo[i].donatedAmount += money;
            user.save();
          }
        }
        if (!flag) {
          user.fundraisersDonatedTo.push(data);
          user.save();
        }
        res.status(200).json({ message: "Donated sucessfully" });
      });
      fund.moneyCollected += money;
      fund.save();
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
module.exports = router;
