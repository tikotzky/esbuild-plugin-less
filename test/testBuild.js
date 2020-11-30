/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const esbuild = require('esbuild');
const lessPlugin = require('..');

async function main() {
  try {
    await esbuild.build({
      entryPoints: ['./test/test-files/index.js'],
      bundle: true,
      outdir: './test/build',
      sourcemap: true,
      plugins: [lessPlugin()],
    });
  } catch (err) {
    console.log('esbuild error: ', err);
    process.exit(1);
  }
}

main();
