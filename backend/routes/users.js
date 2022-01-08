const express = require('express');
const User = require('../models/user');
// const httpProxy = require('http-proxy');
// const proxy = httpProxy.createServer({});

const router = express.Router();

router.route('/login').post((req, res) => {
  const id_token = req.body.id_token;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const userid = req.body.userid;

  User.find({ googleid: userid })
    .then((user) => {
      const url = 'http://localhost:3000/dashboard/' + user[0].googleid;
      res.redirect(url);
    })
    .catch((err) => {

      console.log(err)

        const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            id_token: id_token,
            googleid: userid,
        });
        
        newUser
        .save()
        .then(() => {
            const url = 'http://localhost:3000/dashboard/' + userid;
            console.log(url);
            console.log(userid)
          res.redirect(url);
        })
        .catch((err) => res.status(400).json('Error: ' + err));
    });
});

module.exports = router;
