const path = require("path");

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
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
				loader: 'image-webpack-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
