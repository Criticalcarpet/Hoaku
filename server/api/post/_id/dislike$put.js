module.exports = async (req, res) => {
    const { posts, feedback, snowflake, userID } = req;
    const { id } = req.params;

    const postResults = await posts.find({ _id: id }).toArray();
    if (postResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    const feedbackResults = await feedback.find({ on: id, user: userID }).toArray();

    if (feedbackResults.length == 0) {
        await feedback.insertOne({ _id: snowflake.generate().toString(), on: id, user: userID, type: "dislike" });
        await posts.updateOne({ _id: id }, { $inc: { dislikes: 1 } });
        return res.send({ status: "SUCCESS" });
    } else if (feedbackResults[0].type == "like") {
        await feedback.updateOne({ _id: feedbackResults[0]._id }, { $set: { type: "dislike" } });
        await posts.updateOne({ _id: id }, { $inc: { likes: -1, dislikes: 1 } });
        return res.send({ status: "SUCCESS" });
    } else if (feedbackResults[0].type == "dislike") return res.send({ status: "ALREADY_DISLIKED" });
}