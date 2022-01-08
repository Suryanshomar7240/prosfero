const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Route to handle login

router.route('/login').post((req, res) => {
  const id_token = req.body.id_token;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const userid = req.body.userid;
  const pfp_url = req.body.pfp_url

  User.find({ googleid: userid })
    .then((user) => {
      res.send({
        status: 200,
        message: `User ${
          user[0].firstname + ' ' + user[0].lastname
        } logged in successfully`,
      });
    })
    .catch((err) => {
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
            message: `User ${firstname + ' ' + lastname} added successfully`,
          });
        })
        .catch((err) => res.status(400).json('Error: ' + err));
    });
});
router.route('/dashboard').get((req, res) => {
  const userid =  req.body.userid
  User.find({ googleid: userid })
    .then((user) => {
      res.send({
        firstname : user[0].firstname,
        lastname : user[0].lastname,
        email : user[0].email,
        pfp_url : user[0].pfp_url,
        fundraisersDonatedTo : user[0].fundraisersDonatedTo
      });
    })
    .catch((err) => {
      res.status(400).json('Error: ' + err)
    })
});
module.exports = router;
