const multer = require("multer");
const path = require("path");

module.exports = multer.diskStorage({
    destination: './content/',
    filename: (req, file, cb) => {
        const id = req.snowflake.generate();
        req.fileID = id;
        cb(null, id + path.extname(file.originalname));
    }
});