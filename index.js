const less = require('less');
const fs = require('fs/promises');

function esbuildPluginLess(lessOptions) {
  return {
    name: 'esbuild-plugin-less',
    setup(build) {
      build.onLoad({ filter: /\.less$/ }, async ({ path }) => {
        try {
          const source = await fs.readFile(path, 'utf-8');
          const results = await less.render(source, {
            ...lessOptions,
            filename: path,
            sourceMap: { outputSourceFiles: true, sourceMapFileInline: true },
          });
          return { contents: results.css, loader: 'css' };
        } catch (e) {
          return {
            errors: [
              {
                text: e.msg,
                location: {
                  file: e.filename,
                  // namespace: string;
                  line: e.line,
                  column: e.column,
                  lineText: e.extract.join(''),
                },
              },
            ],
          };
        }
      });
    },
  };
}
module.exports = esbuildPluginLess;
