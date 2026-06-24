const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/weather", require("./weather.routes"));

module.exports = router;