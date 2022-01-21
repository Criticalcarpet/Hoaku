const log = require("../includes/log");
log.normal(`Initializing backend server`);

const express = require("express");
const app = express();

const server = app.listen(require("../config.json").backendPort, () => {
    log.normal(`The backend is up and running on port ${server.address().port}! (http://127.0.0.1:${server.address().port})`);
});

app.use(express.json());

const mongoMiddleware = async (req, res, next) => {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db();
    req.db = db;
    next();
}

const config = require("../config.json");

if (config.file) app.use("/file", mongoMiddleware, require("./file/$routes"));

if (config.api) app.use("/api", mongoMiddleware, require("./api/$routes"));