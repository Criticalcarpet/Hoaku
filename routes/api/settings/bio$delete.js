module.exports = async (req, res) => {
    const users = req.db.collection("users");

    await users.updateOne({ _id: req.userID }, { $unset: { bio: 1 } });

    return res.send({ status: "SUCCESS" });
}