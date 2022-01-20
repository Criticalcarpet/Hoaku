const router = require("express").Router();

router.use((req, res, next) => {
    req.users = req.db.collection("users");

    next();
});

router.get("/:id", require("./_id"));

module.exports = router;