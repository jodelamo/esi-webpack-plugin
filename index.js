const ESI = require('nodesi');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    compiler.hooks.compilation.tap('EsiWebpackPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'EsiWebpackPlugin',
        async (data, callback) => {
          const { html } = data;
          const { processOptions } = this.options;

          try {
            const result = await this.esi.process(html, processOptions);
            data.html = result;

            callback(null, data);
          } catch (err) {
            callback(err);
          }
        }
      );
    });
  }
}

module.exports = EsiWebpackPlugin;
