/* eslint-disable */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#1DA57A',
      '@font-family': "'AvenirNext-Regular', sans-serif",
      '@font-size-base': '14px'
    },
  })(config, env);
  return config;
};
