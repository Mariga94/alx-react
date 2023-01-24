const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    all: [
      "./modules/body/body.js",
      "./modules/header/header.js",
      "./modules/footer/footer.js",
    ],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Holberton Dashboard",
    }),
    new CleanWebpackPlugin(["public"]),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    port: 8564,
  },
};
