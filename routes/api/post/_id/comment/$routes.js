const router = require("express").Router({ mergeParams: true });
const authRequired = require("../../../../api/$middleware/auth");

router.use((req, res, next) => {
    req.comments = req.db.collection("comments");

    next();
});

router.post("/", authRequired, require("./index$post"));

module.exports = router;