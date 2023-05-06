import webpack from "webpack";

import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const plugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => [
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  }),
  new HTMLWebpackPlugin({
    template: options.paths.html,
  }),
  new webpack.ProgressPlugin(),
  new webpack.DefinePlugin({
    __IS_DEV__: options.isDev,
  }),
];
