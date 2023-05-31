const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        type: "asset/resource",
        loader: "image-webpack-loader",
      },
      {
        test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      title: "Holberton Dashboard",
      favicon: './dist/favicon.ico',
    }),
  ],
};
