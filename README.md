# esi-webpack-plugin

> A Webpack plugin to resolve ESI includes.

Useful in development in conjunction with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to resolve ESI includes (using [nodesi](https://github.com/Schibsted-Tech-Polska/nodesi)) in all emitted HTML files.

Version requirements:

**Webpack 5**

- Node.js: `v16.x`
- Webpack: `v5.x`
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): `v5.3.x`

**Webpack 4**

- Node.js: `v12.x`
- Webpack: `v4.x`
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): `v4.3.x`

## Install

**Webpack 5**

```sh
npm install --save-dev esi-webpack-plugin
```

**Webpack 4**

```sh
npm install --save-dev esi-webpack-plugin@4
```

## Usage

Options map more or less directly to the options provided by
[nodesi](https://github.com/Schibsted-Tech-Polska/nodesi).

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EsiWebpackPlugin = require('esi-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin(),
    new EsiWebpackPlugin({
      baseUrl: 'http://example.com',
      onError(src, err) {
        console.error(`Error when resolving ${src}: ${err}`)
      },
      processOptions: {
        headers: {
          Authorization: 'Basic Zm9vOmJhcgo=',
        },
      },
    }),
  ],
}
```

## License

MIT
