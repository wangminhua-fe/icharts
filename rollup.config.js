import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/icharts.js', // 对于nodejs，打包成commonjs
      format: 'cjs',
    },
    {
      file: 'esm/icharts.js', // 对于浏览器，打包成ES module
      format: 'es',
    },
    {
      file: 'dist/icharts.js', // 对于nodejs和浏览器，打包成混合模式
      name: 'sp',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ],
};
