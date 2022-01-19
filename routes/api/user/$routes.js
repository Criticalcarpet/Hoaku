const router = require("express").Router();

router.use((req, res, next) => {
    req.users = req.db.collection("users");
    next();
});

router.get("/:id", require("./_id"));

router.use("/:id", require("./_id/$routes"));

module.exports = router;