const express = require("express");
const router = express.Router();

//@routes api/posts/test
//@desc   Test Post Route
//@access public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
