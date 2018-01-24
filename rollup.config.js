// rollup.config.js
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
//import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
//import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV


export default {
  input: 'src/index.js',
  output: {
    file: 'lib/rollup.js',
    format: 'cjs'
  },
  plugins: [  ]
};