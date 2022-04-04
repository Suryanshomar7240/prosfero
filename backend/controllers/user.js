const Fundraiser = require("../models/fundraiser");
const User = require("../models/user");

const getFundraiser = async (fundId) => {
  const temp = await Fundraiser.findOne({ _id: fundId })
    .then(async (result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
  return temp;
};

const getUsers = async (fundid, amt) => {
  const obj2 = {
    username: "",
    userpfp: "",
  };
  const obj = await getFundraiser(fundid);
  const temp = await User.findOne({ googleid: obj["createdby"] })
    .then(async (user) => {
      obj2["userpfp"] = user["pfp_url"];
      obj2["username"] = user["firstname"] + " " + user["lastname"];
      object = { fund: obj, user: obj2, amount: amt };
      return object;
    })
    .catch((err) => {
      throw err;
    });
  return temp;
};

exports.handleUserLogin = (req, res) => {
  const id_token = req.body.id_token;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const userid = req.body.userid;
  const pfp_url = req.body.pfp_url;

  User.findOne({ googleid: userid })
    .then((user) => {
      if (user === undefined) {
        const newUser = new User({
          firstname: firstname,
          lastname: lastname,
          email: email,
          id_token: id_token,
          googleid: userid,
          pfp_url: pfp_url,
        });

        newUser
          .save()
          .then(() => {
            res.send({
              status: 200,
              message: `User ${firstname + " " + lastname} added successfully`,
            });
          })
          .catch((err) => res.status(400).json("Error: " + err));
      } else {
        res.send({
          status: 200,
          message: `User ${
            user.firstname + " " + user.lastname
          } logged in successfully`,
        });
      }
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
};

exports.getUserDetails = (req, res) => {
  const userid = req.params.id;
  User.findOne({ googleid: userid })
    .then((user) => {
      res.send({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        pfp_url: user.pfp_url,
        fundraisersDonatedTo: user.fundraisersDonatedTo,
      });
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
};

exports.getAllFundraisersUserDonatedTo = async (req, res) => {
  const userid = req.params.id;
  User.find({ googleid: userid })
    .then(async (user) => {
      const fundraisers = user[0].fundraisersDonatedTo; //list of all fundraiser where the user donated contains fundId and amount donated by user

      const data = fundraisers.map(async (data, id) => {
        const fundlist = [];
        const temp = await getUsers(data.fundId, data.donatedAmount);
        fundlist.push(temp);
        return fundlist;
      });
      const to_return = await Promise.all(data);
      res.status(200).json(to_return);
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
      console.log(err);
    });
};
