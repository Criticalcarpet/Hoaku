const router = require("express").Router({ mergeParams: true });
const authRequired = require("../../$middleware/auth");

router.use((req, res, next) => {
    req.feedback = req.db.collection("feedback");

    next();
});

router.route("/like")
    .put(authRequired, require("./like$put"))
    .delete(authRequired, require("./like$delete"));
    
router.route("/dislike")
    .put(authRequired, require("./dislike$put"))
    .delete(authRequired, require("./dislike$delete"));

router.get("/feedback", authRequired, require("./feedback"));

router.use("/comment", require("./comment/$routes"));

module.exports = router;