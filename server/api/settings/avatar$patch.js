const log = require("../../../includes/log");

const path = require("path");
const fs = require("fs");

const multer = require('multer');
const storage = require("./$avatarStorage");
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        let error = null;

        if (!(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")) error = "FILE_INCORRECT_TYPE";

        if (!error) cb(null, true);
        else { req.error = error; cb(null, false); }
    },
    limits: { fileSize: 10000000 }
});
const uploadSingle = upload.single("avatar");

module.exports = async (req, res) => {
    uploadSingle(req, res, async (err) => {
        if (err && err.toString() == "MulterError: File too large") return res.send({ status: "FILE_TOO_BIG" });
        else if (err) return res.status(500).send({ status: "ERR" });
    
        if (!req.file) return res.send({ status: "NO_FILE" });
        if (req.error) return res.send({ status: req.error });

        const files = req.db.collection("files");
        const users = req.db.collection("users");
        await files.insertOne({ _id: req.fileID.toString(), name: req.file.filename, mimeType: req.file.mimetype });

        const results = await users.find({ _id: req.userID }).toArray();
        if (results.length == 1 && results[0].avatar) {
            const fileResults = await files.find({ _id: results[0].avatar }).toArray();
            await files.deleteOne({ _id: results[0].avatar });
            if (fs.existsSync(path.join("./content/", fileResults[0].name))) fs.unlinkSync(path.join("./content/", fileResults[0].name));
            else log.warning("A file that is trying to be deleted doesn't exist. Are you using the same database on a different computer?");
        }

        await users.updateOne({ _id: req.userID }, { $set: { avatar: req.fileID.toString() } });

        return res.send({ status: "SUCCESS", id: req.fileID.toString() });
    });
}