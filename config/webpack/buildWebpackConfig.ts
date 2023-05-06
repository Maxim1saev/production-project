import webpack from "webpack";

import { BuildOptions } from "./types/config";

import { plugins } from "./plugins";
import { loaders } from "./loaders";
import { resolves } from "./resolves";
import { devServer } from "./devServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => ({
  mode: options.mode,
  entry: options.paths.entry,
  output: {
    filename: "[name].[contenthash].js",
    path: options.paths.build,
    clean: true,
  },
  plugins: plugins(options),

  module: {
    rules: loaders(options.isDev),
  },

  resolve: resolves(options),
  devtool: options.isDev ? "inline-source-map" : undefined,
  devServer: options.isDev ? devServer(options.port) : undefined,
});
