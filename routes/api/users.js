const express = require("express");
const router = express.Router();

//@routes api/users/test
//@desc   Test User Route
//@access public
router.get("/test", (req, res) => res.json({ msg: "User Works" }));

module.exports = router;
