const router = require("express").Router();
const Fundraiser = require("../models/fundraiser");
const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");
const User = require("../models/user");
require("dotenv").config();
process.env.CLIENT_ID;

// Get all the active fundraisers (for the explore section)

router.route("/active").get((req, res) => {
  Fundraiser.find()
    .then((fundraisers) => {
      var to_return = [];
      fundraisers.map((obj) => {
        const obj2 = {
          username: "",
          userpfp: "",
        };

        User.findOne({ googleId: obj["createdby"] })

          .then(async (user) => {
            obj2["userpfp"] = await user["pfp_url"];
            obj2["username"] =(await user["firstname"]) + " " + (await user["lastname"]);
            const temp = { fundraisers: await obj, user: obj2 };
            to_return.push(temp);
          })
          .catch((err) => console.log("err" + err));
      }); //map end

      setTimeout(() => {
      res.json(to_return);
      }, 500);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Create a new fundraiser (for the create fundraiser section)

router.route("/create").post(async (req, res) => {
  const orgName = req.body.org_name;
  const bio = req.body.motive;
  const photoUrl = req.body.photoUrl;
  const targetMoney = req.body.required_money;
  const moneyCollected = 0;
  const upiMobile = req.body.upiMobile;
  const active = true;
  const createdby = req.body.userId;
  const type = req.body.type;

  const newFundraiser = new Fundraiser({
    orgName,
    bio,
    photoUrl,
    targetMoney,
    moneyCollected,
    upiMobile,
    active,
    createdby,
    type,
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
