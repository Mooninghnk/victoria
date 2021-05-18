module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };

  
  
  const withImages = require('next-images')
  module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "ico"],
    webpack(config, options) {
      return config
    }
  })