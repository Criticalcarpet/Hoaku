module.exports = async (req, res) => {
    const { posts } = req;

    const results = await posts.find({ _id: req.params.id }).toArray();
    if (results.length == 0) return res.status(404).send({ status: "NOT_FOUND" });
    
    let result = results[0];

    if (result.creator !== req.userID) return res.status(403).send({ status: "FORBIDDEN" });

    await posts.deleteOne({ _id: req.params.id });

    return res.send({ status: "SUCCESS" });
}