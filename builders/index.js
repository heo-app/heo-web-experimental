/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs-extra');
const { watch } = require('chokidar');

const { buildWithEsBuild } = require('./esBuildBuilder.js');
const { runWebPackDevServer } = require('./webPackDevServer.js');

const isDev = process.env.NODE_ENV !== 'production';

(async () => {
  fs.removeSync('dist');
  fs.copySync('public', 'dist');

  const builder = await buildWithEsBuild(isDev);

  if (isDev) {
    watch('src/**/*', { ignoreInitial: true }).on('all', () => {
      builder.rebuild();
    });

    runWebPackDevServer();
  } else {
    process.exit(0);
  }
})();
