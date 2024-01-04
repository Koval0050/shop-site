const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  context: path.resolve(__dirname, "src/pages"), // Контекст тепер вказує на теку src/pages
  entry: {
    home: "./home/index.js", // Вказуємо правильний шлях до файлу index.js
  },
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "src/static/pages/"),
    clean: true,
  },
  mode: isProduction ? "production" : "development",
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "./src/static/pages"),
  //     staticOptions: {
  //       prefix: "/src/static/pages/home",
  //     },
  //     serveIndex: true,
  //     watch: true,
  //   },
  // },
  devtool: isProduction ? false : "inline-source-map",
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: !isProduction,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/index.css",
    }),
  ],
};
