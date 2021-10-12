const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  eleventyConfig.addPassthroughCopy({ "public": "." });

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "build"
    }
  }
};