const Feedback = require('../models/feedback');
const User = require('../models/user');

const getUserdata = async (userid) => {
  const obj = {
    username: '',
    userpfp: '',
  };
  const temp = await User.findOne({ googleid: userid })
    .then(async (user) => {
      obj['userpfp'] = user['pfp_url'];
      obj['username'] = user['firstname'] + ' ' + user['lastname'];
      return obj;
    })
    .catch((err) => {
      throw err;
    });
  return temp;
};

exports.handleFeedbackPost = async (req, res) => {
  const userid = req.body.userid;
  const user_data = await getUserdata(userid);

  const newFeedback = new Feedback({
    userid: req.body.userid,
    rating: req.body.stars,
    message: req.body.caption,
    username: user_data.username,
    pfplink: user_data.userpfp,
  });

  newFeedback
    .save()
    .then((response) => {
      res.status(200).json({ message: 'Feeback added successfully' });
    })
    .catch((err) => {
      res.status(400).json('Error: ' + err);
    });
};

exports.handleGetFeedback = (req, res) => {
  Feedback.find()
    .then((feedbacks) => {
      res.status(200).json(feedbacks);
    })
    .catch((err) => res.status(400).json({ Error: err }));
};
