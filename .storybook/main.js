import webpack from 'webpack';

const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.plugins = config.plugins.filter(
      plugin => !(plugin instanceof webpack.HotModuleReplacementPlugin),
    );

    // Return the altered config
    return config;
  },
};
