module.exports={
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loaders: ["style", "css"]
      },
      {
        test:/\.(svg|ttf|woff|woff2|eot)$/,
        loader: "file"
      }
    ]
  }
};
