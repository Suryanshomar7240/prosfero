const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const JWTSICKRET = process.env.JWTSICKRET;
const Admin = require('../models/admin');

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

router.route('/login').post(async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({ username: username })
      .then(async (admin) => {
        const auth = await bcrypt.compare(password, admin.password);
        if (auth) {
          const token = createJWTtoken(admin._id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res
            .status(201)
            .json({ user: admin._id, message: 'Admin logged in succesfully' });
        }
        else {
            throw Error("Incorrect Username or Password")
        }
      })
      .catch((err) => {
          res.send("Incorrect username or password");
      });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
