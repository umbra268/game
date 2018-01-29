const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.devtool = 'hidden-source-map';
  }

  config.plugins = (config.plugins || []).concat([
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: `${env === 'production' ? '../' : ''}build-analysis-${env || 'development'}.html`,
    }),
  ]);

  // do stuff with the webpack config...
  return config;
};
