const Filter = require("../packages/filter");
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

        bio: {
            prefix: "bio",
            allowedTypes: ["string"],
            minStringLength: 0,
            maxStringLength: 160
        },
        
        displayName: {
            prefix: "displayname",
            allowedTypes: ["string"],
            minStringLength: 0,
            maxStringLength: 32
        },

        shortPost: {
            prefix: "post_body",
            allowedTypes: ["string"],
            minStringLength: 1,
            maxStringLength: 400
        }
    }
});