const router = require("express").Router();

if (process.env.CORS == "true") router.use(require("cors")());

router.use((req, res, next) => {
    req.filter = require("../../includes/filter");
    req.snowflake = require("../../includes/snowflake");
    
    next();
});

router.get("/", require("./index"));

router.use("/auth", require("./auth/$routes"));
router.use("/settings", require("./settings/$routes"));
router.use("/post", require("./post/$routes"));
router.use("/posts", require("./posts/$routes"));
router.use("/user", require("./user/$routes"));

router.use("*", (req, res) => {
    return res.status(404).send({ status: "NOT_FOUND" });
});

module.exports = router;