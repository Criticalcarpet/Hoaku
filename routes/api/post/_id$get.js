const filterPost = require("./$filterPost");

module.exports = async (req, res) => {
    const { posts } = req;

    const results = await posts.find({ _id: req.params.id }).toArray();
    if (results.length == 0) return res.status(404).send({ status: "NOT_FOUND" });
    const result = results[0];

    const checkedResult = await filterPost(result, req);

    return res.send({ status: "SUCCESS", result: checkedResult });
}