const router = require("express").Router();
const authRequired = require("../../api/$middleware/auth");

router.use((req, res, next) => {
    req.posts = req.db.collection("posts");
    next();
});

router.get("/", authRequired, require("./index"));
router.get("/newest", require("./newest"));
router.get("/popular", require("./popular"));
router.get("/trending", require("./trending"));

router.use("/user", require("./user/$routes"));

module.exports = router;