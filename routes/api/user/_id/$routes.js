const router = require("express").Router({ mergeParams: true });
const authRequired = require("../../$middleware/auth");

router.use((req, res, next) => {
    req.follows = req.db.collection("follows");

    next();
});

router.route("/follow")
    .put(authRequired, require("./follow$put"))
    .delete(authRequired, require("./follow$delete"));

module.exports = router;