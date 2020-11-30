# `esbuild-plugin-less`

An esbuild plugin to build less files.

```sh
npm install --save-dev esbuild esbuild-plugin-less
```

You can then use the plugin in a build script like the following:

```js
const esbuild = require('esbuild');
const lessPlugin = require('esbuild-plugin-less');

const lessOptions = {
  /* less options */
};

build({
  entryPoints: ['input.js'],
  bundle: true,
  outfile: 'output.js',
  plugins: [lessPlugin(lessOptions)],
});
```
