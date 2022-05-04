// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    // plugins: [
    //     new NodePolyfillPlugin()
    // ],
    resolve: {
      fallback: { process: require.resolve('process/browser') }
    }
}