module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/theming',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve('ts-loader'),
  //       },
  //     ],
  //   });

  //   config.resolve.extensions.push('.ts', '.tsx');

  //   return config;
  // },
};
