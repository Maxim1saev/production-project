import type webpack from 'webpack';
import path from 'path';
import { type BuildOptions } from './types/config';

export const resolves = (options: BuildOptions): webpack.ResolveOptions => (
  {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
);
