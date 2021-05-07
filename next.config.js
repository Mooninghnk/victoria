const nextImages = require("next-images");

// export the module
module.exports = nextImages({
  // options
  esModule: true,
});

module.exports = {
  // Target must be serverless
  target: "serverless",
};