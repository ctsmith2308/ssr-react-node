const path = require("path");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()], // nodeExternals only runs in a server environment not web
  ...baseConfig
};
