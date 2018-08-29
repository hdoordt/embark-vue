module.exports = function(embark) {
    embark.registerPipeline(["**/*.vue"], function(options) {
        console.log(options);
    });
}