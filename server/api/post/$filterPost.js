const filterUser = require("../user/$filterUser");

module.exports = async (post, req) => {
    const users = req.db.collection("users");
    const creator = await users.find({ _id: post.creator }).toArray();
    const filteredCreator = await filterUser(creator[0], req);

    return {
        id: post._id,
        body: post.body,
        likes: post.likes,
        dislikes: post.dislikes,
        edited: post.edited || false,
        creator: filteredCreator
    }
}