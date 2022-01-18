module.exports = async (post, req) => {
    return {
        id: post._id,
        body: post.body,
        creator: post.creator,
        likes: post.likes,
        dislikes: post.dislikes,
        edited: post.edited || false
    }
}