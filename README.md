# esi-webpack-plugin

> A Webpack plugin to resolve ESI includes.

Useful in development in conjunction with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to resolve ESI includes (using [nodesi](https://github.com/Schibsted-Tech-Polska/nodesi)) in all emitted HTML files.

Version requirements:

- Node.js: `v8.12.0`
- Webpack: `v4.0.0`
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): `v4.0.0`

## Install

```sh
npm install --save-dev esi-webpack-plugin
```

## Usage

Options map more or less directly to the options provided by
[nodesi](https://github.com/Schibsted-Tech-Polska/nodesi).

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsiWebpackPlugin = require('esi-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin(),
    new EsiWebpackPlugin({
      baseUrl: 'http://example.com',
      onError(src, err) {
        console.error(`Error when resolving ${src}: ${err}`);
      },
      processOptions: {
        headers: {
          'Authorization': 'Basic Zm9vOmJhcgo='
        }
      }
    })
  ]
};
```

## License

MIT
