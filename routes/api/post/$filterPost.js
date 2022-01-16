module.exports = async (post, req) => {
    const feedback = req.db.collection("feedback");
    const likes = await feedback.count({ on: post._id, type: "like" });
    const dislikes = await feedback.count({ on: post._id, type: "dislike" });

    return {
        id: post._id,
        body: post.body,
        creator: post.creator,
        likes: post.likes,
        dislikes: post.dislikes,
        edited: post.edited || false
    }
}