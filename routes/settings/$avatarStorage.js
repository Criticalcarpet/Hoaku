const multer = require("multer");
const path = require("path");
const snowflake = require("../../includes/snowflake");

module.exports = multer.diskStorage({
    destination: './content/',
    filename: (req, file, cb) => {
        const id = snowflake.generate();
        req.fileID = id;
        cb(null, id + path.extname(file.originalname));
    }
});