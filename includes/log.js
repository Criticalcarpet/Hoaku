require("colors");

module.exports = {
    notice(content) {
        console.log(`${`[Notice]`.bold} ${content}`.blue);
    },

    warning(content) {
        console.log(`${`[Warning]`.bold} ${content}`.yellow);
    },

    error(content) {
        console.log(`${`[Error]`.bold} ${content}`.red);
    },

    normal(content) {
        console.log(`${`[Hoaku]`.bold} ${content}`);
    }
}