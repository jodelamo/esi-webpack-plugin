# esi-webpack-plugin

> A Webpack plugin to resolve ESI includes.

**Note:** Due to the limited use case this was made for, this plugin is currently limited to a single asset: `index.html`. Feel free to help with [this issue](https://github.com/jlowgren/esi-webpack-plugin/issues/1) if you have what it takes to apply the plugin on all emitted HTML assets. 😘

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
