module.exports = async (req, res) => {
    const { posts } = req;
    const { body } = req.body;

    if (!req.filter("shortPost", body).passed) return res.send({ status: req.filter("shortPost", body).error });

    const results = await posts.find({ _id: req.params.id }).toArray();
    if (results.length == 0) return res.status(404).send({ status: "NOT_FOUND" });
    
    let result = results[0];

    if (result.creator !== req.userID) return res.status(403).send({ status: "FORBIDDEN" });

    await posts.updateOne({ _id: req.params.id }, { $set: { body, edited: true } });

    return res.send({ status: "SUCCESS" });
}