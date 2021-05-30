module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    // TODO
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/theming',
  ],
};
