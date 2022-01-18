const filterUser = require("./$filterUser");

module.exports = async (req, res) => {
    const { users } = req;
    const { id } = req.params;

    const results = await users.find({ _id: id }).toArray();
    if (results.length == 0) return res.status(404).send({ status: "NOT_FOUND" });

    const filteredUser = await filterUser(results[0], req);

    return res.send({ status: "SUCCESS", result: filteredUser });
}