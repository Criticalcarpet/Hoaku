const log = require("./includes/log");
const fs = require("fs");

const readline = require("readline-sync");

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

if (!fs.existsSync("content/")) fs.mkdirSync("content");

if (!fs.existsSync("config.json")) {
    let config = {};

    const activateAPI = readline.question("Do you want to activate the API? (Y/n) ".green);
    if (activateAPI.toLowerCase() == "y") config.api = true;
    else if (activateAPI.toLowerCase() == "n") config.api = false;
    else { log.notice(`Assuming "yes"`); config.api = true; }

    const activateFile = readline.question("Do you want to activate the /file endpoint? (Y/n) ".green);
    if (activateFile.toLowerCase() == "y") config.file = true;
    else if (activateFile.toLowerCase() == "n") config.file = false;
    else { log.notice(`Assuming "yes"`); config.file = true; }

    fs.writeFileSync("./config.json", JSON.stringify(config, null, 4), "utf-8");

    log.notice("A config.json file has been generated in the root of the repository.");
}

require("./routes/server");