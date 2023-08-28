const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  images: {
    unoptimized: true
  }
};

const sentryWebpackPluginOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,

  org: 'justin-bond-e8aefe1fe',
  project: 'nextjs-portfolio'
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
