const log = require("../includes/log");
log.normal(`Initializing server`);

const express = require("express");
const app = express();

const server = app.listen(process.env.PORT, process.env.ADDRESS, () => {
    log.normal(`We're up and running on port ${server.address().port}! (http://${server.address().address}:${server.address().port})`);
});

if (process.env.CORS == "true") app.use(require("cors")());

app.use(express.json());

app.use(async (req, res, next) => {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db();
    req.db = db;
    next();
});

app.use((req, res, next) => {
    req.filter = require("../includes/filter");
    
    next();
});

app.use("/auth", require("./auth/$routes"));

app.use("*", (req, res) => {
    return res.status(404).send({ status: "NOT_FOUND" });
});