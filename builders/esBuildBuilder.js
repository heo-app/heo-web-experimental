/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { build } = require('esbuild');

const buildWithEsBuild = async (isDev) => {
  /**
   * ESBuild Params
   * @link https://esbuild.github.io/api/#build-api
   */
  const buildParams = {
    color: true,
    entryPoints: ['src/index.tsx'],
    loader: { '.ts': 'tsx' },
    outdir: 'dist',
    minify: !isDev,
    format: 'cjs',
    bundle: true,
    sourcemap: true,
    logLevel: 'error',
    incremental: true,
  };

  await build(buildParams);
};

module.exports = { buildWithEsBuild };
