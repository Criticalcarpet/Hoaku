const router = require("express").Router();

router.use(require("../$middleware/auth"));

router.route("/avatar")
    .patch(require("./avatar$patch"))
    .delete(require("./avatar$delete"));

router.route("/bio")
    .patch(require("./bio$patch"))
    .delete(require("./bio$delete"));

router.route("/displayname")
    .patch(require("./displayname$patch"))
    .delete(require("./displayname$delete"));

router.patch("/username", require("./username"));
router.patch("/password", require("./password"));

module.exports = router;