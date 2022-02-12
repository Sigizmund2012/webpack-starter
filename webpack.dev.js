const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: "auto",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/bundle.css",
    }),
  ],
});
