const router = require("express").Router();

if (process.env.CORS == "true") router.use(require("cors")());

router.use((req, res, next) => {
    req.filter = require("../includes/filter");
    req.snowflake = require("../includes/snowflake");
    
    next();
});

router.use("/auth", require("./api/auth/$routes"));
router.use("/settings", require("./api/settings/$routes"));
router.use("/post", require("./api/post/$routes"));

router.use("*", (req, res) => {
    return res.status(404).send({ status: "NOT_FOUND" });
});

module.exports = router;