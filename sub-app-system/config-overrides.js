const { name } = require('./package.json');

module.exports = {
  webpack: function(config, env) {
    const copyConfig = { ...config };
    copyConfig.output.library = `${name}`;
    copyConfig.output.libraryTarget = 'umd';
    copyConfig.output.jsonpFunction = `webpackJsonp_${name}`;
    copyConfig.output.publicPath = `//localhost:5103/`;
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  }
};
