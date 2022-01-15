const filterPost = require("../post/$filterPost");

module.exports = async (req, res) => {
    const { posts } = req;
    let { p: page } = req.query;

    if (!page) page = 0;
    if (page && isNaN(Number(page))) return res.send({ status: "PAGE_INCORRECT" });
    if (page && !isNaN(Number(page))) page = Number(page);

    const postList = await posts.find().sort({ _id: -1 }).skip(page * 51).limit(51).toArray();

    let filteredPosts = [];

    for (let i in postList) {
        filteredPosts.push(await filterPost(postList[i]));
    }

    return res.send({ status: "SUCCESS", posts: filteredPosts });
}