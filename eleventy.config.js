module.exports = (eleventyConfig) => {
    // Add the interlinker plugin for obsidian wikilink support
    eleventyConfig.addPlugin(
      require('@photogabble/eleventy-plugin-interlinker'),
      {
        defaultLayout: 'layouts/embed.liquid'
      }
    );
    // Add an alias for the post layout
    eleventyConfig.addLayoutAlias("post", "mylayout.njk");
    // Set the input directory and copy the bundle.css file to the output directory
    eleventyConfig.setInputDirectory("content");
    eleventyConfig.addPassthroughCopy("content/bundle.css");
  };