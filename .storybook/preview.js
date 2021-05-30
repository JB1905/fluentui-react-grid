import React from 'react';
import { addDecorator } from '@storybook/react';

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: { page: null },
  // layout: 'fullscreen', // TODO
};

addDecorator((Story) => (
  <div
    style={{
      width: '100vw',
      minHeight: '100vh',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Story />
  </div>
));
