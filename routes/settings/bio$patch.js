module.exports = async (req, res) => {
    const { bio } = req.body;

    if (!req.filter("bio", bio).passed) return res.send({ status: req.filter("bio", bio).error });

    const users = req.db.collection("users");

    if (bio.length > 0) await users.updateOne({ _id: req.userID }, { $set: { bio } });
    else await users.updateOne({ _id: req.userID }, { $unset: { bio: 1 } });

    return res.send({ status: "SUCCESS" });
}