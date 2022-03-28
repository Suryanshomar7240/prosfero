const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

// uncomment when working on the admin route to create an admin account

// router.route('/register').post(async (req, res) => {
//   try {
//     let username = req.body.username;
//     let password = req.body.password;
//     console.log(req.body)
//     console.log(username, password);
//     const salt = await bcrypt.genSalt();
//     password = await bcrypt.hash(password, salt);

//     const newAdmin = new Admin({
//       username: username,
//       password: password,
//     });
//     newAdmin.save().then(res.send({ status: 200, message: 'Admin Created' }));
//     // console.log(newAdmin);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

router.route('/login').post(adminController.loginHandler);

router.route('/delete/:id').delete(adminController.deleteHandler);

router.route('/validate').post(adminController.validationHandler);

module.exports = router;
