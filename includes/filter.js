const Filter = require("@hoaku/filter");
module.exports = new Filter({
    filters: {
        username: {
            prefix: "username",
            allowedTypes: ["string"],
            minStringLength: 1,
            maxStringLength: 32,
            matchRegex: /^[a-z0-9_]*$/
        },

        password: {
            prefix: "pass",
            allowedTypes: ["string"],
            minStringLength: 8,
            maxStringLength: 86
        },
    }
});