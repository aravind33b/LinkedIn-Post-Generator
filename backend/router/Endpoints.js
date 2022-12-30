const express = require("express");

const {
  gettingResponseFromOpenAPI
} = require("../controller/Controller");
 
const router = express.Router();
 
router.route("/generate-posts").post(gettingResponseFromOpenAPI);
 
module.exports = router;