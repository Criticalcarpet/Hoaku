const aes256 = require('aes256');

module.exports = async (req, res, next) => {
    const rawToken = req.header("Authorization");
    if (!rawToken) return res.send({ status: "UNAUTHORIZED" });
    const token = aes256.decrypt(process.env.TOKEN_ENCRYPTION_KEY, Buffer.from(rawToken, "base64")).toString();
    
    const { users } = req;

    const accounts = await users.find({ token }).toArray();
    if (accounts.length == 0) return res.send({ status: "UNAUTHORIZED" });

    req.username = accounts[0].username;
    req.userID = accounts[0]._id;
    next();
}