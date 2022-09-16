/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs-extra');
// const { watch } = require('chokidar'); // to watch with chokidar
// const { buildWithEsBuild } = require('./esBuildBuilder.js'); // to build with ESbuild
const { runWebPackDevServer } = require('./webPackDevServer.js'); // to dev with webpack
const { buildWithRollup } = require('./rollupBuilder.js'); // to build with rollup

const isDev = process.env.NODE_ENV !== 'production';

(async () => {
  fs.removeSync('dist');
  fs.copySync('public', 'dist');

  await buildWithRollup();

  //TODO: find a better way
  fs.removeSync('public/index.js');
  fs.copySync('dist/index.js', 'public/index.js');

  if (isDev) {
    //   watch('src/**/*', { ignoreInitial: true }).on('all', () => {
    //     builder.rebuild();
    //   });
    setTimeout(() => {
      runWebPackDevServer();
    }, 4000);
    // } else {
    // process.exit(0);
  }
})();
