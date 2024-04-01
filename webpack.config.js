/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelLoader = {
  test: /\.m?js$/,
  exclude: [/node_modules/],
  use: [
    {
      loader: "babel-loader",
    },
  ],
};

module.exports = {
  entry: "./app.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [babelLoader],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to your template file
      filename: "index.html", // Output file name (relative to the output.path set above)
      inject: true, // All assets will be injected into the template
    }),
  ],
};
