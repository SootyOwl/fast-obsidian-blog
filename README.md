# Site template

A simple & fast HTML site built with [11ty](https://www.11ty.dev/) featuring:

- Markdown content with frontmatter
- Wiki-style internal linking between pages using `[[links]]`
- Docker containerization
- Custom Nunjucks layouts

This repository contains the actual setup of my site, which is based on [my site template](https://github.com/SootyOwl/site-template). Where that template only contains the basic 11ty configuration, this repository contains the actual configuration of [my personal site](https://hyperfox.tyto.cc). This includes the custom Nunjucks layouts, the Docker containerization (including Obsidian Sync support). The site is built with the following technologies:

- [11ty](https://www.11ty.dev/)
- [11ty Interlinker Plugin](https://github.com/photogabble/eleventy-plugin-interlinker)
- [Docker](https://www.docker.com/)
- [Obsidian](https://obsidian.md/)
- [Obsidian Sync](https://obsidian.md/sync)

I've decided against including the content of the site (the .md files) in this repository, mainly because it is constantly changing and I have no need to version control it with Git (I use Obsidian Sync for that).

## Usage

Note that if you don't use Obsidian Sync, the site template linked above is probably more useful to you. This repository is specifically tailored to my needs. If you do use Obsidian Sync, you can use this repository as a starting point for your own site. Here's how you can set it up:

Clone this repository

    ```bash
    git clone https://github.com/SootyOwl/my-site.git
    cd my-site
    ```

### Using the setup script

To bootstrap your site scaffold and launch the containers, make the script executable and run:

```bash
chmod +x setup.sh
./setup.sh
```

Follow the prompts to configure your site. The script will:

- Check for prerequisites: Docker, Docker Compose, and envsubst
- Prompt for site title, ports, content directory, timezone, and Obsidian sync
- Create necessary directories (`$CONTENT_DIR`, `.obsidian/config`)
- Generate `.env` and `docker-compose.yml`
- Start the containers for your site and (optionally) Obsidian Sync

After completion:

- Visit `http://localhost:${SITE_PORT}` for your site
- If Obsidian Sync is enabled, visit `http://localhost:${OBSIDIAN_PORT}` for the Obsidian interface to set up your vault sync
- Edit your content in the `$CONTENT_DIR` directory
- The site will automatically rebuild when you save changes to the Markdown files
- The Obsidian Sync container will automatically sync changes to your Obsidian vault if enabled and configured 

## Extending the site template

### Adding markdown-it plugins

The Markdown parser is created using the `markdown-it` library, which allows you to extend its functionality with plugins to add additional features.

First, install the plugin you want to use. For example, to add the `markdown-it-footnote` plugin, you can do the following:

```bash
npm install markdown-it-footnote --save
```

Then, you can add the plugin to the Markdown parser in your Eleventy configuration file. To add plugins to the Markdown parser, edit the `module.exports` in the `eleventy.config.js` file. For example, to add the `markdown-it-footnote` plugin, you can do the following:

```javascript
// eleventy.config.js

// ... other imports

// Import the footnote plugin
const markdownItFootnote = require('markdown-it-footnote');


module.exports = (eleventyConfig) => {
    //... other config

    // Add the plugins to the markdown-it library
    addMarkdownItPlugins(eleventyConfig, [
        markdownItTaskCheckbox,
        mdItObsidianCallouts,
        mdItFootnote,  // Add the footnote plugin
    ]);

    //... other config
};
```

## Licensing

This project's own code is released under The Unlicense and dedicated to the public domain. However, this project uses third-party dependencies that are subject to their own licenses. The terms of The Unlicense apply only to this project's original code, not to its dependencies.

Please refer to each dependency's own license terms, which can typically be found in their respective package documentation or repository.
