export default (context, inject) => {
    inject(`global`, { instanceName: require("../../config.json").name });
}