import React from 'react';
import { addDecorator } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
    },
  },
  docs: { page: null },
  layout: 'fullscreen',
};

addDecorator((Story) => (
  <div
    dir="ltr"
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
