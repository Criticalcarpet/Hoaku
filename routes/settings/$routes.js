const router = require("express").Router();

router.use(require("../$middleware/auth"));

router.patch("/avatar", require("./avatar"));

module.exports = router;