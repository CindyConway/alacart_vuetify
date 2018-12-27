const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // path to components that are external to this project
        '~': path.resolve(__dirname, '..'),
      },
    },
  },
  // auto fix linting issue
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },
  transpileDependencies: ['vuex-persist'],
};
