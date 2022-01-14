const log = require("../../includes/log");

const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
    const files = req.db.collection("files");
    const users = req.db.collection("users");

    const results = await users.find({ _id: req.userID }).toArray();
    if (results.length == 1 && results[0].avatar) {
        const fileResults = await files.find({ _id: results[0].avatar }).toArray();
        await files.deleteOne({ _id: results[0].avatar });
        if (fs.existsSync(path.join("./content/", fileResults[0].name))) fs.unlinkSync(path.join("./content/", fileResults[0].name));
        else log.warning("A file that is trying to be deleted doesn't exist. Are you using the same database on a different computer?");
    }

    await users.updateOne({ _id: req.userID }, { $unset: { avatar: 1 } });

    return res.send({ status: "SUCCESS" });
}