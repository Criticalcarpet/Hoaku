module.exports = async (req, res) => {
    const { posts } = req;
    const { body } = req.body;

    if (!req.filter("shortPost", body).passed) return res.send({ status: req.filter("shortPost", body).error });

    await posts.insertOne({ _id: req.snowflake.generate().toString(), body, creator: req.userID, likes: 0, dislikes: 0 });

    return res.send({ status: "SUCCESS" });
}