import webpack from 'webpack';

import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";



export const plugins = (htmlPath: string): webpack.WebpackPluginInstance[]=>
[
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new HTMLWebpackPlugin({
        template: htmlPath
    }),
    new webpack.ProgressPlugin(),
]