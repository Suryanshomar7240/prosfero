const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Admin = require('../models/admin');
const Fundraiser = require("../models/fundraiser")
const jwt = require('jsonwebtoken');

const JWTSICKRET = process.env.JWTSICKRET;

const maxAge = 3 * 24 * 60 * 60;

const createJWTtoken = (userid) => {
  return jwt.sign({ userid }, JWTSICKRET, { expiresIn: maxAge });
};

exports.loginHandler = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({ username: username })
      .then(async (admin) => {
        if (admin) {
          const auth = await bcrypt.compare(password, admin.password);
          console.log(auth)
          if (auth) {
            const token = createJWTtoken(admin._id);
            console.log(auth)
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({
              user: admin._id,
              message: 'Admin logged in succesfully',
            });
          } else {
            res.status(400).json({ msg: 'Incorrect username or password' });
          }
        } else {
          res.status(400).json({ msg: 'Incorrect username or password' });
        }
      })
      .catch((err) => {
        console.log(err)
        res.status(400).json({ msg: 'Incorrect username or password' });
      });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.deleteHandler = (req, res) => {
  const jwtToken = req.body.jwttoken;
  try {
    const decode = jwt.verify(jwtToken, JWTSICKRET);
    console.log('Delete request created by ' + decode.userid);
    const delId = req.params.id;
    Fundraiser.deleteOne({ _id: delId })
      .then(() => res.status(200).json('Deleted item successfully'))
      .catch((err) => res.status(400).json(err));
  } catch {
    res.send('User not verified');
  }
};

exports.validationHandler = (req, res) => {
  const jwtToken = req.body.jwt;
  console.log(jwtToken);
  try {
    const decode = jwt.verify(jwtToken, JWTSICKRET);
    console.log('Delete request created by ' + decode.userid);
    res.send(200).json('User is verified');
  } catch {
    res.status(400).json('User is invalid');
  }
};
