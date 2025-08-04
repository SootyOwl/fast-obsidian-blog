// eleventy.config.js

// eleventy plugins
const interlinker = require('@photogabble/eleventy-plugin-interlinker');

// markdown-it plugins
const markdownItTaskCheckbox = require('markdown-it-task-checkbox');
const mdItObsidianCallouts = require('markdown-it-obsidian-callouts');
const mdItFootnote = require('markdown-it-footnote');

const del = require('del').deleteSync;

module.exports = async function (eleventyConfig) {
  // sync the _site directory
  eleventyConfig.on("eleventy.before", async ({ directories, runMode, outputMode }) => {
    // delete the _site directory if it exists
    if (runMode === "watch" || runMode === "serve") {
      del(directories.output);
    }
  });

  // Set input directory to "content"
  eleventyConfig.setInputDirectory("content");
  eleventyConfig.setIncludesDirectory("_includes");

  // Add an alias for the post layout (and other aliases)
  addLayoutAliases(eleventyConfig, {
    // post: "mylayout.njk",
    // other aliases can be added here
  });

  // Add the interlinker plugin for obsidian wikilink support
  eleventyConfig.addPlugin(
    interlinker
  );


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

module.exports.config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
}


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
