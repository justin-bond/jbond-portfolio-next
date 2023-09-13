<h1 align="center">
  Personal profile website
</h1>

<p align="center">
  This website is built with Next.js and Contentful.
</p>

<p align="center">
    <img src="https://therealsujitk-vercel-badge.vercel.app/?app=jbond-portfolio-next" alt="Vercel Status" />

  <a href="https://dl.circleci.com/status-badge/redirect/gh/justin-bond/jbond-portfolio-next/tree/main">
    <img src="https://dl.circleci.com/status-badge/img/gh/justin-bond/jbond-portfolio-next/tree/main.svg?style=shield" alt="Current CircleCI build status" />
  </a>

  <a href="https://codeclimate.com/github/justin-bond/jbond-portfolio-next/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/a940e7327d7e7f9acdf1/maintainability" alt="Maintainability" />
  </a>

  <a href="https://codeclimate.com/github/justin-bond/jbond-portfolio-next/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/a940e7327d7e7f9acdf1/test_coverage" alt="Test Coverage" />
  </a>
</p>

<p align="center">
  <a href="https://app.circleci.com/insights/github/justin-bond/jbond-portfolio-next/workflows/default/overview?branch=main&reporting-window=last-30-days&insights-snapshot=true">
    <img src="https://dl.circleci.com/insights-snapshot/gh/justin-bond/jbond-portfolio-next/main/default/badge.svg?window=30d" alt="Netlify Status" />
  </a>
</p>

## Local Development Setup

### Prerequisites

- Node 18.00.0+ (for local development, use nvm to install and utilize the appropriate version of node)

### Setup Instructions

1. Clone the repo.

```shell
git clone git@github.com:justin-bond/jbond-portfolio-next.git
```

OR

```shell
git clone https://github.com/justin-bond/jbond-portfolio-next.git
```

2. Change to the project root directory.

```shell
cd jbond-portfolio-next
```

3. Run npm install.

```shell
npm install
```

## Environment Variables

Copy the `.env.local.example` file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` should be the **[Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_SECRET` should be any value you want. It must be URL friendly as the dashboard will send it as a query parameter to enable preview mode
- - `CONTENTFUL_REVALIDATE_SECRET` should be any value you want. This will be the value you pass in as a secret header from the Contentful Webhook settings to use **[On-Demand Revalidation](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration#on-demand-revalidation)**

Your `.env.local` file should look like this:

```bash
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
CONTENTFUL_REVALIDATE_SECRET=...
```

## Commands

- **Start a development server**

  ```shell
  npm run dev
  ```

  Starts a hot-reloading development environment; accessible by default at [localhost:3000](http://localhost:3000).

- **eslint**

  ```shell
  npm run lint
  ```

  Runs eslint to find problems with your code.

- **tests**

  ```shell
  npm run test
  ```

  Runs Jest for test coverage.
