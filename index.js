const ESI = require('nodesi');
const { RawSource } = require('webpack-sources');

const FILENAME = 'index.html';

function EsiWebpackPlugin(options = {}) {
  const {
    baseUrl,
    onError,
    processOptions = {}
  } = options;

  this.options = options;

  this.esi = new ESI({
    baseUrl,
    onError,
    processOptions,
  });
}

EsiWebpackPlugin.prototype.apply = function apply(compiler) {
  const { processOptions } = this.options;

  compiler.plugin('emit', (compilation, callback) => {
    this.esi.process(compilation.assets[FILENAME].source(), processOptions)
      .then((result) => {
        compilation.assets[FILENAME] = new RawSource(result);
        callback();
      });
  });
};

module.exports = EsiWebpackPlugin;
