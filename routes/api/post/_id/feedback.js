module.exports = async (req, res) => {
    const { feedback, posts, userID } = req;
    const { id } = req.params;

    const postResults = await posts.find({ _id: id }).toArray();
    if (postResults.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    const feedbackResults = await feedback.find({ on: id, user: userID }).toArray();
    if (feedbackResults.length == 0) return res.send({ status: "SUCCESS", like: false, dislike: false });

    if (feedbackResults[0].type == "like") return res.send({ status: "SUCCESS", like: true, dislike: false });
    if (feedbackResults[0].type == "dislike") return res.send({ status: "SUCCESS", like: false, dislike: true });
}