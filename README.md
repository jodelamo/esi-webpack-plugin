# esi-webpack-plugin

> A Webpack plugin to resolve ESI includes.

## Install

```sh
npm install -D esi-webpack-plugin
```

## Usage

Options map more or less directly to the options provided by
[nodesi](https://github.com/Schibsted-Tech-Polska/nodesi).

```js
new EsiWebpackPlugin({
  baseUrl: 'http://example.com',
  onError(src, err) {
    // ...
  },
  processOptions: {
    headers: {
      'Authorization': '...'
    }
  }
})
```

## License

MIT
