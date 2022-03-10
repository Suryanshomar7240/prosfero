const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Fundraiser = require('../models/fundraiser');

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

router.route('/dashboard/:id').get((req, res) => {
  const userid =  req.params.id
  console.log(userid);
  User.findOne({ googleid: userid })
    .then((user) => {
      res.send({
        firstname : user.firstname,
        lastname : user.lastname,
        email : user.email,
        pfp_url : user.pfp_url,
        fundraisersDonatedTo : user.fundraisersDonatedTo
      });

    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json('Error: ' + err)
    })
});

router.route('/donations/:id').get((req,res)=>{
  const userid=req.params.id
  const fundlist=[]
  User.find({googleid:userid})
    .then((user)=>{
    
      const fundraisers=user[0].fundraisersDonatedTo    //list of all fundraiser where the user donated contains fundId and amount donated by user
    
      fundraisers.map((data,id)=>{
     
        Fundraiser.findOne({_id:data.fundId})
        .then((result)=>
          fundlist.append({fund:result,amount:data.donatedAmount})
        )
        .catch((err)=>{
          console.log(err+id)
        })
    })
    res.send(fundlist)
  })
    .catch((err)=>{
    res.status(400).json('Error'+err)
    console.log(err)
  })
  
})
module.exports = router;
