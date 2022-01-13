const bcrypt = require("bcrypt");
const aes256 = require('aes256');

module.exports = async (req, res) => {
    const { users } = req;
    const { username, password } = req.body;

    if (!req.filter("username", username).passed) return res.send({ status: req.filter("username", username).error });
    if (!req.filter("password", password).passed) return res.send({ status: req.filter("password", password).error });

    const existingAccounts = await users.find({ username }).toArray();
    if (existingAccounts.length == 0) return res.send({ status: "USERNAME_OR_PASS_INCORRECT" });

    const account = existingAccounts[0];

    bcrypt.compare(password, account.hash, (err, result) => {
        if (err) return res.status(500).send({ status: "ERR" });

        return res.send({ status: "SUCCESS", token: aes256.encrypt(process.env.TOKEN_ENCRYPTION_KEY, Buffer.from(account.token)).toString('base64') });
    });
}