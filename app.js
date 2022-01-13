const log = require("./includes/log");
const fs = require("fs");

log.normal(`Hello!`);

require("dotenv").config();

if (!fs.existsSync(".env")) {
    log.error(`Please create a .env file.`);
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

if (!process.env.PORT) {
    log.notice(`Port not found in .env, defaulting to 4554`);
    process.env.PORT = 4554;
}

if (!process.env.ADDRESS) {
    log.notice(`Address not found in .env, defaulting to 127.0.0.1`);
    process.env.ADDRESS = "127.0.0.1";
}

if (!process.env.CORS) {
    log.notice(`Whether or not to use CORS not found in .env, defaulting to true`);
    process.env.CORS = "true";
}

require("./routes/server");