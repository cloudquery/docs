# CloudQuery Documentation

This repository contains all documentation on [https://docs.cloudquery.io](https://docs.cloudquery.io).

Contributions are welcome!

## Prerequisites

- [node.js](https://nodejs.org/en/) needs to be installed on your machine.

## Installation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

```bash
npm ci
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```bash
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
