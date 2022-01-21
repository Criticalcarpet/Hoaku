module.exports = async (req, res) => {
    const { comments, posts, userID, snowflake, filter } = req;
    const { id } = req.params;
    const { body } = req.body;

    const postResults = await posts.find({ _id: id }).toArray();
    if (postResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    if (!filter("shortPost", body).passed) return res.send({ status: filter("shortPost", body).error });

    await comments.insertOne({ _id: snowflake.generate().toString(), body, on: id, creator: userID, likes: 0, dislikes: 0 });

    return res.send({ status: "SUCCESS" });
}