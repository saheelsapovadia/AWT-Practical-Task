const express = require("express");
const router = express.Router();

const {
  createApplication,
  getApplicationById,
} = require("../controllers/applicationController");

// Api for creating application
// @route   POST api/application
router.route("/").post(createApplication);

// Api for creating application
// @route   GET api/application/:id
router.route("/:id").get(getApplicationById);

module.exports = router;
