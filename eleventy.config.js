const markdownItTaskCheckbox = require('markdown-it-task-checkbox');

module.exports = (eleventyConfig) => {
  // Add the interlinker plugin for obsidian wikilink support
  eleventyConfig.addPlugin(
    require('@photogabble/eleventy-plugin-interlinker'), {}
  );
  // Add an alias for the post layout
  eleventyConfig.addLayoutAlias("post", "mylayout.njk");
  // Set the input directory and copy the bundle.css file to the output directory
  eleventyConfig.setInputDirectory("content");
  eleventyConfig.addPassthroughCopy("content/bundle.css");
  // Add the markdown-it-task-checkbox plugin to the markdown-it parser
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTaskCheckbox));

  // Add the date filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
};
