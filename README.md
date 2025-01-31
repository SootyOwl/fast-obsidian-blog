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

1. Clone this repository

    ```bash
    git clone https://github.com/SootyOwl/my-site.git
    ```

2. Bring up the Docker containers

    ```bash
    docker-compose up
    ```

3. Configure Obsidian Sync in the container

    - Visit <http://localhost:3000> in your browser and configure Obsidian Sync via the web interface (you'll need to log in with your Obsidian account)
    - Ensure the folder `/content` is selected as the sync folder (or edit the docker-compose file to change the volume mount)
    - Once you've configured Obsidian Sync, you can close the browser tab

4. The site should now be available at <http://localhost:8080>, and changes to your Obsidian vault will be automatically reflected in the site as you make them in Obsidian.


## Licensing

This project's own code is released under The Unlicense and dedicated to the public domain. However, this project uses third-party dependencies that are subject to their own licenses. The terms of The Unlicense apply only to this project's original code, not to its dependencies.

Please refer to each dependency's own license terms, which can typically be found in their respective package documentation or repository.
