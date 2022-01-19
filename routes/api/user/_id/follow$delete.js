module.exports = async (req, res) => {
    const { follows, users, userID, snowflake } = req;
    const { id } = req.params;

    const userResults = await users.find({ _id: id }).toArray();
    if (userResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    const followResults = await follows.find({ on: id, user: userID }).toArray();

    if (followResults.length == 0) return res.send({ status: "NOT_FOLLOWED" });

    await follows.deleteOne({ on: id, user: userID });
    await users.updateOne({ _id: id }, { $inc: { followers: -1 } });

    return res.send({ status: "SUCCESS" });
}