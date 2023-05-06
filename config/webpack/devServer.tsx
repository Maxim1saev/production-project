import { Configuration } from "webpack-dev-server";

export const devServer = (port: number): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
