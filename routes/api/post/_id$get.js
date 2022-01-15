module.exports = async (req, res) => {
    const { posts } = req;

    const results = await posts.find({ _id: req.params.id }).toArray();
    if (results.length == 0) return res.status(404).send({ status: "NOT_FOUND" });
    const result = results[0];

    const checkedResult = {
        id: result._id,
        body: result.body,
        creator: result.creator,
        likes: result.likes,
        dislikes: result.dislikes,
        edited: result.edited || false
    }

    return res.send({ status: "SUCCESS", result: checkedResult });
}