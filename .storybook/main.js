const TsconfigPathsPlugin = require(`tsconfig-paths-webpack-plugin`);
const path = require(`path`);

module.exports = {
  stories: [
    `../src/**/*.stories.mdx`,
    `../src/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  addons: [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@storybook/addon-interactions`
  ],
  framework: `@storybook/react`,
  core: {
    builder: `@storybook/builder-webpack5`
  },
  typescript: {
    reactDocgen: `react-docgen-typescript`,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  // https://storybook.js.org/docs/react/configure/webpack#typescript-module-resolution
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, `../src`)
    };

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        `style-loader`,
        {
          loader: `css-loader`,
          options: {
            modules: true,
          },
        },
        `sass-loader`,
      ],
    });

    return config;
  },
};
