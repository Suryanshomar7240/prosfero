const router = require('express').Router();
const Fundraiser = require('../models/fundraiser');
const mongoose = require('mongoose');

// Get all the active fundraisers (for the explore section)

router.route('/active').get((req, res) => {
  Fundraiser.find()
    .then((fundraisers) => res.json(fundraisers))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create a new fundraiser (for the create fundraiser section)

router.route('/create').post((req, res) => {
  const orgName = req.body.orgName;
  const bio = req.body.bio;
  const photoUrl = req.body.photoUrl;
  const targetMoney = req.body.targetMoney;
  const moneyCollected = req.body.moneyCollected;
  const upiMobile = req.body.upiMobile;
  const active = true;
  const createdby = req.body.userId;

//   console.log(createdby)

  const newFundraiser = new Fundraiser({
    orgName,
    bio,
    photoUrl,
    targetMoney,
    moneyCollected,
    upiMobile,
    active,
    createdby,
  });

  newFundraiser
    .save()
    .then(() => res.send('New Fundraiser created successfully'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get all the fundraiser for a given user (for the dashboard section)
// We pass the userid through the url and query over this userid and return a json
// that contains all the fundraisers created by a given user

router.route('/:userId').get((req, res) => {
  userId = req.params.userId;
  Fundraiser.find({ createdby: userId })
    .then((fundraisers) => res.json(fundraisers))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
