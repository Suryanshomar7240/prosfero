const express = require('express');
const router = express.Router();
const Feedback=require("../models/feedback");

router.route('/post').post((req, res) => {
    console.log(req.body);
    const newFeedback= new Feedback({
        userid: req.body.userid,
        rating: req.body.stars,
        message: req.body.caption
    })

    newFeedback.save().then((response)=>{
        res.status(200).json({message:response});
    })
    .catch((err) => {
        // console.log(err);
      res.status(400).json('Error: ' + err)
    })
});
module.exports = router;
