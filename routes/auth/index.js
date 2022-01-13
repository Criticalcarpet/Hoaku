const router = require("express").Router();

router.use((req, res, next) => {
    req.users = req.db.collection("users");
    next();
});

router.post("/login", require("./login"));
router.post("/register", require("./register"));

module.exports = router;