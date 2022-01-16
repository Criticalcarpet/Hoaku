module.exports = async (req, res) => {
    const { posts, feedback, userID } = req;
    const { id } = req.params;

    const postResults = await posts.find({ _id: id }).toArray();
    if (postResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    const feedbackResults = await feedback.find({ on: id, user: userID, type: "like" }).toArray();

    if (feedbackResults.length == 0) return res.send({ status: "NOT_LIKED" });
    
    await feedback.deleteOne({ on: id, user: userID, type: "like" });
    return res.send({ status: "SUCCESS" });
}