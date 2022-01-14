module.exports = (req, res) => {
    return res.send({ status: "SUCCESS", info: { id: req.userID, username: req.username } });
}