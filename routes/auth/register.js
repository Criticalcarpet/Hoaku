const bcrypt = require("bcrypt");
const rstr = require("randomstring");

module.exports = async (req, res) => {
    const { users } = req;
    const { username, password } = req.body;

    if (!req.filter("username", username).passed) return res.send({ status: req.filter("username", username).error });
    if (!req.filter("password", password).passed) return res.send({ status: req.filter("password", password).error });

    const existingAccounts = await users.find({ username }).toArray();

    if (existingAccounts.length > 0) return res.send({ status: "ACCOUNT_EXISTS" });

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) return res.status(500).send({ status: "ERR" });

        await users.insertOne({ username, hash, token: rstr.generate(86), timestamp: Math.floor(Date.now() / 1000) });
        return res.send({ status: "SUCCESS" });
    });
}