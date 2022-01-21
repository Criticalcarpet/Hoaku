require("dotenv").config();
require("colors");
const fs = require("fs");
const readline = require("readline-sync");

const log = require("./includes/log");

function setup() {
    let config = {};

    //What port should the backend listen on?
    const backendPort = readline.question("What port should the backend listen on? (4554) ".green);
    if (backendPort.length == 0) config.backendPort = 4554;
    else config.backendPort = backendPort;

    //What port should the frontend listen on?
    const frontendPort = readline.question("What port should the frontend listen on (enter 0 if you don't want to activate the frontend)? (3443) ".green);
    if (frontendPort.length == 0) config.frontendPort = 3443;
    else config.frontendPort = frontendPort;

    //Do you want to activate the API?
    const activateAPI = readline.question("Do you want to activate the API? (Y/n) ".green);
    if (activateAPI.toLowerCase() == "y") config.api = true;
    else if (activateAPI.toLowerCase() == "n") config.api = false;
    else { log.notice(`Assuming "yes"`); config.api = true; }

    //Do you want to activate the /file endpoint?
    const activateFile = readline.question("Do you want to activate the /file endpoint? (Y/n) ".green);
    if (activateFile.toLowerCase() == "y") config.file = true;
    else if (activateFile.toLowerCase() == "n") config.file = false;
    else { log.notice(`Assuming "yes"`); config.file = true; }

    //Should the backend have CORS enabled?
    const enableCORS = readline.question("Should the backend have CORS enabled? (Y/n) ".green);
    if (enableCORS.toLowerCase() == "y") config.cors = true;
    else if (enableCORS.toLowerCase() == "n") config.cors = false;
    else { log.notice(`Assuming "yes"`); config.cors = true; }

    //What should your instance name be?
    const name = readline.question("What should your instance name be? ".green);
    if (name.length == 0) { log.notice(`Assuming "Hoaku"`); config.name = "Hoaku"; }
    else config.name = name;

    fs.writeFileSync("./config.json", JSON.stringify(config, null, 4), "utf-8");

    log.notice("A config.json file has been generated in the root of the repository.");
}

if (require.main == module) setup();

module.exports = setup;