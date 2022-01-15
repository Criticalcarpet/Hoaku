const router = require("express").Router();
const authRequired = require("../../api/$middleware/auth");

router.use((req, res, next) => {
    req.posts = req.db.collection("posts");
    next();
});

router.get("/newest", require("./newest"));

module.exports = router;