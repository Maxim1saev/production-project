import path from "path";
import { Configuration, RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({config}: {config: Configuration})=>{

    config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'))
    config.resolve?.extensions?.push('.ts', '.tsx')

    config.module?.rules?.push(buildCssLoader(false))
    config.module.rules = [
        ...config.module.rules.map(rule => {
          if (/svg/.test(rule?.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
          }
      
          return rule
        }),
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }
      ]

    config.plugins?.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    )
    
    return config
}