const router = require('express').Router();
const Fundraiser = require('../models/fundraiser');

router.route('/active').get((req, res) => {
  Fundraiser.find()
    .then((fundraisers) => res.json(fundraisers))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const orgName = req.body.orgName;
  const bio = req.body.bio;
  const photoUrl = req.body.photoUrl;
//   const dateOpened = req.body.dateOpened;
  const targetMoney = req.body.targetMoney;
  const moneyCollected = req.body.moneyCollected;
  const upiMobile = req.body.upiMobile;

  const newFundraiser = new Fundraiser({
    orgName,
    bio,
    photoUrl,
    // dateOpened,
    targetMoney,
    moneyCollected,
    upiMobile,
  });

  newFundraiser
    .save()
    .then(() => res.send('New Fundraiser created successfully'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router