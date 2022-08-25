export default {
  input: 'lib/index.js',
  external: ['nodesi', 'html-webpack-plugin'],
  output: [
    {
      file: 'dist/esm/bundle.js',
      format: 'es',
      exports: 'default',
    },
    {
      file: 'dist/commonjs/bundle.js',
      format: 'cjs',
      exports: 'default',
    },
  ],
}
