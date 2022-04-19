import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import EsiWebpackPlugin from '../lib/index.js'

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'template.html'),
    }),
    new EsiWebpackPlugin({
      baseUrl: 'http://example.com',
      onError(src, err) {
        console.error(`Error when resolving ${src}: ${err}`)
      },
    }),
  ],
}
