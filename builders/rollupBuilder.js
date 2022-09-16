/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { rollup } = require('rollup');
const loadConfigFile = require('rollup/loadConfigFile');
const path = require('path');

async function build() {
  return loadConfigFile(path.resolve(__dirname, 'rollup.config.js'), { format: 'es' }).then(
    async ({ options, warnings }) => {
      console.log(`We currently have ${warnings.count} warnings`);

      // This prints all deferred warnings
      warnings.flush();

      for (const optionsObj of options) {
        const bundle = await rollup(optionsObj);
        await Promise.all(optionsObj.output.map(bundle.write));
      }
    },
  );
}

module.exports = { buildWithRollup: build };
