const router = require("express").Router();

router.use((req, res, next) => {
    req.posts = req.db.collection("posts");
    next();
});

router.use("/create", require("./create/$routes"));

module.exports = router;