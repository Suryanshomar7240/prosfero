const Fundraiser = require('../models/fundraiser');
const User = require('../models/user');

const getUsers = async (obj) => {
  const obj2 = {
    username: '',
    userpfp: '',
  };
  const temp = await User.findOne({ googleid: obj['createdby'] })
    .then(async (user) => {
      obj2['userpfp'] = user['pfp_url'];
      obj2['username'] = user['firstname'] + ' ' + user['lastname'];
      object = { fundraisers: obj, user: obj2 };
      return object;
    })
    .catch((err) => {
      throw err;
    });
  return temp;
};

exports.getAllFundraisers = async (req, res) => {
  Fundraiser.find()
    .then(async (fundraisers) => {
      
      const data = fundraisers.map(async (obj) => {
        const collectedData = [];
        const temp = await getUsers(obj);
        collectedData.push(temp);
        return collectedData;
      });

      const final_data = await Promise.all(data);
      res.status(200).json(final_data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
};

exports.createNewFundraiser = async (req, res) => {
  const newFundraiser = new Fundraiser({
    orgName: req.body.org_name,
    bio: req.body.motive,
    photoUrl: req.body.photoUrl,
    targetMoney: req.body.required_money,
    moneyCollected: 0,
    upiMobile: req.body.upiMobile,
    active: true,
    createdby: req.body.userId,
    type: req.body.type,
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
};

exports.getFundraisersCreatedByUser = (req, res) => {
  const userId = req.params.userId;
  Fundraiser.find({ createdby: userId })
    .then((fundraisers) => {
      res.json(fundraisers);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
};
