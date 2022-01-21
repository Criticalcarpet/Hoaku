module.exports = async (req, res) => {
    const { users, follows, userID } = req;
    const { id } = req.params;

    if (userID == id) return res.send({ status: "CANT_FOLLOW_SELF" });

    const followingResults = await follows.find({ on: id, user: userID }).toArray();
    const followedResults = await follows.find({ on: userID, user: id }).toArray();

    let isFollowing = false;
    let isFollowed = false;

    if (followingResults.length > 0) isFollowing = true;
    if (followedResults.length > 0) isFollowed = true;

    return res.send({ status: "SUCCESS", isFollowing, isFollowed });
}