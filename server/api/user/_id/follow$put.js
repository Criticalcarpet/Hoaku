module.exports = async (req, res) => {
    const { follows, users, userID, snowflake } = req;
    const { id } = req.params;

    if (req.userID == id) return res.send({ status: "CANT_FOLLOW_SELF" });

    const userResults = await users.find({ _id: id }).toArray();
    if (userResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    const followResults = await follows.find({ on: id, user: userID }).toArray();

    if (followResults.length > 0) return res.send({ status: "ALREADY_FOLLOWED" });

    await follows.insertOne({ _id: snowflake.generate().toString(), on: id, user: userID });
    await users.updateOne({ _id: id }, { $inc: { followers: 1 } });

    return res.send({ status: "SUCCESS" });
}