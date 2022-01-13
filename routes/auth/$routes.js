const router = require("express").Router();

router.use((req, res, next) => {
    req.users = req.db.collection("users");
    next();
});

const authMiddleware = require("../$middleware/auth");

router.get("/", authMiddleware, require("./index"));
router.post("/login", require("./login"));
router.post("/register", require("./register"));

module.exports = router;