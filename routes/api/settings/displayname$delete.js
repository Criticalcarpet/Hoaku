module.exports = async (req, res) => {
    const users = req.db.collection("users");

    await users.updateOne({ _id: req.userID }, { $unset: { displayName: 1 } });

    return res.send({ status: "SUCCESS" });
}