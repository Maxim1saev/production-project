
import { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from './RouterDecorator';

import { StyleDecorator } from './StyleDecorator';
import { ThemeDecorator } from './ThemeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    StyleDecorator,
    RouterDecorator,
    // ThemeDecorator(Theme.DARK),
  ],
};

export default preview;
