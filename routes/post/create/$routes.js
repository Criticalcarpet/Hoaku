const router = require("express").Router();
const authRequired = require("../../$middleware/auth");

router.post("/short", authRequired, require("./short"));

module.exports = router;