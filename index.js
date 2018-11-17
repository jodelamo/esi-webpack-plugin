const ESI = require('nodesi');
const path = require('path');
const { RawSource } = require('webpack-sources');

class EsiWebpackPlugin {
  constructor(options = {}) {
    const {
      baseUrl,
      onError,
      processOptions = {},
    } = options;

    this.options = options;

    this.esi = new ESI({
      baseUrl,
      onError,
      processOptions,
    });
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('EsiWebpackPlugin', (compilation, callback) => this.emit(compilation, callback));
  }

  emit(compilation, callback) {
    const { assets } = compilation;
    const { processOptions } = this.options;

    Object.keys(assets).forEach(async (filename) => {
      if (path.extname(filename) === '.html') {
        try {
          const result = await this.esi.process(assets[filename].source(), processOptions);
          assets[filename] = new RawSource(result);
          callback();
        } catch (err) {
          callback(err);
        }
      }
    });
  }
}

module.exports = EsiWebpackPlugin;
