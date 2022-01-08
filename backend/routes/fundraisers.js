const router = require('express').Router();
const Fundraiser = require('../models/fundraiser');

// Get all the active fundraisers (for the explore section)

router.route('/active').get((req, res) => {
  Fundraiser.find()
    .then((fundraisers) => res.json(fundraisers))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create a new fundraiser (for the create fundraiser section)

router.route('/create').post((req, res) => {
  const orgName = req.body.org_name;
  const bio = req.body.motive;
  const photoUrl = null;
  const targetMoney = req.body.required_money;
  const moneyCollected = 0;
  const upiMobile = req.body.email;
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
    createdby
  });

  newFundraiser
    .save()
    .then(() =>
      res.send({
        status: 200,
        message: 'New Fundraiser created successfully',
      })
    )
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
