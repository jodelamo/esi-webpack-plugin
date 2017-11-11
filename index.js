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
    const { processOptions } = this.options;

    compiler.plugin('emit', ({ assets }, callback) => {
      Object.keys(assets).forEach((filename) => {
        if (path.extname(filename) === '.html') {
          this.esi.process(assets[filename].source(), processOptions)
            .then((result) => {
              // eslint-disable-next-line
              assets[filename] = new RawSource(result);
              callback();
            })
            .catch(err => callback(err));
        }
      });
    });
  }
}

module.exports = EsiWebpackPlugin;
