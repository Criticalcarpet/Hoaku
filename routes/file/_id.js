const log = require("../../includes/log");

const path = require("path");
const fs = require("fs");

module.exports = async (req, res) => {
    const { id } = req.params;

    const files = req.db.collection("files");

    let result = await files.find({ _id: id }).toArray();
    if (result.length == 0) return res.status(404).sendFile(path.join(__dirname, "/resourcenotfound.png"));
    result = result[0];

    const filePath = path.join(path.join(__dirname, "../../"), `/content/${result.name}`);

    if (fs.existsSync(filePath)) return res.sendFile(filePath);
    else {
        log.warning("A file that has been requested doesn't exist. Are you using the same database on a different computer?");
        return res.status(404).sendFile(path.join(__dirname, "/resourcenotfound.png"));
    }
}