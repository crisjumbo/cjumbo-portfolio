import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import ImageminPlugin from 'imagemin-webpack-plugin';
// import golb from 'glob';


const config: webpack.Configuration = {
  entry: {
    landing: path.resolve(__dirname, "src/index.tsx"),
    home: path.resolve(__dirname, "src/containers/Home.tsx"),
    about: path.resolve(__dirname, "src/containers/About.tsx"),
    contact: path.resolve(__dirname, "src/containers/Contact.tsx"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader",
        options: { allowTsInNodeModules: true },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*",
      },
    }),
    // new ImageminPlugin({
    //   externalImages: {
    //     context: ".",
    //     sources: glob.sync("src/imgs/**.{png, jpg, gif, svg, jpeg}"),
    //     destination: "dist/assets/",
    //     fileName: "[name].[ext]",
    //   },
    // }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons",
    },
  },
};

export default config;
