const log = require("./includes/log");
log.normal(`Initializing server`);

const express = require("express");
const app = express();

const server = app.listen(process.env.PORT, process.env.ADDRESS, () => {
    log.normal(`We're up and running on port ${server.address().port}! (http://${server.address().address}:${server.address().port})`);
});

if (process.env.CORS == "true") app.use(require("cors")());

const mongo = require("mongo-express-req");
app.use(mongo(process.env.MONGO_URI));

app.use("/auth", require("./routes/auth"));

app.use("*", (req, res) => {
    return res.status(404).send({ status: "NOT_FOUND" });
});