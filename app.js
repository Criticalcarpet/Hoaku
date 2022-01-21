const log = require("./includes/log");
const fs = require("fs");

log.normal(`Hello!`);

require("dotenv").config();

if (!fs.existsSync(".env")) {
    log.error(`Please create a .env file.`);
    process.exit();
}

if (!require("./config.json").backendPort) {
    log.error(`Hoaku switched to using config.json for things like ports. Please run "npm run setup".`);
    process.exit();
}

if (!process.env.MONGO_URI) {
    log.error(`There's no Mongo connection URI in your .env!`);
    process.exit();
}

if (!process.env.TOKEN_ENCRYPTION_KEY) {
    log.error(`Please set a secure token encryption key.`);
    process.exit();
}

if (!fs.existsSync("./config.json")) require("./setup")();

if (!fs.existsSync("./content")) fs.mkdirSync("content");

if (!fs.existsSync("./frontend/dist")) {
    log.error(`The frontend hasn't been built yet! Please build it by running "npm run build".`);
    process.exit();
}

require("./server/backend");
if (require("./config.json").frontendPort !== "0") require("./server/frontend");