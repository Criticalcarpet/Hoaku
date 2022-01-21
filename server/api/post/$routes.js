const router = require("express").Router();
const authRequired = require("../$middleware/auth");

router.use((req, res, next) => {
    req.posts = req.db.collection("posts");
    next();
});

router.route("/:id")
    .get(require("./_id$get"))
    .patch(authRequired, require("./_id$patch"))
    .delete(authRequired, require("./_id$delete"));

router.use("/:id", require("./_id/$routes"));
router.use("/create", require("./create/$routes"));

module.exports = router;