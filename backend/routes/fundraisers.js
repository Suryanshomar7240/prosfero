const router = require("express").Router();
const Fundraiser = require("../models/fundraiser");
// const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");
const User = require("../models/user");
require("dotenv").config();
process.env.CLIENT_ID;

// Get all the active fundraisers (for the explore section)

const getUser = async (obj) => {
  const obj2 = {
    username: "",
    userpfp: "",
  };
  const temp = await User.findOne({ googleId: obj["createdby"] })
    .then(async (user) => {
      obj2["userpfp"] = user["pfp_url"];
      obj2["username"] = user["firstname"] + " " + user["lastname"];
      object = { fundraisers: obj, user: obj2 };
      return object;
    })
    .catch((err) => {
      throw err;
    });
  return temp;
};

router.route("/active").get(async (req, res) => {
  Fundraiser.find()
    .then(async (fundraisers) => {
      const data = fundraisers.map(async (obj) => {
        const collectedData = [];
        const temp = await getUser(obj);
        collectedData.push(temp);
        return collectedData;
      });

      const final_data = await Promise.all(data);
      res.status(200).json(final_data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Create a new fundraiser (for the create fundraiser section)

router.post("/create", async (req, res) => {
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
});

// Get all the fundraiser for a given user (for the dashboard section)
// We pass the userid through the url and query over this userid and return a json
// that contains all the fundraisers created by a given user

router.route("/:userId").get((req, res) => {
  userId = req.params.userId;
  Fundraiser.find({ createdby: userId })
    .then((fundraisers) => {
      res.json(fundraisers);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
