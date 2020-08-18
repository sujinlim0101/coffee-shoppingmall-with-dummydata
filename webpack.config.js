const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { node: "current" }, // 노드일 경우만
                modules: "false",
              },
            ],
            "@babel/preset-react",
            "@babel/preset-stage-0",
          ],
        },
        exclude: ["/node_modules"],
      },
    ],
  },
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
};
