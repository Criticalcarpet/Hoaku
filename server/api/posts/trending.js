const filterPost = require("../post/$filterPost");

module.exports = async (req, res) => {
    const { posts } = req;
    let { p: page } = req.query;

    if (!page) page = 0;
    if (page && isNaN(Number(page))) return res.send({ status: "PAGE_INCORRECT" });
    if (page && !isNaN(Number(page))) page = Number(page);
    if (page && !isNaN(Number(page)) && page < 0) return res.send({ status: "DONT_BE_SO_NEGATIVE" });

    const postList = await posts.find({ date: { $gt: new Date(Math.floor(Date.now() / 100) - 172800) } }).sort({ likes: -1 }).skip(page * 51).limit(51).toArray();

    let filteredPosts = [];

    for (let i in postList) {
        filteredPosts.push(await filterPost(postList[i], req));
    }

    return res.send({ status: "SUCCESS", posts: filteredPosts });
}