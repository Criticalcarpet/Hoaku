module.exports = async (req, res) => {
    const { username } = req.body;

    if (!req.filter("username", username).passed) return res.send({ status: req.filter("username", username).error });

    const users = req.db.collection("users");

    const existingAccounts = await users.find({ username }).toArray();
    if (existingAccounts.length > 0) return res.send({ status: "USERNAME_TAKEN" });

    await users.updateOne({ _id: req.userID }, { $set: { username } });

    return res.send({ status: "SUCCESS" });
}