const log = require("../includes/log");
log.normal(`Initializing frontend server`);

const express = require("express");
const app = express();

const path = require("path");

const server = app.listen(require("../config.json").frontendPort, () => {
    log.normal(`The frontend is up and running on port ${server.address().port}! (http://127.0.0.1:${server.address().port})`);
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));