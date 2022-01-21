const bcrypt = require("bcrypt");
const rstr = require("randomstring");

module.exports = async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!req.filter("password", oldPassword).passed) return res.send({ status: "OLD_" + req.filter("password", oldPassword).error });
    if (!req.filter("password", newPassword).passed) return res.send({ status: "NEW_" + req.filter("password", newPassword).error });

    const users = await req.db.collection("users");
    let account = await users.find({ _id: req.userID }).toArray();
    account = account[0]; 

    bcrypt.compare(oldPassword, account.hash, (err, result) => {
        if (err) return res.status(500).send({ status: "ERR" });

        if (!result) return res.send({ status: "OLD_PASS_INCORRECT" });

        bcrypt.hash(newPassword, 10, async (err, hash) => {
            if (err) return res.status(500).send({ status: "ERR" });
    
            await users.updateOne({ _id: req.userID }, { $set: { hash, token: rstr.generate(86) } }); 

            return res.send({ status: "SUCCESS" });
        });
    });
}