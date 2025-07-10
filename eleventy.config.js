// eleventy.config.js

// eleventy plugins
const interlinker = require('@photogabble/eleventy-plugin-interlinker');

// markdown-it plugins
const markdownItTaskCheckbox = require('markdown-it-task-checkbox');
const mdItObsidianCallouts = require('markdown-it-obsidian-callouts');
const mdItFootnote = require('markdown-it-footnote');

module.exports = (eleventyConfig) => {
  // Set input directory to "content"
  eleventyConfig.setInputDirectory("content");

  // Add the interlinker plugin for obsidian wikilink support
  addEleventyPlugins(eleventyConfig, [
    interlinker,
    // other plugins can be added here
  ]);

  // Add an alias for the post layout (and other aliases)
  addLayoutAliases(eleventyConfig, {
    post: "mylayout.njk",
    // other aliases can be added here
  });

  // Add passthrough copy for static assets like .css files
  addPassthroughCopy(eleventyConfig, [
    "content/bundle.css"
    // other static assets can be added here
  ]);

  // Add the plugins to the markdown-it library
  addMarkdownItPlugins(eleventyConfig, [
    markdownItTaskCheckbox,
    mdItObsidianCallouts,
    // other plugins can be added here
    mdItFootnote,
  ]);

  // Add the date filter
  addDateFilter(eleventyConfig, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


// helpers
// add eleventy plugins function
function addEleventyPlugins(eleventyConfig, plugins) {
  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin);
  });
}

// add layout aliases function
function addLayoutAliases(eleventyConfig, aliases) {
  Object.entries(aliases).forEach(([name, template]) => {
    eleventyConfig.addLayoutAlias(name, template);
  });
}

// add passthrough copy function
function addPassthroughCopy(eleventyConfig, paths) {
  paths.forEach((path) => {
    eleventyConfig.addPassthroughCopy(path);
  });
}

// add markdown-it plugins function
function addMarkdownItPlugins(eleventyConfig, plugins) {
  eleventyConfig.amendLibrary("md", (mdLib) => {
    plugins.forEach((plugin) => {
      mdLib.use(plugin);
    });
  });
}

// add date filter function
function addDateFilter(eleventyConfig, options) {
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString("en-GB", options);
  });
}
