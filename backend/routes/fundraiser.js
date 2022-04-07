const router = require("express").Router();
// const { OAuth2Client } = require("google-auth-library");
const fundraiserController = require("../controllers/fundraiser");

// Get all the active fundraisers (for the explore section)
router.route("/active").get(fundraiserController.getAllFundraisers);

// Create a new fundraiser (for the create fundraiser section)
router.route("/create").post(fundraiserController.createNewFundraiser);

// Get all the fundraiser for a given user (for the dashboard section)
// We pass the userid through the url and query over this userid and return a json
// that contains all the fundraisers created by a given user
router.route("/:userId").get(fundraiserController.getFundraisersCreatedByUser);

//A route to get the fundraiser details through its fundId
router.route("/active/:fundId").get(fundraiserController.getFundraiserByID);

// to update the data of a fundraiser through its fundraiser
router.route("/update").post(fundraiserController.updateFundraiser);

//route to give access to users to delete their own fundraiser
router.route("/delete/:fundid").delete(fundraiserController.deleteFundraiser);
module.exports = router;
