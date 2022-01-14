const router = require("express").Router();

router.get("/:id", require("./_id"));

module.exports = router;