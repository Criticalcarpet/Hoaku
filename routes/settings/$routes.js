const router = require("express").Router();

router.use(require("../$middleware/auth"));

router.route("/avatar")
    .patch(require("./avatar$patch"))
    .delete(require("./avatar$delete"));

router.route("/bio")
    .patch(require("./bio$patch"))
    .delete(require("./bio$delete"));

module.exports = router;