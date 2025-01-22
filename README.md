# Site template

A simple & fast HTML site built with [11ty](https://www.11ty.dev/) featuring:

- Markdown content with frontmatter
- Wiki-style internal linking between pages using `[[links]]`
- Docker containerization
- Custom Nunjucks layouts

Intended as a boilerplate for a personal blog/site/wiki based on an Obsidian-like workflow.
Many options for customization and extension are available through the Eleventy ecosystem, see the [Eleventy documentation](https://www.11ty.dev/docs/) for more information.

## Development

### Prerequisites

- Node.js 
- Docker (optional)

### Local Development

1. Install dependencies:
```sh
npm install
```

2. Start the development server:
```sh
npx @11ty/eleventy --serve
```

The site will be available at http://localhost:8080

### Docker Development

To run using Docker:

```sh
docker compose up
```

The site will be available at http://localhost:8080 with live content reloading from the `content` directory.

## Project Structure

- `content/` - Markdown content files and layouts
- `content/_includes/` - Nunjucks layout templates
- `eleventy.config.js` - Eleventy configuration
- `Dockerfile` - Container definition
- `docker-compose.yml` - Container orchestration

## Dependencies

- [@11ty/eleventy](https://www.11ty.dev/) - Static site generator
- [@photogabble/eleventy-plugin-interlinker](https://github.com/photogabble/eleventy-plugin-interlinker) - Wiki-style internal linking
