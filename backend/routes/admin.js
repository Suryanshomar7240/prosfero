const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const Fundraiser = require("../models/fundraiser");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const JWTSICKRET = process.env.JWTSICKRET;
const Admin = require("../models/admin");

const maxAge = 3 * 24 * 60 * 60;

const createJWTtoken = (userid) => {
  return jwt.sign({ userid }, JWTSICKRET, { expiresIn: maxAge });
};

// uncomment when working on the adming route to create an admin account

// router.route('/register').post(async (req, res) => {
//   try {
//     let username = req.body.username;
//     let password = req.body.password;
//     // console.log(username, password);
//     const salt = await bcrypt.genSalt();
//     password = await bcrypt.hash(password, salt);

//     const newAdmin = new Admin({
//       username: username,
//       password: password,
//     });
//     newAdmin.save().then(
//         res.send({status: 200, message: 'Admin Created'})
//     )
//     // console.log(newAdmin);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

router.route("/login").post(async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    Admin.findOne({ username: username })
      .then(async (admin) => {
        if (admin) {
          const auth = await bcrypt.compare(password, admin.password);
          if (auth) {
            const token = createJWTtoken(admin._id);
            res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({
              user: admin._id,
              message: "Admin logged in succesfully",
            });
          } else {
            res.status(400).json({ msg: "Incorrect username or password" });
          }
        } else {
          res.status(400).json({ msg: "Incorrect username or password" });
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: "Incorrect username or password" });
      });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.route("/delete/:id").delete((req, res) => {
  const jwtToken = req.body.jwttoken;
  try {
    // const decode = jwt.verify(jwtToken, JWTSICKRET);
    // console.log('Delete request created by ' + decode.userid);
    const delId = req.params.id;
    Fundraiser.deleteOne({ _id: delId })
      .then(() => res.status(200).json("Deleted item successfully"))
      .catch((err) => res.status(400).json(err));
  } catch {
    res.send("User not verified");
  }
});

router.route("/validate").post((req, res) => {
  const jwtToken = req.body.jwt;
  console.log(jwtToken);
  try {
    const decode = jwt.verify(jwtToken, JWTSICKRET);
    console.log("Delete request created by " + decode.userid);
    res.send(200).json("User is verified");
  } catch {
    res.status(400).json("User is invalid");
  }
});

module.exports = router;
