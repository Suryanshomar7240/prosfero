const router = require('express').Router();
const Fundraiser = require('../models/fundraiser');
const User = require('../models/user');
require('dotenv').config();
process.env.CLIENT_ID;

// route to to add fund money in database

router.route('/updatedonation').post(async (req, res) => {
  const userId = req.body.donated_by;
  const fundId = req.body.fund_id;
  const amount = parseInt(req.body.amount);

  // console.log(userId,fundId,req.body.amount)

  const fundDataForUser = {
    fundId: fundId,
    donatedAmount: amount,
  };

  const user_res = await User.findOne({ googleid: userId })
    .then(async (user) => {
      if (user === null) {
        res.status(401).json('User Not Found');
      } else {
        var flag = false;
        var valid_fundraiser = false;

        const fund_details = await Fundraiser.findOne({_id : fundId}).then((fund) => {
          if (fund === null) {
            console.log("fundraiser not found")
            valid_fundraiser = false;
            res.status(401).json('Fundraiser Not Found');
          } else {
            valid_fundraiser = true;
            fund.moneyCollected += amount;
            fund.save()
          }
        });

        if (valid_fundraiser) {
          for (let i = 0; i < user.fundraisersDonatedTo.length; i++) {
            if (user.fundraisersDonatedTo[i].fundId === fundId) {
              flag = true;
              user.fundraisersDonatedTo[i].donatedAmount += amount;
              console.log(user.fundraisersDonatedTo[i].donatedAmount);
              break;
            }
          }
          if (!flag) {
            user.fundraisersDonatedTo.push(fundDataForUser);
          }
          user.save();
          res.status(200).json('Data updated successfully to the database');
        }
      }
    })
    .catch((err) => {
      res.status(401).json({ msg: 'Something went wrong', error: err });
    });
});
module.exports = router;
