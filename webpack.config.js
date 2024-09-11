const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    library: "SuperEmoji",  //name of the global variable when library is being used in a browser without module system (inside script tag)
    libraryTarget: "umd",  // universal module definition , so that it can work in commonjs (used in node.js with require(), module.exports = {}) ,  amd  (asynchronous module definition  used by some libraries like require.js), ESModule (modern js import/export)
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // give files to babel to transpile
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  externals: [nodeExternals()]
}