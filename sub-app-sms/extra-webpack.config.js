// const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

// module.exports = (angularWebpackConfig, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

//   // Feel free to modify this webpack config however you'd like to
//   return singleSpaWebpackConfig
// }

const webpackMerge = require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaConfig = {
    output: {
      library: 'sub-app-sms',
      libraryTarget: 'umd'
    },
    externals: {
      'zone.js': 'Zone'
    }
  };
  const mergedConfig = webpackMerge.smart(config, singleSpaConfig);
  return mergedConfig;
};
