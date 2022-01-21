const filterPost = require("../../post/$filterPost");

module.exports = async (req, res) => {
    const { posts, users } = req;
    const { id } = req.params;
    let { p: page } = req.query;

    const userResults = await users.find({ _id: id }).toArray();
    if (userResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    if (!page) page = 0;
    if (page && isNaN(Number(page))) return res.send({ status: "PAGE_INCORRECT" });
    if (page && !isNaN(Number(page))) page = Number(page);
    if (page && !isNaN(Number(page)) && page < 0) return res.send({ status: "DONT_BE_SO_NEGATIVE" });

    const postList = await posts.find({ creator: id }).sort({ _id: -1 }).skip(page * 51).limit(51).toArray();

    let filteredPosts = [];

    for (let i in postList) {
        filteredPosts.push(await filterPost(postList[i], req));
    }

    return res.send({ status: "SUCCESS", posts: filteredPosts });
}