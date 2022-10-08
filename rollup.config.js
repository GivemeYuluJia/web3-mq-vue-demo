import path from 'path';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import multiInput from 'rollup-plugin-multi-input';
// import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const isDev = process.env.ROLLUP_WATCH || false;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const externalDependencies = ['vue', 'web3-mq']

const basePlugins = [
  peerDepsExternal(),
  copy({
    targets: [{ src: 'src/assets/*', dest: ['dist/assets', 'es/assets'] }],
    watch: process.env.ROLLUP_WATCH,
  }),
  alias({
    entries: [
      {
        find: '@',
        replacement:  path.resolve(__dirname, 'src'),
        customResolver: resolve({
          extensions: ['.ts', '.vue', '.js'],
        }),
      },
    ],
  }),
  vue({
    css: false
  }),
  postcss({
    extract: 'css/index.css',
    modules: true,
    minimize: !isDev,
    use: ['sass'],
    extensions: ['.css', '.scss'],
  }),
  // svg(),
  image(),
  ts({
    tsconfig: path.resolve(__dirname, './tsconfig.json'),
    extensions,
  }),
  // esbuild({
  //   target: 'esnext',
  //   minify: false,
  //   jsx: 'preserve',
  //   tsconfig: 'tsconfig.json',
  // }),
  babel({
    presets: ['@babel/preset-env'],
    babelHelpers: 'runtime',
    plugins: ['@babel/plugin-transform-runtime'],
    exclude: 'node_modules/**',
    extensions
  }),
  resolve({
    browser: true,
    extensions
  }),
  commonjs()
];
if(!isDev) {
  basePlugins.push(terser())
}

const umdConfig = {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'web3-mq-vue',
    sourcemap: isDev,
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  },
  external: externalDependencies,
  plugins: [...basePlugins]
};

const esConfig = {
  input: ['src/components/**/*.ts', 'src/*.ts'],
  // input: path.resolve(__dirname, './src/index.ts'),
  output: {
    dir: 'es',
    format: 'esm',
    sourcemap: isDev,
    chunkFileNames: '_chunks/dep-[hash].mjs',
    globals: {
      vue: 'Vue'
    }
  },
  external: externalDependencies,
  plugins:[multiInput()].concat([...basePlugins])
};


// const config = {
//   input: path.resolve(__dirname, './src/index.ts'),
//   output: [
//     {
//       file: pkg.main,
//       format: 'umd',
//       name: 'web3-mq-vue',
//       sourcemap: isDev,
//       exports: 'named',
//       globals: {
//         vue: 'Vue'
//       }
//     },
//     {
//       dir: 'es',
//       format: 'esm',
//       sourcemap: isDev,
//       globals: {
//         vue: 'Vue'
//       }
//     }
//   ],
//   external: externalDependencies,
//   plugins: [...basePlugins]
// };



export default [umdConfig, esConfig];