module.exports = async (req, res) => {
    const { displayName } = req.body;

    if (!req.filter("displayName", displayName).passed) return res.send({ status: req.filter("displayName", displayName).error });

    const users = req.db.collection("users");

    if (displayName.length > 0) await users.updateOne({ _id: req.userID }, { $set: { displayName } });
    else await users.updateOne({ _id: req.userID }, { $unset: { displayName: 1 } });

    return res.send({ status: "SUCCESS" });
}