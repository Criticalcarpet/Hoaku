const { response } = require("express");
const filter = require("../../includes/filter");

module.exports = async (req, res) => {
    const { bio } = req.body;

    if (!filter("bio", bio).passed) return res.send({ status: filter("bio", bio).error });

    const users = req.db.collection("users");

    if (bio.length > 0) await users.updateOne({ _id: req.userID }, { $set: { bio } });
    else await users.updateOne({ _id: req.userID }, { $unset: { bio: 1 } });

    return res.send({ status: "SUCCESS" });
}