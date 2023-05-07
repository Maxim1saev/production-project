import type webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loaders = (isDev: boolean): webpack.RuleSetRule[] => {
  // Если используем ts лоадер то ставить специально
  // лоадер для jsx не нужно. Он уже умеет обрабатывать jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

  return [typescriptLoader, scssLoader, svgLoader, fileLoader];
};
