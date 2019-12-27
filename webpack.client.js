const path = require("path");
const baseConfig = require("./webpack.base");

module.exports = {
  mode: "development",
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  ...baseConfig
};
