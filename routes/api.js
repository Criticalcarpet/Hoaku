const router = require("express").Router();

if (process.env.CORS == "true") router.use(require("cors")());

router.use(async (req, res, next) => {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db();
    req.db = db;
    next();
});

router.use((req, res, next) => {
    req.filter = require("../includes/filter");
    
    next();
});

router.use("/auth", require("./auth/$routes"));
router.use("/settings", require("./settings/$routes"));
router.use("/post", require("./post/$routes"));

router.use("*", (req, res) => {
    return res.status(404).send({ status: "NOT_FOUND" });
});

module.exports = router;