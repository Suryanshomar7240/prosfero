const Fundraiser = require("../models/fundraiser");
const User = require("../models/user");

const getUsers = (obj) => {
  const temp = User.findOne({ googleid: obj["createdby"] })
    .then((user) => {
      // console.log(user);
      let obj2 = {
        username: "",
        userpfp: "",
      };
      if (user != null) {
        obj2["userpfp"] = user["email"];
        obj2["username"] = user["firstname"] + " " + user["lastname"];
      }
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
    .catch((err) => res.status(400).json("Error: " + err));
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
        message: "New Fundraiser created successfully",
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getFundraisersCreatedByUser = (req, res) => {
  const userId = req.params.userId;
  Fundraiser.find({ createdby: userId })
    .then((fundraisers) => {
      res.json(fundraisers);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getFundraiserByID = (req, res) => {
  const fundId = req.params.fundId;
  Fundraiser.findOne({ _id: fundId })
    .then((fund) => {
      res.status(200).json(fund);
    })
    .catch((err) => res.status(400).json("Error :" + err));
};

exports.updateFundraiser = (req, res) => {
  const data = {
    orgName: req.body.org_name,
    bio: req.body.motive,
    photoUrl: req.body.photoUrl,
    targetMoney: req.body.required_money,
    upiMobile: req.body.upiMobile,
    type: req.body.type,
  };

  Fundraiser.findOneAndUpdate({ _id: req.body.fundId }, data, (err, doc) => {
    if (!err) {
      res.status(200).json("Fundraiser updated successfully");
    } else {
      res.status(400).json("Error: ");
      console.log(err);
    }
  });
};

exports.deleteFundraiser = (req, res) => {
  const fundid = req.params.fundid;
  Fundraiser.deleteOne({ _id: fundid })
    .then(() => res.status(200).json("Deleted item successfully"))
    .catch((err) => res.status(400).json(err));
};
