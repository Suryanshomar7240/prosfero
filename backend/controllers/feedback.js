const Feedback = require('../models/feedback');

exports.handleFeedbackPost = (req, res) => {
  const newFeedback = new Feedback({
    userid: req.body.userid,
    rating: req.body.stars,
    message: req.body.caption,
  });

  newFeedback
    .save()
    .then((response) => {
      res.status(200).json({ message: "Feeback added successfully" });
    })
    .catch((err) => {
      res.status(400).json('Error: ' + err);
    });
};
