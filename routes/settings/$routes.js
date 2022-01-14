const router = require("express").Router();

router.use(require("../$middleware/auth"));

router.route("/avatar")
    .patch(require("./avatar$patch"))
    .delete(require("./avatar$delete"));

module.exports = router;