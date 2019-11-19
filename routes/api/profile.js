const express = require("express");
const router = express.Router();

//@routes api/profile/test
//@desc   Test Profile Route
//@access public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
